export class RegistrationModel {
    name: string
    surname: string
    birth: string
    email: string
    about: string
    phone: string
    username: string
    password: string
    shortDescription: string
    site: string
    userTypes: any
    selectedUserType: string
    constructor(object?: any) {
        this.name = object && object.name || ''
        this.surname = object && object.surname || ''
        this.birth = object && object.birth || ''
        this.email = object && object.email || ''
        this.about = object && object.about || ''
        this.phone = object && object.phone || ''
        this.username = object && object.username || ''
        this.password = object && object.password || ''
        this.shortDescription = object && object.shortDescription || ''
        this.site = object && object.site || ''
        this.selectedUserType = object && object.selectedUserType || ''
        this.userTypes = object && object.userTypes || []
    }


}