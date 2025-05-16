"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  CheckCircle, 
  Briefcase, 
  Lightbulb, 
  Users, 
  Building, 
  ShieldCheck,
  BarChart3,
  Settings,
  Headset,
  GitCompareArrows,
  Target,
  Pin,
  Map,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ContactNew from "@/section/contact-new";

// Animation variants with smoother easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0] // Smoother cubic bezier
    } 
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0],
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

// Enhanced Data arrays
const partnerBenefits = [
  {
    title: "BIR-Compliant POS",
    description: "Government-certified systems for seamless tax reporting and peace of mind.",
    longDescription: "Our POS systems are fully accredited by the Bureau of Internal Revenue (BIR), ensuring your transactions are recorded accurately and comply with all government regulations. This simplifies your tax processes and minimizes audit risks.",
    icon: ShieldCheck, // Component 
    color: "text-green-500"
  },
  {
    title: "End-to-End Solutions",
    description: "Hardware, software, installation, training & lifetime support.",
    longDescription: "We provide a complete package: top-quality hardware, intuitive software, professional installation, comprehensive training for your staff, and ongoing lifetime support to ensure your operations run smoothly.",
    icon: Briefcase,
    color: "text-blue-500"
  },
  {
    title: "Data-Driven Insights",
    description: "Real-time inventory, sales analytics & purchasing tools for growth.",
    longDescription: "Leverage powerful analytics to understand your sales trends, manage inventory effectively, and make informed purchasing decisions. Our tools turn data into actionable strategies for business expansion.",
    icon: BarChart3,
    color: "text-purple-500"
  },
  {
    title: "Nationwide Trust",
    description: "Preferred POS provider for top Philippine malls & enterprises.",
    longDescription: "Join a vast network of businesses, from SMEs to large enterprises and major malls across the Philippines, that trust Divergent Technologies for reliable and efficient POS solutions.",
    icon: Users,
    color: "text-yellow-500"
  },
  {
    title: "Future-Ready Tech",
    description: "Scalable systems designed to evolve with your business needs.",
    longDescription: "Our technology is built for the future. As your business grows, our POS systems can scale accordingly, incorporating new features and integrations to keep you competitive.",
    icon: Lightbulb,
    color: "text-teal-500"
  },
];

