import React from "react";
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const reservationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required')
      .min(2, 'First Name must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(2, 'Last Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{11}$/, 'Mobile number must be a valid 11-digit number')
      .required('Mobile number is required'),
    reservationDate: Yup.date()
        .min(new Date(), "You can't select a past date.")
      .required('Reservation date is required'),
    reservationTime: Yup.string()
      .required('Reservation time is required'),
    guests: Yup.number()
      .required('Number of guests is required')
      .min(1, 'At least one guest is required')
      .max(10, 'Maximum of 10 guests allowed'),
    occasion: Yup.string()
      .required('Occasion is required'),
  });

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = {
    //       date: reservationDate,
    //       time: reservationTime,
    //       guests: guests,
    //       occasion: occasion
    //     };
    //     onSubmit(formData);
    //   };

     // Function to handle the change event of the date input
    //  const handleDateInputChange = (event) => {
    //     const selectedDate = new Date(event.target.value);
    //     setReservationDate(selectedDate.toISOString().split('T')[0]); // Update the reservationDate state
    //     onDateChange(selectedDate); // Call the onDateChange prop with the new date
    //   };

 const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  
  <div className="reserveForm karla">
    <heading>
        <p className="markazi bookNow">Book a Table</p>
            </heading>
            <p className="karla required">* Required fields</p>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        reservationDate: '', 
        reservationTime: '', 
        guests: 1, 
        occasion: 'Birthday', 
      }}
      validationSchema={reservationSchema}
      onSubmit={(values) => {
        // Combine Formik values with the state values before submitting
        const formData = {
          ...values,
          reservationDate: reservationDate || values.reservationDate,
          reservationTime,
          guests,
          occasion,
        };
        onSubmit(formData);
      }}
    >
        {({ setFieldValue, isValid, dirty }) => (
        <Form style={{ display: "grid", width: "400px", gap: "15px" }}>
        <label htmlFor="firstName">First Name*</label>
        <Field id="firstName" name="firstName" placeholder="Jane" type="text"/>
        <ErrorMessage name="firstName" component="div" className="error" />

        <label htmlFor="">Last Name*</label>
        <Field id="lastName" name="lastName" placeholder="Doe" type="text"/>
        <ErrorMessage name="lastName" component="div" className="error" />

        <label htmlFor="email">Email*</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <ErrorMessage name="email" component="div" className="error" />

        <label htmlFor="mobileNumber">Mobile number*</label>
        <Field id="mobileNumber" name="mobileNumber" placeholder="11-digit Phone Number" type="text"/>
        <ErrorMessage name="mobileNumber" component="div" className="error" />
  
        <label htmlFor="res-date">Choose date*</label>
        <Field
              type="date"
              id="res-date"
              name="reservationDate"
              value={reservationDate}
              onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                setReservationDate(selectedDate.toISOString().split('T')[0]);
                setFieldValue('reservationDate', selectedDate.toISOString().split('T')[0]);
                onDateChange(selectedDate);
              }}
            />
        <ErrorMessage name="reservationDate" component="div" className="error" />


        <label for="res-time">Choose time*</label>
        <Field as="select" id="res-time" name="reservationTime" value={reservationTime} onChange={(e) => {
              setFieldValue('reservationTime', e.target.value);
              setReservationTime(e.target.value);
            }}>
            <option value="">Select a time</option>
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                {time}
            </option>
        ))}
        </Field>
         <ErrorMessage name="res-time" component="div" className="error" />

        <label htmlFor="guests">Number of guests*</label>
        <Field
              type="number"
              id="guests"
              name="guests"
              placeholder="1"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => {
                setFieldValue('guests', e.target.value);
                setGuests(e.target.value);
              }}
            />
        <ErrorMessage name="guests" component="div" className="error" />

        <label htmlFor="occasion">Occasion</label>
        <Field as="select" id="occasion" name="occasion" value={occasion} onChange={(e) => {
              setFieldValue('occasion', e.target.value);
              setOccasion(e.target.value);
            }}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </Field>
        <ErrorMessage name="occassion" component="div" className="error" />
    
        <button type="submit" disabled={!isValid || !dirty}  onClick={() => {
    // Scroll to the top of the page
    scrollToTop();
  }}>Make Your Reservation</button>
        

</Form>
)}
    </Formik>
</div>
  
  );
  };
export default BookingForm;