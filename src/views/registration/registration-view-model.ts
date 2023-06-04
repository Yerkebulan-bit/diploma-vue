import store from "@/store";
import {notify} from "@/utiities/functions/notify";
import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import router from "@/router";
import {LocalStorageService} from "@/assets/services/local-storage-service";

export class RegistrationViewModel {
    model: any

    constructor(model: any) {
        this.model = model;
    }

    async registration() {
        this.model.selectedUserType === 'organization' ? await this.registerOrganization() : await this.registerUser()
    }

    async registerUser() {
        if (!this.model.name || !this.model.surname || !this.model.birth || !this.model.email || !this.model.phone || !this.model.username || !this.model.password) {
            notify('error', 'Заполните все поля!')
            return
        }
        try {
            const response = await axios.post(urlList.registration, {
                name: this.model.name,
                email: this.model.email,
                username: this.model.username,
                phone: this.model.phone,
                surname: this.model.surname,
                birth: this.model.birth,
                about: this.model.about,
                rawPassword: this.model.password
            })
            if (response && response.data) {
                LocalStorageService.setItem('confirm_code_id', response.data)
                window.location.href = '/confirm-code'
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Ошибка регистрации!')
        }
    }

    async registerOrganization() {
        if (!this.model.name || !this.model.email || !this.model.address || !this.model.username || !this.model.phone || !this.model.shortDescription || !this.model.site || !this.model.about || !this.model.password) {
            notify('error', 'Заполните все поля!')
            return
        }
        try {
            const response = await axios.post(urlList.organizationRegistration, {
                name: this.model.name,
                email: this.model.email,
                address: this.model.address,
                username: this.model.username,
                phone: this.model.phone,
                shortDescription: this.model.shortDescription,
                site: this.model.site,
                imageId: '',
                description: this.model.about,
                password: this.model.password
            })
            if (response && response.data) {
                LocalStorageService.setItem('confirm_code_id', response.data)
                window.location.href = '/confirm-code'
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Ошибка регистрации!')
        }
    }
}