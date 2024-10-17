"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SeatLayout from "../components/SeatLayout";
import BookingForm from "../components/BookingForm";

interface BookingData {
  from: string;
  to: string;
  travelDate: string;
  numSeats: number;
}

export default function TrainReservation() {
  const [seats, setSeats] = useState<boolean[]>(Array(80).fill(false));
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatSelection = (seatIndex: number) => {
    if (seats[seatIndex] || selectedSeats.includes(seatIndex)) {
      return; // Seat is already booked or selected
    }

    setSelectedSeats((prev) => {
      if (prev.includes(seatIndex)) {
        return prev.filter((seat) => seat !== seatIndex);
      } else if (prev.length < 7) {
        return [...prev, seatIndex];
      }
      return prev;
    });
  };

  const handleBooking = (bookingData: BookingData) => {
    if (bookingData.numSeats > selectedSeats.length) {
      alert("Please select more seats before booking.");
      return;
    }

    setSeats((prev) => {
      const newSeats = [...prev];
      selectedSeats.slice(0, bookingData.numSeats).forEach((seatIndex) => {
        newSeats[seatIndex] = true;
      });
      return newSeats;
    });

    setSelectedSeats([]);

    console.log("Booking data:", bookingData);
    console.log(
      "Selected seats:",
      selectedSeats.slice(0, bookingData.numSeats)
    );

    alert(
      `Booking confirmed!\nFrom: ${bookingData.from}\nTo: ${bookingData.to}\nDate: ${bookingData.travelDate}\nSeats: ${bookingData.numSeats}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
          Train Seat Reservation
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-300">
              Select Your Seats
            </h2>
            <SeatLayout
              seats={seats}
              selectedSeats={selectedSeats}
              onSeatSelect={handleSeatSelection}
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-300">
              Booking Details
            </h2>
            <BookingForm onBooking={handleBooking} maxSeats={7} />
          </div>
        </div>
      </main>
    </div>
  );
}
