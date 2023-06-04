import {LocalStorageService} from "@/assets/services/local-storage-service";

export class ConfirmCodeModel{
    code: string;
    codeId: string;
    constructor(object?: any) {
        this.code = object && object.code || '';
        this.codeId = object && object.codeId || this.getCodeId() ;
    }

    getCodeId(){
        return LocalStorageService.getItem('confirm_code_id') || ''
    }
}