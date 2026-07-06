"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image?: string; // optional avatar/logo url
}

const m = motion;

const testimonials: Testimonial[] = [
  {
    quote:
      "We are pleased and satisfied with Divergent’s POS System installed here at Emerald Restaurant. The POS System is not complicated but it met all of our requirements. It is very functional and user friendly. Aside from the software itself, we are satisfied with the quality of Divergent’s after sales support and service. We foresee that our partnership will go a long way. It is worth recommending.",
    author: "Jhang Acilo",
    company: "Emerald Restaurant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZGMKPIYDAZXrKcskSduhRy3bjn22Aa1McQ&s",
  },
  {
    quote:
      "I would like to commend Divergent Technologies Phils., Inc. for the services they have provided us - up to date software, timely response to any whatever issue may arise.  We have been partners for about two decades now and so far, so good.",
    author: "Ms. Fara Solidum",
    company: "Bacolod Chicken Inasal",
    image: "https://www.bacolodchickeninasal.com/misc-images/logo.png",
  },
  {
    quote:
      "We've had a great experience using Divergent Food Connect POS software. It's user-friendly, reliable, and has helped streamline our daily operations efficiently. The customer support team is always on point—responsive, knowledgeable, and quick to resolve any concerns.",
    author: "Mr. Christopher Tarrega",
    company: "Philippine Pastries Inc. / Bizu Patisserie",
    image: "https://bizu.ph/cdn/shop/files/Logo_2.png?v=1726797402&width=200",
  },
  {
    quote:
      "Good after sales service. Technical staffs are outstanding. Very Satisfied.",
    author: "Kipling Philippines",
    company: "Kipling Philippines",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Kipling_wordmark.svg",
  },
  {
    quote:
      "Our experience with Divergent as a client has been positive from day 1 - they are always quick to get back to us if we have any questions or concerns and can be relied upon whenever we would need technical assistance.",
    author: "Big Al's Cookie Jar",
    company: "Big Al's Cookie Jar",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkkIH3rmWntHMnLJ0AarC_aSNomETENrmLA&s"
  },
  {
    quote:
      "Divergent's team delivers excellent customer service. They have a strong sense of urgency which is critical in running a smooth flow of operations in a restaurant.",
    author: "Cafe Du Tukon",
    company: "Cafe Du Tukon",
    image: "https://www.fundacionpacita.com/img/cafe/logo.png"
  },
];

export default function CustomerFeedback() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cyan-700 bg-cyan-50 mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Customer Feedback</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            What our clients say about working with Divergent.
          </p>
        </m.div>

        <m.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {testimonials.map((t, idx) => {
            return (
              <m.div
                key={idx}
                variants={itemVariants}
              >
                <Card className="flex flex-col h-full p-8 bg-white border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-cyan-500 mb-4" />
                  
                  {/* Quote Content */}
                  <p className="flex-grow text-lg leading-relaxed text-slate-700 mb-8">
                    "{t.quote}"
                  </p>
                  
                  {/* Author Info with Image */}
                  <div className="mt-auto border-t border-slate-100 pt-6 flex items-center gap-4">
                    {t.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                        <img 
                          src={t.image} 
                          alt={`${t.company} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 truncate">{t.author}</p>
                      <p className="text-slate-600 text-sm mt-1 truncate">{t.company}</p>
                    </div>
                  </div>
                </Card>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}