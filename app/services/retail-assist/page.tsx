"use client";

import { Boxes, ScanBarcode, Gift, BarChart, Store, Users, CreditCard, Printer } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Compatibility from "@/section/compatibility";
import ContactUs from "@/section/contact-us";
import RMS from "@/section/rms";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import FastPOSClient from "@/section/fastpos-client";
import FoodConnectClient from "@/section/foodConnect.-client";
import RetailAssistClient from "@/section/retailAssist-client";

export default function RetailAssist() {
  const coreFeatures = [
  {
    title: "Inventory Management",
    description: "Track, manage, and update stock levels in real-time across all locations.",
    icon: <Boxes />,
  },
  {
    title: "Barcode Scanning & Quick Checkout",
    description: "Speed up sales with integrated barcode scanning and efficient checkout.",
    icon: <ScanBarcode />,
  },
  {
    title: "Customer Loyalty & Promotions",
    description: "Manage customer loyalty programs, discounts, and promotions with ease.",
    icon: <Gift />,
  },
  {
    title: "Sales & Analytics Dashboard",
    description: "Access real-time sales data and analytics to make informed business decisions.",
    icon: <BarChart />,
  },
  {
    title: "Multi-Store & Multi-Register Support",
    description: "Seamlessly operate multiple stores and registers from a single platform.",
    icon: <Store />,
  },
  {
    title: "Employee Management",
    description: "Control staff access, scheduling, and performance tracking.",
    icon: <Users />,
  },
  {
    title: "Flexible Payment Options",
    description: "Accept cash, card, and digital payments securely and quickly.",
    icon: <CreditCard />,
  },
  {
    title: "Receipt & Label Printing",
    description: "Print receipts and product labels directly from the POS system.",
    icon: <Printer />,
  }
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
      <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">Retail<span className="bg-orange-500 rounded px-1 text-gray-50">Assist</span></h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        Empower Your Retail Business with Retail Assist POS
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
        <h3 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
          Retail Assist is a modern retail POS designed to streamline sales and operations for shops of all kinds—from shoe and dress boutiques to bake shops, pharmacies, and groceries. With intuitive sales workflows, real-time inventory tracking, and seamless checkout, Retail Assist empowers your staff to deliver exceptional service and keep your business running smoothly.
        </h3>
        <br/>
        <h3 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
          Beyond fast transactions, Retail Assist offers advanced features like product label printing, customer loyalty programs, employee management, and insightful sales analytics. Its flexible and user-friendly interface adapts to your unique retail needs, helping you boost efficiency, accuracy, and customer satisfaction.
        </h3>
      </div>
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/pGQpHhBLZFk?si=mScqKxBHNfjbdwCd"
          thumbnailSrc="/rms/rms-preview.png"
          thumbnailAlt="Hero Video"
        />  
      </div>
      <RMS/>
      <Compatibility/>
      <RetailAssistClient/>
      <ContactUs/>
    </div>
  );
}
