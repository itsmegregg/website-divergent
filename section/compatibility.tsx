"use client";
import {motion} from 'framer-motion'
import { Computer, MonitorSmartphone, Tablet } from 'lucide-react';

export default function Compatibility (){
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };


    
const itemVariants = {
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


const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
        duration: 0.3,
        ease: "easeInOut"
    }
};

const CompatibilityItems = [
    {
        title: "Windows Tablet",
        description: "Good performance in windows based tablet for small retail stores",
        icon: <Tablet size={64} />
    },
    {
        title: "Windows Computer",
        description: "Smooth performance in Windows-based desktops controlling by mouse and keyboard",
        icon: <MonitorSmartphone size={64} />

    },{
        title: "All in One Compact Computer",
        description: "Best performance in Windows-based All in one touch screen machine",
        icon: <Computer size={64} />
    }
]


    return(
        <motion.div 
            className='gap-4 mb-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
            >
        <motion.h1 
            className='text-2xl md:text-3xl font-regular tracking-tighter'
            variants={itemVariants}
        >
            Compatibility
        </motion.h1>
      
      <motion.h2 
        className='text-base font-semibold text-gray-600 mb-1'
        variants={itemVariants}
      >
        Compatible with Windows 10 and 11 desktops and tablets.
      </motion.h2>
      
      <motion.p 
        className='text-red-500 text-xs mb-6'
        variants={itemVariants}
      >
        *Recommended to client to use Windows 11. Windows 10 will end support in Oct 2025.
      </motion.p>
      
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
        variants={container}
      >
        {CompatibilityItems.map((compItem, index) => (
          <motion.div 
            className="card  w-full p-6 border rounded-lg border-2 hover:shadow-lg transition-shadow duration-300"
            key={index}
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h1 
              className='text-xl font-semibold mb-3 pb-2 border-b-2 border-primary w-fit'
              whileHover={{ x: 5 }}
            >
              {compItem.title}
            </motion.h1>
            <div className='flex items-start'>
              <motion.span 
                className='mr-2 text-xl'
          
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {compItem.icon}
              </motion.span>
              <p className='text-sm'>{compItem.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
                </motion.div>
    )
}