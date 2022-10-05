// Packages
import { Cookies } from 'react-cookie';

// Utils
import dayjs from 'dayjs';

const cookies = new Cookies();

export const setCookie = (name, value) => {
  const thiryMinutesLater = dayjs().add(30, 'm').toDate();
  return cookies.set(name, value, {
    path: '/',
    expires: thiryMinutesLater,
  });
};

export const getCookie = (name) => {
  return cookies.get(name, { path: '/' });
};

export const removeCookie = (name) => {
  return cookies.remove(name, { path: '/' });
};