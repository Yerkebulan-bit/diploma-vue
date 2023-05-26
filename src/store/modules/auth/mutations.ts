import type {IUser} from "@/domain/interfaces/response/user.interface";
import type {IOrganization} from "@/domain/interfaces/response/organization.interface";
import type {IEvent} from "@/domain/interfaces/response/event.interface";

export default {
    setAccessToken:(state: any, access_token: string) => state.access_token = access_token,
    setUser:(state: any, user: IUser) => state.user = user,
    setUserType:(state: any, userType: string) => state.userType = userType,
    setOrganization:(state: any, organization: IOrganization) => state.organization = organization,
    setFollowedEvents:(state: any, followedEvents: IEvent[]) => state.followedEvents = followedEvents,
}




