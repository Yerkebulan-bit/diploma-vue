import { LocalStorageService } from '@/assets/services/local-storage-service'
import axios from 'axios'
import { urlList } from '@/utiities/constants/urlList'
import type { ITab } from '@/domain/interfaces/ITab.interface'
import {notify} from "@/utiities/functions/notify";
import type {IEventToSave} from "@/domain/interfaces/response/event-to-save.interface";
import type {WeekToSelect} from "@/domain/interfaces/WeekToSelect.interace";
import {useStore} from "vuex";

export class ProfileViewModel {
  model: any
  initAllContent: Promise<boolean>
  constructor(model: any) {
    this.model = model
    this.initAllContent = (async () => await this.getAllContent())()
  }

  async getAllContent(): Promise<any> {
    try {
      await this.getUserType()
      this.getTabs()
      this.model.userType === 'USER'
        ? await this.getUserContent()
        : await this.getOrganizationContent()
    } catch (_) {
      return false
    }
  }

  async getUserType(): Promise<void> {
    try {
      const access_token = LocalStorageService.getItem('access_token')
      const response = await axios.get(urlList.identifyUserType, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      if (response && response.data) {
        this.model.userType = response.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  async getUserContent() {
    await this.getUser()
    await this.getFollowedEvents()
  }

  async getOrganizationContent() {
    await this.getOrganization()
    await this.getEventsByOrg()
  }

  getTabs(): void {
     this.model.tabs =
       this.model.userType === 'USER' ? [
          {
            id: 1,
            title: 'Личные данные',
            isActive: true,
            isDisabled: false
          },
          {
            id: 2,
            title: 'Подписки на мероприятия',
            isActive: false,
            isDisabled: false
          },
          {
            id: 3,
            title: 'Избранное',
            isActive: false,
            isDisabled: false
          }
        ]
      : [
          {
            id: 1,
            title: 'Данные организации',
            isActive: true,
            isDisabled: false
          },
          {
            id: 2,
            title: 'Мероприятия',
            isActive: false,
            isDisabled: false
          },
          {
            id: 3,
            title: 'Добавить мероприятие',
            isActive: false,
            isDisabled: false
          }
        ]
  }

  async getUser() {
    try {
      const access_token = LocalStorageService.getItem('access_token')
      const response = await axios.get(urlList.loadUser, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      if (response && response.data) {
        this.model.user = response.data
        localStorage.setItem('user_id', this.model.user.id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async getFollowedEvents() {
    try {
      const access_token = LocalStorageService.getItem('access_token')
      const response = await axios.get(
        `${urlList.getFollowedEvents}?userId=${this.model.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }
      )
      if (response && response.data) {
        this.model.followedEvents = response.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  async getOrganization() {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.get(urlList.loadOrganization, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
        if (response && response.data) {
            this.model.organization = response.data
        }
    } catch (error) {
      console.log(error)
    }
  }

  async getEventsByOrg() {
    try {
      const response = await axios.get(`${urlList.getEventsByOrg}?orgId=${this.model.organization.id}`)
      this.model.eventsByOrg = response.data
    } catch (error) {
      console.log(error)
    }
  }

  async saveEvent(event: IEventToSave) {
    try {
      const access_token: string = LocalStorageService.getItem('access_token')
      const response = await axios.post(urlList.saveEvent, {
        ...event,
        time: event.time.hours + ':' + event.time.minutes,
        organizationId: this.model.organization.id
      }, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
        if (response && response.data) {
          await this.getEventsByOrg()
          notify('success', 'Мероприятие успешно добавлено')

        }
    } catch (error) {
      console.log(error)
      notify('error', 'Ошибка при добавлении мероприятия')
    }
  }

  selectTab(tabId: number) {
    this.model.tabs.forEach((tab: ITab) => {
      tab.isActive = tab.id === tabId
    })
    this.model.selectedTabId = tabId
  }

  selectWeekDay(day: string) {
    console.log(day)
    this.model.weekDays.forEach((weekDay: WeekToSelect) => {
      weekDay.isActive = weekDay.value === day
    })
  }

  selectEventType(eventType: string) {
    this.model.eventTypes.forEach((type: any) => {
        type.isActive = type.value === eventType
    })
  }
}
