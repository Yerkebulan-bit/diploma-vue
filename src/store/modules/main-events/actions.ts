import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";

export default {
    async fetchMainEvents({commit}: { commit: Function }) {
        try {
            const response = await axios.get(urlList.getMainEvents, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            if (response) commit("setMainEvents", response)
        } catch (error) {
            console.log(error)
        }
    }
}