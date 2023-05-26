import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {IOrganization} from "@/domain/interfaces/response/organization.interface";


export interface IEventDetail extends IEvent {
    description: string;
    location: string;
    enddate: Date;
    organizationId: string;
    organization: IOrganization;
    ytUrl: string;
    isFollowed: boolean;
    rating: number;
}
