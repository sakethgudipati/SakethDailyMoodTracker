import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import Home from './components/Home/index';
import Reports from './components/Reports/index';
import NotFound from './components/NotFound/index';
import ProtectedRoute from './components/ProtectedRoute/index'; // Assuming ProtectedRoute handles auth logic
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
    
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
