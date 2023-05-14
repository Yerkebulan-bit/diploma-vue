import type {IComment} from "@/domain/interfaces/response/comment.interface";

export default {
    setComments: (state: any, comments: IComment[]) => state.comments = comments
}