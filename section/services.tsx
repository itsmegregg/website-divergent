"use client";
import Link from "next/link";
import { Zap, Users, Box, BarChart2, Bell, Printer, Tablet, CreditCard, MapPin, RefreshCw, Barcode, Gift, PieChart, Server, DollarSign, FileText, ShoppingBag, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import ContactNew from "@/section/contact-new";

const services = [
  {
    title: "FastPOS",
    description:
      "Created with fast-food and quick-service establishments in mind. FastPOS takes your dine-in or take-out business to the next level.",
    features: [
      { name: "Fast and Efficient Transactions", icon: Zap },
      { name: "User-Friendly Interface", icon: Users },
      { name: "Inventory Management", icon: Box },
      { name: "Sales & Reports Generation", icon: BarChart2 },
      { name: "Discount & Pricing Flexibility", icon: Bell },
      { name: "Security & Access Control", icon: CreditCard },
      { name: "Hardware Compatibility", icon: Tablet },
    ],
    slug: "fast-pos",
  },
  {
    title: "Food Connect",
    description:
      "Designed for table-service restaurants. Food Connect streamlines reservations, order processing, and billing for an exceptional dining experience.",
    features: [
      { name: "Real-time Order Tracking", icon: RefreshCw },
      { name: "Priority Alerts & Custom Modification", icon: Bell },
      { name: "Smart Kitchen & Beverage Printing", icon: Printer },
      { name: "Sales & Reports Generation", icon: BarChart2 },
      { name: "Staff Management Tools", icon: Users },
      { name: "Table-side Ordering & Digital Menus", icon: Tablet },
      { name: "Simplified Billing & Settlement", icon: CreditCard },
      { name: "Table Assignment & Status Visualization", icon: MapPin },
    ],
    slug: "food-connect",
  },
  {
    title: "Retail Assist",
    description: "Tailored specifically for retail businesses, Retail Assist streamlines inventory management, sales tracking, and reporting to help you run your store more efficiently.",
    features: [
      { name: "Inventory Management", icon: Box },
      { name: "Barcode Scanning & Quick Checkout", icon: Barcode },
      { name: "Customer Loyalty & Promotions", icon: Gift },
      { name: "Sales & Analytics Dashboard", icon: PieChart },
      { name: "Multi-Store & Multi-Register Support", icon: Server },
      { name: "Employee Management", icon: Users },
      { name: "Flexible Payment Options", icon: DollarSign },
      { name: "Receipt & Label Printing", icon: FileText },
    ],
    slug: "retail-assist",
  },
  
  {
    title: "Report Management System",
    description: "A Web App that efficiently generate and manage reports for your business.",
    features: [
      { name: "Sales Reports", icon: BarChart2 },
      { name: "Inventory Reports", icon: Box },
      { name: "Customer Reports", icon: Users },
      { name: "Graph, Charts, and Analytics", icon: PieChart },
      { name: "Multi-Store & Multi-Register Support", icon: Server },
      { name: "Product Management", icon: Package },
    ],
    slug: "rms",
  },
  {
    title: "E-Commerce",
    description: "Tailored for online stores, managing products, orders, and customers efficiently.",
    features: [
      { name: "Online Storefront", icon: ShoppingBag },
      { name: "Order Management", icon: Package },
      { name: "Customer Database", icon: Users },
    ],
    slug: "e-commerce",
  }
];

export default function ServicesSection(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        className="relative bg-gradient-to-r from-stone-800 via-stone-600 to-stone-800 py-16 md:py-24 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-500/10 rounded-full blur-3xl"></div>
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
                OUR SOLUTIONS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Our <span className="bg-white text-stone-600 rounded-lg px-2 ml-2">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-50 font-light mb-8 leading-relaxed">
                Explore our versatile range of solutions designed to revolutionize how you do business.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('services-cards')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-stone-600 hover:bg-stone-50 px-6 py-3 rounded-lg font-medium transition-all flex items-center">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
                  Contact Us
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
                <img 
                  src="/fast-pos/fast-pos.jpeg"
                  alt="All Services Interface Preview"
                  className="w-[600px] h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5">
    <div>
      {/* First Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="services-cards"
      >
        {services.slice(0, 3).map((svc) => (
          <motion.div
            key={svc.slug}
            variants={itemVariants}
          >
            <Card
              className="flex flex-col h-full hover:shadow-lg transition-shadow "
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{svc.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{svc.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2 mb-4">
                  {svc.features.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <li key={feat.name} className="flex items-start space-x-2 text-sm">
                        <Icon className="h-4 w-4 text-primary mt-1" />
                        <span>{feat.name}</span>
                      </li>
                    );
                  })}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/services/${svc.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row (Centered) */}
      <div className="flex justify-center mt-8"> {/* Add flex and justify-center here */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="services-cards-second-row"
        >
          {services.slice(3).map((svc) => (
            <motion.div
              key={svc.slug}
              variants={itemVariants}
            >
              <Card
                className="flex flex-col h-full hover:shadow-lg transition-shadow "
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{svc.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{svc.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 mb-4">
                    {svc.features.map((feat) => {
                      const Icon = feat.icon;
                      return (
                        <li key={feat.name} className="flex items-start space-x-2 text-sm">
                          <Icon className="h-4 w-4 text-primary mt-1" />
                          <span>{feat.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/services/${svc.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
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
    </div>
  );
}