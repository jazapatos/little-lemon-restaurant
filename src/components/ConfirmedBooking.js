import React from "react";
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
    const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/little-lemon-restaurant');
  };

  return (
    <div className="confirmedBooking karla">
    <h2>Your booking has been confirmed!</h2>
    <p>Thank you for choosing our service. We look forward to seeing you!</p>
    <button className="button returnHome" onClick={navigateToHome}>Return to Homepage</button>
  </div>
  );
  };
export default ConfirmedBooking;