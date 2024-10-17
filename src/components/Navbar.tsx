"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Train, X } from "lucide-react";
import Link from "next/link";

type PopupType = "about" | "contact" | null;

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activePopup, setActivePopup] = useState<PopupType>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const openPopup = (type: PopupType) => {
    setActivePopup(type);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-indigo-900 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Train className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">CoachMate</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                Home
              </Link>
              <button
                onClick={() => openPopup("about")}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => openPopup("contact")}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md text-white hover:bg-blue-400 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button className="md:hidden ml-2 text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {activePopup === "about" ? "About Us" : "Contact Us"}
              </h2>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              {activePopup === "about" ? (
                <p>
                  TrainSeat is a modern train seat reservation system designed
                  to make your journey planning easier and more efficient. We
                  strive to provide a seamless booking experience for all our
                  customers.
                </p>
              ) : (
                <p>
                  Get in touch with us:
                  <br />
                  Email: support@trainseat.com
                  <br />
                  Phone: +1 (555) 123-4567
                  <br />
                  Address: 123 Railway Street, Train City, TC 12345
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
