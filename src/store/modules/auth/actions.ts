import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import type {IUserToSave} from "@/domain/interfaces/response/user-to-save.interface";
import router from "@/router";
import type {IUserToLogin} from "@/domain/interfaces/response/user-to-login.interface";

export default {
    async registerUser({commit}: { commit: Function }, user: IUserToSave) {
        try {
            const response = await axios.post(urlList.registration, user)
            if (response) commit("setAccessToken", response); router.push('/')
        } catch (error) {
            console.log(error)
        }
    },
    async login({commit}: { commit: Function }, user: IUserToLogin) {
        console.log(`${urlList.login}?${user.grant_type}&grant_type=${user.grant_type}&username=${user.username}&password=${user.password}&scope=${user.scope}`)
        try {
            const response = await axios.post(`${urlList.login}?${user.grant_type}&grant_type=${user.grant_type}&username=${user.username}&password=${user.password}&scope=${user.scope}`, {}, {
                auth: {
                    username: 'client',
                    password: 'secret'
                }
            })
            if (response) commit("setAccessToken", response.data.access_token); router.push('/')
        } catch (error) {
            console.log(error)
        }
    },
    async loadUser({commit}: { commit: Function }, token: string) {
        try {
            const response = await axios.get(urlList.loadUser, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            if (response) commit("user/setUser", response)
        } catch (error) {
            console.log(error)
        }
    }
}