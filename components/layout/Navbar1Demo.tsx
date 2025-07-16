
"use client";
import { Computer, DollarSign, Tablet, Zap } from "lucide-react";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";

const demoData = {
  logo: {
    url: "/",
    src: '/divergentLogo-white.png',
    alt: "Divergent Philippines",
    title: "",
  },  
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Point Of Sales",
          description: "Your Business, Simplified.",
          icon: <Computer className="size-5 shrink-0" />,
          url: "/services",
        },
        {
          title: "Hardware",
          description: "POS Hardware You Can Trust.",
          icon: <Tablet className="size-5 shrink-0" />,
          url: "/services/hardware",
        },
        {
          title: "Report Management System",
          description: "Effortless Reporting, Maximum Impact.",
          icon: <DollarSign className="size-5 shrink-0" />,
          url: "/services/rms",
        },
        {
          title: "E-Commerce",
          description:
            "Sell Smarter. Grow Faster.",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/services/e-commerce",
        },
      ],
    },
    
    {
      title: "Who We Are",
      url: "/who-we-are",
    },
    {
      title: "Frequently Asked Questions",
      url: "/faq",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};

function Header() {
  return (
    <div className="w-full bg-primary sticky top-0 z-100">
    
      <Navbar1 {...demoData} />
    </div>
  );
}

export { Header };