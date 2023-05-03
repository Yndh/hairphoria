import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/About Us/AboutUs";
import Galery from "./components/Galery/Galery";
import Location from "./components/location/Location";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Galery/>
        <Location/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
