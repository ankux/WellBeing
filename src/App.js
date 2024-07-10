import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import Stats from './components/Stats';
import DoctorsCard from './components/DoctorsCard';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Stats/>
      <DoctorsCard/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
