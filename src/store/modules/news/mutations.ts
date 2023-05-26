import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {INews} from "@/domain/interfaces/response/news.interface";

export default {
    setNews: (state: any, news: INews[]) => state.news = news
}