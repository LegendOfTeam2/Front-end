// Page
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';

// Packages
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' exact='true' element={<Main />} />
      <Route path='/signin' exact='true' element={<SignIn />} />
    </Routes>
  );
}

export default App;
