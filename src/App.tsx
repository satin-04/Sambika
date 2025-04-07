
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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Vision />
      <Ayurveda />
      <Products />
      <Joints />
      <Feet />
      <Hair />
      <Certifications />
      <Footer />
    </>
  )
}

export default App;

// npm run dev
