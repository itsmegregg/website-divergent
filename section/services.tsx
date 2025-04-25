"use client";
import Link from "next/link";
import { Zap, Users, Box, BarChart2, Bell, Printer, Tablet, CreditCard, MapPin, RefreshCw, Barcode, Gift, PieChart, Server, DollarSign, FileText, ShoppingBag, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "FastPOS",
    description:
      "Created with fast-food and quick-service establishments in mind. FastPOS takes your dine-in or take-out business to the next level.",
    features: [
      { name: "Fast and Efficient Transactions", icon: Zap },
      { name: "User-Friendly Interface", icon: Users },
      { name: "Inventory Management", icon: Box },
      { name: "Sales & Reports Generation", icon: BarChart2 },
      { name: "Discount & Pricing Flexibility", icon: Bell },
      { name: "Security & Access Control", icon: CreditCard },
      { name: "Hardware Compatibility", icon: Tablet },
    ],
    slug: "fast-pos",
  },
  {
    title: "Food Connect",
    description:
      "Designed for table-service restaurants. Food Connect streamlines reservations, order processing, and billing for an exceptional dining experience.",
    features: [
      { name: "Real-time Order Tracking", icon: RefreshCw },
      { name: "Priority Alerts & Custom Modification", icon: Bell },
      { name: "Smart Kitchen & Beverage Printing", icon: Printer },
      { name: "Sales & Reports Generation", icon: BarChart2 },
      { name: "Staff Management Tools", icon: Users },
      { name: "Table-side Ordering & Digital Menus", icon: Tablet },
      { name: "Simplified Billing & Settlement", icon: CreditCard },
      { name: "Table Assignment & Status Visualization", icon: MapPin },
    ],
    slug: "food-connect",
  },
  {
    title: "Retail Assist",
    description: "Tailored specifically for retail businesses, Retail Assist streamlines inventory management, sales tracking, and reporting to help you run your store more efficiently.",
    features: [
      { name: "Inventory Management", icon: Box },
      { name: "Barcode Scanning & Quick Checkout", icon: Barcode },
      { name: "Customer Loyalty & Promotions", icon: Gift },
      { name: "Sales & Analytics Dashboard", icon: PieChart },
      { name: "Multi-Store & Multi-Register Support", icon: Server },
      { name: "Employee Management", icon: Users },
      { name: "Flexible Payment Options", icon: DollarSign },
      { name: "Receipt & Label Printing", icon: FileText },
    ],
    slug: "retail-assist",
  },
  {
    title: "E-Commerce",
    description: "Tailored for online stores, managing products, orders, and customers efficiently.",
    features: [
      { name: "Online Storefront", icon: ShoppingBag },
      { name: "Order Management", icon: Package },
      { name: "Customer Database", icon: Users },
    ],
    slug: "e-commerce",
  }
];

export default function ServicesSection(){
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Explore our versatile range of POS software solutions designed to
          revolutionize how you do business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <Card
              key={svc.slug}
              className="flex flex-col h-full hover:shadow-lg transition-shadow "
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{svc.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{svc.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2 mb-4">
                  {svc.features.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <li key={feat.name} className="flex items-start space-x-2 text-sm">
                        <Icon className="h-4 w-4 text-primary mt-1" />
                        <span>{feat.name}</span>
                      </li>
                    );
                  })}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/services/${svc.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}