import user from './modules/user';
// @ts-ignore
import {createStore} from "vuex";
import mainEvents from "@/store/modules/main-events";
import weekEvents from "@/store/modules/week-events";
import searchEvents from "@/store/modules/search-events";
import auth from "@/store/modules/auth";
import event from "@/store/modules/event";
export default createStore({
    modules: {
        user,
        mainEvents,
        weekEvents,
        searchEvents,
        auth,
        event
    }
})

