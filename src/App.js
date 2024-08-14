
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import FoodMenu from "./components/FoodMenu";
import Footer from './components/Footer';
import './styles/App.css';
import HomeChefRegistration from './components/HomeChefRegistration';
import Vegbreakfast from './components/Vegbreakfast';
import Veglunch from './components/Veglunch';
import Vegdinner from './components/Vegdinner';
import Nbreakfast from './components/Nbreakfast';
import Nlunch from './components/Nlunch';
import Ndinner from './components/Ndinner';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import DeliveryAddressPage from './components/DeliveryAddressPage';
import AddNewCard from './components/AddNewCard.jsx';
import PaymentPage from './components/PaymentPage';
import UpiPage from './components/UpiPage.jsx';
import AdminDashBoard from './components/AdminDashboard.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/AddNewCard" element={<AddNewCard />} />
        <Route path="/homechef" element={<HomeChefRegistration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/vb" element={<Vegbreakfast/>}/>
        <Route path="/vl" element={<Veglunch/>}/>
        <Route path="/vd" element={<Vegdinner/>}/>
        <Route path="/nb" element={<Nbreakfast/>}/>
        <Route path="/nl" element={<Nlunch/>}/>
        <Route path="/nd" element={<Ndinner/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/DeliveryAddressPage" element={<DeliveryAddressPage/>}/>
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/UpiPage" element={<UpiPage />} />
        <Route path="/AdminDashboard" element={<AdminDashBoard/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
