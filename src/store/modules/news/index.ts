import getters from "@/store/modules/news/getters";
import mutations from "@/store/modules/news/mutations";
import actions from "@/store/modules/news/actions";
import state from "@/store/modules/news/state";
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}