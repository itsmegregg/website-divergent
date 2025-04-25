"use client";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, Headphones, LifeBuoy, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function Support() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const supportFeatures = [
        {
            icon: <PhoneCall className="w-6 h-6" />,
            title: "Direct Hotline",
            description: "Immediate connection with our support team during operational hours"
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "Remote Assistance",
            description: "Real-time screen sharing and troubleshooting sessions"
        },
        {
            icon: <LifeBuoy className="w-6 h-6" />,
            title: "Priority Escalation",
            description: "Critical issue handling with dedicated support engineers"
        }
    ];

    const schedule = [
        { day: "Monday - Sunday", time: "9:00 AM - 9:00 PM" }
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
            transition: { 
                type: "spring", 
                stiffness: 120,
                damping: 20
            }
        }
    };

    const cardHover = {
        hover: { 
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 15
            } 
        }
    };
    
    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };
    
    const arrowVariants = {
        rest: { x: 0 },
        hover: { x: 5, transition: { type: "spring", stiffness: 500 } }
    };

    return (
        <m.section 
            ref={ref}
            className="relative py-24 px-4 sm:px-6 lg:px-8 rounded-md overflow-hidden "
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-15 ">
                    <div className="absolute inset-0" />
                </div>
                
                {/* Decorative blobs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-50" />

                <m.div 
                    className="text-center mb-20 space-y-6 relative z-10"
                    variants={itemVariants}
                >
                   
                    <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">
                         Support
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground  text-center">
                        Professional assistance available daily from 9 AM to 9 PM through multiple channels
                    </p>
                </m.div>

                <m.div 
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                >
                    {/* Support Channels */}
                    <m.div 
                        className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                    >
                        {supportFeatures.map((feature, index) => (
                            <m.div
                                key={index}
                                className="group relative"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                                
                                <m.div
                                    className="relative h-full bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-neutral-100/50 shadow-sm"
                                    variants={cardHover}
                                    whileHover="hover"
                                >
                                    <div className="mb-5 p-3 bg-blue-50 text-blue-600 rounded-xl inline-block">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <div className="mt-6">
                                        <m.button 
                                            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                                            variants={buttonVariants}
                                            initial="rest"
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            Connect Now
                                            <m.span variants={arrowVariants}>
                                                <ArrowRight className="h-4 w-4" />
                                            </m.span>
                                        </m.button>
                                    </div>
                                </m.div>
                            </m.div>
                        ))}
                    </m.div>

                    {/* Schedule */}
                    <m.div 
                        className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-blue-100/50 shadow-sm overflow-hidden"
                        variants={itemVariants}
                    >
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-50" />
                        <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">
                                Operational Hours
                            </h3>
                        </div>
                        
                        <div className="space-y-4">
                            {schedule.map((item, index) => (
                                <m.div 
                                    key={index} 
                                    className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/30 hover:bg-blue-50/50 transition-colors duration-200"
                                    whileHover={{ x: 5 }}
                                >
                                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-neutral-800">{item.day}</p>
                                        <p className="text-neutral-600 text-sm">{item.time}</p>
                                    </div>
                                </m.div>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-blue-100">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <p className="text-sm text-neutral-600">
                                    Average response time: <span className="font-medium text-blue-600">&lt;2 minutes</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <p className="text-sm text-neutral-600">
                                    Service available 365 days/year
                                </p>
                            </div>
                        </div>
                        </div>
                    </m.div>
                </m.div>
            </div>
        </m.section>
    )
}