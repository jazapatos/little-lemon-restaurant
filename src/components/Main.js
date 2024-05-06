import React, { useReducer, useEffect } from 'react';
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "./BookingPage";
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import { useNavigate } from 'react-router-dom';

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

// This function will be used to update the available times based on the selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'set':
      // Set the initial available times
      return action.payload;
    case 'update':
      // Update available times based on the selected date
      return action.payload;
    default:
      return state;
  }
};


// This function will set the initial state for the availableTimes
const initializeTimes = () => {
  // Create a new Date object for today's date
  const today = new Date();
  // Use fetchAPI to get the available times for today's date
  return fetchAPI(today);
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  // Effect to fetch available times on mount (initial load)
  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    dispatch({ type: 'set', payload: times });
  }, []);

  // Function to handle date changes
  const handleDateChange = (selectedDate) => {
    const times = fetchAPI(selectedDate);
    dispatch({ type: 'update', payload: times });
  };

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
  <>
  <Routes>
    <Route path="/little-lemon-restaurant" element={
      <>
    <CallToAction />
    <Specials />
    <Testimonials />
    <About />
    </>}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} onDateChange={handleDateChange} onSubmit={submitForm}/>}></Route>
    <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
  </Routes>
  </>
  );
  };
export default Main;