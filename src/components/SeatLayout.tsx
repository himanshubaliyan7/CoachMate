import { useState, useEffect } from "react";

interface SeatLayoutProps {
  seats: boolean[];
  selectedSeats: number[];
  onSeatSelect: (seatIndex: number) => void;
}

export default function SeatLayout({
  seats,
  selectedSeats,
  onSeatSelect,
}: SeatLayoutProps) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSeatColor = (index: number) => {
    if (seats[index]) return "bg-red-500 hover:bg-red-600";
    if (selectedSeats.includes(index))
      return "bg-yellow-500 hover:bg-yellow-600";
    return "bg-green-500 hover:bg-green-600";
  };

  const seatSize = windowWidth < 640 ? "w-6 h-6" : "w-8 h-8";

  return (
    <div className="grid gap-2">
      {Array.from({ length: 11 }, (_, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2">
          {Array.from({ length: rowIndex === 10 ? 3 : 7 }, (_, colIndex) => {
            const seatIndex = rowIndex * 7 + colIndex;
            return (
              <button
                key={colIndex}
                className={`${seatSize} ${getSeatColor(
                  seatIndex
                )} rounded-md flex items-center justify-center text-white text-xs font-bold transition-colors duration-200`}
                onClick={() => onSeatSelect(seatIndex)}
                disabled={seats[seatIndex]}
              >
                {seatIndex + 1}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
