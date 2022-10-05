// Utils
import { setCookie } from './cookie';

const createToken = (accessToken : any, refreshToken : any) => {
  setCookie('authorization', accessToken);
  window.sessionStorage.setItem('refresh-token', refreshToken);
};

export default createToken;
