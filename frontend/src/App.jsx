
import Homepage from "./landing_page/home/Homepage.jsx";
import AboutPage from "./landing_page/about/AboutPage";
import Pricingpage from "./landing_page/pricing/Pricingpage.jsx"
import {Routes,Route } from "react-router-dom";
import "../index.css"
import Signup from "./landing_page/signup/Signup.jsx";
import Productpage from "./landing_page/products/Productpage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound/>}/>
      
      </Routes>
     <Footer/>
     
   
    </>
  )
}

export default App;