const businessSolutionsTabs = [
  {
    value: "pos-systems",
    label: "POS Systems",
    icon: Settings,
    content: [
      "BIR-Accredited POS Software & Hardware",
      "Touchscreen & Mobile POS Solutions",
      "Integrated Payment Processing",
      "Barcode Scanners & Receipt Printers",
    ],
    image: "https://images.pexels.com/photos/12935094/pexels-photo-12935094.jpeg",
    alt: "Modern POS System in a retail store"
  },
  {
    value: "management-tools",
    label: "Management Tools",
    icon: GitCompareArrows,
    content: [
      "Advanced Inventory Management",
      "Supply Chain Optimization",
      "Sales Analytics & Reporting",
      "Customer Relationship Management (CRM) Lite",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Team collaborating on business management tools"
  },
  {
    value: "support-services",
    label: "Support & Services",
    icon: Headset,
    content: [
      "Secure Cloud Integration & Backups",
      "Nationwide Technical Support",
      "On-site Installation & Training",
      "Preventive Maintenance & System Upgrades",
    ],
    image: "https://images.unsplash.com/photo-1602665742701-389671bc40c0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Technical support agent assisting a client"
  }
];

const expertiseAdvantages = [
  { 
    title: "Seamless Implementation", 
    description: "Expert installation, comprehensive training, and smooth onboarding for your team.",
    icon: Settings
  },
  { 
    title: "Dedicated Ongoing Support", 
    description: "Maximize system performance with our responsive and knowledgeable support team.",
    icon: Headset
  },
  { 
    title: "Strategic Tech Partnerships", 
    description: "Access best-in-class solutions through our collaborations with leading technology providers.",
    icon: Users
  },
  { 
    title: "Customizable & Scalable", 
    description: "Systems tailored to your current needs and designed to adapt for future growth.",
    icon: GitCompareArrows
  }
];

const trustedMalls = [
  { name: "SM Supermalls", logo: "/logos/sm-logo.png" }, // Replace with actual logo paths
  { name: "Ayala Malls", logo: "/logos/ayala-logo.png" },
  { name: "Robinsons Malls", logo: "/logos/robinsons-logo.png" },
  { name: "Rockwell", logo: "/logos/rockwell-logo.png" },
  { name: "Megaworld Lifestyle Malls", logo: "/logos/megaworld-logo.png" },
  { name: "Festival Mall", logo: "/logos/festival-logo.png" },
  { name: "Shangri-La Plaza", logo: "/logos/shangrila-logo.png" },
  { name: "Ortigas Malls", logo: "/logos/ortigas-logo.png" },
];

const forData = [
    { name: "Retail Stores", icon: Building },
    { name: "Restaurants & Cafes", icon: Briefcase }, // Example, use appropriate icons
    { name: "Supermarkets", icon: Users },
    { name: "Services (Salons, Spas)", icon: Settings },
    { name: "And Many More!", icon: Lightbulb },
];

export default function WhoAreWe() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[750px] w-full mx-auto p-20 flex bg-stone-50">
        <div className="flex-1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="m-10 h-full flex flex-col justify-center items-start"
          >
            <Badge className="bg-blue-500 text-sm">
              Divergent Technologies Phils., INC.
            </Badge>
            <motion.h1
              variants={itemVariants}
              className="text-7xl font-bold"
            >
              Who We 
              <span className="bg-orange-500 rounded-lg px-3 text-gray-50 ml-3">
                Are?
              </span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold text-neutral-600 pt-3"
            >
              Pioneering Business Solutions in the Philippines for over 27 years.
            </motion.h2>
          </motion.div>
        </div>
        <div className="flex-1 bg-neutral-50">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              variants={itemVariants}
              src='/illustrator/hand-drawn-business-communication-illustration.png'
              className="w-full h-auto"
              alt="illustrator"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-5">
        <motion.h2
          variants={itemVariants}
          className="text-xl font-semibold text-neutral-700"
        >
          Founded in July 1997, DTPI is a premier BIR-accredited POS provider, delivering end-to-end business and financial solutions tailored for a diverse range of industries.
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto py-6"
        >
          {forData.map((data, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <div className="border-2 rounded">
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <data.icon className="w-10 h-10 text-primary mb-2" />
                  <span className="text-slate-700 text-lg font-semibold">{data.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md m-10 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/6 p-6 flex justify-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="md:w-5/6 p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
              We empower businesses with cost-effective, fully integrated POS systems—combining cutting-edge hardware, intelligent software, and reliable support to drive efficiency, compliance, and growth.
            </h2>
          </div>
        </div>
      </motion.div>

      </div>

      <div className="max-w-7xl mx-auto flex   w-full">
          <div className="flex-1 flex flex-col  justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-slate-800 ">
            Why Partner with  
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-blue-600 ">Divergent Technologies?</h1>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {partnerBenefits.map((data,index)=>(
                <div className="border rounded-lg p-4 mb-3 w-full max-w-md  flex items-center space-x-3" key={index}>
              
                 <span className="">
                 {React.createElement(data.icon)}
                 </span>
                  <div className="">
                  <h1 className="text-lg font-semibold">{data.title}</h1>
                  <h2 className="text-base text-gray-500">{data.description}</h2>
                  </div>
                </div>
              ))}
          </div>
      </div>

      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 py-24 mb-24 relative"
      >
        {/* Premium background with layered design */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 border border-blue-100/50 rounded-3xl"></div>
        </div>
        
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-blue-300 mr-4"></div>
            <Badge className="bg-blue-100/80 text-blue-700 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              Industry Leaders
            </Badge>
            <div className="h-[1px] w-12 bg-blue-300 ml-4"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight text-center">
            Our <span className="text-blue-600">Expertise</span>, Your Advantage
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto text-center">
            Leverage our deep industry knowledge and technical proficiency for superior business outcomes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          {/* Left side - Image with overlay content */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Team of experts collaborating" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-3 h-[1px] flex-grow bg-white/30"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Dedicated Professionals</h3>
                <p className="text-blue-50 text-base leading-relaxed max-w-md">
                  Our team combines decades of industry experience with cutting-edge technical knowledge to deliver exceptional results for your business.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-3xl font-bold text-white">27+</p>
                    <p className="text-blue-100 text-sm">Years Experience</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-blue-100 text-sm">Clients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Cards */}
          <motion.div 
            className="lg:col-span-7 space-y-5" 
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {expertiseAdvantages.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden bg-white/90 backdrop-blur-sm group">
                    <CardHeader className="pb-2 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                      <CardTitle className="text-xl flex items-center text-slate-800 font-bold">
                        <div className="bg-blue-50 p-3 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                          {React.createElement(item.icon, { className: "w-6 h-6 text-blue-600 flex-shrink-0" })}
                        </div>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="pt-2"
            >
              <Card className="border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">Ready to transform your business?</h3>
                      <p className="text-blue-100">Schedule a consultation with our experts today.</p>
                    </div>
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-6">
                      Get Started
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </div>
                </CardContent>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-16"
          >
            <Badge className="bg-green-100 text-green-700 px-4 py-1.5 text-sm font-medium mb-4">
              Trusted Nationwide
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Powering the <span className="text-green-600">Philippines&apos;</span> Top Malls & Retailers
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              We are proudly accredited and operational in major commercial hubs nationwide, serving the country&apos;s most prestigious retail establishments.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {trustedMalls.map((mall, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 group">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    {mall.logo ? (
                      <div className="relative w-full h-16 mb-4">
                        <Image 
                          src={mall.logo} 
                          alt={mall.name} 
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 40vw, 20vw"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-4">
                        <Building className="w-8 h-8 text-slate-700" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-slate-800 text-center">{mall.name}</h3>
                    <div className="mt-2 flex items-center">
                      <Badge variant="outline" className="text-xs bg-slate-50">
                        Certified Partner
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all">
              View All Partners
              <span className="ml-2">→</span>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <ContactNew/>
    </div>
  );
}