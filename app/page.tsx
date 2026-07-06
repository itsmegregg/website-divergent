import { HeroSection } from "@/components/ui/hero-section";
import Services from "@/section/services";
import Support from "@/section/support";
import ContactNew from "@/section/contact-new";
import CustomerFeedback from "@/section/customer-feedback";

export const metadata = {
  title: "Home",
  description: "POS Solutions for Modern Businesses",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Support />
      <CustomerFeedback />
      <ContactNew />
    </>
  );
}