import logo from './logo.svg';
import './App.css';
import { LandingPage } from "./pages/LandingPage.js"
import { Navbar } from './components/Navbar.js';
import { ServicePage } from './pages/ServicePage';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/conoce" element={<Navigate replace to = "/"/>} />
        <Route path="/prueba" element={<ServicePage />} />
        {/* <Route path="/adquiere" element={<LandingPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
