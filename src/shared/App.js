// Page
import SignIn from '../pages/SignIn';

// Packages
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

function App() {
  return (
    <Routes>
      <Route path='/' exact='true' element={<Header />} />
      <Route path='/signin' exact='true' element={<SignIn />} />
    </Routes>
  );
}

export default App;