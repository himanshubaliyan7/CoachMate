import { useState } from "react";

interface BookingFormProps {
  onBooking: (bookingData: BookingData) => void;
  maxSeats: number;
}

interface BookingData {
  from: string;
  to: string;
  travelDate: string;
  numSeats: number;
}

export default function BookingForm({ onBooking, maxSeats }: BookingFormProps) {
  const [bookingData, setBookingData] = useState<BookingData>({
    from: "",
    to: "",
    travelDate: "",
    numSeats: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: name === "numSeats" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBooking(bookingData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="from"
          className="block text-sm font-medium text-gray-300"
        >
          From
        </label>
        <input
          type="text"
          id="from"
          name="from"
          value={bookingData.from}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-300">
          To
        </label>
        <input
          type="text"
          id="to"
          name="to"
          value={bookingData.to}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label
          htmlFor="travelDate"
          className="block text-sm font-medium text-gray-300"
        >
          Travel Date
        </label>
        <input
          type="date"
          id="travelDate"
          name="travelDate"
          value={bookingData.travelDate}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label
          htmlFor="numSeats"
          className="block text-sm font-medium text-gray-300"
        >
          Number of Seats
        </label>
        <input
          type="number"
          id="numSeats"
          name="numSeats"
          min="1"
          max={maxSeats}
          value={bookingData.numSeats}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
      >
        Book Seats
      </button>
    </form>
  );
}
