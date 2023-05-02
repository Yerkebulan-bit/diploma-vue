import state from "@/store/modules/main-events/state";
import getters from "@/store/modules/main-events/getters";
import mutations from "@/store/modules/main-events/mutations";
import actions from "@/store/modules/main-events/actions";

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}