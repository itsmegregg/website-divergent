"use client";

// removed unused icon imports from lucide-react
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import FastPOSClient from "@/section/fastpos-client";
import Compatibility from "@/section/compatibility";
import ContactUs from "@/section/contact-us";
import ContactNew from "@/section/contact-new";

export default function FastPOS() {
  return (
    <div className="text-center mb-20 space-y-6 relative  pt-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">Fast<span className="bg-orange-500 rounded px-1 text-gray-50">POS</span></h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        Specifically developed to cater to the operational needs of fast-food and quick-service stores, enhancing the speed and efficiency of their services. It seamlessly functions with both touch-screen monitors for user-friendly operation and regular monitors for maximum flexibility.
      </p>
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      </div>
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
      <Compatibility/>
      <FastPOSClient/>
  <ContactNew/>
    </div>
  );
}
