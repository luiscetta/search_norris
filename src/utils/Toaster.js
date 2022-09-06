import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


toast.configure({
    style: {
        fontWeight: 'bold',
        fontSize: '1.3rem',
    },
    position: toast.POSITION.TOP_CENTER,
    theme: 'colored',
});

export function ErrorToast(content) {
    return toast.error(content);
};