"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
      "Good after sales service. Technical staffs are outstanding. Very Satisfied.",
    author: "Kipling Philippines",
    company: "Kipling Philippines",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Kipling_wordmark.svg",
  },
  {
    quote:
      "Our experience with Divergent as a client has been positive from day 1 - they are always quick to get back to us if we have any questions or concerns and can be relied upon whenever we would need technical assistance. We would be happy to recommend them to anyone looking for a POS provider.",
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
  {
    quote:
      "We’ve been with Divergent for almost a decade, truthfully, we can’t imagine working with anyone else. Products are as what you expect but their customers service exceeds our expectation.",
    author: "Suki Fashion Inc.",
    company: "Suki Fashion Inc.",
    image: "https://cdn.shopify.com/s/files/1/0066/0471/8198/files/Suki_Logo.jpg?height=628&pad_color=fff&v=1613672899&width=1200",
  },
  {
    quote:
      "The technical support of Divergent POS is good and efficient. They are friendly and polite to talk to, if there is a problem, just call them for a solution immediately, their veterans and kind support Master Steven, Master Sonny, just one call, the problem will be solved immediately. Thank you, Divergent Technologies",
    author: "Kalin Incorporated",
    company: "Kalin Incorporated (Broadway Gems/Bagel Girl/Aksesoriz)",
    image: "https://assets.bossjob.com/companies/14836/logo/ZGaIN3wrZMhJqkv3IexpL99Jj7SU5P2D84mpUcKA.jpeg",

    },
    {
        quote:
          "I love divergent The service and the products Mabilis kausap ung team and very approachable too. Always there to help And to explain mga items natin No regrets so far with divergent",
        author: "Taste and Tell",
        company: "Taste and Tell",
        image: "https://www.tasteandtellmnl.com/cdn/shop/files/taste_and_tell.png?v=1627527766"
      },
  {
    quote:  
      "For the three(3)years that Verena's Restaurant using the POS of Divergent Technologies Philippines. The Company could attest that is good. Dependable, and user-friend. the Technical Group could easily be contacted and it immediatelty akes action and fix the problem if the same issue arises.",
    author: "VERENA'S RESTAURANT",
    company: "VERENA'S RESTAURANT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7H8-GnsS-FGI-qKVEttV2BbgqQUXKW3LmA&s", 
      },

  {
    quote:
      "I've been using Divergent for 2 years now and am very happy with their service - their system is solid and smooth, and the team is very responsive and helpful in providing solutions for my business. They offer the best of both worlds - functionality and familiarity, easy to use and already accredited with malls; while also keeping up-to-date with current innovations and digitization like real-time data tracking. They take time to understand my operational needs and are fast to program a custom feature where needed. Definitely recommend, whether for new companies and startups as well as established or scaling businesses!",
    author: "Ms. Ysabella Lavalan",
    company: "Sisig Hooray Franchisee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm2SnKwCjY3c6ILGmalsQlCkE1_8fGZVdKQ&s"
  },
  {
    quote:
      "Over the years, our partnership with Divergent Technologies Inc has been nothing short of exceptional. Their reliable technology, seamless integration, and unwavering support have played a pivotal role in optimizing our operations and enhancing customer experiences. Their commitment to innovation and responsive customer service truly set them apart in the industry. We're grateful for their continued partnership and look forward to many more years of success together.",
    author: "Tom N Toms",
    company: "Tom N Toms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlIzDlmWg3ce_0NOT8lCUioUkOhiE6V0Lwg&s"
      },
];

export default function CustomerFeedback() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 180 } },
  };

  return (
    <m.section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      aria-labelledby="customer-feedback-heading"
    >
      <div className="max-w-7xl mx-auto">
        <m.div className="text-center mb-12 space-y-4" variants={itemVariants}>
          <h2 id="customer-feedback-heading" className="text-4xl md:text-5xl font-regular tracking-tight">
            Customer Feedback
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            What our clients say about working with Divergent
          </p>
        </m.div>

        {/* 3-column grid with logo background cards */}
        <m.div className="grid grid-cols-1 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {testimonials.map((t, idx) => {
            const initials = getInitials(t.author || t.company);
            const bg = t.image ?? buildAvatarDataUrl(initials);
            return (
              <m.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
              >
                <Card className="relative flex flex-col h-full p-8 bg-card/80 backdrop-blur-sm border-primary/10 overflow-hidden rounded-xl shadow-lg shadow-primary/5">
                  {/* Watermark logo */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-center bg-contain bg-no-repeat opacity-5"
                    style={{ backgroundImage: `url(${bg})` }}
                    aria-hidden="true"
                  />

                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-4 left-4 size-10 text-primary/10" />

                  {/* Foreground Content */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    <p className="flex-grow mt-6 text-lg md:text-xl font-medium leading-relaxed text-card-foreground/90">
                      “{t.quote}”
                    </p>
                    <div className="mt-6 flex justify-center">
                      <Header author={t.author} company={t.company} image={t.image} />
                    </div>
                  </div>
                </Card>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </m.section>
  );
}

// Subcomponents & helpers
function Header({ author, company, image }: { author: string; company: string; image?: string }) {
  const initials = getInitials(author || company);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-16 shrink-0">
        <img
          src={image ?? buildAvatarDataUrl(initials)}
          alt={`${author} avatar`}
          className="size-16 rounded-full object-cover ring-2 ring-primary/10"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col text-center">
        <p className="font-semibold text-lg leading-none">{author}</p>
        <p className="text-base text-muted-foreground mt-1">{company}</p>
      </div>
    </div>
  );
}

function getInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

function buildAvatarDataUrl(initials: string): string {
  const bg = "#EEF2FF"; // soft primary tint
  const fg = "#4338CA"; // primary
  const svg = `\n<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'>\n  <rect width='100%' height='100%' rx='48' fill='${bg}'/>\n  <text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-family='Inter, ui-sans-serif, system-ui' font-size='36' font-weight='600' fill='${fg}'>${initials}</text>\n</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}