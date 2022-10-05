import { toast } from 'react-toastify';

export const warning = (message : any) => {
  toast.warning(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 1500,
    draggablePercent: 60,
    hideProgressBar: true,
  });
}
export const info = (message : any)  => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 1500,
    draggablePercent: 60,
    hideProgressBar: true,
  });
}