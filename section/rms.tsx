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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number]
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
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

export default function RMS() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section - Updated Design */}
      <section className="relative w-full py-32 bg-slate-950 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-500/10 mb-6">
              Report Management System
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Powerful <span className="text-cyan-400">Reports</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Gain real-time insights into your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto px-8 py-24 mb-24 relative bg-white"
      >
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            Key Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-center">
            Why RMS is Essential for Your Business
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto text-center">
            Our Report Management System (RMS) provides comprehensive tools to optimize your business decisions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="space-y-4 border border-slate-200 p-8 rounded-xl flex flex-col items-center text-center bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="shrink-0 w-16 h-16 text-cyan-700 flex items-center justify-center rounded-full bg-cyan-100 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Reports Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
              Comprehensive Reporting
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Reports You Can Generate
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Access a wide array of detailed reports to keep track of every aspect of your business.
            </p>
          </motion.div>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[ 
              {
                title: "Item Sales Report",
                description: "Tracks sales performance of individual items, showing popular and profitable products.",
                icon: <BarChart3 className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Daily Sales Report",
                description: "Summarizes total sales per day, helping businesses analyze trends over time.",
                icon: <CalendarDays className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Discount Report",
                description: "Displays applied discounts, showing the impact of promotions on revenue.",
                icon: <Percent className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Payment Type Report",
                description: "Breaks down transactions by payment method (Cash, Credit Card, GCash, Grab, Food Panda).",
                icon: <CreditCard className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Hourly Sales Report",
                description: "Analyzes sales trends per hour to identify peak business periods.",
                icon: <Clock className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "BIR Report",
                description: "Provides sales and tax-related records compliant with BIR regulations.",
                icon: <FileText className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Government Discount Report",
                description: "Tracks discounts applied to senior citizens, PWDs, and other government-mandated programs.",
                icon: <Users className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Void Transaction Report",
                description: "Logs canceled or voided transactions for auditing and fraud detection.",
                icon: <XCircle className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Cashier Report",
                description: "Shows the number of transactions handled by each cashier and their total sales performance.",
                icon: <UserCheck className="shrink-0 size-6 text-cyan-500" />
              },
              {
                title: "Fast-Moving Items Report",
                description: "Highlights products that sell frequently versus those that rarely sell to optimize inventory.",
                icon: <TrendingUp className="shrink-0 size-6 text-cyan-500" />
              }
            ].map((report, index) => (
              <motion.div variants={itemVariants} key={index}>
                <Card className="h-full flex flex-col justify-between p-6 bg-white border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 px-0 pt-0">
                    <CardTitle className="text-lg font-semibold text-slate-900">
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
        className="max-w-7xl mx-auto px-8 py-24 mb-24 relative bg-white"
      >
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-center">
            Explore Our RMS Interface
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

      {/* CTA Section */}
      <section className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Take control of your business data and make better decisions with our Report Management System.
            </p>
            <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-base h-auto">
              <a href="#contact">Request a Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactNew/>
      </div>
    </div>
  );
}