// React
import { lazy, Suspense, Fragment } from 'react';

// Zustand
import useMemberStore from '../zustand/member';

// Packages
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Search from '../pages/Search';

// Components
import Loading from '../components/Loading';

// Utils
import { getCookie } from '../utils/cookie';
import { useEffect } from 'react';
import PlayerMain from '../components/audioplayer/PlayerMain';

// Pages -Lazy
const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Write = lazy(() => import('../pages/Write'));
const WriteModify = lazy(() => import('../pages/WriteModify'));
const SignUpCheck = lazy(() => import('../pages/SignUpCheck'));
const MyInfoModify = lazy(() => import('../pages/MyInfoModify'));
const Detail = lazy(() => import('../pages/Detail'));
const Withdrawal = lazy(() => import('../pages/Withdrawal'));
const MorePage = lazy(() => import('../pages/MorePage'));
const Chat = lazy(() => import('../pages/Chat'));
const PromotionalPage = lazy(() => import('../pages/PromotionalPage'));

// Utils - Lazy
const Kakao = lazy(() => import('../utils/kakao'));
const Google = lazy(() => import('../utils/google'));

function App() {
  const is_login = getCookie('authorization');
  const changeLoginStatus = useMemberStore((state) => state.changeLoginStatus);

  let location = useLocation().pathname.split('/')[1];

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      changeLoginStatus(true);
    } else {
      changeLoginStatus(false);
    }
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' exact='true' element={<Main />} />
        <Route path='/mypage/:nickname' element={<MyPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signupcheck' element={<SignUpCheck />} />
        <Route path='/kakao/callback' element={<Kakao />} />
        <Route path='/google/callback' element={<Google />} />
        <Route path='/write' element={is_login !== undefined ? <Write /> : <Main />} />
        <Route path='/Promotional' element={<PromotionalPage />} />
        
        <Route
          path='/ModifyWrite/:position/:postId'
          element={is_login !== undefined ? <WriteModify /> : <Main />}
        />
        <Route
          path='/myinfomodify'
          element={is_login !== undefined ? <MyInfoModify /> : <Main />}
        />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:position/:postId' element={<Detail />} />
        <Route path='/morepage/:position/:ctg' element={<MorePage />} />
        <Route
          path='/withdrawal'
          element={is_login !== undefined ? <Withdrawal /> : <Main />}
        />
        <Route path='/chat' element={is_login !== undefined ? <Chat /> : <Main />} />

        <Route path='*' element={<Main />} />
      </Routes>
      {location === '' ||
      location === 'detail' ||
      location === 'search' ||
      location === 'morepage' ||
      location === 'mypage' ? (
        <PlayerMain />
      ) : (
        <Fragment></Fragment>
      )}
    </Suspense>
  );
}

export default App;
