import state from "@/store/modules/comments/state";
import getters from "@/store/modules/comments/getters";
import mutations from "@/store/modules/comments/mutations";
import actions from "@/store/modules/comments/actions";

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}