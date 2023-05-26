import type {IUser} from "@/domain/interfaces/response/user.interface";
import type {IOrganization} from "@/domain/interfaces/response/organization.interface";

export default {
    getAccessToken: (state: any) => state.access_token,
    getUser: (state: any) : IUser => state.user,
    getUserType: (state: any) => state.userType,
    getOrganization: (state: any): IOrganization => state.organization,
    getFollowedEvents: (state: any) => state.userEvents,
}





