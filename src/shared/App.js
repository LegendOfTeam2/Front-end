// React
import { lazy, Suspense } from "react";

// Zustand
import useMemberStore from "../zustand/member";

// Packages
import { Routes, Route } from "react-router-dom";

// Pages
import Search from "../pages/Search";

// Components
import Loading from "../components/Loading";

// Utils
import { getCookie } from "../utils/cookie";
import { useEffect } from "react";

// Pages -Lazy
const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Write = lazy(() => import('../pages/Write'));
const SignUpCheck = lazy(() => import('../pages/SignUpCheck'));
const MyInfoModify = lazy(() => import('../pages/MyInfoModify'))
const Details = lazy(() => import('../pages/Details'))
const Withdrawal = lazy(() => import('../pages/Withdrawal'));
const MorePage = lazy(() => import('../pages/MorePage'))
const Chat = lazy(() => import('../pages/Chat'))

// Utils - Lazy
const Kakao = lazy(() => import("../utils/kakao"));
const Google = lazy(() => import("../utils/google"));

function App() {
  const is_login = useMemberStore((state) => state.is_login);
  const changeLoginStatus = useMemberStore((state) => state.changeLoginStatus);

  useEffect(() => {
    if (getCookie("authorization") !== undefined) {
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
        <Route path='/write' element={is_login ? <Write /> : <Main />} />
        <Route path='/myinfomodify' element={is_login ? <MyInfoModify /> : <Main />} />
        <Route path='/morepage' element={<MorePage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/details/:position/:postid' element={<Details />} />
        <Route path='/morepage/:position' element={<MorePage />} />
        <Route path='/withdrawal' element={is_login ? <Withdrawal /> : <Main />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;
