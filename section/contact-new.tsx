"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, LinkedinIcon, Mail, Map, MapPin, Phone, Send, Check } from "lucide-react";

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

export default function ContactNew() {
  // Simple state to track if the form was just submitted via local testing
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This will only work for local testing, not in the deployed static site
  useEffect(() => {
    // Check if there's a 'submitted' parameter in the URL
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('submitted') === 'true') {
      setIsSubmitted(true);
      
      // Clear the URL parameter after a short delay
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 5000);
    }
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-3"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-8"
            >
              Have a question or want to discuss how we can help your business? Reach out to us using the contact form or the information below.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-6 mb-8"
            >
            <div className="space-y-4">
                <div className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">Contact us</p>
                  <div className="flex flex-row gap-2">
                  <Phone />                 
                    <p>09178324735 / 09988462397 / 8812-2656 / 8812-2148 / 8362-8794 / 7117-9925</p>
                  </div>
                </div>    

                <div className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <div className="flex flex-row gap-2">
                  <Mail />                 
                    <p>sales@divergentechphil.com / dtpisales2014@gmail.com</p>
                  </div>
                </div>   

                <div className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">Visit us</p>
                  <div className="flex flex-row gap-2">
                    <MapPin/>
                    <p>Unit 3B Cafel Bldg., 7505 Santillan St. Brgy. Pio Del Pilar 1230 Makati City</p></div>
                </div>   
            </div>

            
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              <a
                href="https://www.linkedin.com/in/divergent-phil-3a72a7200"
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.facebook.com/DivergentPOS"
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/divergentechphils"
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <Instagram />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <Card className="p-8">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-left"
              >
                Send Us a Message
              </motion.h3>
              <motion.form
                variants={containerVariants}
                className=""
                action="https://formsubmit.co/sales@divergentechphil.com"
                method="POST"
              >
                {/* FormSubmit configuration fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://divergentechphil.com/thank-you" />
                {/* If you don't have a thank-you page, use your domain homepage */}
                <input type="hidden" name="_honeypot" value="" />
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                >
                  <motion.div className="">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </motion.div>
                  <motion.div className="">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mb-6"
                >
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                    placeholder="How can we help you?"
                    required
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mb-6"
                >
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-3"
                >
                  {isSubmitted ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="size-5" />
                      <span>Message sent successfully! We'll be in touch soon.</span>
                    </div>
                  ) : (
                    <Button 
                      type="submit"
                      className="text-white py-3 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <Send className="size-5 mr-2" /> Send Message
                    </Button>
                  )}
                </motion.div>
              </motion.form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}