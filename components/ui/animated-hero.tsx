"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import router from "next/router";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "awesome", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-r from-slate-600 to-indigo-600 pl-5 pr-5">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
      
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-5xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50 text-white">Divergent Technologies Phils Inc. is </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold p-1 bg-blue-500 rounded-lg text-white mb-2"
                    initial={{ opacity: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
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
