"use client";

import { Locate, Bell, Printer, BarChart, Users, TabletSmartphone, CreditCard, Table2 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Compatibility from "@/section/compatibility";
import ContactUs from "@/section/contact-us";
import RMS from "@/section/rms";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import FoodConnectClient from "@/section/foodConnect-client";

export default function FoodConnect() {
  const coreFeatures = [
    {
      title: "Real-Time Order Tracking",
      description: "Seamlessly monitor order progress across all terminals.",
      icon: <Locate />,
    },
    {
      title: "Priority Alerts & Custom Modifications",
      description: "Receive immediate alerts for priority orders and customize system settings.",
      icon: <Bell />,
    },
    {
      title: "Smart Kitchen & Beverage Printing",
      description: "Efficiently handle kitchen and beverage printing tasks.",
      icon: <Printer />,
    },
    {
      title: "Sales & Reports Generation",
      description: "Generate sales reports and insights for better decision-making.",
      icon: <BarChart />,
    },
    {
      title: "Staff Management Tools",
      description: "Manage staff schedules, roles, and permissions.",
      icon: <Users />,
    },
    {
      title: "Table-Side Ordering & Digital Menus",
      description: "Enable table-side ordering and provide digital menus.",
      icon: <TabletSmartphone />,
    },
    {
      title: "Simplified Billing & Settlement",
      description: "Streamline billing and settlement processes.",
      icon: <CreditCard />,
    },
    {
      title: "Table Assignment & Status Visualization",
      description: "Easily assign, view, and manage table statuses for efficient service flow.",
      icon: <Table2 />,
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
      <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">Food<span className="bg-orange-500 rounded px-1 text-gray-50">Connect</span></h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        Elevate Your Restaurant Operations with Seamless Integration
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
            FoodConnect is a modern table service POS designed to elevate the dining experience and streamline restaurant operations. With intuitive table management, real-time order tracking, and seamless integration across terminals, FoodConnect empowers your staff to deliver exceptional service from order placement to payment.
        </h3>
        <br/>
        <h3 className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
            Beyond efficient order handling, FoodConnect offers advanced features like digital menus, staff management, smart kitchen printing, and insightful sales reports. Its flexible and user-friendly interface adapts to your workflow, ensuring smooth coordination between front-of-house and back-of-house teams. Experience a new level of efficiency, accuracy, and guest satisfaction with FoodConnect.
        </h3>
        </div>
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/XgkPS00xMkM?si=vDRVb60ibnbgpysk"
          thumbnailSrc="/rms/rms-preview.png"
          thumbnailAlt="Hero Video"
        />  
      </div>
      <RMS/>
      <Compatibility/>
      <FoodConnectClient/>
      <ContactUs/>
    </div>
  );
}
