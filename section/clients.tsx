"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Motion components
const m = motion;

export default function Clients() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Client data - you can edit this
    const clientsData = [
        {
            id: 1,
            name: "Buddy's",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweWKQxTaNfdhUbz6SoVJvmhzkW21uyYk9JQ&s",
        },
        {
            id: 2,
            name: "Komoro",
            logo: "https://contents.smsupermalls.com/data/uploads/2020/07/KOMORO_JAPANESE_DINING.jpg",
        },
        {
            id: 3,
            name: "Aristocrat",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4hW6pMv22oCBcp423K4_j_VWCeBKO1H76Q&s",
        },
        {
            id: 4,
            name: "Padi's",
            logo: "https://static.wixstatic.com/media/382e5f_6592de39c6e54758860fe9a10bdc751d~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/382e5f_6592de39c6e54758860fe9a10bdc751d~mv2.jpg",
        },
        {
            id: 5,
            name: "BikePlus",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAN53PvNe_UtHG3I29qUqJNGtbzfsOaBvFVQ&s",
        },
        {
            id: 6,
            name: "Spyder",
            logo: "https://w7.pngwing.com/pngs/254/507/png-transparent-sunglasses-t-shirt-amazon-com-ford-brand-spyder-angle-text-logo-thumbnail.png",
        },
        {
            id: 7,
            name: "Ramen Kuroda",
            logo: "https://static.wixstatic.com/media/06d23c_f162c60a97de4b6dab0ee2094b7562e2~mv2.png/v1/fit/w_2500,h_1330,al_c/06d23c_f162c60a97de4b6dab0ee2094b7562e2~mv2.png",
        },
        {
            id: 8,
            name: "Shoe Salon",
            logo: "https://pbs.twimg.com/profile_images/676050978139799552/1XcgG_re_400x400.png",
        },
        {
            id: 9,
            name: "New Bistro Deli",
            logo: "https://contents.smsupermalls.com/data/uploads/2020/07/NEW_BISTRO_DELI.jpg",
        },
        {
            id: 10,
            name: "Lingnam",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpaF-8ih3sTQTioFSTTZbifU_H6QECT_9vA&s",
        },
        {
            id: 11,
            name: "Orange Bucket",
            logo: "https://theorangebucket.ph/wp-content/uploads/2021/09/logotobfooter-300x168.png",
        },
        {
            id: 12,
            name: "Milky Way Cafe",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREygI6qbP-SpciBzYeOJvq_Qm05gTMSWuT4g&s",
        },
        {
            id: 13,
            name: "UCC",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJH8c70qUQ4VXJGYlR78-uOe-87rBCmB8OQ&s",
        },
        {
            id: 14,
            name: "Fruitas",
          
            logo: "https://fruitasholdings.com/wp/wp-content/uploads/2024/08/Fruitas-1-300x200.png",
        },
        {
            id: 15,
            name: "BURNT BEAN",
          
            logo: "https://www.burntbean.ph/cdn/shop/files/bb_logo4.png?v=1715851231&width=600",
        },
        {
            id: 16,
            name: "Mazza",
          
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyFvzRDD7ZxVToFO2iwCB1CRGw0Kw6b_tjQ&s"
        },
        {
            id: 17,
            name: "CHEF JESSIE",
          
            logo: "https://cdn.viiworksdemo.com/logo/molh-cj-restaurants-logo.jpg"
        },
        {
            id: 18,
            name: "7 Luxe",
          
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgeIdLpZjyr4D3EIQB8wBrwGcjdea4NbwaA&s"
        },
        {
            id: 19,
            name: "Terry's",
          
            logo: "https://thepodium.com.ph/wp-content/uploads/2019/07/Untitled-design-6-768x480.jpg.webp"
        },
        {
            id: 20,
            name: "L`Entrecote",
          
            logo: "https://lentrecotemanila.com/wp-content/uploads/2018/05/lentrecote-black-on-red-2018.jpg"
        },
        {
            id: 21,
            name: "Kawa Ramen",
          
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNq21bGBvkZMaE9gLwQzt84E3F8wWziMNBA&s"
        },
        {
            id:22,
            name: "Balai Pandesal",
          
            logo: "https://www.balainifruitas.com/wp/wp-content/uploads/2021/11/logo-balai-pandesal.png"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
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

    return (
        <m.section 
            ref={ref}
            className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden "
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <m.div 
                    className="text-center mb-16 space-y-4"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">
                        Our Clients
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground  text-center">
                        Trusted by leading brands and businesses across industries
                    </p>
                </m.div>

                {/* Marquee effect - first row */}
                <div className="relative overflow-hidden mb-12 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" />
                    
                    <m.div 
                        className="flex space-x-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {clientsData.slice(0, Math.ceil(clientsData.length / 2)).map((client) => (
                            <ClientLogo key={client.id} client={client} />
                        ))}
                        {clientsData.slice(0, Math.ceil(clientsData.length / 2)).map((client) => (
                            <ClientLogo key={`repeat-${client.id}`} client={client} />
                        ))}
                    </m.div>
                </div>

                {/* Marquee effect - second row (reverse direction) */}
                <div className="relative overflow-hidden py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none" />
                    
                    <m.div 
                        className="flex space-x-16"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {clientsData.slice(Math.ceil(clientsData.length / 2)).map((client) => (
                            <ClientLogo key={client.id} client={client} />
                        ))}
                        {clientsData.slice(Math.ceil(clientsData.length / 2)).map((client) => (
                            <ClientLogo key={`repeat-${client.id}`} client={client} />
                        ))}
                    </m.div>
                </div>
            </div>
        </m.section>
    );
}

// Define client type
interface Client {
    id: number;
    name: string;
    logo: string;
}

// Client logo component
function ClientLogo({ client }: { client: Client }) {
    return (
        <div className="flex items-center justify-center w-40 h-40 bg-white rounded-xl shadow-sm p-6 flex-shrink-0 transition-all duration-300 hover:shadow-md">
            <div className="relative w-full h-full">
                <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
