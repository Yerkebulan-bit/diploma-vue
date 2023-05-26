import type {IEvent} from "@/domain/interfaces/response/event.interface";

export default {
    setEvents: (state: any, events: IEvent[]) => state.events = events,
    setEventsByOrg: (state: any, events: IEvent[]) => state.getEventsByOrg = events,
}