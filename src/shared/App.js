// Page
import Main from '../pages/Main';

// Packages
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' exact='true' element={<Main />} />
    </Routes>
  );
}

export default App;