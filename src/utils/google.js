// React
import { useEffect, Fragment } from 'react';

// Redux
// import { googleAuthThunk } from '../redux/modules/member';
// import { useDispatch } from 'react-redux';

// Zustand
import { useMemberStore } from '../zustand/member';

// Components
import Loading from '../components/Loading';

// Packages
import { useNavigate } from 'react-router-dom';

const Google = () => {
  const navigate = useNavigate();
  const googleAuth = useMemberStore((state) => state.googleAuth);
  const authorization_code = new URL(window.location.href).searchParams.get(
    'code'
  );

  useEffect(() => {
    const fetchCode = (code) => {
      googleAuth(code).then((res) => {
        if (res) {
          navigate('/');
        }
      });
    };
    fetchCode(authorization_code);
  }, []);

  return <Loading></Loading>;
};

export default Google;