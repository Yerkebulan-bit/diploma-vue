import type {Organization} from "@/domain/interfaces/response/organization.interface";

export interface IEventDetail extends Event {
    description: string;
    location: string;
    enddate: Date;
    organizationId: string;
    organization: Organization;
}
