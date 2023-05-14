import {urlList} from "@/utiities/constants/urlList";
import axios from "axios";
import type {IFilters} from "@/domain/interfaces/response/filters.interface";

export default {
    async searchEvents({commit}: {commit: Function}, filters: IFilters) {
        try {
            const response = await axios.post(urlList.getSearchEvents, filters)
            if(response) commit("setEvents", response.data)
        } catch (error) {
            console.log(error)
        }
    }
}