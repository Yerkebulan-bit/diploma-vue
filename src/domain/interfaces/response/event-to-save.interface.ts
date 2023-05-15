
import type {EventType} from "@/utiities/enums/event-type";

export interface EventToSave {
    id: string;
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
    endedAt: Date;
    organizationId: string;
    day: string;
}
