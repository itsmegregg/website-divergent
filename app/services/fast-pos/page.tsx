"use client";

import { ShoppingCart, Users, BarChart, Lock, CreditCard, Package, FileText, Tag, Monitor, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Compatibility from "@/section/compatibility";
import ContactUs from "@/section/contact-us";
import RMS from "@/section/rms";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import FastPOSClient from "@/section/fastpos-client";

export default function FastPOS() {
  const coreFeatures = [
    {
      title: "Fast & Efficient Transactions",
      description: "Enhances speed and efficiency, perfect for fast-food and quick-service businesses.",
      icon: <ShoppingCart />,
    },
    {
      title: "User-Friendly Interface",
      description: "Touchscreen and regular monitor compatibility for seamless operation.",
      icon: <Monitor />,
    },
    {
      title: "Inventory Management",
      description: "Tracks stock levels, food costs, and generates re-order lists with budget estimates.",
      icon: <Package />,
    },
    {
      title: "Sales & Reports Generation",
      description: "Provides hourly, daily, and cashier sales reports to monitor business performance.",
      icon: <FileText />,
    },
    {
      title: "Discount & Pricing Flexibility",
      description: "Supports item discounts and open pricing for variable-cost items.",
      icon: <Tag />,
    },
    {
      title: "Security & Access Control",
      description: "Multi-level user access with extensive password protection.",
      icon: <Lock />,
    },
    {
      title: "Hardware Compatibility",
      description: "Works with barcode scanners, kitchen printers, and other peripherals.",
      icon: <Database />,
    },

  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="text-center mb-20 space-y-6 relative  pt-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">Fast<span className="bg-orange-500 rounded px-1 text-gray-50">POS</span></h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        Specifically developed to cater to the operational needs of fast-food and quick-service stores, enhancing the speed and efficiency of their services. It seamlessly functions with both touch-screen monitors for user-friendly operation and regular monitors for maximum flexibility.
      </p>
      <h2 className="text-2xl md:text-3xl font-regular tracking-tighter">Features</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {coreFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative p-4 cursor-pointer"
          >
            <Card className="hover:scale-105 border-gray-200">
              <CardHeader className="flex items-center space-x-3 ">
                <div className="p-2 bg-primary rounded-md text-gray-50">{feature.icon}</div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CardTitle className="text-base  font-semibold">{feature.title}</CardTitle>
                    </TooltipTrigger>
                    <motion.div
                      variants={tooltipVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <TooltipContent className="w-48 text-base">
                        <p className="text-gray-50">{feature.description}</p>
                      </TooltipContent>
                    </motion.div>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="">
        <h3 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">FastPOS is a cutting-edge point-of-sale system designed for quick-service establishments, ensuring seamless and efficient transactions. With its user-friendly interface and compatibility with both touch-screen and regular monitors, FastPOS streamlines ordering and payment processes, allowing customers to place and pay for their orders swiftly at the cashier.</h3>
        <br/>
        <h3 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">FastPOS goes beyond just processing payments—it offers inventory management, sales tracking, flexible pricing options, and security features to enhance operational efficiency. It even integrates a cloud-based Report Management System (RMS), providing real-time insights into sales performance, discounts, payment types, and peak business hours, accessible anytime and anywhere. Whether optimizing order fulfillment or ensuring smooth cashier operations, FastPOS is the ultimate solution for businesses aiming to elevate their speed, convenience, and service quality.</h3>
      </div>
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/GPc8QK7S4NI?si=tvcMHqOjBSy0IgBL"
          thumbnailSrc="/rms/rms-preview.png"
          thumbnailAlt="Hero Video"
        />  
      </div>
      <RMS/>
      <Compatibility/>
      <FastPOSClient/>
      <ContactUs/>
    </div>
  );
}
