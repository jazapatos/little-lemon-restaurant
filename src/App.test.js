import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';


test('renders static text "Book a Table"', () => {
  const { getByText } = render(<BookingForm />);
  const bookATableText = getByText(/Book a Table/i);
  expect(bookATableText).toBeInTheDocument();
});

// Unit test for initializeTimes function
// describe('initializeTimes', () => {
//   it('returns the correct initial available times', () => {
//     const times = initializeTimes();
//     expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
//   });
// });

// Unit test for updateTimes function
// describe('updateTimes', () => {
//   it('returns the same state when action is dispatched', () => {
//     const state = ['17:00', '18:00', '19:00'];
//     const action = { type: 'SOME_ACTION' };
//     expect(updateTimes(state, action)).toBe(state);
//   });
// });

describe('BookingForm', () => {
  it('renders the form fields correctly', () => {
    render(<BookingForm />);

    // First Name Field
    const firstNameInput = screen.getByPlaceholderText('Jane');
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute('id', 'firstName');
    expect(firstNameInput).toHaveAttribute('name', 'firstName');
    expect(firstNameInput).toHaveAttribute('type', 'text');

    // Last Name Field
    const lastNameInput = screen.getByPlaceholderText('Doe');
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('id', 'lastName');
    expect(lastNameInput).toHaveAttribute('name', 'lastName');
    expect(lastNameInput).toHaveAttribute('type', 'text');

    // Email Field
    const emailInput = screen.getByPlaceholderText('jane@acme.com');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(emailInput).toHaveAttribute('type', 'email');

    // Mobile Number Field
    const mobileNumberInput = screen.getByPlaceholderText('11-digit Phone Number');
    expect(mobileNumberInput).toBeInTheDocument();
    expect(mobileNumberInput).toHaveAttribute('id', 'mobileNumber');
    expect(mobileNumberInput).toHaveAttribute('name', 'mobileNumber');
    expect(mobileNumberInput).toHaveAttribute('type', 'text');

    // Reservation Date Field
    const reservationDateInput = screen.getByLabelText('Choose date*');
    expect(reservationDateInput).toBeInTheDocument();
    expect(reservationDateInput).toHaveAttribute('id', 'res-date');
    expect(reservationDateInput).toHaveAttribute('name', 'reservationDate');
    expect(reservationDateInput).toHaveAttribute('type', 'date');

    // Reservation Time Field
    const reservationTimeInput = screen.getByLabelText('Choose time*');
    expect(reservationTimeInput).toBeInTheDocument();
    expect(reservationTimeInput).toHaveAttribute('id', 'res-time');
    expect(reservationTimeInput).toHaveAttribute('name', 'reservationTime');
   
    // Guests Field
    const guestsInput = screen.getByLabelText('Number of guests*');
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    // Occasion Field
    const occasionInput = screen.getByLabelText('Occasion');
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).toHaveAttribute('id', 'occasion');
    expect(occasionInput).toHaveAttribute('name', 'occasion');

  });

  });