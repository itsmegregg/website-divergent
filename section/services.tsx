"use client";
import Link from "next/link";
import { Zap, Users, Box, BarChart2, Bell, Printer, Tablet, CreditCard, MapPin, RefreshCw, Barcode, Gift, PieChart, Server, DollarSign, FileText, ShoppingBag, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    ],
    slug: "fast-pos",
  },
  {
    title: "Food Connect",
    description:
      "Designed for table-service restaurants. Food Connect streamlines reservations, order processing, and billing for an exceptional dining experience.",
    features: [
      { name: "Real-time Order Tracking", icon: RefreshCw },
      { name: "Smart Kitchen & Beverage Printing", icon: Printer },
      { name: "Table-side Ordering", icon: Tablet },
    ],
    slug: "food-connect",
  },
  {
    title: "Retail Assist",
    description: "Tailored specifically for retail businesses, Retail Assist streamlines inventory management, sales tracking, and reporting.",
    features: [
      { name: "Inventory Management", icon: Box },
      { name: "Barcode Scanning & Quick Checkout", icon: Barcode },
      { name: "Customer Loyalty & Promotions", icon: Gift },
    ],
    slug: "retail-assist",
  },
  {
    title: "Report Management System",
    description: "A Web App that efficiently generates and manages reports for your business.",
    features: [
      { name: "Sales Reports", icon: BarChart2 },
      { name: "Inventory Reports", icon: Box },
      { name: "Graph & Analytics", icon: PieChart },
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            OUR SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our versatile range of POS solutions designed to revolutionize how you do business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((svc) => (
            <motion.div key={svc.slug} variants={itemVariants}>
              <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">{svc.title}</CardTitle>
                  <CardDescription className="text-slate-600">{svc.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((feat) => {
                      const Icon = feat.icon;
                      return (
                        <li key={feat.name} className="flex items-start space-x-3 text-sm text-slate-700">
                          <Icon className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span>{feat.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Button asChild className="w-full mt-auto bg-slate-900 hover:bg-slate-800 text-white">
                    <Link href={`/services/${svc.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}