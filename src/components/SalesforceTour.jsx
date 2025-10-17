import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Rocket,
  Users,
  Cloud,
  Award,
} from "lucide-react";
import tourImg001 from "../assets/tourimg001.png";
import tourImg10 from "../assets/tourimg10.jpg";
import tourImg2 from "../assets/tourimg2.jpeg";
import tourImg4 from "../assets/tourimg4.jpeg";
import tourImg5 from "../assets/tourimg2.jpeg";
import tourImg6 from "../assets/tourimg6.jpg";
import tourImg7 from "../assets/tourimg7.jpeg";
import tourImg9 from "../assets/tourimg9.jpg";
import tourimg01 from "../assets/tourimg01.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Extended Salesforce Tour Slides
const slides = [
  {
    title: "Welcome to the Salesforce World 🚀",
    description:
      "Salesforce is the world’s #1 CRM platform, trusted by over 150,000 companies including Fortune 500 leaders. \n\nThis is not just software – it’s an entire ecosystem of opportunities. By the end of this tour, you’ll understand how Salesforce can transform your career, no matter if you are a fresher or have years of experience in another technology.",
    img: tourImg001,
  },
  {
    title: "What is Salesforce ? 💻",
    description:
      "Salesforce is the world’s leading Customer Relationship Management (CRM) platform. It helps businesses manage sales, marketing, service, and customer interactions in one place. Built on the cloud, Salesforce offers powerful tools for automation, analytics, and app development, enabling companies to grow faster and build stronger customer relationships.",
    img: tourImg10,
  },
  {
    title: "Why Salesforce Matters 🌍",
    description:
      "Every business needs to manage customer relationships, sales, marketing, and support. That’s what Salesforce does better than anyone else.\n\n📈 Ranked #1 CRM for 10+ years\n🌐 Used across industries: Banking, Healthcare, Retail, IT, and more\n🤖 AI-driven future with Einstein AI\n\nBy learning Salesforce, you become part of the fastest-growing tech ecosystem in the world.",
    img: tourImg2,
  },
  {
    title: "The Salesforce Ecosystem 🔥",
    description:
      "The platform is more than CRM. It includes:\n\n☁️ Sales Cloud – manage leads and close deals\n☁️ Service Cloud – deliver world-class customer service\n☁️ Marketing Cloud – automate and personalize campaigns\n☁️ Commerce Cloud – power online stores\n📊 Analytics + AI – data-driven decisions\n\nMastering Salesforce means you can work in ANY domain, for ANY client.",
    img: tourImg4,
  },
  {
    title: "Career Paths in Salesforce 📈",
    description:
      "Your career can grow in multiple directions:\n\n👩‍💻 Admin → manage Salesforce configurations\n👨‍💻 Developer → build apps and custom solutions\n🧑‍🏫 Consultant → guide businesses on Salesforce adoption\n🏗 Architect → design scalable solutions\n📊 Business Analyst → bridge business & tech\n\n✨ By 2026, Salesforce will create 9.3M jobs worldwide. There’s huge demand and less supply of skilled talent — that’s YOUR opportunity.",
    img: tourImg5,
  },
  {
    title: "Why Now Is The Best Time ⏰",
    description:
      "Companies are rapidly shifting to cloud and digital solutions. Salesforce is at the center of this transformation.\n\n🌟 Freshers – You don’t need years of coding experience. You can start as an Admin and grow quickly.\n🌟 Professionals (Java, .NET, Testing, Support) – You can cross-skill into Salesforce with ease and get higher-paying roles.\n\n",
    img: tourImg6,
  },
  {
    title: "Why Join Us? 💼",
    description:
      "We don’t just train – we TRANSFORM careers. Here’s how:\n\n✅ One-to-One Mentorship from Salesforce industry experts. \n✅ Hands-on Salesforce internships with real projects.\n✅ Cross-skilling program for IT professionals.\n✅ Certifications guidance (Salesforce Admin, Developer).\n✅ Placement support with top MNCs & partner companies.",
    img: tourImg7,
  },
  {
    title: "Your Salesforce Career Starts Here 🌟",
    description:
      "Imagine this:\n- In 3 months, you gain Salesforce skills.\n- In 6 months, you’re project-ready.\n- In less than a year, you’re working in one of the fastest-growing tech fields.\n\nThe only thing between you and that career is your decision TODAY. We’ll provide the platform, guidance, and opportunities.\n\n🚀 Are you ready to step into the future with us?",
    img: tourImg9,
    isFinal: true,
  },
];

