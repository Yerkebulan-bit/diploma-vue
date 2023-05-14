import state from "@/store/modules/events/state";
import getters from "@/store/modules/events/getters";
import mutations from "@/store/modules/events/mutations";
import actions from "@/store/modules/events/actions";


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}