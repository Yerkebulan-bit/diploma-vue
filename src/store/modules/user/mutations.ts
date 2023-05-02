import type {User} from "@/domain/interfaces/response/user.interface";


export default {
    setUser:(state: any, user: User) => state.user = user
}