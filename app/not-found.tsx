"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
     <h1 className="text-6xl font-bold mb-4">404</h1>
     <Button
      onClick={() => window.location.href = "/"}
     >Back to Home</Button>
    </motion.div>
  );
}