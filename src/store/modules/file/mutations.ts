import type {IFile} from "@/domain/interfaces/file.interface";

export default {
    setFile:(state: any, file: IFile) => {
            const isExist = state.files.find((item: IFile) => item.id === file.id)
            if (isExist) return
            state.files.push(file)
    }
}