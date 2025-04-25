"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MonitorCheck, UtensilsCrossed, ShoppingCart, Cloud } from "lucide-react";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const cardData = [
        {
            icon: <MonitorCheck className="w-6 h-6" />,
            title: "Fast POS",
            description: "Advanced POS system tailored for fast-food and QSR operations. Features dual-mode interface for touch-screen and regular monitors with cloud synchronization.",
            
        },
        {
            icon: <UtensilsCrossed className="w-6 h-6" />,
            title: "Food Connect",
            description: "Integrated F&B ecosystem connecting front-end operations, kitchen displays, and management portals through real-time network synchronization.",
          
        },
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Retail Assist",
            description: "Omni-channel retail solution with AI-powered inventory management, smart checkout, and customer behavior analytics.",
          
        },
        {
            icon: <Cloud className="w-6 h-6" />,
            title: "E-Commerce",
            description: "Cloud-based commerce platform with multi-vendor support, AR product visualization, and integrated payment gateways.",
          
        }
    ];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 120 }
        }
    };

    const cardHover = {
        hover: { 
            y: -8,
            scale: 1.02,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 10
            } 
        }
    };

    return (
        <motion.section 
            ref={ref}
            className=" py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50/50 to-white"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="text-center mb-16 space-y-4"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">
                        Our Services
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground  text-center">
                        Customizable enterprise solutions powered by adaptive AI and real-time analytics engines
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="group  h-full"
                            variants={itemVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] blur-xl"
                           />
                            
                            <motion.div
                                className=" h-full bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-neutral-100/50 shadow-sm hover:shadow-md transition-all"
                                variants={cardHover}
                            >
                                <div className={`mb-4 inline-block p-3 rounded-lg bg-primary text-white`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="mt-4 border-t border-neutral-100 pt-4">
                                    <button className="text-sm font-medium text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5">
                                        Explore Features
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}