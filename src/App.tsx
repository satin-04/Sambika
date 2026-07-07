
import './components/Navbar.tsx'
import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx' 
import Ayurveda from './components/Ayurveda.tsx';
import Vision from './components/Vision.tsx';
import Products from './components/Products.tsx';
import Joints from './components/Joints.tsx';
import Feet from './components/Feet.tsx';
import Hair from './components/Hair.tsx';
import Massage from './components/Massage.tsx';
import Certifications from './components/Certifications.tsx';
import Footer from './components/Footer.tsx';
import Cart from './components/Cart.tsx';
import ShiprocketOrderSummary from './components/ShiprocketOrderSummary.tsx';
import RouteChangeTracker from './components/RouteChangeTracker.tsx';
import Testimonials from './components/Testimonials.tsx';
import Policy from './components/Policy.tsx';
import JointsLanding from './components/JointsLanding.tsx';
import FeetLanding from './components/FeetLanding.tsx';
import HairLanding from './components/HairLanding.tsx';
import MassageLanding from './components/MassageLanding.tsx';
import { Helmet } from 'react-helmet';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { captureUtmParams } from './utils/utmTracker';

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sambika Healthcare",
  "url": "https://sambika-healthcare.netlify.app",
  "logo": "https://sambika-healthcare.netlify.app/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8097-931-971",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop Number 5, Rizvi Chambers, Hill Road",
    "addressLocality": "Bandra West",
    "addressRegion": "Maharashtra",
    "postalCode": "400050",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/sambikahealthcare",
    "https://www.facebook.com/61575020845357/"
  ]
};

function App() {
  useEffect(() => {
    captureUtmParams().catch(console.error);
  }, []);

  return (
    <Router>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Sambika Healthcare | 100% Ayurvedic Oils for Joints, Feet, Hair &amp; Men's Wellness — India</title>
              <meta name="description" content="Shop Sambika Healthcare's ISO &amp; GMP certified Ayurvedic oils. Trusted by 1000+ Indian families for joint pain, heel pain, hair fall &amp; men's stamina. ₹450. Free shipping. COD available." />
              <meta name="keywords" content="ayurvedic oil india, sambika healthcare, joint pain oil india, heel pain oil, hair fall oil india, ayurvedic healthcare products india, buy ayurvedic oil online india" />
              <meta property="og:title" content="Sambika Healthcare | 100% Ayurvedic Oils — India" />
              <meta property="og:description" content="ISO &amp; GMP certified Ayurvedic oils for joint pain, heel pain, hair fall &amp; men's stamina. Free shipping. COD available." />
              <meta property="og:image" content="https://sambika-healthcare.netlify.app/assets/joints.webp" />
              <meta property="og:url" content="https://sambika-healthcare.netlify.app/" />
              <link rel="canonical" href="https://sambika-healthcare.netlify.app/" />
              <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
            </Helmet>
            <Navbar />
            <Products />
            <Joints />
            <Feet />
            <Hair />
            <Massage />
            <Testimonials />
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
            <Footer />
          </>
        } />
        <Route path="/feet" element={
          <>
            <Navbar />
            <Feet />
            <Footer />
          </>
        } />
        <Route path="/hair" element={
          <>
            <Navbar />
            <Hair />
            <Footer />
          </>
        } />
        <Route path="/massage" element={
          <>
            <Navbar />
            <Massage />
            <Footer />
          </>
        } />
        <Route path="/shiprocket-order-summary" element={
          <>
            <Navbar />
            <ShiprocketOrderSummary />
          </>
        } />
        <Route path="/policy" element={
          <>
            <Helmet>
              <title>Shipping Policy | Sambika Healthcare</title>
              <meta name="description" content="Sambika Healthcare's return, refund and shipping policy. Free shipping on all orders across India. 7-day return policy. COD available." />
            </Helmet>
            <Navbar />
            <Policy />
            <Footer />
          </>
        } />
        <Route path="/lp/joints" element={<JointsLanding />} />
        <Route path="/lp/feet" element={<FeetLanding />} />
        <Route path="/lp/hair" element={<HairLanding />} />
        <Route path="/lp/massage" element={<MassageLanding />} />
      </Routes>
    </Router>
  )
}

export default App;
