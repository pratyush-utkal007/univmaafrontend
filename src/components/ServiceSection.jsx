import Boost from "../assets/Boost.png";
import Insight from "../assets/insight.png";
import SocialCare from "../assets/social-care.png";
import DataMigration from "../assets/data-migration.png";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <>
      <section
        className="md:py-20 py-10 mt-[-60px] md:px-16 sm:px-10 px-6 shadow-2xl bg-[#0B0E1A] text-center"
        id="services"
      >
        <h2 className="md:text-4xl text-2xl my-6 font-bold inline-block text-white text-center mb-10 font-Krub">
          Our Services
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
          {/* Service Card 1 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="p-6 rounded-xl bg-gray-50 text-black cursor-pointer transform-gpu shadow-md"
          >
            <img
              src={Boost}
              alt="efficient boost"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="md:text-xl text-lg font-semibold my-4 text-blue-950">
              Salesforce Implementation & Integration
            </h3>
            <p className="font-medium text-sm md:text-base leading-relaxed">
              Unlock Salesforce’s full potential with expert implementation &
              seamless integrations to streamline processes and boost
              productivity.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="p-6 rounded-xl bg-gray-50 text-black cursor-pointer transform-gpu shadow-md"
          >
            <img
              src={Insight}
              alt="customization"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="md:text-xl text-lg font-semibold my-4 text-blue-950">
              Customization & Configuration
            </h3>
            <p className="font-medium text-sm md:text-base leading-relaxed">
              Tailor Salesforce to your business needs—optimize workflows, data,
              and reporting for smarter CRM solutions.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="p-6 rounded-xl bg-gray-50 text-black cursor-pointer transform-gpu shadow-md"
          >
            <img
              src={SocialCare}
              alt="training"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="md:text-xl text-lg font-semibold my-4 text-blue-950">
              Training & Support
            </h3>
            <p className="font-medium text-sm md:text-base leading-relaxed">
              Empower your team with tailored Salesforce training and dedicated
              support for smooth adoption and maximum ROI.
            </p>
          </motion.div>

          {/* Service Card 4 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="p-6 rounded-xl bg-gray-50 text-black cursor-pointer transform-gpu shadow-md"
          >
            <img
              src={DataMigration}
              alt="data migration"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="md:text-xl text-lg font-semibold my-4 text-blue-950">
              Data Migration & Cleanup
            </h3>
            <p className="font-medium text-sm md:text-base leading-relaxed">
              Ensure data integrity and consistency with our seamless Salesforce
              migration and cleanup services.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
