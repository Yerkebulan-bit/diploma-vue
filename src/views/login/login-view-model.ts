import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import {LocalStorageService} from "@/assets/services/local-storage-service";

import {notify} from "@/utiities/functions/notify";
import {useStore} from "vuex";

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
            if (response && response.data.access_token) {
                LocalStorageService.setItem('access_token', response.data.access_token)
                this.successLogin()
                window.location.href = '/profile';
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