import type {IEventDetail} from "@/domain/interfaces/response/event-detail.interface";
import type {IComment} from "@/domain/interfaces/response/comment.interface";

export class EventModel {
    eventId: string;
    eventDetails: IEventDetail;
    eventComment: IComment[];
    eventImage: string;

    constructor(object: any){
        this.eventId = object.eventId || '';
        this.eventDetails = object.eventDetails || {};
        this.eventComment = object.eventComment || [];
        this.eventImage = object.eventImage || '';
    }
}