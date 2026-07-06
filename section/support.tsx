"use client";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, Headphones, LifeBuoy, Clock, CheckCircle } from "lucide-react";

export default function Support() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <m.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
                        24/7 SUPPORT
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support You Can Trust</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Professional assistance available daily from 9 AM to 9 PM through multiple channels.
                    </p>
                </m.div>

                <m.div 
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView={isInView ? "visible" : "hidden"}
                    viewport={{ once: true }}
                >
                    {/* Support Channels */}
                    <m.div 
                        className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                    >
                        {supportFeatures.map((feature, index) => (
                            <m.div
                                key={index}
                                variants={itemVariants}
                            >
                                <div className="h-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="mb-6 p-4 bg-cyan-100 text-cyan-700 rounded-xl inline-block">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </m.div>

                    {/* Schedule */}
                    <m.div 
                        variants={itemVariants}
                    >
                        <div className="relative bg-slate-900 text-white rounded-2xl p-8 overflow-hidden h-full">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl" />
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-4 bg-cyan-500 text-white rounded-xl">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Operational Hours
                                    </h3>
                                </div>
                                
                                <div className="space-y-4 flex-1">
                                    {schedule.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-white">{item.day}</p>
                                                <p className="text-slate-300 text-sm">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <p className="text-sm text-slate-300">
                                            Average response time: <span className="font-semibold text-cyan-300">&lt;2 minutes</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <p className="text-sm text-slate-300">
                                            Service available 365 days/year
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </m.div>
            </div>
        </section>
    )
}