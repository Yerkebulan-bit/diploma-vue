import {LocalStorageService} from "@/assets/services/local-storage-service";
import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import {notify} from "@/utiities/functions/notify";

export class EventViewModel {
    model: any;
    initAllContent: Promise<boolean>
    constructor(object: any){
        this.model = object;
        this.initAllContent = (async () => await this.getAllContent())()
    }

    async getAllContent(): Promise<any> {
        try {
            await this.getEventDetail()
            await this.fetchEventImage()
            await this.fetchEventComment()
        } catch (_) {
            return false
        }
    }

    async getEventDetail(): Promise<void> {
        try {
            const access_token = localStorage.getItem('access_token')
           const config = access_token ? {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
           } : {}
            const response = await axios.get(`${urlList.getEventDetail}/${this.model.eventId}`, config)
            if (response) {
                this.model.eventDetail = response.data
                console.log(this.model.eventDetail)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async fetchEventImage(): Promise<void> {
        try {
            const response = await axios.post(`${urlList.getFile}/${this.model.eventDetail.imageId}`)
            if (response) {
                this.model.eventImage = response.data
            }
        } catch (error) {
            console.log(error)
        }
    }

    async fetchEventComment(): Promise<void> {
        try {
            const response = await axios.get(urlList.getEventComments + '?eventId=' + this.model.eventDetail.id)
            if (response) {
                this.model.eventComments = response.data
            }
        } catch (error) {
            console.log(error)
        }
    }

    async followEvent(): Promise<void> {
        try {
            const accessToken = localStorage.getItem('access_token')
            const userId = localStorage.getItem('user_id')
            const response = await axios.post(
                `${urlList.followEvent}?userId=${userId}&eventId=${this.model.eventDetail.id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            if (response.data === 'OK') {
                notify('success', 'Вы успешно подписались на мероприятие')
                await this.getEventDetail()
            } else if (response.data === 'RESTRICTED_BY_AGE') {
                notify('error', 'Вы не можете подписаться на это мероприятие из-за возрастных ограничений')
            } else if (response.data === 'LIMIT_REACHED') {
                notify('error', 'Вы не можете подписаться на это мероприятие, так как места закончились')
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Возникла ошибка при подписке на мероприятие')
        }
    }

    async unFollowEvent(): Promise<void> {
        try {
            const accessToken = localStorage.getItem('access_token')
            const userId = localStorage.getItem('user_id')
            const response = await axios.post(
                `${urlList.unFollowEvent}?userId=${userId}&eventId=${this.model.eventDetail.id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            if (response) {
                notify('success', 'Вы успешно отписались от мероприятия')
                await this.getEventDetail()
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Возникла ошибка при отписке от мероприятия')
        }
    }

    async saveComment(text: string): Promise<void> {
        if (!text) {
            notify('error', 'Введите текст комментария')
            return
        }
        try {
            const access_token = localStorage.getItem('access_token');
            const userId = localStorage.getItem('user_id')
            const response = await axios.post(`${urlList.saveComment}?eventId=${this.model.eventDetail.id}&text=${text}&userId=${userId}`, {
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            if (response) {
                notify('success', 'Комментарий успешно добавлен')
                await this.fetchEventComment()
            }
        } catch (error) {
            console.log(error)
            notify('error', 'Возникла ошибка при добавлении комментария')
        }
    }

}