// React
import { useEffect, Fragment } from 'react';

// Zustand
import { useMemberStore } from '../zustand/member';

// Components
import Loading from '../components/Loading';

// Packages
import { useNavigate } from 'react-router-dom';

const Kakao = () => {
  const navigate = useNavigate();
  const kakaoAuth = useMemberStore((state) => state.kakaoAuth);
  const authorization_code = new URL(window.location.href).searchParams.get(
    'code'
  );

  useEffect(() => {
    const fetchCode = (code) => {
      kakaoAuth(code).then((res) => {
        if(res) {
          navigate('/');
        }
      });
    };
    fetchCode(authorization_code);
  }, []);

  return <Loading></Loading>;
};
export default Kakao;