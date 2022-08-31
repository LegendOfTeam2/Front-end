// React
import { lazy, Suspense } from "react";

//packages
import { Routes, Route } from "react-router-dom";



// Page
const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/SignIn'));
const UserPosition = lazy(() => import('../pages/UserPosition'));
const SignUpCheck = lazy(() => import('../pages/SignUpCheck'));
const Welcome = lazy(() => import('../components/modal/Welcome'));
const Confirm = lazy(() => import('../components/modal/Confirm'));
// Utils
const Kakao = lazy(() => import('../utils/kakao'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' exact='true' element={<Main />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/kakao/callback' element={<Kakao />} />
        <Route path='/Position' exact='true' element={<UserPosition />} />
        <Route path='/SignUpCheck' exact='true' element={<SignUpCheck />} />
        <Route path='/Welcome' exact='true' element={<Welcome />} />
        <Route path='/Confirm' exact='true' element={<Confirm />} />
      </Routes>
    </Suspense>
  );
}

export default App;
