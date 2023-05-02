import type {IEvent} from "@/domain/interfaces/response/event.interface";

export default {
    setWeekEvents: (state: any, events: IEvent[]) => state.weekEvents = events
}