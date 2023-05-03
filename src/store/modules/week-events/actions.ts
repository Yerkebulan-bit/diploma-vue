import {urlList} from "@/utiities/constants/urlList";
import axios from "axios";

export default {
    async fetchWeekEvent({commit}: {commit: Function}) {
        try {
            const response = await axios.get(urlList.getWeekEvents)
            if(response) commit("setWeekEvents", response.data)
        } catch (error) {
            console.log(error)
        }
    }
}