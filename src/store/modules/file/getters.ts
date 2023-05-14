import type {IFile} from "@/domain/interfaces/file.interface";

export default {
    getFiles: (state: any) => state.files,
    getFile: (state: any) => (id: string) => {
        if (state.files.length === 0) return {}
        const file = state.files.find((item: IFile) => item.id === id)
        if (!file) return {}
        return file
    }
}