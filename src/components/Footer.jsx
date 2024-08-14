// import React from 'react';
// import '../styles/Footer.css';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>About Us</h3>
//             <p>Home Dine delivers delicious home-cooked meals right to your doorstep. Experience the taste of home with every bite.</p>
//           </div>
//           <div className="footer-section">
//             <h3>Contact Us</h3>
//             <p>Email: support@homedine.com</p>
//             <p>Phone: +123 456 7890</p>
//           </div>
//           <div className="footer-section">
//             <h3>Follow Us</h3>
//             <div className="social-links">
//               <a href="#"><FaFacebook /></a>
//               <a href="#"><FaTwitter /></a>
//               <a href="#"><FaInstagram /></a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; {new Date().getFullYear()} Home Dine. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react'
import '../styles/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import { BsArrowRepeat } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import h4img from '../images/h4img.avif'
import h5img from '../images/h5img.avif'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareSnapchat } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import pay from '../images/pay.svg';
import dtdc from '../images/dtdc.avif';
import delivery from '../images/delivery.avif';
import ECOM from '../images/ECOM.jpg';
import expressbees from '../images/XPRESSBEES.jpg';
// import { BsCCircle } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <section className='f3'>
      <Container className='f4'>
      <Row className='f5'>
        <Col className='f6'>
        <ul>
            <li><span>NEED HELP</span></li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li><span className='f11'><RiMoneyRupeeCircleLine /></span><span className='f12'>COD Available</span></li>
        </ul>
        </Col>
        <Col className='f7'>
        <ul>
            <li><span>COMPANY</span></li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community Initiatives</li>
            
        </ul>
        </Col>
        <Col className='f8'><ul>
            <li><span>MORE INFO</span></li>
            <li>T&C</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
        </ul>
        </Col>
        
      </Row>
    </Container>
    <p className='f13'><b><FaMobileAlt />EXPERIENCE THE HOME DINE APP</b></p>
    <ul className='f14'>
        <li><img src={h4img}></img></li>
        <li><img src={h5img}></img></li>
    </ul>
    <ul className='f15'>
      <li>Follow Us:</li>
      <li className='f16'><FaFacebookSquare /></li>
      <li className='f17'><FaInstagramSquare  /></li>
      <li className='f18'>< FaSquareSnapchat /></li>
      <li className='f19'>< FaSquareXTwitter /></li>
    </ul>
    <p className='f20'>Secure Payment:  <img src={pay}></img>  |  Shipping Partners:  <img src={dtdc} className='f21'></img> <img src={delivery} className='f21'></img> <img src={ECOM} className='f21'></img> <img src={expressbees} className='f21'></img></p>
   
      </section>
    </div>
  )
}

export default Footer