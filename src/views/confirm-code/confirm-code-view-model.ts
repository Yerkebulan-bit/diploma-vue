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
                console.log(response.data)
                notify('success', 'Вы успешно зарегистрировались!')
                localStorage.removeItem('confirm_code_id')
                router.push('/login')
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Введен неверный код!')
            this.model.code = ''
        }
    }
}