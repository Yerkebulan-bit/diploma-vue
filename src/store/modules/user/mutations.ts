import type {IUser} from "@/domain/interfaces/response/user.interface";


export default {
    setUser:(state: any, user: IUser) => state.user = user
}