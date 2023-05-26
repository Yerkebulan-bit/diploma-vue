import {urlList} from "@/utiities/constants/urlList";
import axios from "axios";
import type {ICommentToSave} from "@/domain/interfaces/response/comment-to-save.interface";

export default {
    async fetchComments({commit}: {commit: Function}, eventId: number) {
        try {
            const response = await axios.get(urlList.getEventComments + '?eventId=' + eventId)
            if(response) commit("setComments", response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async saveComment({commit}: {commit: Function}, body: ICommentToSave) {
        try {
            const access_token = localStorage.getItem('access_token');
            const response = await axios.post(`${urlList.saveComment}?eventId=${body.eventId}&text=${body.text}&userId=${body.userId}`, {
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}
