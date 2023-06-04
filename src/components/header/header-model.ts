import type {INavigation} from "@/domain/interfaces/INavigation.interface";
import type {ISocial} from "@/domain/interfaces/ISocial.interface";
import {LocalStorageService} from "@/assets/services/local-storage-service";

export class HeaderModel {
    navigation: INavigation[]
    socials: ISocial[]
    isOpenMenu: boolean
    isAuth: boolean
    isFixed: boolean

    constructor(object: any) {
        this.navigation = object.navigation || []
        this.socials = object.socials || []
        this.isOpenMenu = object.isOpenMenu || false
        this.isAuth = object.isAuth || this.getAccessToken() !== ''
        this.isFixed = object.isFixed || false
    }

    getAccessToken(): string {
        return LocalStorageService.getItem('access_token') || ''
    }
}