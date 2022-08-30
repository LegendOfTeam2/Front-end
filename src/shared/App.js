// Page
import Main from '../pages/Main';

// Packages
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

function App() {
  return (
    <Routes>
      <Route path='/' exact='true' element={<Header />} />
    </Routes>
  );
}

export default App;