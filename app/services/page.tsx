"use client";
import ContactNew from "@/section/contact-new";
import ServicesSection from "@/section/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <>
      {/* Services Page Hero */}
      <section className="relative w-full py-32 bg-slate-950 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-500/10 mb-6">
              OUR SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              POS Solutions for Every Business
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Explore our complete range of POS systems designed for restaurants, retail stores, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection/>
      
      <div id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactNew/>
        </motion.div>
      </div>
    </>
  );
}