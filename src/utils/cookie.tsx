// Packages
import { Cookies } from 'react-cookie';

// Utils
import dayjs from 'dayjs';

const cookies : any = new Cookies();

export const setCookie = (name : any, value : any) => {
  const thiryMinutesLater = dayjs().add(30, 'm').toDate();
  return cookies.set(name, value, {
    path: '/',
    expires: thiryMinutesLater,
  });
};

export const getCookie = (name : any) => {
  return cookies.get(name, { path: '/' });
};

export const removeCookie = (name: any) => {
  return cookies.remove(name, { path: '/' });
};