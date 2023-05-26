import {urlList} from "@/utiities/constants/urlList";
import axios from "axios";

export default {
    async fetchNews({commit}: {commit: Function}) {
        try {
            const response = await axios.get(urlList.getNews)
            if(response) commit("setNews", response.data)
        } catch (error) {
            console.log(error)
        }
    }
}