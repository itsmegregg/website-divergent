"use client"
import { motion } from "framer-motion";

const partnerBenefits = [
  {
    text: "BIR-Compliant POS Systems – Government-certified for seamless tax reporting.",
    highlight: "BIR-Compliant POS Systems",
  },
  {
    text: "End-to-End Solutions – Hardware, software, installation, training & lifetime support.",
    highlight: "End-to-End Solutions",
  },
  {
    text: "Data-Driven Business Insights – Real-time inventory, sales analytics & purchasing tools.",
    highlight: "Data-Driven Business Insights",
  },
  {
    text: "Nationwide Trust – Preferred POS provider for top Philippine malls & enterprises.",
    highlight: "Nationwide Trust",
  },
  {
    text: "Future-Ready Technology – Scalable systems designed to grow with your business.",
    highlight: "Future-Ready Technology",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhoAreWe() {
  const forData = [
    "Retail Stores", "Fast Food Chains & Restaurants", "Supermarkets & Convenience Stores", "Spas, Salons & Service-Based Businesses", "And more!"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Who we are section */}
      <div className="text-center mb-20 space-y-6 relative pt-10 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">
          Who we <span className="bg-orange-500 rounded px-1 text-gray-50">Are</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
          We are a team of passionate professionals dedicated to helping businesses thrive with innovative solutions.
        </p>
        <h2 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center font-semibold">
          <span className="bg-blue-500 rounded py-2 px-2 text-gray-50">Divergent</span> Technologies Philippines, Inc.
        </h2>
        <motion.h2
          className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Founded in July 1997, Divergent Technologies Philippines, Inc. (DTPI) is a premier BIR-accredited POS provider, delivering end-to-end business and financial solutions tailored for:
        </motion.h2>
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {forData.map((data, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 px-4 py-2 rounded flex items-center justify-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <span className="text-gray-700 text-lg font-semibold">{data}</span>
            </motion.div>
          ))}
        </motion.div>
        <h2 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
          For over 27 years, we have empowered businesses with cost-effective, fully integrated POS systems—combining cutting-edge hardware, intelligent software, and reliable support to drive efficiency, compliance, and growth.
        </h2>
      </div>
      {/* Checklist section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-3xl leading-relaxed tracking-tight text-muted-foreground">Why partner with Divergent Technologies?</h1>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
          We are committed to delivering innovative, reliable, and user-friendly solutions that help businesses thrive in today&apos;s competitive landscape.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariants}
        >
          {partnerBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 rounded-lg p-4 text-base md:text-lg font-medium flex items-center"
              variants={itemVariants}
            >
              <span role="img" aria-label="check" className="mr-2">✅</span>
              <span>
                <span className="font-semibold">{benefit.highlight}</span>
                {benefit.text.replace(benefit.highlight, "")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Our Complete POS & Business Management Solutions */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Complete POS & Business Management Solutions
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            We don’t just sell systems—we optimize your operations with:
          </motion.p>
          <motion.ul
            className="space-y-2 text-base md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {["BIR-Accredited POS Software & Hardware","Inventory & Supply Chain Management","Sales Analytics & Customer Insights","Secure Networking & Cloud Integration","Technical Support & Maintenance"].map((item, idx) => (
              <motion.li
                key={idx}
                className="bg-gray-100 rounded-lg p-3 flex items-center"
                variants={itemVariants}
              >
                <span className="mr-2 text-orange-500 text-lg">•</span> {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="POS Solution Illustration" className=" object-contain rounded-lg shadow" />
        </div>
      </div>

      {/* Our Expertise, Your Advantage */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="flex-1">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-blue-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Expertise, Your Advantage
          </motion.h2>
          <motion.ul
            className="space-y-2 text-base md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {[
              "Seamless Implementation – Installation, training, and onboarding.",
              "Ongoing Support – Dedicated assistance to maximize system performance.",
              "Strategic Partnerships – Direct collaborations with leading technology providers for best-in-class solutions.",
              "Customizable Systems – Tailored to meet your current needs and future growth."
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="bg-gray-100 rounded-lg p-3 flex items-center"
                variants={itemVariants}
              >
                <span className="mr-2 text-blue-600 text-lg">&#10004;</span> {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Expertise Illustration" className="object-contain rounded-lg shadow" />
        </div>
      </div>

      {/* Trusted by section */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-green-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Trusted by the Philippines’ Top Malls & Retailers
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            We are proudly accredited in major commercial hubs nationwide, including:
          </motion.p>
          <motion.ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-base md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {["SM Supermalls","Ayala Malls","Robinsons Malls","Rockwell","Megaworld Lifestyle Malls","Festival Mall","Shangri-La Plaza","Ortigas-owned Malls","Pacific Mall","Starmall","Greenfield District","Eton Centris, Federal Land, DoubleDragon (CityMall)"].map((mall, idx) => (
              <motion.li
                key={idx}
                className="bg-gray-100 rounded-lg p-3 flex items-center justify-center text-center"
                variants={itemVariants}
              >
                {mall}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trusted Malls Illustration" className=" object-contain rounded-lg shadow" />
        </div>
      </div>

      {/* Our Commitment section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">Our Commitment</h1>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
          We are committed to delivering innovative, reliable, and user-friendly solutions that help businesses thrive in today&apos;s competitive landscape.
        </p>
      </div>
    </motion.div>
  );
}