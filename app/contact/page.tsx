"use client";

import { Button } from "@/components/ui/button";
import {  Phone, MapPin, Mail, CheckCircle, Send } from "lucide-react";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });


  
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

    type FormValues = z.infer<typeof formSchema>;

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 20 },
      },
    };
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = form.handleSubmit(() => {
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
  

    const m = motion;


  return (
    <div className="w-full bg-background flex pt-10">
        <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us!</h1>
            <p className="text-lg mb-6 text-center text-muted-foreground">We&apos;re here to help with any questions or concerns you may have. Our support team is available to assist you with any technical questions or concerns.</p>
            <div className="flex h-full gap-4 mb-5" ref={ref}>
            <div className="border rounded-lg  flex-1 flex flex-col justify-center items-left p-10 gap-4">
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
            <div className="flex-1 border rounded-lg p-10">
            <m.div variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
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
        </div>
     
    </div>
  );
}