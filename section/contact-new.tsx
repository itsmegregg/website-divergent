"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, LinkedinIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number]
    }
  },
};

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('submitted') === 'true') {
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 5000);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formDataObj = new FormData(e.currentTarget);
      const response = await fetch('/process-form.php', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.redirected) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError('There was an error sending your message. Please try again later.');
      }
    } catch {
      setSubmitError('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <p className="text-sm text-muted-foreground">Contact us</p>
                <div className="flex flex-row gap-2 items-center">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <p>09178324735 / 09988462397</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Email us</p>
                <div className="flex flex-row gap-2 items-center">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <p>sales@divergentechphil.com / dtpisales2014@gmail.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Visit us</p>
                <div className="flex flex-row gap-2 items-start">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                  <p>Unit 3B Cafel Building, 7505 M. Santillan St., Pio Del Pilar, Makati City, 1230, Makati, Philippines, 1230</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              <a
                href="https://www.linkedin.com/in/divergent-phil-3a72a7200/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 md:h-11 md:w-11 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Visit our LinkedIn profile"
              >
                <LinkedinIcon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.facebook.com/DivergentPOS"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 md:h-11 md:w-11 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.instagram.com/officialdivergentpos/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 md:h-11 md:w-11 bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <Card className="p-8 bg-card shadow-xl">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-left text-primary"
              >
                Send Us a Message
              </motion.h3>
              <motion.form
                variants={containerVariants}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="rounded-xl h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-muted-foreground">Contact Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09111111111"
                      className="rounded-xl h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@mail.com"
                      className="rounded-xl h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-muted-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="rounded-xl h-12"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="rounded-xl"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                {isSubmitted && (
                  <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm" role="alert" aria-live="polite">
                    Your message has been sent successfully. We&apos;ll get back to you soon!
                  </div>
                )}

                {submitError && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm" role="alert" aria-live="assertive">
                    {submitError}
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-6 rounded-xl text-white font-medium"
                    aria-busy={isSubmitting}
                  >
                    <div className="flex items-center gap-2">
                      <Send className="size-5 mr-2" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                    </div>
                  </Button>
                </div>
              </motion.form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}