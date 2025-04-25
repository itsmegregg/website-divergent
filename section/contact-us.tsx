"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

// Motion components
const m = motion;

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const handleSubmit = form.handleSubmit((data) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    }, 1500);
  });

  return (
    <m.section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <m.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-regular tracking-tighter">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground  text-center">
            Have questions or need assistance? We're here to help you with anything you need.
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Hero section */}
          <m.div className="space-y-8" variants={itemVariants}>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/851584/pexels-photo-851584.jpeg"
                alt="Contact us"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect With Us</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Call us at</p>
                    <p className="font-medium">09178324735 / 09988462397 / 8812-2656 / 8812-2148</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email us at</p>
                    <p className="font-medium">sales@divergentechphil.com</p>
                    <p className="font-medium">dtpisales2014@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Visit us at</p>
                    <p className="font-medium">Unit 3B Cafel Bldg., 7505 Santillan St. Brgy. Pio Del Pilar 1230 Makati, Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Right column - Contact form */}
          <m.div variants={itemVariants}>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us how we can help you" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                            </>
                            ) : (
                            <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                            </>
                            )}
                            </Button>
                            </form>
                            </Form>
                            )}
                            </div>
                            </m.div>
                            </div>
                            </div>
                            </m.section>
                            );
                            }