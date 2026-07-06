"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

import Compatibility from "@/section/compatibility";
import ContactNew from "@/section/contact-new";


interface GalleryImage {
  image_link: string;
  alt: string;
}

const FoodConnectImages: GalleryImage[] = [
  { image_link: "/food-connect/food-connect_001.png", alt: "Food Connect Interface" },
  { image_link: "/food-connect/food-connect_002.png", alt: "Food Connect Order Screen" },
  { image_link: "/food-connect/food-connect_003.png", alt: "Food Connect Dashboard" },
  { image_link: "/food-connect/food-connect_004.png", alt: "Food Connect Analytics" },
  { image_link: "/food-connect/food-connect_005.png", alt: "Food Connect Analytics 2" },
];

export default function FoodConnect() {
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
      {/* Hero Section */}
      <section className="relative w-full py-32 bg-slate-950 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2 text-left"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-500/10 mb-6">
                POINT OF SALE SOLUTION
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Food<span className="text-cyan-400 ml-2">Connect</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
                Elevate your restaurant operations with our cutting-edge POS system designed for seamless table service
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="bg-cyan-500 text-white hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition-all flex items-center shadow-lg">
                  Explore Features
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
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
                  src="/food-connect/11185.jpg"
                  alt="FoodConnect Interface Preview"
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
      </section>

      {/* Introduction Section */}
      <motion.div
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            OUR SOLUTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Streamlining Restaurant Operations Across the Philippines
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-4xl mx-auto">
            FoodConnect is a modern table service POS designed to elevate the dining experience and streamline restaurant operations. With intuitive table management, real-time order tracking, and seamless integration across terminals, FoodConnect empowers your staff to deliver exceptional service from order placement to payment.
          </p>
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white"
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
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            KEY FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features for Modern Restaurants
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our comprehensive solution addresses all aspects of restaurant management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            { 
              title: "Intuitive Table Management", 
              desc: "Efficiently manage tables, reservations, and customer flow with a visual layout and real-time status updates.", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )
            },
            { 
              title: "Real-time Order Tracking", 
              desc: "Monitor order status from kitchen to table, ensuring timely delivery and reducing errors.", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 16h.01" />
                </svg>
              )
            },
            { 
              title: "Smart Kitchen Printing", 
              desc: "Automate order routing to specific kitchen stations, ensuring efficient food preparation and reduced wait times.", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              )
            },
            { 
              title: "Digital Menus & Ordering", 
              desc: "Offer interactive digital menus for customers to browse and place orders directly, enhancing their dining experience.", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13.458m0-13.458a4.5 4.5 0 110 9l-3.248-1.083a4.5 4.5 0 00-4.752 4.752M12 6.253a4.5 4.5 0 100 9l3.248-1.083a4.5 4.5 0 014.752 4.752M12 6.253v13.458" />
                </svg>
              )
            },
            { 
              title: "Staff Management", 
              desc: "Assign roles, track performance, and manage shifts efficiently to optimize your team's productivity.", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            { 
              title: "Comprehensive Reporting", 
              desc: "Gain insights into sales, inventory, and staff performance with detailed, customizable reports.", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-cyan-100 text-cyan-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        id="gallery"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-slate-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            GALLERY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See FoodConnect in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our intuitive interface designed for speed and efficiency
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {FoodConnectImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer border border-slate-200"
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-slate-100 overflow-hidden">
                <Image
                  src={image.image_link}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-medium text-sm">{image.alt}</p>
                    <div className="mt-2">
                      <button 
                        onClick={() => handleImageClick(image)} 
                        className="text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300"
                      >
                        View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 bg-cyan-50 border border-cyan-100 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-4 text-center">
            Beyond Efficient Order Handling
          </h3>
          <p className="text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
            FoodConnect offers advanced features like digital menus, staff management, smart kitchen printing, and insightful sales reports.
          </p>
        </div>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">Complete Solution for Table-Service Restaurants</h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-600 text-center mb-6">FoodConnect is a cutting-edge point-of-sale (POS) system specifically designed for table service restaurants. It revolutionizes the dining experience and optimizes restaurant operations by offering intuitive table management, real-time order tracking, and seamless integration across all terminals.</p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-600 text-center mb-6">FoodConnect empowers your staff to deliver exceptional service from the moment an order is placed to the final payment, leading to increased efficiency and customer satisfaction.</p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-600 text-center">Beyond efficient order handling, FoodConnect offers advanced features like digital menus, staff management, smart kitchen printing, and insightful sales reports. Its flexible and user-friendly interface adapts to your workflow, ensuring smooth coordination between front-of-house and back-of-house teams. Experience a new level of efficiency, accuracy, and guest satisfaction with FoodConnect.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        className="relative py-16 max-w-7xl mx-auto px-4 sm:px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            VIDEO DEMO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Watch How It Works
          </h2>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
          <iframe width="100%" height="800px" src="https://www.youtube.com/embed/XgkPS00xMkM?si=HDU-FzARM9jVK7vY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <section className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Streamline Your Restaurant Operations?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Join hundreds of restaurants across the Philippines who have elevated their service with FoodConnect.
            </p>
            <a href="#contact" onClick={(e) => { 
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="inline-flex bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all items-center text-lg shadow-lg hover:shadow-xl">
              Request a Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
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
        <ContactNew/>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="lg:max-w-[90vh] md:max-w-[80vh] sm:max-w-[60vh]"> 
          <DialogTitle className="text-xl font-semibold mb-4 text-slate-900">{selectedImage?.alt}</DialogTitle>
          <div className="relative">
            {selectedImage && (
              <Image 
                src={selectedImage.image_link} 
                alt={selectedImage.alt} 
                width={600}
                height={400}
                className="object-contain rounded-lg w-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
