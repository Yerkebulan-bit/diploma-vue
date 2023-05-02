import state from "@/store/modules/week-events/state";
import getters from "@/store/modules/week-events/getters";
import mutations from "@/store/modules/week-events/mutations";
import actions from "@/store/modules/week-events/actions";


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}