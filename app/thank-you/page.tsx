import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Thank You!</h1>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Message Sent Successfully</h2>
          
          <p className="mb-6 text-lg text-gray-700">
            Thank you for contacting Divergent Technologies Philippines. 
            We&apos;ve received your message and will get back to you as soon as possible.
          </p>
          
          <Link href="/" passHref>
            <Button size="lg" className="py-3 !rounded-button">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
