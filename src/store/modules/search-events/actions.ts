import {urlList} from "@/utiities/constants/urlList";
import axios from "axios";

export default {
    async searchEvents({commit}: {commit: Function}) {
        try {
            const response = await axios.post(urlList.getSearchEvents, {
                body: {
                    
                }
            })
            if(response) commit("setSearchEvents", response.data)
        } catch (error) {
            console.log(error)
        }
    }
}