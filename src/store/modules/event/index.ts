import state from "@/store/modules/event/state";
import getters from "@/store/modules/event/getters";
import mutations from "@/store/modules/event/mutations";
import actions from "@/store/modules/event/actions";


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}