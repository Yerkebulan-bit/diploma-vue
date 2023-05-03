import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";


export default {
    async fetchEventDetail({commit}: { commit: Function }, id: string) {
        try {
            const response = await axios.get(`${urlList.getEventDetail}/${id}`)
            console.log(response.data)
            if (response) commit("setEventDetail", response.data);
        } catch (error) {
            console.log(error)
        }
    },
}