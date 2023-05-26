
import type {EventType} from "@/utiities/enums/event-type";

export interface IEventToSave {
    id?: string;
    name: string;
    type: EventType;
    shortDescription: string;
    time: string;
    runningTime: number;
    constraints: string;
    imageId: string;
    startedAt: string;
    description: string;
    location: string;
    endedAt: string;
    organizationId: string;
    day: string;
}
