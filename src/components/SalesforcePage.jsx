import React, { useState, useEffect } from "react";
import img1 from "../assets/animation-img-4.png";
import img2 from "../assets/animation-img-2.png";
import img3 from "../assets/animation-img-3.png";
import img4 from "../assets/animation-img-4.png";
import img5 from "../assets/animation-img-5.png";
import img6 from "../assets/animation-img-6.png";
import astroagentforce from "../assets/astroagentforce-fly.png";
import logo from "../assets/salesforcelogo.jpg";
import business from "../assets/business.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------------- Main Component ---------------- */
export default function SalesforcePage() {
  return (
    <div className="bg-[#0B0E1A] text-white font-sans overflow-hidden">
      {/* Section 1 - Showcase Slider */}
      <SalesforceShowcase />

      {/* Section 2 - Partner Stats */}
      <SalesforcePartner />
    </div>
  );
}

/* ---------------- Showcase Slider ---------------- */
function SalesforceShowcase() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/backgrounds/grid-bg.png')" }}
    >
      <AnimatePresence mode="wait">
        {index === 0 ? (
          <motion.div
            key="orbit"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center w-full px-6 sm:px-10 md:px-20 gap-10 md:gap-20"
          >
            {/* Left text */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Salesforce <span className="text-blue-500">Data Cloud</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                Unify customer data, personalize experiences and empower
                decisions with Salesforce Data Cloud. Bring your entire
                organization together around enhanced customer experience.
              </p>
              <button
                onClick={() => {
                  navigate("/datacloud");
                  window.scrollTo(0, 0);
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition text-sm sm:text-base"
              >
                Know More ➝
              </button>
            </div>

            {/* Right animation */}
            <OrbitAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="agentforce"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center w-full px-6 sm:px-10 md:px-20 gap-10 md:gap-20"
          >
            {/* Left text */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Salesforce <span className="text-blue-500">Agentforce</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                Build and deploy AI agents that work with your team, delivering
                next-gen AI-driven automation and personalized customer
                interactions at every touchpoint with precision.
              </p>
              <button
                onClick={() => {
                  navigate("/agentforce");
                  window.scrollTo(0, 0);
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition text-sm sm:text-base"
              >
                Know More ➝
              </button>
            </div>

            {/* Right animation */}
            <AgentforceAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keep animations intact */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 1.5s ease-out forwards;
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulseIcon {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Orbit Animation ---------------- */
function OrbitAnimation() {
  const icons = [img1, img2, img3, img4, img5, img6];
  const [radius, setRadius] = useState(getRadius(window.innerWidth));
  const [iconSize, setIconSize] = useState(getIconSize(window.innerWidth));

  // Helper function for responsive radius
  function getRadius(width) {
    if (width < 640) return 90; // mobile
    if (width < 1024) return 120; // tablet
    return 160; // desktop
  }

  // Helper function for responsive icon size
  function getIconSize(width) {
    if (width < 640) return 50; // mobile
    if (width < 1024) return 60; // tablet
    return 70; // desktop
  }

  useEffect(() => {
    function handleResize() {
      setRadius(getRadius(window.innerWidth));
      setIconSize(getIconSize(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[24rem] md:h-[24rem] md:mr-14 flex items-center justify-center">
      {/* Orbit circle */}
      <div className="absolute w-4/5 h-4/5 sm:w-4/5 sm:h-4/5 md:w-[295px] rounded-full border-[5px] sm:border-[7px] md:border-[10px] border-blue-500"></div>

      {/* Center logo */}
      <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg animate-scaleIn z-10">
        <img
          src={logo}
          alt="Salesforce"
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
        />
      </div>

      {/* Orbit icons */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full animate-spin-slow">
          {icons.map((icon, i) => {
            const angle = (i / icons.length) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={i}
                className="absolute bg-white rounded-full shadow-lg animate-pulseIcon flex items-center justify-center"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <img
                  src={icon}
                  alt="orbit-icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Agentforce Animation ---------------- */
function AgentforceAnimation() {
  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[24rem] flex items-center justify-center">
      <motion.img
        src={astroagentforce}
        alt="Agentforce Robot"
        className="w-36 sm:w-52 md:w-[20rem] h-auto object-contain relative z-10"
        animate={{ y: [-50, 50, -50] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/* ---------------- Partner Section ---------------- */
function SalesforcePartner() {
  return (
    <div className="bg-[#0B0E1A] text-white font-sans py-12 px-6 sm:px-10 md:px-20">
      <div className="flex flex-col items-center gap-10">
        {/* Top image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl"
        >
          <img
            src={business}
            alt="Salesforce Partner"
            className="rounded-lg shadow-lg w-full object-cover filter brightness-75 hover:brightness-100 transition"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-100 mb-6 leading-snug">
            Empower your business with{" "}
            <span className="font-extrabold text-yellow-400 animate-pulse">
              Agentforce Bots
            </span>{" "}
            crafted to automate workflows and enhance customer engagement.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
