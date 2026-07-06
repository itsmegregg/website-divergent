"use client";

import { motion } from "framer-motion";
import { PhoneCall, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-12">
            <Image
              src="/divergentLogo-white.png"
              alt="Divergent Technologies Phils Inc."
              width={400}
              height={150}
              priority
              className="h-auto w-56 sm:w-64 lg:w-80"
            />
          </motion.div>

          {/* Trust Badge */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-slate-200 bg-white/5 border border-white/10">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
              Trusted by 200+ businesses across Philippines
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            POS Solutions Built For
            <span className="block text-cyan-400 mt-2"> Speed, Security & Growth </span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 mb-12 max-w-xl">
            Streamline transactions, manage inventory, and gain actionable insights—all in one trusted platform.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6 text-base h-auto">
                Book a Demo
                <PhoneCall className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base h-auto bg-transparent"
              >
                Our Services
                <MoveRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* 3 Feature Pills */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {[
              { label: "Fast Transactions", desc: "Up to 50% faster checkout" },
              { label: "Secure & BIR Compliant", desc: "Complete tax and reporting features" },
              { label: "24/7 Support", desc: "Local team ready to help" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-all hover:-translate-y-1">
                <h3 className="font-semibold text-white mb-2 text-lg">{item.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}