import axios from 'axios'
import { urlList } from '@/utiities/constants/urlList'
import { notify } from '@/utiities/functions/notify'
import {LocalStorageService} from "@/assets/services/local-storage-service";

export default {
  async fetchEventDetail({ commit }: { commit: Function }, id: string) {
    try {
      const accessToken = LocalStorageService.getItem('access_token')
     if (accessToken == null) {
        const response = await axios.get(`${urlList.getEventDetail}/${id}`)
        if (response) commit('setEventDetail', response.data)
        return
     }
     else {
       const response = await axios.get(`${urlList.getEventDetail}/${id}`)
         if (response) commit('setEventDetail', response.data)
     }
    } catch (error) {
      console.log(error)
    }
  },
  async followEvent({ commit }: { commit: Function }, payload: any) {
    try {
      const accessToken = localStorage.getItem('access_token')
      const response = await axios.post(
        `${urlList.followEvent}?userId=${payload.userId}&eventId=${payload.eventId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      if (response.data === 'OK') {
        notify('success', 'Вы успешно подписались на мероприятие')
      } else if (response.data === 'RESTRICTED_BY_AGE') {
        notify('error', 'Вы не можете подписаться на это мероприятие из-за возрастных ограничений')
        } else if (response.data === 'LIMIT_REACHED') {
        notify('error', 'Вы не можете подписаться на это мероприятие, так как места закончились')
      }
    } catch (error) {
      console.log(error)
      notify('error', 'Возникла ошибка при подписке на мероприятие')
    }
  },
  async unFollowEvent({ commit }: { commit: Function }, payload: any) {
    try {
      const accessToken = localStorage.getItem('access_token')

      const response = await axios.post(
        `${urlList.unFollowEvent}?userId=${payload.userId}&eventId=${payload.eventId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      if (response) {
        notify('success', 'Вы успешно отписались от мероприятия')
      }
    } catch (error) {
      console.log(error)
      notify('error', 'Возникла ошибка при отписке от мероприятия')
    }
  }
}
