// Utils
import { setCookie } from './cookie';

const createToken = (accessToken, refreshToken) => {
  setCookie('authorization', accessToken);
  window.sessionStorage.setItem('refresh-token', refreshToken);
};

export default createToken;