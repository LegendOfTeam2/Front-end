// Utils
import { setCookie } from './cookie';

const createToken = (accessToken, refreshToken) => {
  setCookie('authorization', accessToken);
  window.sessionStorage.setItem(refreshToken);
};

export default createToken;