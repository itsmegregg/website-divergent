"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

import ContactNew from "@/section/contact-new";


interface GalleryImage {
  image_link: string;
  alt: string;
}

const HardwareImages: GalleryImage[] = [
  { image_link: "/hardware/chuwi-hi10-x1-tablet-pos.png", alt: "Chuwi Hi10 X1 Tablet POS" },
  { image_link: "/hardware/emaxx-mini-pc.png", alt: "E-maxx Mini PC" },
  { image_link: "/hardware/histone-hk578u.png", alt: "Histone HK578U" },
  { image_link: "/hardware/hp-engageone-145.png", alt: "HP EngageOne 145" },
  { image_link: "/hardware/landi2.png", alt: "Landi c20" },
];

const HardwareAccessories: GalleryImage[] = [
  { image_link: "/hardware/cashdrawer.png", alt: "Cash Drawer" },
  { image_link: "/hardware/receipt.png", alt: "Receipt/Kitchen Printer" },
  { image_link: "/hardware/barcode-scanner.png", alt: "Barcode Scanner" },
  { image_link: "/hardware/rfid-nfc.png", alt: "RFID/NFC Reader" },
  { image_link: "/hardware/kds.png", alt: "Kitchen Display System" },
  { image_link: "/hardware/thermal-epson.png", alt: "Thermal Printer" },
];

export default function Hardware() {
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
      <motion.div
        className="relative bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 py-16 md:py-24 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2 text-left"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-white/10 text-white mb-4">
                HARDWARE SOLUTIONS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Reliable <span className="bg-white text-slate-600 rounded-lg px-2 ml-2">Hardware</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-50 font-light mb-8 leading-relaxed">
                Power your business with robust and efficient hardware solutions designed for seamless operation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-all flex items-center">
                  Explore Devices
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
              <Image
                src="/hardware/hero-hardware.jpg"
                alt="Hardware Hero Image"
                width={800}
                height={600}
                className="rounded-lg shadow-lg border-2 border-white/20"
              />
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Seamless Integration, Superior Performance</h2>
        <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed">
          Our hardware solutions are meticulously selected to integrate flawlessly with your existing systems, ensuring maximum uptime and operational efficiency. From robust POS terminals to versatile peripherals, each component is designed for durability and peak performance in demanding environments.
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Hardware Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HardwareImages.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={device.image_link}
                alt={device.alt}
                width={200}
                height={200}
                className="mb-4 object-contain h-48 w-48"
              />
              <h3 className="text-xl font-semibold mb-2">{device.alt}</h3>
              <p className="text-gray-600">Robust and efficient devices for your business needs.</p>
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
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hardware Gallery</h2>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-8">
          Explore our range of hardware devices and essential accessories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hardware Images */}
          {HardwareImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.image_link}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}

          {/* Hardware Accessories */}
          {HardwareAccessories.map((accessory, index) => (
            <motion.div
              key={index + HardwareImages.length} // Unique key
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + HardwareImages.length) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => handleImageClick(accessory)}
            >
              <Image
                src={accessory.image_link}
                alt={accessory.alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{accessory.alt}</p>
              </div>
            </motion.div>
          ))}
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our Hardware?</h2>
        <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed mb-6">
          Our hardware solutions are not just about functionality; they are about enhancing your business&apos;s efficiency, reliability, and security. We provide devices that are:
        </p>
        <ul className="list-disc list-inside text-left text-lg md:text-xl text-gray-700 space-y-2 max-w-2xl mx-auto">
          <li><span className="font-semibold">Durable:</span> Built to withstand the rigors of daily business operations.</li>
          <li><span className="font-semibold">Compatible:</span> Seamlessly integrate with our software and other essential business tools.</li>
          <li><span className="font-semibold">Efficient:</span> Designed for speed and accuracy, reducing transaction times.</li>
          <li><span className="font-semibold">Secure:</span> Equipped with features to protect your data and transactions.</li>
          <li><span className="font-semibold">Scalable:</span> Grow with your business, adapting to evolving needs.</li>
        </ul>
      </motion.div>


      {/* Call to Action Section */}
      <motion.div
        className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 py-16 md:py-20 relative overflow-hidden my-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-2/3 text-center md:text-left"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Operations?</h2>
              <p className="text-xl text-slate-50 font-light mb-8 leading-relaxed">
                Get the right hardware for your business and experience enhanced efficiency and reliability.
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
              }} className="bg-white text-slate-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-medium transition-all flex items-center text-lg shadow-lg hover:shadow-xl">
                Request a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
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