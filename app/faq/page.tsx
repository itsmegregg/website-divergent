"use client";
import { Button } from "@/components/ui/button";
import FaqSection from "./FaqSection";
import Link from "next/link";

import { MessageCircleQuestion } from "lucide-react";
import ContactNew from "@/section/contact-new";

export default function Faq () {

    return(
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <FaqSection />

        <div className="w-full max-w-7xl mx-auto px-4 py-24">
            <div className="bg-slate-950 rounded-2xl p-12 text-center relative overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <MessageCircleQuestion  className="size-10 text-cyan-400 mx-auto mb-6"/>
                    <h2 className="text-3xl font-bold mb-4 text-white">Still have questions?</h2>
                    <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
                        Can&apos;t find the answer you&apos;re looking for? Our support team is here to help with any technical questions or concerns.
                    </p>
                    <Link href="/#contact">
                        <Button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-6 text-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

        <div id="contact">
            <ContactNew />
        </div>
      </div>
    )
  }
