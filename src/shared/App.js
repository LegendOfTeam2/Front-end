// React
import { lazy, Suspense } from "react";

//packages
import { Routes, Route } from "react-router-dom";
// Page
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
const Userposition = lazy(() => import("../pages/Userposition"));
// Packages

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' exact='true' element={<Main />} />
        <Route path='/signin' exact='true' element={<SignIn />} />
        <Route path='/Userposition' exact='true' element={<Userposition />} />
      </Routes>
    </Suspense>
  );
}

export default App;
