"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Wag kang boboto ng magnanakaw tangina mo. wag ka din boboto ng trapo

      </p>
      <p className="text-lg mb-6">Marcos-Duterte Itakwil</p>
      <img 
        className="w-100 h-100 mb-6"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKndelzExnn_vpd3ecvbo1JB3FOaadTspyw&s"
        alt="Divergent Logo"
      />
      <Link href="/" className="text-primary underline text-lg">
        Go back home
      </Link>
    </motion.div>
  );
}