import { toast } from 'react-toastify';

export const warning = (message) => {
  toast.warning(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    draggablePercent: 60,
    hideProgressBar: true,
  });
}
export const info = (message)  => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
    draggablePercent: 60,
    hideProgressBar: true,
  });
}