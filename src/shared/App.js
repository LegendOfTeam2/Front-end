// React
import React, { lazy, Suspense, Fragment } from 'react';

// Zustand
import useMemberStore from '../zustand/member';

// Packages
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Main from '../pages/Main';
import Search from '../pages/Search';
import Chat from '../pages/Chat';

// Components
import Loading from '../components/Loading';
import PlayerMain from '../components/audioplayer/PlayerMain';

// Utils
import Kakao from '../utils/kakao';
import Google from '../utils/google';
import { getCookie } from '../utils/cookie';
import { useEffect } from 'react';

// Shared
import Analytics from './Analytics';

// Pages -Lazy
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
const PromotionalPage = lazy(() => import('../pages/PromotionalPage'));

function App() {
  const is_login = getCookie('authorization');
  const changeLoginStatus = useMemberStore((state) => state.changeLoginStatus);

  const location = useLocation().pathname.split('/')[1];

  Analytics();

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
        <Route
          path='/write'
          element={is_login !== undefined ? <Write /> : <Main />}
        />
        <Route path='/promotional' element={<PromotionalPage />} />

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
        <Route
          path='/chat'
          element={is_login !== undefined ? <Chat /> : <Main />}
        />

        <Route path='*' element={<Main />} />
      </Routes>
      {location === '' ||
      location === 'detail' ||
      location === 'search' ||
      location === 'morepage' ||
      location === 'mypage' ? (
        <PlayerMain />
      ) : (
        <Fragment />
      )}
    </Suspense>
  );
}

export default App;
