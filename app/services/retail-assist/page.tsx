"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Compatibility from "@/section/compatibility";
import ContactNew from "@/section/contact-new";
import RetailAssistClient from "@/section/retailAssist-client";

export default function RetailAssist() {
  return (
    <div className="text-center mb-20 space-y-6 relative  pt-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">Retail<span className="bg-orange-500 rounded px-1 text-gray-50">Assist</span></h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        Empower Your Retail Business with Retail Assist POS
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
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

      <Compatibility/>
      <RetailAssistClient/>
      <ContactNew/>
    </div>
  );
}
