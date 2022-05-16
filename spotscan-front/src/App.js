import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from './components/Navbar.js';
import { LandingPage } from "./pages/LandingPage.js"
import { ServicePage } from './pages/ServicePage';
import { AcquirePage } from './pages/AcquirePage';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/conoce" element={<Navigate replace to = "/"/>} />
        <Route path="/prueba" element={<ServicePage />} />
        <Route path="/adquiere" element={<AcquirePage />} />
        {/* <Route path="/adquiere" element={<LandingPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
