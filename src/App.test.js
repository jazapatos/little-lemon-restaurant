import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import { updateTimes, initializeTimes } from './components/Main';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book now!");
  expect(headingElement).toBeInTheDocument();
})

// Unit test for initializeTimes function
describe('initializeTimes', () => {
  it('returns the correct initial available times', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

// Unit test for updateTimes function
describe('updateTimes', () => {
  it('returns the same state when action is dispatched', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'SOME_ACTION' };
    expect(updateTimes(state, action)).toBe(state);
  });
});