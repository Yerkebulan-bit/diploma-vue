
import type {IEventDetail} from "@/domain/interfaces/response/event-detail.interface";

export default {
    setEventDetail:(state: any, event: IEventDetail) => state.event = event
}