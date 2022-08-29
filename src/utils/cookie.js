// Packages
import { Cookies } from 'react-cookie';
import moment from 'moment';

const cookies = new Cookies();

export const setCookie = (name, value) => {
  const thiryMinutesLater = moment().add(30, 'm').toDate();
  return cookies.set(name, value, {
    path: '/',
    expires: thiryMinutesLater,
  });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name, { path: '/' });
};
