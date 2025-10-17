import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";
import LinkedInLogo from "../assets/linkedin.png";
import logo from "../assets/univmaalogo.png";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/aboutus" },
    { label: "Services", path: "/salesforceimplementation" },
    { label: "Career", path: "/career" },
    { label: "Contact us", path: "/contactus" },
  ];

  const infoLinks = [
    { label: "Terms & Conditions", path: "/Terms&Conditions" },
    { label: "Privacy Policy", path: "/policy" },
    { label: "Feedback", path: "/feedback" },
  ];

  const industryLinks = [
    "Banking",
    "Automotive",
    "Education",
    "Healthcare",
    "Insurance",
    "Manufacturing",
    "Utilities",
    "Travel",
    "Media",
    "Real estate",
  ];

  const serviceLinks = [
    { label: "Salesforce Sales Cloud", path: "/salescloud" },
    { label: "Salesforce Service Cloud", path: "/servicecloud" },
    { label: "Salesforce Marketing Cloud", path: "/marketingcloud" },
    { label: "Salesforce Experience Cloud", path: "/experiencecloud" },
    { label: "Salesforce Health Cloud", path: "/healthcloud" },
    { label: "Revenue Cloud Advanced", path: "/revenuecloud" },
    { label: "Salesforce CPQ", path: "/cpq" },
  ];

  // Split industries into two groups for 2 columns
  const industriesCol1 = industryLinks.slice(
    0,
    Math.ceil(industryLinks.length / 2)
  );
  const industriesCol2 = industryLinks.slice(
    Math.ceil(industryLinks.length / 2)
  );

  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white px-6 md:px-12 lg:px-16 pt-12  relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-blue-700/20 rounded-full blur-3xl -top-16 -left-16"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-700/20 rounded-full blur-3xl bottom-0 right-0"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15 }}
        />
      </div>

      {/* Footer Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 z-10 max-w-8xl mx-auto">
        {/* Logo + About */}
        <motion.div className="col-span-1">
          <img src={logo} alt="Univmaa Logo" className="w-28 h-auto mb-3" />
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            <span className="font-semibold text-white">Univmaa</span> delivers
            trusted Salesforce consulting and IT services.
          </p>
        </motion.div>

        {/* Industries */}
        <motion.div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h3 className="md:text-xl text-lg border-b ps-2 border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Industries
          </h3>
          <div className="grid grid-cols-2 mt-3 sm:pr-0 pr-28 text-sm">
            <ul className="space-y-2">
              {industriesCol1.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {industriesCol2.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div className="col-span-1">
          <h3 className="md:text-xl text-lg border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Services
          </h3>
          <ul className="space-y-2 mt-3 text-sm">
            {serviceLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(item.path)}
                className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="col-span-1">
          <h3 className="md:text-xl text-lg border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-3 ps-2 text-sm">
            {quickLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(item.path)}
                className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Information */}
        <motion.div className="col-span-1">
          <h3 className="md:text-xl text-lg border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Information
          </h3>
          <ul className="space-y-2 mt-3 text-sm">
            {infoLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(item.path)}
                className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Follow */}
        <motion.div className="col-span-1">
          <h3 className="md:text-xl text-lg border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Contact & Follow
          </h3>
          <div className="space-y-3 mt-3 text-slate-300 text-sm">
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <IoMdMail className="text-lg" />
              <a href="mailto:helpdesk@univmaa.com">helpdesk@univmaa.com</a>
            </p>
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <FiPhoneCall className="text-lg" />
              <a href="tel:+918904466684">+91 8904466684 / +91 9777293266</a>
            </p>
            <p className="flex items-start gap-2">
              <IoLocation className="text-5xl" />
              <span>
                <a
                  href="https://www.google.com/maps?q=Shantiniketan+Tech+Park,+10th+Floor,+Tower+B,+Prestige,+Whitefield+Bengaluru+-+560048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  Shantiniketan Tech Park, 10th Floor, Tower B, Prestige,
                  Whitefield Bengaluru - 560048
                </a>
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {[fbLogo, instaLogo, twitterLogo, LinkedInLogo].map((icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={icon} alt="social icon" className="w-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-slate-700 text-center text-slate-400 py-5 mt-10 text-sm z-10 relative"
      >
        <p>© 2025 Univmaa. All rights reserved.</p>
        <p className="mt-2">
          Designed & Developed by{" "}
          <span className="text-orange-400 font-medium">Univmaa Tech Team</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
