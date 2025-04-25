"use client"
import Compatibility from '@/section/compatibility';
import ContactUs from '@/section/contact-us';
import { motion } from 'framer-motion';
import { Computer, Tablet } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';


const servicesItems = [
    {
        title: "FastPos",
        description: "Created with fast-food and quick-service establishments in mind. FastPOS takes your dine-in or take-out business to the next level. This cutting-edge software is ideal for food stalls, cafes, and any eatery that values speed and efficiency. With FastPOS, you can swiftly process orders, manage multiple payment options, and track your inventory seamlessly, ensuring your customers receive their favorite meals without delay.",
        slug: "/fast-pos",
        image: "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon:[
            <Computer/>, <Tablet />
        ],
        clients:["https://upload.wikimedia.org/wikipedia/en/5/56/Potato_Corner_Logo_2023.png", 
            "https://contents.smsupermalls.com/data/uploads/2020/07/KOMORO_JAPANESE_DINING.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwUeBm0FTAAW9-FsyM2hEmimW70tXGmMDaA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlIzDlmWg3ce_0NOT8lCUioUkOhiE6V0Lwg&s",
            "https://coffeenow.ph/wp-content/uploads/2018/05/Chapter-Coffee-square-logo.jpg",
            "https://static.wixstatic.com/media/382e5f_88819e2acbbe4964a45eb56d0072c703~mv2.png/v1/fit/w_500,h_500,q_90/file.png"

        ]

    },
    {
        title: "Food Connect",
        description: "Designed exclusively for table service restaurants. Food Connect is the ultimate solution for establishments focused on providing an exceptional dining experience. From managing reservations and tracking table availability to efficiently processing orders and splitting bills, Food Connect empowers your staff to deliver impeccable service, creating a seamless connection between your customers and their culinary desires.",
        slug: "/food-connect",
        image: "https://images.pexels.com/photos/12935048/pexels-photo-12935048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon:[
            <Computer/>, <Tablet />
        ],
        clients: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mY6jCQs5ceFZTyea9gVMFJUdVUjXrp04KQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4hW6pMv22oCBcp423K4_j_VWCeBKO1H76Q&s",
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOb0UNKg57hNgdujHkDvD_V1EO6DHTgb97w&s',
            "https://static.wixstatic.com/media/06d23c_f162c60a97de4b6dab0ee2094b7562e2~mv2.png/v1/fit/w_2500,h_1330,al_c/06d23c_f162c60a97de4b6dab0ee2094b7562e2~mv2.png",
            "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/354218829_259452236767430_4159741842333429281_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGIs2eP4vb1TcT1ClSvaFlxLzH7EEz-BwovMfsQTP4HCrH_Wlrvvbn1NwORy4xIKNk&_nc_ohc=97ebUgS_SHsQ7kNvwH0U1R3&_nc_oc=Adk8eN8XX2k7kgwhDK3A3am55xpTjl5cJFIj0LtjTTlq6DdChSELlx-a7dkmU-9_UaA&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=uUYRm7wfhc2x2OQOGqqP8Q&oh=00_AfF7hLbYi7aWKYv88wF9NCHzwu7156_dgxVRCSIlisl7AA&oe=67FA7D5A"
        ]
    },
    {
        title: "Retail Assist",
        description: "Tailored specifically for retail stores such as pharmacies, shoe stores, and accessories boutiques. Retail Assist streamlines your operations, enhances customer experience, and optimizes sales. With its intuitive interface and comprehensive features, it empowers you to efficiently manage inventory, process transactions, and provide exceptional service to your valued customers.",
        slug: "/retail-assist",
        image: "https://images.pexels.com/photos/8476590/pexels-photo-8476590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon:[
            <Computer/>, <Tablet />
        ],
        clients:[
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/Kipling_wordmark.svg",
            "https://cdn.shopify.com/s/files/1/0066/0471/8198/files/Suki_Logo.jpg?height=628&pad_color=fff&v=1613672899&width=1200",
            "https://contents.smsupermalls.com/data/uploads/2020/07/BIKE_PLUS.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uyv7Iqq3NslwVfvmUG9LuHWTdQ-g2pKsfw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aMINiUe5Vkh1ZirEwa7bOPz552TvKkLjfw&s",
            "https://dogsandthecityph.com/cdn/shop/files/dogs_and_the_city1-03_2300x.png?v=1614282103",




        ]
    },
    {
        title: "E-Commerce",
        description: "E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. The system will surely help you boost your marketing strategy and at the same time to jump start your business innovation. It composes of 3 modules namely: a. Guest Module (online ordering) b. Branch Module (Monitoring of online orders) c. Administration Module (Maintenance and Monitoring of Branches module).",
        slug: "/e-commerce",
        image: "https://images.pexels.com/photos/5865610/pexels-photo-5865610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon:[
            <Computer/>, <Tablet />
        ]
    }
];


const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};



const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
        duration: 0.3,
        ease: "easeInOut"
    }
};

export default function Services() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            } 
        }
    };

    return (
        <section className="bg-base-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl font-regular tracking-tighter"
                        whileHover={{ scale: 1.02 }}
                    >
                        Services
                    </motion.h1>
                    <motion.div 
                        className="w-16 h-0.5 bg-primary mx-auto"
                        whileHover={{ scaleX: 1.2 }}
                    />
                </motion.div>
                
                <motion.div
                    className="mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <motion.p className='text-lg text-center mb-12 max-w-4xl mx-auto'>
                        Introducing our versatile range of Point of Sale (POS) software solutions designed to revolutionize the way you do business:
                    </motion.p>
                </motion.div>
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {servicesItems.map((item, index) => (
                           <Link href={`/services/${item.slug}`} key={index}>
                        <motion.div 
                            className="flex flex-row card  w-full p-6 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            
                            variants={item}
                            whileHover={hoverEffect} 
                        >
                            
                                <div className='flex-1'>
                                    <Image src={item.image} alt={item.title} width={500} height={500}/> 
                                </div>
                                <div className='flex-1'>
                                    <motion.h2 
                                        className='text-2xl font-semibold mb-3 pb-2 border-b-2 border-primary w-fit'
                                        whileHover={{ x: 5 }}
                                    >
                                        {item.title}
                                    </motion.h2>
                                    <motion.p className='text-base'>
                                        {item.description}
                                    </motion.p>
                              <br/>
                                     {item.title !== 'E-Commerce' && (
                                     <div>
                                        <h1 className="text-base font-semibold">Notable Clients</h1>
                                     <div className='flex flex-row gap-4'>
                                       {item.clients && item.clients.map((client, index) => (
                                            <Image  className="w-16 object-contain " src={client} alt={item.title} width={200} height={200} key={index}/>
                                        ))}
                                       </div>

                                     </div>
                                     )}
                                </div>  
                        </motion.div>
                            </Link>
                    ))}
                </motion.div>
                
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.p className='text-lg'>
                        Enhance your operations, elevate customer satisfaction, and maximize your business potential with our industry-specific POS software solutions. Choose the perfect software that suits your needs and join countless businesses who have already revolutionized their operations with our innovative technology. Invest in success today!
                    </motion.p>
                </motion.div>
                <br/>
                <Compatibility/>
            </div>
            <ContactUs/>
        </section>
    );
}