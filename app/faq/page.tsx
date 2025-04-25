import { Button } from "@/components/ui/button";
import FaqSection from "./FaqSection";
import Link from "next/link";

import { MessageCircleQuestion } from "lucide-react";

export default function Faq () {

    return(
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <FaqSection />

        <div className="w-full rounded-lg bg-gray-300 h-[300px] max-w-7xl mx-auto flex flex-col items-center justify-center">
          <span > <MessageCircleQuestion  className="size-10"/> </span>
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6">Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.</p>
          <Link href="/contact">
            <Button>
              Contact Support
            </Button>
          </Link>
        </div>
        <br/>
      </div>
    )
  }