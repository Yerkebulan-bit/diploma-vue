import {toast} from "vue3-toastify";

export function notify(toastType: any | undefined, text: string){
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