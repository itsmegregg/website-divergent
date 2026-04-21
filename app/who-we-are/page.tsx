"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Create aliases for motion components to avoid JSX member expression parsing issues
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionSection = motion.section;
const MotionImg = motion.img;
import { 
  Card, 
  CardContent, 

  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


import { Button } from "@/components/ui/button";

import {
  Briefcase,
  Lightbulb,
  Users,
  Building,
  ShieldCheck,
  BarChart3,
  Settings,
  Headset,
  GitCompareArrows,
  Target
} from "lucide-react";

import ContactNew from "@/section/contact-new";
import { useRouter } from "next/navigation"; // Correct import for App Router

// Animation variants with smoother easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotate: -2 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  },
};

const cardHoverVariants = {
  hover: { 
    y: -8,
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
  }
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
  { name: "SM Supermalls", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/SM_Supermalls_Logo.png" }, // Replace with actual logo paths
  { name: "Ayala Malls", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Ayala_Malls_Logo.png" },
  { name: "Robinsons Malls", logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da66fe9e-4151-4f87-ab28-81fbd89faf3d/dgiye1v-b8b5639e-e94d-4eb9-9af4-3a4f8f43aa79.png/v1/fill/w_1280,h_342/robinsons_malls_logo_2022_by_theofficiallsc_dgiye1v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQyIiwicGF0aCI6IlwvZlwvZGE2NmZlOWUtNDE1MS00Zjg3LWFiMjgtODFmYmQ4OWZhZjNkXC9kZ2l5ZTF2LWI4YjU2MzllLWU5NGQtNGViOS05YWY0LTNhNGY4ZjQzYWE3OS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DP2qj2IhIJZryd4hQJ7h4_Q3ZX2T3i0RphIfHHlHPnw" },
  { name: "Rockwell", logo: "https://e-rockwell.com/wp-content/uploads/2024/10/Rockwell-Logo.svg" },
  { name: "Megaworld Lifestyle Malls", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/MLM_Logo_New_Gradient_MCD_FINAL.png" },
  { name: "Festival Mall", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Festival_Mall_Alabang_logo.svg/2560px-Festival_Mall_Alabang_logo.svg.png" },
  { name: "Shangri-La Plaza", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMzaZ166DqmA5LheIuYA2lpzmfWjxDPQwM5M2C1-tWizhGsan2qPG3gIBmxo4_djDMUQ&usqp=CAU" },
  { name: "Ortigas Malls", logo: "https://ortigasmalls.sgp1.digitaloceanspaces.com/cms_images/hnI4BbHjC7xCKhXXxpGUygg30ilWl1OdMfHNTDtJ.webp" },
  { name: "Eton Centris", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCMlZg39K3xne3bRFwu52sCldVxI1Do-dzQ&s" },
  { name: "GreenField District", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoLrlV6a7ngq_t5V8-VVVBeSsRskTRwBYig&s" },
  { name: "Other Malls & Retailers", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjlBkx9I0IP_ZQP3htZXCSlZ_qwCPQijZUX7Fz5gt89sVrLowkbsLKweBJie-_JA9JNQ&usqp=CAU" },
];

const forData = [
    { name: "Retail Stores", icon: Building },
    { name: "Restaurants & Cafes", icon: Briefcase }, // Example, use appropriate icons
    { name: "Supermarkets", icon: Users },
    { name: "Salons & Spas", icon: Settings },
    { name: "And Many More!", icon: Lightbulb },
];

export default function WhoAreWe() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <div className="w-full flex flex-col">
      <div className="min-h-[500px] md:h-[750px] w-full mx-auto p-4 md:p-20 flex flex-col md:flex-row bg-stone-50">
        <div className="w-full md:flex-1 order-2 md:order-1">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-4 md:m-10 h-full flex flex-col justify-center items-start"
          >
            <Badge className="bg-blue-500">
              Divergent Technologies Phils., INC.
            </Badge>
            <MotionH1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-7xl font-bold"
            >
              Who We
              <span className="bg-orange-500 rounded-lg px-2 text-gray-50 ml-2">
                Are?
              </span>
            </MotionH1>
            <MotionH2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-2xl font-semibold text-neutral-600 pt-3"
            >
              Pioneering Business Solutions in the Philippines for over 27 years.
            </MotionH2>
          </MotionDiv>
        </div>
        <div className="w-full md:flex-1 bg-neutral-50 order-1 md:order-2">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <MotionImg
              variants={itemVariants}
              src='/illustrator/hand-drawn-business-communication-illustration.png'
              className="w-full h-auto"
              alt="illustrator"
            />
          </MotionDiv>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-5 px-4 md:px-6">
        <MotionH2
          variants={itemVariants}
          className="text-xl font-semibold text-neutral-700"
        >
          Founded in July 1997, DTPI is a premier BIR-accredited POS provider, delivering end-to-end business and financial solutions tailored for a diverse range of industries.
        </MotionH2>
        <MotionDiv
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 w-full max-w-7xl mx-auto py-6"
        >
          {forData.map((data, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <div className="border-2 rounded">
              <MotionDiv
        className="flex flex-col items-center justify-center p-6 text-center space-y-3"
       
        whileHover="hovered" 
        initial="rest"      
      >
        {/* The icon */}
        <MotionDiv
          className="w-10 h-10 text-primary mb-2"
          variants={{
            rest: { rotate: 0 }, // No rotation in the rest state
            hovered: {
              rotate: [0, -10, 10, -10, 10, 0], // Shake animation: rotate back and forth
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                repeat: 0 // Only shake once on hover
              }
            }
          }}
        >
          <data.icon className="w-full h-full" /> {/* Make sure icon takes full space */}
        </MotionDiv>

    
        <span className="text-slate-700 text-lg font-semibold">
          {data.name}
        </span>
      </MotionDiv>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      
      <MotionDiv 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="rounded-xl bg-amber-50 mx-4 md:m-10 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center p-2 md:p-0">
          <div className="w-full md:w-1/6 p-3 md:p-6 flex justify-center">
            <div className="bg-amber-500 p-4 rounded-full">
              <Lightbulb className="w-8 h-8 text-white" />  
            </div>
          </div>
          <div className="w-full md:w-5/6 p-3 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
              We empower businesses with cost-effective, fully integrated POS systems—combining cutting-edge hardware, intelligent software, and reliable support to drive efficiency, compliance, and growth.
            </h2>
          </div>
        </div>
      </MotionDiv>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full px-4 md:px-6 py-8">
          <div className="w-full md:flex-1 flex flex-col justify-center items-center mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-slate-800 ">
            Why Partner with  
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-blue-600 ">Divergent Technologies?</h1>
          </div>
          <div className="w-full md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {partnerBenefits.map((data,index)=>(
                <div className="border rounded-lg p-3 md:p-4 mb-3 w-full max-w-md flex items-center space-x-2 md:space-x-3" key={index}>
              
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

      <MotionSection 
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 py-24 mb-24 relative"
      >


        
        <MotionDiv variants={itemVariants} className="relative z-10 flex flex-col items-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-blue-300 mr-4"></div>
            <Badge className="bg-blue-500 rounded px-1 text-gray-50">
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
        </MotionDiv>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          {/* Left side - Image with overlay content */}
          <MotionDiv 
            variants={itemVariants} 
            className="lg:col-span-5 rounded-2xl overflow-hidden "
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
          </MotionDiv>
          
          {/* Right side - Cards */}
          <MotionDiv 
            className="lg:col-span-7 space-y-5" 
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {expertiseAdvantages.map((item, idx) => (
                <MotionDiv 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="h-full border overflow-hidden bg-white/90 group">
                    <CardHeader className="pb-2 relative">
                      <div className="absolute top-0 left-0 w-full h-1  transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                      <CardTitle className="text-xl flex items-center text-slate-800 font-bold">
                        <div className="bg-slate-50 p-3 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                          {React.createElement(item.icon, { className: "w-6 h-6 text-blue-600 flex-shrink-0" })}
                        </div>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
            
            <MotionDiv 
              variants={itemVariants}
              className="pt-2"
            >
              <Card className="border-0  overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">Ready to transform your business?</h3>
                      <p className="text-gray-600">Schedule a consultation with our experts today.</p>
                    </div>
                    <Button className=""
                      onClick={() => router.push('/contact')}
                    >
                      Get Started
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </div>
                </CardContent>
                
              </Card>
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>

      <MotionSection 
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <MotionDiv 
            variants={itemVariants} 
            className="text-center mb-16"
          >
            <Badge className=" bg-green-600 text-white">
              Trusted Nationwide
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Empowering the <span className="text-green-600">Philippines&apos;</span> Top Malls & Retailers
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              We are proudly accredited and operational in major commercial hubs nationwide, serving the country&apos;s most prestigious retail establishments.
            </p>
          </MotionDiv>
     
          <MotionDiv 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
           animate="visible"
          >

     
            {trustedMalls.map((mall, idx) => (
              <MotionDiv
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="perspective-1000"
              >
                <MotionDiv
                  variants={cardHoverVariants}
                  className="h-full transform-style-preserve-3d"
                >
                  <Card className="h-full border border-slate-200/70 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      {mall.logo ? (
                        <MotionDiv 
                          className="relative w-full h-16 mb-4"
                          whileHover={{ rotate: [0, -2, 2, -1, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                         <Image 
                          src={mall.logo} 
                          alt={mall.name}	 
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 40vw, 20vw"
                        />
                      </MotionDiv>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-4">
                        <Building className="w-8 h-8 text-slate-700" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-slate-800 text-center">{mall.name}</h3>
                    <div className="mt-2 flex items-center">
                      <Badge>
                        Certified Partner
                      </Badge>
                    </div>
                  </CardContent>
                  </Card>
                </MotionDiv>
            </MotionDiv>
            ))}

        </MotionDiv>
        </div>
      </MotionSection>

      <ContactNew/>
    </div>
  );
}
