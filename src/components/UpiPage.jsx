import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../styles/UpiPage.css';
import googleepaylogo from '../images/Googlepay.jpg';
import UPIImage from '../images/UpiImage.jpg';
// import successVideo from '../videos/success.mp4'; // Add your video file here

const UpiPage = () => {
  const [upiId, setUpiId] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleInputChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setUpiId(''); // Reset the UPI ID field after closing the pop-up
  };

  const handleBackClick = () => {
    navigate('/PaymentPage'); // Navigate to the PaymentPage when the back arrow is clicked
  };

  return (
    <div className="upi-page-container">
      {/* <span className="back-arrow" onClick={handleBackClick}>&#8592;</span> */}
      <div className="payment-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your UPI ID"
            value={upiId}
            onChange={handleInputChange}
            className="upi-input"
          />
          <button type="submit" className="verify-button" disabled={!upiId}>
            Verify and Pay
          </button>
        </form>

        <div className="payment-options">
          <img src={googleepaylogo} alt="G Pay" className="payment-logo" />
        </div>

        <div className="upi-powered">
          <img src={UPIImage} alt="Powered by UPI" />
        </div>

        {showPopup && (
          <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content">
              <video className="popup-video" autoPlay loop muted>
                {/* <source src={successVideo} type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
              <h2>Order Placed Successfully!</h2>
              <button className="close-button" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpiPage;