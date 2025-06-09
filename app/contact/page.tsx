"use client";

import ContactNew from "@/section/contact-new";

export default function Contact() {

  return (
    <div className="w-full bg-background flex pt-10">
        <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us!</h1>
            <p className="text-lg mb-6 text-center text-muted-foreground">We&apos;re here to help with any questions or concerns you may have. Our support team is available to assist you with any technical questions or concerns.</p>
            <div className="flex h-full gap-4 mb-5">
            <div className="border rounded-lg  flex-1 flex flex-col justify-center items-left p-10 gap-4">
             <ContactNew/>
                               
            </div>
            </div>
        </div>
     
    </div>
  );
}