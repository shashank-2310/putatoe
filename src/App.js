import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import Services from './pages/Services/Services';
import Hiring from './pages/Hiring/Hiring';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/hiring" element={<Hiring />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
