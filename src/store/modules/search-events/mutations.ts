import type {IEvent} from "@/domain/interfaces/response/event.interface";

export default {
    setSearchEvents: (state: any, events: IEvent[]) => state.weekEvents = events
}