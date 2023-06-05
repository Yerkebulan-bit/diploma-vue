import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import {notify} from "@/utiities/functions/notify";
import {LocalStorageService} from "@/assets/services/local-storage-service";
import router from "@/router";

export class ConfirmCodeViewModel {
    model: any

    constructor(model: any) {
        this.model = model;
    }

    async confirmCode() {
        try {
            const response = await axios.post(`${urlList.verifyCode}?codeId=${this.model.codeId}&code=${this.model.code}`)
            if (response && response.data) {
                notify('success', 'Вы успешно зарегистрировались!')
                LocalStorageService.removeItem('confirm_code_id')
                LocalStorageService.setItem('access_token', response.data)
                router.push('/profile')
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Введен неверный код!')
            this.model.code = ''
        }
    }
}