export default function SalesforceTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const nextSlide = () => setStep((s) => Math.min(s + 1, slides.length - 1));
  const prevSlide = () => setStep((s) => Math.max(s - 1, 0));
  const roles = [
    "Fresher 👩‍🎓",
    "Salesforce Admin 👨‍💻",
    "Developer 💻",
    "Consultant 🧑‍🏫",
    "Architect 🏗",
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    passout: "",
    resume: null,
  });

  // Handle Web3Forms form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      // <-- replace with your own Web3Forms access_key if needed
      data.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");
      data.append("subject", "New Job Application - Univmaa");
      data.append("from_name", form.name || "");
      data.append("name", form.name || "");
      data.append("email", form.email || "");
      data.append("phone", form.phone || "");
      data.append("address", form.address || "");
      data.append("education", form.education || "");
      data.append("skills", form.skills || "");
      data.append("year of passout", form.passout || "");
      data.append(
        "message",
        `New job application from ${form.name || "Unknown"}. Skills: ${
          form.skills || "N/A"
        }`
      );

      if (form.resume) {
        // Web3Forms accepts attachments[] for files
        data.append("attachments[]", form.resume);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      console.log("data=========>>" + data);

      const result = await response.json();
      // console.log("Web3Forms result", result);

      if (result.success) {
        setSuccess(true);
        setShowModal(false);

        // WhatsApp notification to owner (replace phoneNumber as needed)
        const phoneNumber = "918917315757";

        // Build professional message with line breaks
        const msg = `📩 *New Job Application Received*

        -> *Name:* ${form.name}
        -> *Email:* ${form.email}
        -> *Phone:* ${form.phone}
        -> *Address:* ${form.address}
        -> *Education:* ${form.education}
        -> *Skills:* ${form.skills}
        -> *Year Of Passout:* ${form.passout}
        
        Please check your email for full details.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          msg
        )}`;
        window.open(url, "_blank");

        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          education: "",
          skills: "",
          passout: "",
          resume: null,
        });

        // hide success after a few seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error submitting form. Check console for details.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="relative  overflow-x-hidden">
        {/* 🌥 Floating Salesforce Clouds in Background (GLOBAL) */}
        <div className="fixed inset-0 bg-[#0B0E1A] -z-10 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.img
              key={i}
              src={tourimg01}
              alt="cloud"
              className="absolute w-24 opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* 🔹 Salesforce Banner */}
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 bg-[#0B0E1A] text-white shadow-lg">
          <img
            src={tourimg01}
            alt="Salesforce"
            className="w-48 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4">
            Build Your Future with Salesforce 🚀
          </h1>
          <p className="max-w-2xl text-lg mb-6">
            Whether you are a fresher or an experienced IT professional,
            Salesforce offers endless opportunities to grow your career. Learn,
            build, and transform your future with us.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Take a Tour
          </button>
        </div>

        {/* 🌟 Animated Features Section */}
        <div className="relative z-10 py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Rocket size={48} />,
              title: "High-Paying Jobs",
              desc: "Salesforce professionals are among the top-paid in the IT industry.",
            },
            {
              icon: <Users size={48} />,
              title: "Global Community",
              desc: "Join millions of Salesforce learners and experts across the world.",
            },
            {
              icon: <Cloud size={48} />,
              title: "Future-Proof Skills",
              desc: "With AI + Cloud, Salesforce ensures long-term career growth.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 Animated Stats Section */}
        <section className="relative z-10 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            🏆 Awards & Recognition
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              "Ranked #1 CRM for 10+ Years",
              "Trusted by 150K+ Companies",
              "9.3M Jobs by 2026",
            ].map((award, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Award className="mx-auto text-blue-600 mb-4" size={48} />
                <p className="text-lg font-semibold text-gray-800">{award}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⏳ Career Journey Timeline */}
        <div className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Your Salesforce Career Journey
          </h2>
          <div className="flex flex-col space-y-8 relative border-l-4 border-blue-600 pl-6">
            {[
              "Start with Salesforce Training",
              "Work on Real-Time Projects",
              "Get Certified (Admin / Developer)",
              "Join as Intern or Cross-Skill",
              "Land Your Dream Job 🚀",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white shadow-md rounded-xl p-6 relative"
              >
                <span className="absolute -left-10 top-4 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow" />
                <p className="text-lg font-semibold text-gray-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="relative z-10 py-20 px-6 bg-[#0B0E1A] text-white text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🌍 The Future with Salesforce
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            By 2030, Salesforce will empower millions of businesses worldwide,
            creating limitless opportunities for skilled professionals.
            <br /> Start today — be part of this digital revolution!
          </motion.p>
        </section>

        {/* 💡 Why Freshers Love Salesforce */}
        <div className="relative z-10 py-20 px-6 ">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Freshers Choose Salesforce 🚀
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No Heavy Coding",
                desc: "You don’t need strong coding background — Salesforce Admin roles are perfect for beginners.",
                icon: "💻",
              },
              {
                title: "Faster Career Start",
                desc: "Land your first IT job in months, not years. Freshers with Salesforce skills are in high demand.",
                icon: "⚡",
              },
              {
                title: "High Salary Packages",
                desc: "Entry-level Salesforce Admin salaries are higher than many developer/tester roles.",
                icon: "💰",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📈 Fresher to Pro Path */}
        <section className="relative z-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Your Growth Path with Salesforce
          </h2>

          <div className="relative sm:max-w-xl max-w-2xl mx-auto">
            {/* Cards */}
            <div className="flex flex-col gap-4 relative">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className={`flex items-center ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  } relative`}
                >
                  {/* Card */}
                  <div
                    className="bg-white rounded-xl shadow-lg p-11 text-center w-72 relative z-10 
                              transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    data-aos="flip-up"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {role}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 🗺 Your First 100 Days */}
        <div className="relative z-10 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Your First 100 Days in Salesforce
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "Days 1-30: Learn basics of Salesforce & Admin skills",
              "Days 31-60: Hands-on projects + workflows & automation",
              "Days 61-90: Prepare & attempt Salesforce Admin Certification",
              "Days 91-100: Placement readiness & mock interviews 🚀",
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600"
              >
                <p className="text-lg">{milestone}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🌈 Call to Action Section */}
        <div className="relative z-10">
          <div
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 
                  text-white py-16 md:py-10 px-6 mb-5 
                  max-w-5xl mx-auto rounded-2xl md:rounded-[2.5rem] shadow-lg text-center"
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              🚀 Ready to Build Your Salesforce Career?
            </motion.h2>

            <motion.p
              className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Don’t wait for the future — create it with Salesforce. Join our
              Internship & Cross-Skill Program today and start your journey
              toward a high-paying, future-proof career.
            </motion.p>

            <motion.button
              onClick={() => setFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-700 font-bold 
                 rounded-lg sm:rounded-xl shadow-md hover:bg-gray-100 transition 
                 text-sm sm:text-base"
            >
              Apply Now
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {formOpen && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 text-white rounded-2xl mt-11 shadow-xl w-[90%] max-w-lg p-8 relative"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close */}
                <button
                  onClick={() => setFormOpen(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                  <X size={28} />
                </button>

                <h2 className="text-2xl font-bold text-center mb-6">
                  Submit Your Application
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-gray-300  text-[8px]"
                  encType="multipart/form-data"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Education"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.education}
                    onChange={(e) =>
                      setForm({ ...form, education: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Skills"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.skills}
                    onChange={(e) =>
                      setForm({ ...form, skills: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Years of Passout"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.passout}
                    onChange={(e) =>
                      setForm({ ...form, passout: e.target.value })
                    }
                  />
                  <input
                    type="url"
                    value={form.resume}
                    placeholder="Resume Link (Google Drive/Dropbox/OneDrive)"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-400"
                    required
                    onChange={(e) =>
                      setForm({ ...form, resume: e.target.value })
                    }
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition text-white"
                  >
                    Submit Application →
                  </button>
                </form>
                {success && (
                  <p className="mt-4 text-center text-green-400 font-semibold">
                    {success}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* 🔹 Salesforce Tour Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2 sm:px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key={step}
                className="bg-white rounded-2xl shadow-xl sm:w-[95%] max-w-5xl relative 
                   overflow-hidden max-h-[70vh] sm:max-h-[80vh] overflow-y-auto"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 text-gray-600 hover:text-black z-10"
                >
                  <X size={28} />
                </button>

                {/* Slide Content */}
                <div className="flex flex-col md:flex-row items-center  gap-4 sm:gap-6 p-4 sm:p-8 pt-12 sm:pt-8">
                  <motion.img
                    src={slides[step].img}
                    alt="slide"
                    className="md:w-1/2 rounded-xl shadow-lg object-contain 
                       max-h-36 sm:max-h-64 mx-auto" // 👈 reduced image height
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-lg sm:text-2xl font-bold text-blue-700 mb-2 sm:mb-4">
                      {slides[step].title}
                    </h2>
                    <p className="text-gray-700 whitespace-pre-line text-sm sm:text-lg leading-relaxed">
                      {slides[step].description}
                    </p>

                    {/* Final Slide CTA */}
                    {slides[step].isFinal && (
                      <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
                        <button
                          onClick={() => {
                            setOpen(false);
                            setFormOpen(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition text-sm sm:text-lg w-auto"
                        >
                          <Users size={20} /> Apply as Intern
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 gap-3 sm:gap-0">
                  <button
                    onClick={prevSlide}
                    disabled={step === 0}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm sm:text-base ${
                      step === 0
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {step + 1} / {slides.length}
                  </p>
                  <button
                    onClick={nextSlide}
                    disabled={step === slides.length - 1}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm sm:text-base ${
                      step === slides.length - 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Next <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
