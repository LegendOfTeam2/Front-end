// React
import { lazy, Suspense } from "react";

//packages
import { Routes, Route } from "react-router-dom";

// Page
const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Userposition = lazy(() => import('../pages/Userposition'));

// Utils
const Kakao = lazy(() => import('../utils/kakao'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' exact='true' element={<Main />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/kakao/callback' element={<Kakao />} />
        <Route path='/position' exact='true' element={<Userposition />} />
      </Routes>
    </Suspense>
  );
}

export default App;
