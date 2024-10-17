# Train Seat Reservation System

This project is a user interface for a train seat reservation system built with Next.js.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Navbar with logo and navigation links
- Display of 80 seats arranged in 11 rows
- Interactive seat selection
- Booking form for reserving seats
- Responsive design for desktop and mobile devices

## Technologies Used

- Next.js
- React
- Tailwind CSS

## Project Structure

- `app/page.tsx`: Main component for the train reservation system
- `app/components/Navbar.tsx`: Component for the navigation bar
- `app/components/SeatLayout.tsx`: Component for rendering the seat layout
- `app/components/BookingForm.tsx`: Component for the booking form

## How to Use

1. Select seats by clicking on them in the seat layout
2. Enter the number of seats you want to book in the form
3. Click the "Book Seats" button to simulate a reservation

Note: This is a UI-only implementation and does not include backend functionality.