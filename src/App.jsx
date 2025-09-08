import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Video from './pages/video'
import Product_card from './pages/product'
import Cardslide from './pages/cardslide';
import Adaption from './pages/Adaption'
import Cardwarranty from './pages/Service'
import Footer from './pages/footer'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Navbar />
      <Home />
      <Video /> 
      <Product_card />
      <Cardslide />
      <Adaption />
      <Cardwarranty />
      <Footer />
    </>
  )
}

export default App
