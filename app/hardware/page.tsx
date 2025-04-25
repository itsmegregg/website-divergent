"use client";

import ContactUs from "@/section/contact-us";
import Image from "next/image";
import { motion } from "framer-motion";

const images  = [
  {
    src: "/hardware/chuwi-hi10-x1-tablet-pos.png",
    alt: "Chuwi Hi10 X1 Tablet POS",
    title: "Chuwi Hi10 X1 Tablet POS"
  },
  {
    src:"/hardware/emaxx-mini-pc.png",
    alt: "E-maxx Mini PC",
    title: "E-maxx Mini PC"
  },
  {
    src: "/hardware/histone-hk578u.png",
    alt: "Histone HK578U",
    title: "Histone HK578U"
  },
  {
    src: "/hardware/hp-engageone-145.png",
    alt: "HP EngageOne 145",
    title: "HP EngageOne 145"
  }

]

const accessories = [
  {
    title: "Cash Drawer",
    src: "/hardware/cashdrawer.png",
    alt: "Cash Drawer"
  },
  {
    title: "Receipt/Kitchen Printer",
    src: "/hardware/receipt.png",
    alt: "Receipt/Kitchen Printer"
  },
  {
    title: "Barcode Scanner",
    src: "/hardware/barcode-scanner.png",
    alt: "Barcode Scanner"
  },
  {
    title: "RFID/NFC Reader",
    src: "/hardware/rfid-nfc.png",
    alt: "RFID/NFC Reader"
  },
  {
    title: "Kitchen Display System",
    src: "/hardware/kds.png",
    alt: "Kitchen Display System"
  },

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Hardware() {
  return (
    <motion.div
      className="text-center mb-20 space-y-6 relative pt-10 max-w-7xl mx-auto flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-regular tracking-tighter"
        variants={itemVariants}
      >
        Hardware
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center"
        variants={itemVariants}
      >
      We offer POS hardware for businesses of all sizes and types. Whether you&apos;re a small shop or a large restaurant, we have the hardware you need to streamline your operations and improve your customer experience
      </motion.p>

     <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
      {images.map((image) => (
        <motion.div
          key={image.alt}
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className="rounded-lg object-contain w-full h-full"
          />
          <h3 className="mt-2 text-lg font-semibold">{image.title}</h3>
        </motion.div>
      ))}
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center"
          variants={itemVariants}
        >
        Streamline Your Business with Reliable POS Hardware Enhance your operations with our top-tier POS hardware, designed to work seamlessly with our powerful POS software. Whether you&apos;re running a retail store, a restaurant, or any business that requires efficient transactions, we offer high-quality, compatible, and easy-to-use hardware solutions that keep your business running smoothly.
        </motion.p>
        <br/>

      </div>

      <div className="w-full bg-rose-200 text-black rounded-lg p-4">
        <motion.h3
          className="text-lg md:text-xl font-regular tracking-tighter"
          variants={itemVariants}
        >
          The Divergent POS Terminal is compatible with a wide range of accessories, allowing you to customize your POS system to meet your specific needs. With its seamless integration, you can easily add or remove accessories as your business grows or changes.
        </motion.h3>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {accessories.map((accessory) => (
          <motion.div
            key={accessory.alt}
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={accessory.src}
              alt={accessory.alt}
              width={1000}
              height={1000}
              className="rounded-lg object-contain w-[300px] h-[300px]"
            />
            <h4 className="text-lg md:text-xl font-regular tracking-tighter">
              {accessory.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>

      <ContactUs/>
    </motion.div>
  );
}