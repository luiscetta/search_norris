import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const defaultOptions = {
    style: {
        fontWeight: 'bold',
        fontSize: '1.4rem',
    },
    position: toast.POSITION.TOP_CENTER,
}


export function ErrorToast(content) {
    return toast.error(content, { ...defaultOptions });
}


