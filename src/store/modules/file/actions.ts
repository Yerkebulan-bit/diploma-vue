import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";


export default {
    async fetchFile({commit}: { commit: Function }, id: string) {
        try {
            const response = await axios.post(`${urlList.getFile}/${id}`)
            if (response) commit("setFile", {
                id: id,
                ...response.data
            });
        } catch (error) {
            console.log(error)
        }
    },
}