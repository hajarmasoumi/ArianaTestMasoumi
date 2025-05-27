import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useFetcher, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Lazy load components
const Login = lazy(() => import('./pages/Login/index.tsx'));
const Register = lazy(() => import('./pages/Register/index.tsx'));
const Dashboard = lazy(() => import('./pages/Dashboard/index.tsx'));


function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>

  );
}

export default App;
