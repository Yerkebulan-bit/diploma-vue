import { urlList } from '@/utiities/constants/urlList'
import axios from 'axios'
import type { IFilters } from '@/domain/interfaces/response/filters.interface'
import type { IEventToSave } from '@/domain/interfaces/response/event-to-save.interface'

export default {
  async searchEvents({ commit }: { commit: Function }, filters: IFilters) {
    try {
      const response = await axios.post(urlList.getSearchEvents, filters)
      if (response) commit('setEvents', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getEventsByOrg({ commit }: { commit: Function }, orgId: number) {
    try {
      const response = await axios.get(`${urlList.getEventsByOrg}?orgId=${orgId}`)
      if (response) commit('setEventsByOrg', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async saveEvent({ commit }: { commit: Function }, event: IEventToSave) {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.post(urlList.saveEvent, event, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  },
  async fetchComingEvents({ commit }: { commit: Function }) {
    try {
      const response = await axios.get(urlList.comingEvents)
      if (response) commit('setComingEvents', response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
