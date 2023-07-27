import { useEffect, useState } from 'react';
import './App.css';
import MainComponent from './MainComponent';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
// import Notifier from './components/Notifier';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and decide whether to show or hide the navbar
      const scrollY = window.scrollY;
      const showThreshold = 5; // Adjust this value to set when the navbar should hide
      setShowNavbar(scrollY < showThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    {/* <Notifier /> */}
    {showNavbar ? (
      <Navbar1 />
    ) : (
      <Navbar2 />
    )}
    <MainComponent />
    <Footer/>
    </>
  );
}

export default App;
