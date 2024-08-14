

import React, { useState } from 'react';
import '../styles/AddNewCard.css';
const AddNewCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNickname, setCardNickname] = useState('');
  const [secureCard, setSecureCard] = useState(true);
  const [successMessage, setSuccessMessage] = useState(''); // State to handle success message

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
      cardNickname,
      secureCard,
    });

    // Set success message
    setSuccessMessage('Order Placed Successfully!');
  };

  return (
    <div className="add-card-container">
      <header className="add-card-header">
        <div className="header-text">
          <h2>Add New Card</h2>
        </div>
      </header>

      <form className="add-card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="form-group expiry-cvv">
          <div>
            <label>Valid Through (MM/YY)</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Name on Card</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Card Nickname (for easy identification)</label>
          <input
            type="text"
            value={cardNickname}
            onChange={(e) => setCardNickname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="secure-card-checkbox">
            <input
              type="checkbox"
              checked={secureCard}
              onChange={(e) => setSecureCard(e.target.checked)}
            />
            Secure this card. <a href="#why-important">Why Is It Important?</a>
          </label>
        </div>

        <button type="submit" className="proceed-button">
          Proceed to pay
        </button>
        
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddNewCard;
