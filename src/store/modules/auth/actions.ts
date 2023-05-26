import axios from 'axios'
import { urlList } from '@/utiities/constants/urlList'
import type { IUserToSave } from '@/domain/interfaces/response/user-to-save.interface'
import router from '@/router'
import type { IUserToLogin } from '@/domain/interfaces/response/user-to-login.interface'
import type { IOrganizationToSave } from '@/domain/interfaces/response/organization-to-save.interface'

export default {
  async registerUser({ commit }: { commit: Function }, user: IUserToSave) {
    try {
      const response = await axios.post(urlList.registration, user)
      if (response) commit('setAccessToken', response)
      router.push('/profile')
    } catch (error) {
      console.log(error)
    }
  },
  async registerOrganization({ commit }: { commit: Function }, organization: IOrganizationToSave) {
    try {
      const response = await axios.post(urlList.organizationRegistration, organization)
      if (response) commit('setAccessToken', response)
      router.push('/profile')
    } catch (error) {
      console.log(error)
    }
  },
  async login({ commit }: { commit: Function }, user: IUserToLogin) {
    try {
      const response = await axios.post(
        `${urlList.login}?grant_type=${user.grant_type}&username=${user.username}&password=${user.password}&scope=${user.scope}`,
        {},
        {
          auth: {
            username: 'client',
            password: 'secret'
          }
        }
      )
      if (response && response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/profile')
      }
    } catch (error) {
      console.log(error)
    }
  },
  logout({ commit }: { commit: Function }) {
    localStorage.removeItem('access_token')
    commit('setAccessToken', '')
    commit('setUser', {})
    router.push('/')

    console.log('Logout')
  },
  async loadUser({ commit }: { commit: Function }) {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.get(urlList.loadUser, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      if (response) commit('setUser', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async loadOrganization({ commit }: { commit: Function }) {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.get(urlList.loadOrganization, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      if (response) commit('setOrganization', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async loadFollowedEvents({ commit }: { commit: Function }, userId: number) {
    try {
      const access_token = localStorage.getItem('access_token')
      const response = await axios.get(`${urlList.getFollowedEvents}?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      if (response) commit('setFollowedEvents', response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
