// React
import { lazy, Suspense } from 'react';

// Packages
import { Routes, Route } from 'react-router-dom';

import Loading from '../components/Loading';

// Pages
const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const UserPosition = lazy(() => import('../pages/UserPosition'));

// Utils
const Kakao = lazy(() => import('../utils/kakao'));
const Google = lazy(() => import('../utils/google'));

function App() {
  return (
    <Suspense fallback={<Loading  />}>
      <Routes>
        <Route path='/' exact='true' element={<Main />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup/:position' element={<SignUp />} />
        <Route path='/kakao/callback' element={<Kakao />} />
        <Route path='/google/callback' element={<Google />} />
        <Route path='/position' element={<UserPosition />} />
      </Routes>
    </Suspense>
  );
}

export default App;