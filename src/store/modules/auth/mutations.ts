import type {IUser} from "@/domain/interfaces/response/user.interface";
import type {IOrganization} from "@/domain/interfaces/response/organization.interface";

export default {
    setAccessToken:(state: any, access_token: string) => state.access_token = access_token,
    setUser:(state: any, user: IUser) => state.user = user,
    setOrganization:(state: any, organization: IOrganization) => state.organization = organization,
}




