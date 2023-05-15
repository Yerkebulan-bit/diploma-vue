import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";


export default {
    async fetchEventDetail({commit}: { commit: Function }, id: string) {
        try {
            const response = await axios.get(`${urlList.getEventDetail}/${id}`)
            if (response) commit("setEventDetail", response.data);
        } catch (error) {
            console.log(error)
        }
    },
    async followEvent({commit}: { commit: Function }, payload: any) {
        try {
            const accessToken = localStorage.getItem("access_token");
            const response = await axios.post(`${urlList.followEvent}?userId=${payload.userId}&eventId=${payload.eventId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            }, {
                auth: {
                    username: 'client',
                    password: 'secret'
                }
                }
            )
        } catch (error) {
            console.log(error)
        }
    },
    async unFollowEvent({commit}: { commit: Function }, payload: any) {
        try {
            const accessToken = localStorage.getItem("access_token");
            const response = await axios.post(`${urlList.unFollowEvent}?userId=${payload.userId}&eventId=${payload.eventId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

