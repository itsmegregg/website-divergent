"use client";

import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full bg-gradient-to-r from-slate-600 to-indigo-600 pl-5 pr-5">
      <div className="container mx-auto">
        <motion.div
          className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex gap-4 flex-col">
            <motion.h1
              className="text-7xl md:text-5xl max-w-3xl tracking-tighter text-center font-regular"
              variants={itemVariants}
            >
              <span className="text-spektr-cyan-50 text-white">Divergent Technologies Phils Inc. </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center"
              variants={itemVariants}
            >
              Empower your business with a POS solution built for speed, security, and growth. Our cutting-edge hardware and software streamline transactions, inventory, and customer insights—scaling effortlessly for businesses of all sizes.
            </motion.p>
          </div>
          <motion.div className="flex flex-row gap-3" variants={itemVariants}>
            <Button className="gap-4" variant="outline">
              Book A Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Link href="/services">
              <Button className="gap-4" variant="outline">
                Our services <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export { Hero };
