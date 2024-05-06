import React from "react";
import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, onDateChange, onSubmit }) => {
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          date: reservationDate,
          time: reservationTime,
          guests: guests,
          occasion: occasion
        };
        onSubmit(formData);
      };

     // Function to handle the change event of the date input
     const handleDateInputChange = (event) => {
        const selectedDate = new Date(event.target.value);
        setReservationDate(selectedDate.toISOString().split('T')[0]); // Update the reservationDate state
        onDateChange(selectedDate); // Call the onDateChange prop with the new date
      };



  return (
  <>
  <div className="reserveForm">
    <heading>
        <p>Book now!</p>
    </heading>
  <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" value={reservationDate} onChange={handleDateInputChange} />
   <label for="res-time">Choose time</label>
   <select id="res-time " value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} >
      <option>Select a time</option>
      {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} >
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
</form>
</div>
  </>
  );
  };
export default BookingForm;