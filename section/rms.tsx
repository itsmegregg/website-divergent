"use client";

import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {motion} from 'framer-motion'
import { Asterisk, Eye, FileChartColumn, MoveUpRight, Sparkle, UserCheck } from "lucide-react";
import Image from "next/image";
import { title } from "process";

export default function RMS() {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  
 const benefits = [
  {
      title: "Improved Visibility",
    description: "Get a clear overview of your sales performance to make better business decisions.",
    icon: <Eye className="shrink-0 size-6"/>

  },
  {
    title: "Increased Efficiency",
    description: "Automate report generation, saving time for other tasks.",
    icon: <Sparkle className="shrink-0 size-6"/>

  },
  {
    title: "Reduced Risk",
    description: "Ensure accurate reports to minimize errors and compliance issues.",
    icon: <Asterisk className="shrink-0 size-6"/>
  },
  {
    title: "Real-Time Accessibility",
    description: "Access reports anytime, anywhere, from any device.",
    icon: <FileChartColumn className="shrink-0 size-6"/>
  },
  {
    title: "Sales Trend Analysis",
    description: "Track best-selling products, peak business hours, and revenue patterns.",
    icon: <MoveUpRight className="shrink-0 size-6"/>
  },
  {
    title: "User-Friendly Interface",
    description: "Optimized for ease of use, ensuring a smooth user experience.",
    icon: <UserCheck className="shrink-0 size-6"/>
  }
 ];

 const mediaItems = [
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
  ];
  

  return (
    <div className="text-center mb-20 space-y-6 relative pt-10 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-regular tracking-tighter">Report Management System (RMS)</h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        RMS helps businesses track and analyze sales, payments, and transactions effortlessly. It is a cloud-based module, allowing you to access reports anytime, anywhere.
      </p>

     
      <div className="flex flex-col gap-4 justify-center max-w-3xl mx-auto">
      <h2 className="text-left text-base md:text-2xl font-regular tracking-tighter">Key Benefits</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="space-y-2 border p-4 rounded-md flex gap-4 items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="shrink-0 w-12 h-12 text-white flex items-center justify-center rounded-md bg-primary">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
        <div className="max-w-5xl mx-auto">
                <InteractiveBentoGallery
                    mediaItems={mediaItems}
                    title="RMS"
                    description="RMS helps businesses track and analyze sales, payments, and transactions effortlessly. It is a cloud-based module, allowing you to access reports anytime, anywhere."
                />
        </div>

         <h3 className="text-2xl md:text-3xl font-regular tracking-tighter">Report that you can Generate</h3>
         <div className="flex flex-col gap-4 text-left max-w-3xl mx-auto">
            
            <ul className="list-disc list-inside ">
                    <li className="pb-2"><strong>Item Sales Report</strong> – Tracks sales performance of individual items, showing popular and profitable products.</li>
                    <li className="pb-2"><strong>Daily Sales Report</strong> – Summarizes total sales per day, helping businesses analyze trends over time.</li>
                    <li className="pb-2"><strong>Discount Report</strong> – Displays applied discounts, showing the impact of promotions on revenue.</li>
                    <li className="pb-2"><strong>Payment Type Report</strong> – Breaks down transactions by payment method (Cash, Credit Card, GCash, Grab, Food Panda).</li>
                    <li className="pb-2"><strong>Hourly Sales Report</strong> – Analyzes sales trends per hour to identify peak business periods.</li>
                    <li className="pb-2"><strong>BIR Report</strong> – Provides sales and tax-related records compliant with BIR regulations.</li>
                    <li className="pb-2"><strong>Government Discount Report</strong> – Tracks discounts applied to senior citizens, PWDs, and other government-mandated programs.</li>
                    <li className="pb-2"><strong>Void Transaction Report</strong> – Logs canceled or voided transactions for auditing and fraud detection.</li>
                    <li className="pb-2"><strong>Cashier Report</strong> – Shows the number of transactions handled by each cashier and their total sales performance.</li>
                    <li className="pb-2"><strong>Fast-Moving Items Report</strong> – Highlights products that sell frequently versus those that rarely sell to optimize inventory.</li>
                </ul>
            </div>
    </div>
  );
}