"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Compatibility from "@/section/compatibility";
import ContactNew from "@/section/contact-new";

import Image from "next/image";
import { BarChart2Icon, Printer } from "lucide-react";

interface GalleryImage {
  image_link: string;
  alt: string;
}

const FastPOSImages: GalleryImage[] = [
  { image_link: "/fast-pos/fast-pos_001.png", alt: "Fast POS Interface" },
  { image_link: "/fast-pos/fast-pos_002.png", alt: "Fast POS Order Screen" },
  { image_link: "/fast-pos/fast-pos_003.png", alt: "Fast POS Dashboard" },
  { image_link: "/fast-pos/fast-pos_004.png", alt: "Fast POS Analytics" },
];




export default function FastPOS() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-20 relative"
    >
      {/* Hero Section with Animation */}
      
      <motion.div
        className="relative bg-gradient-to-r from-rose-800 via-rose-600 to-rose-800 py-16 md:py-24 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
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
                Fast<span className="bg-white text-rose-600 rounded-lg px-2 text-rose-600 ml-2">POS</span>
              </h1>
              <p className="text-xl md:text-2xl text-rose-50 font-light mb-8 leading-relaxed">
                Elevate your quick-service operations with our cutting-edge point-of-sale system designed for speed and efficiency
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-lg font-medium transition-all flex items-center">
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
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">

              <Image 
                src="/fast-pos/fast-pos.jpeg"
                alt="FastPOS Interface Preview"
                width={600}
                height={400}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Built for Quick-Service Excellence</h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mx-auto">
          Specifically developed to cater to the operational needs of fast-food and quick-service stores, enhancing the speed and efficiency of their services. It seamlessly functions with both touch-screen monitors for user-friendly operation and regular monitors for maximum flexibility.
        </p>
      </motion.div>
      
      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6" 
        id="features"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-rose-100 text-rose-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="M17 7h.01" /><path d="M7 17h.01" /><path d="M17 17h.01" /></svg>
            </div>
            <h4 className="font-semibold text-xl mb-2">Touch Optimized</h4>
            <p className="text-gray-600">Designed for both touchscreen and regular monitors, providing maximum flexibility for your operations.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-rose-100 text-rose-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z" /><path d="M12 12H2v10h10V12Z" /><path d="M22 2h-10v20h10V2Z" /></svg>
            </div>
            <h4 className="font-semibold text-xl mb-2">Inventory Management</h4>
            <p className="text-gray-600">Track inventory levels in real-time, receive low stock alerts, and manage suppliers efficiently.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-rose-100 text-rose-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart2Icon />
            </div>
            <h4 className="font-semibold text-xl mb-2">Comprehensive Reporting</h4>
            <p className="text-gray-600">Gain insights into sales, inventory, and staff performance with detailed, customizable reports.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-rose-100 text-rose-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Printer/>
            </div>
            <h4 className="font-semibold text-xl mb-2">Smart Kitchen Printing</h4>
            <p className="text-gray-600">Automate order routing to specific kitchen stations, ensuring efficient food preparation and reduced wait times.</p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Gallery Section */}
      <motion.div
        id="gallery"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">See FastPOS in action with our intuitive interface designed for speed and efficiency</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {FastPOSImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden"
              
              
              
              >
                <Image
                  src={image.image_link}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <p className="font-medium text-sm">{image.alt}</p>
                  <div className="mt-2">
                    <button 
                      onClick={() => handleImageClick(image)  } 
                      className="text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300"
                    >
                      View Larger
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 bg-rose-50 border border-rose-100 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-medium text-rose-900 mb-4 text-center">
            Beyond Fast Transactions
          </h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            FastPOS offers advanced features like inventory management, sales tracking, flexible pricing options, and security features to enhance operational efficiency.
          </p>
        </div>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="py-12 max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Complete Solution for Quick-Service Retailers</h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center mb-6">FastPOS is a cutting-edge point-of-sale system designed for quick-service establishments, ensuring seamless and efficient transactions. With its user-friendly interface and compatibility with both touch-screen and regular monitors, FastPOS streamlines ordering and payment processes, allowing customers to place and pay for their orders swiftly at the cashier.</p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">FastPOS goes beyond just processing payments—it offers inventory management, sales tracking, flexible pricing options, and security features to enhance operational efficiency. It even integrates a cloud-based Report Management System (RMS), providing real-time insights into sales performance, discounts, payment types, and peak business hours, accessible anytime and anywhere. Whether optimizing order fulfillment or ensuring smooth cashier operations, FastPOS is the ultimate solution for businesses aiming to elevate their speed, convenience, and service quality.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        className="relative py-16 max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">See FastPOS in Action</h2>
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/GPc8QK7S4NI?si=tvcMHqOjBSy0IgBL"
          thumbnailSrc="/rms/rms-preview.png"
          thumbnailAlt="Hero Video"
        />  
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-gradient-to-r from-rose-800 via-rose-600 to-rose-800 py-16 md:py-20 relative overflow-hidden my-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-2/3 text-center md:text-left"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Streamline Your Operations?</h2>
              <p className="text-xl text-rose-50 font-light mb-8 leading-relaxed">
                Get FastPOS for your quick-service business and experience the difference in speed and efficiency.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/3 flex justify-center md:justify-end"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#contact" onClick={(e) => { 
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-lg font-medium transition-all flex items-center text-lg shadow-lg hover:shadow-xl">
                Request a Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Compatibility Section */}
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
      
        {/* Contact Section */}
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

      {/* Image Preview Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="lg:max-w-[90vh] md:max-w-[80vh] sm:max-w-[60vh]"> 
          <DialogTitle className="text-xl font-semibold mb-4">{selectedImage?.alt}</DialogTitle>
          <div className="relative">
            {selectedImage && (
              <Image 
                src={selectedImage.image_link} 
                alt={selectedImage.alt} 
                width={600}
                height={400}
                className="w-full h-auto rounded-md"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}