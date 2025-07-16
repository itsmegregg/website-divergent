"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import { Briefcase, Lightbulb, Users, Building, ShieldCheck, BarChart3, Settings, Headset, GitCompareArrows, Target, Eye, FileChartColumn, MoveUpRight, Sparkle, UserCheck, Asterisk, CalendarDays, Percent, CreditCard, Clock, FileText, XCircle, TrendingUp } from "lucide-react";
import ContactNew from "./contact-new";

// Animation variants with smoother easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] // Smoother cubic bezier
    }
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0],
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

export default function RMS() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section Placeholder */}
      <motion.div
        className="min-h-[500px] md:h-[750px] w-full mx-auto p-4 md:p-20 flex flex-col md:flex-row bg-stone-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full md:flex-1 order-2 md:order-1 flex flex-col justify-center items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-4 md:m-10 h-full flex flex-col justify-center items-start"
          >
            <Badge className="bg-blue-500">
              Report Management System
            </Badge>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-7xl font-bold"
            >
              Powerful
              <span className="bg-orange-500 rounded-lg px-2 text-gray-50 ml-2">
                Reports
              </span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-2xl font-semibold text-neutral-600 pt-3"
            >
              Gain real-time insights into your business operations.
            </motion.h2>
          </motion.div>
        </div>
        <div className="w-full md:flex-1 bg-neutral-50 order-1 md:order-2 flex items-center justify-center">
          <motion.img
            variants={itemVariants}
            src='/rms/Mar-Business_1.jpg' // Placeholder image
            className="w-full h-auto object-cover rounded-lg border-gray-400 border-2 shadow-lg" 
            alt="RMS Interface Preview"
          />
        </div>
      </motion.div>

      {/* Benefits Section Placeholder */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto px-8 py-24 mb-24 relative"
      >
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-blue-300 mr-4"></div>
            <Badge className="bg-blue-500 rounded px-1 text-gray-50">
              Key Benefits
            </Badge>
            <div className="h-[1px] w-12 bg-blue-300 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight text-center">
            Why <span className="text-blue-600">RMS</span> is Essential for Your Business
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto text-center">
            Our Report Management System (RMS) provides comprehensive tools to optimize your business decisions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ /* Original benefits data */
            {
              title: "Improved Visibility",
              description: "Get a clear overview of your sales performance to make better business decisions.",
              icon: <Eye className="shrink-0 size-6" />
            },
            {
              title: "Increased Efficiency",
              description: "Automate report generation, saving time for other tasks.",
              icon: <Sparkle className="shrink-0 size-6" />
            },
            {
              title: "Reduced Risk",
              description: "Ensure accurate reports to minimize errors and compliance issues.",
              icon: <Asterisk className="shrink-0 size-6" />
            },
            {
              title: "Real-Time Accessibility",
              description: "Access reports anytime, anywhere, from any device.",
              icon: <FileChartColumn className="shrink-0 size-6" />
            },
            {
              title: "Sales Trend Analysis",
              description: "Track best-selling products, peak business hours, and revenue patterns.",
              icon: <MoveUpRight className="shrink-0 size-6" />
            },
            {
              title: "User-Friendly Interface",
              description: "Optimized for ease of use, ensuring a smooth user experience.",
              icon: <UserCheck className="shrink-0 size-6" />
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4 border p-6 rounded-lg flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="shrink-0 w-16 h-16 text-white flex items-center justify-center rounded-full bg-blue-500 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Reports Section Placeholder */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className=" bg-green-600 text-white">
              Comprehensive Reporting
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Reports You Can <span className="text-green-600">Generate</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Access a wide array of detailed reports to keep track of every aspect of your business.
            </p>
          </motion.div>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[ 
              {
                title: "Item Sales Report",
                description: "Tracks sales performance of individual items, showing popular and profitable products.",
                icon: <BarChart3 className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Daily Sales Report",
                description: "Summarizes total sales per day, helping businesses analyze trends over time.",
                icon: <CalendarDays className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Discount Report",
                description: "Displays applied discounts, showing the impact of promotions on revenue.",
                icon: <Percent className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Payment Type Report",
                description: "Breaks down transactions by payment method (Cash, Credit Card, GCash, Grab, Food Panda).",
                icon: <CreditCard className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Hourly Sales Report",
                description: "Analyzes sales trends per hour to identify peak business periods.",
                icon: <Clock className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "BIR Report",
                description: "Provides sales and tax-related records compliant with BIR regulations.",
                icon: <FileText className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Government Discount Report",
                description: "Tracks discounts applied to senior citizens, PWDs, and other government-mandated programs.",
                icon: <Users className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Void Transaction Report",
                description: "Logs canceled or voided transactions for auditing and fraud detection.",
                icon: <XCircle className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Cashier Report",
                description: "Shows the number of transactions handled by each cashier and their total sales performance.",
                icon: <UserCheck className="shrink-0 size-6 text-green-600" />
              },
              {
                title: "Fast-Moving Items Report",
                description: "Highlights products that sell frequently versus those that rarely sell to optimize inventory.",
                icon: <TrendingUp className="shrink-0 size-6 text-green-600" />
              }
            ].map((report, index) => (
              <motion.div variants={itemVariants} key={index}>
                <Card className="h-full flex flex-col justify-between p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 px-0 pt-0">
                    <CardTitle className="text-lg font-semibold text-slate-800">
                      {report.title}
                    </CardTitle>
                    {report.icon}
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <p className="text-sm text-slate-600">{report.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto px-8 py-24 mb-24 relative"
      >
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-purple-300 mr-4"></div>
            <Badge className="bg-purple-500 rounded px-1 text-gray-50">
              Gallery
            </Badge>
            <div className="h-[1px] w-12 bg-purple-300 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight text-center">
            Explore Our <span className="text-purple-600">RMS Interface</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto text-center">
            See how our intuitive interface makes report management effortless.
          </p>
        </motion.div>
        <InteractiveBentoGallery
          mediaItems={[
            {
              id: 1,
              type: "image",
              title: "Dashboard",
              desc: "Dashboard",
              url: "/rms/rms1.png",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 2,
              type: "image",
              title: "Item Sales",
              desc: "Item Sales",
              url: "/rms/rms2.png",
              span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
              id: 3,
              type: "image",
              title: "Daily sales",
              desc: "Daily sales",
              url: "/rms/rms3.png",
              span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
            },
            {
              id: 4,
              type: "image",
              title: "Discount Sales",
              desc: "Discount Sales",
              url: "/rms/rms4.png",
              span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
            },
            {
                id: 5,
                type: "image",
                title: "Payment Sales",
                desc: "Payment Sales",
                url: "/rms/rms5.png",
                span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
              },
              {
                id: 6,
                type: "image",
                title: "Hourly Sales",
                desc: "Hourly Sales",
                url: "/rms/rms6.png",
                span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
              },
              {
                id: 7,
                type: "image",
                title: "BIR Report",
                desc: "BIR Report ",
                url: "/rms/rms7.png",
                span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
              },
          ]}
          title="RMS"
          description="RMS helps businesses track and analyze sales, payments, and transactions effortlessly. It is a cloud-based module, allowing you to access reports anytime, anywhere."
        />
      </motion.section>

      {/* Contact Section */}
      <ContactNew/>
    </div>
  );
}