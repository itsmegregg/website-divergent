"use client";
import ContactNew from "@/section/contact-new";
import ServicesSection from "@/section/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    
     <>
     
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