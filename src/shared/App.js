// React
import { lazy, Suspense } from 'react';

// Packages
import { Routes, Route } from 'react-router-dom';

// Page
const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/SignIn'));

// Utils
const Kakao = lazy(() => import('../utils/kakao'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' exact='true' element={<Main />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/kakao/callback' element={<Kakao />} />
      </Routes>
    </Suspense>
  );
}

export default App;
