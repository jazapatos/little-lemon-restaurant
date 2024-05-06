import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, onDateChange, onSubmit }) => {

  return (
  <>
   <BookingForm availableTimes={availableTimes} dispatch={dispatch} onDateChange={onDateChange} onSubmit={onSubmit}/>
  </>
  );
  };
export default BookingPage;