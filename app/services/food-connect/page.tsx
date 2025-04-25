"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Compatibility from "@/section/compatibility";
import ContactUs from "@/section/contact-us";

// Removed unused icon and motion imports
// Removed FoodConnectClient import as its file was deleted

export default function FoodConnect() {
  return (
    <div className="text-center mb-20 space-y-6 relative  pt-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">Food<span className="bg-orange-500 rounded px-1 text-gray-50">Connect</span></h2>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center">
        Elevate Your Restaurant Operations with Seamless Integration
      </p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      </div>
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

      <Compatibility/>
      {/* FoodConnectClient section removed */}
      <ContactUs/>
    </div>
  );
}
