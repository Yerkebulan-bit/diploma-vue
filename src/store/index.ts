
// @ts-ignore
import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import mainEvents from "@/store/modules/main-events";
import weekEvents from "@/store/modules/week-events";
import searchEvents from "@/store/modules/events";
import auth from "@/store/modules/auth";
import file from "@/store/modules/file";
import event from "@/store/modules/event";
import comments from "@/store/modules/comments";
import filters from "@/store/modules/filters";

export default createStore({
    plugins: [createPersistedState()],
    modules: {
        mainEvents,
        filters,
        weekEvents,
        searchEvents,
        auth,
        event,
        file,
        comments
    }
})

