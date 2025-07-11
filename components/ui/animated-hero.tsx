"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import router from "next/router";
import Link from "next/link";

function Hero() {



  return (
    <div className="w-full bg-gradient-to-r from-slate-600 to-indigo-600 pl-5 pr-5">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
      
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-5xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50 text-white">Divergent Technologies Phils Inc. is </span>
              
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center">
            Empower your business with a POS solution built for speed, security, and growth. Our cutting-edge hardware and software streamline transactions, inventory, and customer insights—scaling effortlessly for businesses of all sizes.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button  className="gap-4" variant="outline">
              Book A Demo <PhoneCall className="w-4 h-4" />
            </Button>
          <Link href="/services">
          <Button  className="gap-4" variant="outline">
              Our services <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
