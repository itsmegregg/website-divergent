"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Compatibility from "@/section/compatibility";
import ContactNew from "@/section/contact-new";

import Image from "next/image";

interface RetailImage {
  image_link: string;
  alt: string;
}

const RetailImages: RetailImage[] = [
  { image_link: "/retail/RETAIL_001.png", alt: "Retail Assist POS" },
  { image_link: "/retail/RETAIL_002.png", alt: "Retail Assist POS" },
  { image_link: "/retail/RETAIL_003.png", alt: "Retail Assist POS" },
  { image_link: "/retail/RETAIL_004.png", alt: "Retail Assist POS" },
];

export default function RetailAssist() {
  const [selectedImage, setSelectedImage] = useState<RetailImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = (image: RetailImage) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-2 relative"
    >
      {/* Hero Section with Animation */}
      <motion.div
      className="relative bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-16 md:py-24 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2 text-left"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-white/10 text-white mb-4">
                POINT OF SALE SOLUTION
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Retail<span className="bg-white text-blue-600 rounded-lg px-2 ml-2">Assist</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 font-light mb-8 leading-relaxed">
                Empower your retail business with our BIR-accredited POS system designed for modern retailers
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all flex items-center">
                  Explore Features
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
                  View Gallery
                </button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 mt-8 md:mt-0"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-w-16 aspect-h-9">
                <Image 
                  src="/retail/retail-assist.jpg" 
                  alt="Retail Assist POS Interface" 
                  width={600}
                  height={400}
                  className="w-[600px] h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Modern & Intuitive Interface</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-white  p-8  relative ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Transforming Retail Operations Across the Philippines</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto text-center">
            Retail Assist is a modern retail POS designed to streamline sales and operations for shops of all kinds—from shoe and dress boutiques to bake shops, pharmacies, and groceries.
          </p>
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features for Modern Retailers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive solution addresses all aspects of retail management
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Intuitive Sales Interface",
              desc: "Streamline checkout process with barcode scanning, quick product search, and customizable hotkeys for faster transactions.",
              color: "blue",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Real-time Analytics",
              desc: "Comprehensive reporting dashboard with sales trends, inventory levels, and customer insights to make data-driven decisions.",
              color: "green",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Inventory Management",
              desc: "Automated stock tracking, low-stock alerts, and inventory forecasting to prevent stockouts and optimize purchasing.",
              color: "orange",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )
            },
            {
              title: "Customer Loyalty",
              desc: "Build customer relationships with points systems, membership tiers, and personalized promotions based on purchase history.",
              color: "purple",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "BIR-Compliant",
              desc: "Fully accredited by the Bureau of Internal Revenue with automatic tax calculation and compliant receipt generation.",
              color: "red",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Multi-branch Support",
              desc: "Centralized management for multiple store locations with synchronized inventory and consolidated reporting.",
              color: "cyan",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br from-${feature.color}-50 to-white p-6 rounded-xl shadow-sm border border-${feature.color}-100 hover:shadow-md transition-all`}
            >
              <div className={`bg-${feature.color}-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        id="gallery"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our intuitive interface designed for efficiency and ease of use</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {RetailImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                <Image
                  src={image.image_link}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  
                />
              </div>
     
            </motion.div>
          ))}
        </div>
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-medium text-blue-900 mb-4 text-center">
            Beyond Fast Transactions
          </h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Retail Assist offers advanced features like product label printing, customer loyalty programs, employee management, and insightful sales analytics.
          </p>
        </div>
      </motion.div>

  
      <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Retail Assist in Action</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our intuitive interface designed for efficiency and ease of use</p>
        </div>
      <motion.div
        className="relative py-16 max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/pGQpHhBLZFk?si=mScqKxBHNfjbdwCd"
          thumbnailSrc="/rms/rms-preview.png"
          thumbnailAlt="Hero Video"
        />  
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-blue-500 py-16 md:py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-2/3 text-center md:text-left"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Retail Business?</h2>
              <p className="text-xl text-blue-50 font-light mb-8 leading-relaxed">
                Join hundreds of retailers across the Philippines who have streamlined their operations with Retail Assist.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/3 flex justify-center md:justify-end"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#contact" onClick={(e) => { 
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-all flex items-center text-lg shadow-lg hover:shadow-xl">
                Request a Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <br/>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Compatibility/>
        </div>
      </motion.div>
    
      <div id="contact">
        <ContactNew/>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="lg:max-w-[1000px] md:max-w-[800px] sm:max-w-[600px]"> 
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
              <Image
                src={selectedImage.image_link}
                alt={selectedImage.alt}
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}