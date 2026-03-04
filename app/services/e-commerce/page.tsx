"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContactNew from "@/section/contact-new";
import { useState } from "react";

function Carousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

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
                                ? "bg-blue-600 w-8"
                                : "bg-gray-400 w-2 hover:bg-gray-600"
                        }`}
                    />
                ))}
            </div>

            <div className="text-center mt-4 text-sm text-gray-600">
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
            <main className="w-full container mx-auto px-4 py-8 space-y-5">
                <header className="flex gap-4 w-full overflow-hidden items-center">
                    <img
                        src="/ecommerce/5865.jpg"
                        alt="E-commerce application"
                        className="size-140 object-cover flex-2 rounded-4xl bg-black"
                    />
                    <div className="flex-2 flex flex-col">
                        <Badge className="text-2xl w-fit">Web-based</Badge>
                        <h1 className="text-6xl font-bold">E-Commerce Application</h1>
                        <p className="text-2xl text-slate-700 font-medium tracking-wide mt-2">Elevate your online presence with a custom e-commerce solution tailored to your business needs.</p>
                    </div>
                </header>
                <section className="w-full space-y-8 mt-10">
                    <div className="flex items-center gap-8 justify-center mb-15">
                        <hr className="w-15 border-2 border-black" />
                        <p className="text-5xl font-bold tracking-wide text-center">Key Features</p>
                        <hr className="w-15 border-2 border-black" />
                    </div>
                    <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 p-3">
                                <CardTitle className="text-2xl text-blue-900">Buyers Portal</CardTitle>
                                <p className="text-sm text-blue-700 mt-2">Streamlined shopping experience for customers</p>
                            </CardHeader>
                            <CardContent className="">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Secure Account Management</p>
                                            <p className="text-sm text-slate-600 mt-1">User registration and authentication</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Product Catalog</p>
                                            <p className="text-sm text-slate-600 mt-1">Browse and discover products with advanced filtering</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Seamless Shopping Experience</p>
                                            <p className="text-sm text-slate-600 mt-1">Intuitive cart and checkout process</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Order Management</p>
                                            <p className="text-sm text-slate-600 mt-1">View history and track order status in real-time</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-purple-50 to-yellow-100 p-3">
                                <CardTitle className="text-2xl text-yellow-900">Admin Dashboard</CardTitle>
                                <p className="text-sm text-yellow-700 mt-2">Complete business management and control</p>
                            </CardHeader>
                            <CardContent className="">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Complete Inventory Control</p>
                                            <p className="text-sm text-slate-600 mt-1">Create, update, and manage product listings with ease</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Product Configuration</p>
                                            <p className="text-sm text-slate-600 mt-1">Set categories, pricing, and upload product images</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Order Processing</p>
                                            <p className="text-sm text-slate-600 mt-1">Review, accept, or reject orders with detailed information</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Payment & Logistics</p>
                                            <p className="text-sm text-slate-600 mt-1">Monitor payments and manage shipment tracking</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <p className="font-semibold text-slate-900">Business Analytics</p>
                                            <p className="text-sm text-slate-600 mt-1">Generate sales reports by category and customer insights</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </article>
                </section>
                <article className="w-full space-y-8 mt-20">
                    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Complete Solution for Your E-Commerce Success</h3>
                        <div className="space-y-4 text-slate-700 text-justify text-lg tracking-wide leading-7">
                            <span className="font-bold">Our e-commerce platform</span> is built to scale your business by establishing a global online presence, you instantly connect with a massive pool of potential buyers that a physical store simply cannot reach.
                            Take full command of your operations with our <span className="font-bold">2-in-1 integrated solution</span>. You get a high-performing storefront for your customers and a powerful admin dashboard for yourself, providing absolute business control from a single application.
                            <ul className="list-disc list-inside mt-4">
                                <li>
                                    <span className="font-bold">Gain Actionable Insights:</span> Stop guessing and start growing. Our comprehensive real-time reports provide the data you need to understand customer behavior and optimize your sales strategy for maximum profitability.
                                </li>
                                <li>
                                    <span className="font-bold">Enterprise-Grade Security:</span> We prioritize your data with advanced authentication and authorization protocols. This ensures that only you and your authorized staff can access the admin panel, keeping your business settings and customer information strictly protected.
                                </li>
                            </ul>
                            <p className="text-center font-bold">Scale effortlessly and manage every aspect of your brand with a platform designed for growth, security, and total control.</p>
                        </div>
                    </div>
                </article>
                <section className="w-full space-y-8 mt-20">
                    <p className="text-5xl font-bold tracking-widest text-center uppercase">Gallery</p>
                    <Separator style={{ height: '2px' }} />
                    <div className="w-full">
                        <div className="flex gap-4 justify-center mb-8">
                            <button
                                onClick={() => setActiveTab("buyers")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === "buyers"
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                            >
                                Buyers Portal
                            </button>
                            <button
                                onClick={() => setActiveTab("admin")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === "admin"
                                        ? "bg-yellow-600 text-white shadow-lg"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                            >
                                Admin Dashboard
                            </button>
                        </div>

                        {activeTab === "buyers" && (
                            <div className="space-y-4">
                                <Carousel images={buyersPortalImages} />
                            </div>
                        )}

                        {activeTab === "admin" && (
                            <div className="space-y-4">
                                <Carousel images={adminDashboardImages} />
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <section className="w-full mt-20 py-16 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="flex flex-col items-center justify-center gap-8 px-6">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-blue-100 max-w-2xl">Start your e-commerce journey today and unlock unlimited growth potential. Our platform is designed to help you succeed.</p>
                    </div>
                    <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                        Schedule a Demo
                    </button>
                </div>
            </section>
            <ContactNew />
        </>
    );
}