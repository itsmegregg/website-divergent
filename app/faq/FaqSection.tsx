"use client";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqData = [
  {
    question: "How many months is the warranty period?",
    answer: "Warranty period for both software and hardware is one year from date of delivery.",
  },
  {
    question: "Is DTPI license to use subscription-based?",
    answer: "Our system is not subscription-based. There are no monthly subscription payments to be collected after the ONE TIME payment of the license.",
  },
  {
    question: "Is DTPI a cloud-based system?",
    answer:
      "We are essentially a stand-alone (In store) POS system. However, we have the facility to provide cloud-based sales transaction reports, On-hand Inventory and Master File Maintenance via our Web based Back End & RMS system.",
  },
  {
    question: "How much is a DTPI POS system?",
    answer: "We price our system according to the client’s requirements, specifications, and needs. We can offer an initial complete package, software and hardware, starting at P89,000.00.",
  },
  {
    question: "Is DTPI BIR accredited? Mall accredited?",
    answer: "Yes, we are BIR accredited. We are likewise accredited in all the major malls in the country.",
  },
  {
    question: "Can you do split-billing? Multiple discounts?",
    answer: "Yes, we can. We can do modifications to align the system to a client’s specific requirement.",
  },
  {
    question: "How is the after-sales service?",
    answer:
      "Our dedicated service team is available to service clients from 9am to 9pm on Mondays to Fridays, from 10 a.m. to 10 p.m. on Saturdays, and from 9am to 6pm on Sundays and holidays.",
  },
  {
    question: "Is BIR registration FREE of charge?",
    answer: "Yes, we do the registration for POS Permit to Use Sales Machines. We assist in providing the necessary documents for the approval of the permit.",
  },
  {
    question: "Does your POS have a feature on Employee Attendance?",
    answer: "Yes, there is a module on Employee Attendance that records the time in and time out of employees.",
  },
  {
    question: "How many attendees can attend the initial Training session?",
    answer:
      "There is no limit on the number of attendees for the training session. However, we suggest that we train the trainers as a fee will be charged for subsequent retraining.",
  },
];

export default function FaqSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <AccordionItem value={`item-${index}`} className="border-b">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}