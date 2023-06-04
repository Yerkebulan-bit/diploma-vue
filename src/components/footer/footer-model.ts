import type {ISocial} from "@/domain/interfaces/ISocial.interface";
import type {INavigationBlock} from "@/domain/interfaces/INavigationBlock.interface";

export class FooterModel {
    navigation: INavigationBlock[]
    socials: ISocial[]
    email: string

    constructor(object: any){
        this.navigation = object.navigation || []
        this.socials = object.socials || []
        this.email = object.email || ''
    }
}