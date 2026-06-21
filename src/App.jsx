import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import StaffPage from './pages/StaffPage';

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
