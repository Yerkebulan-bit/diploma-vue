import axios from "axios";
import {urlList} from "@/utiities/constants/urlList";
import {toast} from "vue3-toastify";

export class FooterViewModel{
    model: any;

    constructor(model: any){
        this.model = model;
    }

    async subscribe(){
        if (!this.model.email) {
            this.errorNotify();
            return;
        }
        try {
            const response = await axios.post(urlList.subscribe, {
            }, {
                params: {
                    email: this.model.email
                }
            })
            if (response.status === 200){
                this.model.email = '';
                this.successNotify();
            }
        } catch (error) {
            console.log(error)
            this.errorNotify();
        }
    }

    notify(toastType: any | undefined, text: string){
        toast(text, {
            autoClose: 2000,
            type: toastType,
            theme: 'dark',
            pauseOnHover: false,
            toastStyle: {
                borderRadius: '10px',
                background: '#1e1e1e',
                color: '#fff',
                fontSize: '14px',
                fontFamily: 'Roboto Condensed',
            },
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

     successNotify(){
        this.notify('success', 'Вы успешно подписались!');
    }

    errorNotify(){
        this.notify('error', 'Введен некорректный email!');
    }
}