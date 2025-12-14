
import './components/Navbar.tsx'
import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx' 
import Ayurveda from './components/Ayurveda.tsx';
import Vision from './components/Vision.tsx';
import Products from './components/Products.tsx';
import Joints from './components/Joints.tsx';
import Feet from './components/Feet.tsx';
import Hair from './components/Hair.tsx';
import Certifications from './components/Certifications.tsx';
import Footer from './components/Footer.tsx';
import Cart from './components/Cart.tsx';
import RouteChangeTracker from './components/RouteChangeTracker.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Products />
            <Joints />
            <Feet />
            <Hair />
            <Home />
            <Vision />
            <Ayurveda />
            <Certifications />
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
          </>
        } />
        <Route path="/joints" element={
          <>
            <Navbar />
            <Joints />
          </>
        } />
        <Route path="/feet" element={
          <>
            <Navbar />
            <Feet />
          </>
        } />
        <Route path="/hair" element={
          <>
            <Navbar />
            <Hair />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;

// npm run dev
