"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContactNew from "@/section/contact-new";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Carousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-2xl bg-black">
                <img
                    src={images[currentIndex]}
                    alt={`Screenshot ${currentIndex + 1}`}
                    className="w-full h-auto object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white/80 hover:bg-white text-black rounded-full p-3 transition-all duration-300 shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white/80 hover:bg-white text-black rounded-full p-3 transition-all duration-300 shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="flex justify-center gap-2 mt-6">
                {images.map((_: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "bg-cyan-500 w-8"
                                : "bg-gray-400 w-2 hover:bg-gray-600"
                        }`}
                    />
                ))}
            </div>

            <div className="text-center mt-4 text-sm text-slate-600">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

export default function Ecommerce() {
    const [activeTab, setActiveTab] = useState<"buyers" | "admin">("buyers");

    const buyersPortalImages = [
        "/ecommerce/Screenshot 2026-02-18 132313.png",
        "/ecommerce/Screenshot 2026-02-18 132352.png",
        "/ecommerce/Screenshot 2026-02-18 132433.png",
        "/ecommerce/Screenshot 2026-02-18 132457.png",
        "/ecommerce/Screenshot 2026-02-18 132512.png",
        "/ecommerce/Screenshot 2026-02-18 132638.png",
    ];

    const adminDashboardImages = [
        "/ecommerce/Screenshot 2026-02-18 132850.png",
        "/ecommerce/Screenshot 2026-02-18 132915.png",
        "/ecommerce/Screenshot 2026-02-18 132937.png",
        "/ecommerce/Screenshot 2026-02-18 132952.png",
        "/ecommerce/Screenshot 2026-02-18 133004.png",
        "/ecommerce/Screenshot 2026-02-18 133022.png",
        "/ecommerce/Screenshot 2026-02-18 133036.png",
        "/ecommerce/Screenshot 2026-02-18 133049.png",
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full py-32 bg-slate-950 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-500/10 mb-6">
                            Web-based
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            E-Commerce Application
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300">
                            Elevate your online presence with a custom e-commerce solution tailored to your business needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="w-full container mx-auto px-4 py-16 space-y-20">
                {/* Key Features Section */}
                <section className="w-full space-y-12">
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
                            Key Features
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Everything You Need to Succeed Online
                        </h2>
                    </div>
                    
                    <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6">
                                <CardTitle className="text-2xl text-slate-900">Buyers Portal</CardTitle>
                                <p className="text-sm text-slate-600 mt-2">Streamlined shopping experience for customers</p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="space-y-4">
                                    {[
                                        { title: "Secure Account Management", desc: "User registration and authentication" },
                                        { title: "Product Catalog", desc: "Browse and discover products with advanced filtering" },
                                        { title: "Seamless Shopping Experience", desc: "Intuitive cart and checkout process" },
                                        { title: "Order Management", desc: "View history and track order status in real-time" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-cyan-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                            <div>
                                                <p className="font-semibold text-slate-900">{item.title}</p>
                                                <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6">
                                <CardTitle className="text-2xl text-slate-900">Admin Dashboard</CardTitle>
                                <p className="text-sm text-slate-600 mt-2">Complete business management and control</p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="space-y-4">
                                    {[
                                        { title: "Complete Inventory Control", desc: "Create, update, and manage product listings with ease" },
                                        { title: "Product Configuration", desc: "Set categories, pricing, and upload product images" },
                                        { title: "Order Processing", desc: "Review, accept, or reject orders with detailed information" },
                                        { title: "Payment & Logistics", desc: "Monitor payments and manage shipment tracking" },
                                        { title: "Business Analytics", desc: "Generate sales reports by category and customer insights" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-cyan-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                            <div>
                                                <p className="font-semibold text-slate-900">{item.title}</p>
                                                <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </article>
                </section>

                {/* Complete Solution Section */}
                <article className="w-full">
                    <div className="bg-slate-50 p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Complete Solution for Your E-Commerce Success</h3>
                        <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
                            <p><span className="font-bold">Our e-commerce platform</span> is built to scale your business by establishing a global online presence, you instantly connect with a massive pool of potential buyers that a physical store simply cannot reach.</p>
                            <p>Take full command of your operations with our <span className="font-bold">2-in-1 integrated solution</span>. You get a high-performing storefront for your customers and a powerful admin dashboard for yourself, providing absolute business control from a single application.</p>
                            <ul className="list-disc list-inside mt-4 space-y-3">
                                <li>
                                    <span className="font-bold">Gain Actionable Insights:</span> Stop guessing and start growing. Our comprehensive real-time reports provide the data you need to understand customer behavior and optimize your sales strategy for maximum profitability.
                                </li>
                                <li>
                                    <span className="font-bold">Enterprise-Grade Security:</span> We prioritize your data with advanced authentication and authorization protocols. This ensures that only you and your authorized staff can access the admin panel, keeping your business settings and customer information strictly protected.
                                </li>
                            </ul>
                            <p className="text-center font-bold text-slate-900 mt-6">Scale effortlessly and manage every aspect of your brand with a platform designed for growth, security, and total control.</p>
                        </div>
                    </div>
                </article>

                {/* Gallery Section */}
                <section className="w-full space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
                            Gallery
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore Our Platform</h2>
                    </div>
                    
                    <div className="w-full">
                        <div className="flex gap-4 justify-center mb-8">
                            <button
                                onClick={() => setActiveTab("buyers")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === "buyers"
                                        ? "bg-cyan-500 text-white shadow-lg hover:bg-cyan-600"
                                        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                                }`}
                            >
                                Buyers Portal
                            </button>
                            <button
                                onClick={() => setActiveTab("admin")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === "admin"
                                        ? "bg-cyan-500 text-white shadow-lg hover:bg-cyan-600"
                                        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                                }`}
                            >
                                Admin Dashboard
                            </button>
                        </div>

                        {activeTab === "buyers" && (
                            <motion.div
                                key="buyers"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <Carousel images={buyersPortalImages} />
                            </motion.div>
                        )}

                        {activeTab === "admin" && (
                            <motion.div
                                key="admin"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <Carousel images={adminDashboardImages} />
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>

            {/* CTA Section */}
            <section className="w-full mt-20 py-20 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                
                <div className="flex flex-col items-center justify-center gap-8 px-6 relative z-10">
                    <div className="text-center max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-lg md:text-xl text-slate-300">Start your e-commerce journey today and unlock unlimited growth potential. Our platform is designed to help you succeed.</p>
                    </div>
                    <Button asChild className="px-10 py-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl text-lg h-auto">
                        <a href="#contact">Schedule a Demo</a>
                    </Button>
                </div>
            </section>

            <div id="contact">
                <ContactNew />
            </div>
        </>
    );
}
