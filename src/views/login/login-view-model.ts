import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import {LocalStorageService} from "@/assets/services/local-storage-service";

import {notify} from "@/utiities/functions/notify";
import {useStore} from "vuex";
import router from "@/router";

export class LoginViewModel {
    model: any

    constructor(model: any) {
        this.model = model;
    }

    async login(){
        if (!this.model.username || !this.model.password) {
            this.errorInput()
            return
        }
        try {
            const response = await axios.post(
                `${urlList.login}?grant_type=password&username=${this.model.username}&password=${this.model.password}&scope=read`,
                {},
                {
                    auth: {
                        username: 'client',
                        password: 'secret'
                    }
                }
            )
            if (response && response.data && response.data.access_token) {
                console.log(response.data)
               localStorage.setItem('access_token', response.data.access_token)
                this.successLogin()
                window.location.href = '/'
            }
        } catch (error) {
            console.log(error)
            this.errorLogin()
        }
    }



    errorInput(){
        notify('error', 'Неверный логин или пароль!');
    }

    errorLogin(){
        notify('error', 'Ошибка авторизации!');
    }

    successLogin(){
        notify('success', 'Вы успешно авторизовались!');
    }

}