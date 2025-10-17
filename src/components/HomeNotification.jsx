import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // ✅ Lucide Close Icon
import homemodal2 from "../assets/homemodal2.png";

export default function HomeNotification() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup automatically on page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="relative">
      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm px-4 overflow-auto py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 sm:p-6 md:p-10 w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl shadow-2xl relative flex flex-col md:flex-row gap-4 md:gap-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-red-500 transition z-50"
              >
                <X className="w-6 h-6 sm:w-6 sm:h-6" />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={homemodal2}
                  alt="Dreamforce 2026"
                  className="rounded-lg shadow-lg border border-gray-200 w-full max-h-48 sm:max-h-64 md:max-h-80 object-cover"
                />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold text-gray-800 mb-2 md:mb-3 leading-snug">
                  🌍 Dreamforce 2026 <br className="hidden md:block" /> San
                  Francisco Awaits!
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3">
                  The world’s largest AI + CRM conference is back — bigger,
                  bolder, and more innovative than ever.
                </p>
                <p className="mb-4 md:mb-6 text-gray-700 font-medium text-sm sm:text-base">
                  We’ll be there with{" "}
                  <span className="text-blue-600">expert insights</span>,{" "}
                  <span className="text-blue-600">live demos</span>, and{" "}
                  <span className="text-blue-600">exclusive networking</span>.
                  Let’s connect and shape the future together!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
