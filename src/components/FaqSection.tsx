
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import GoogleAd from './GoogleAd';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    question: "Can I get a credit card without an SSN?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li className="text-left">Yes, several banks offer credit cards to international students without an SSN</li>
        <li className="text-left">Popular options include the Deserve EDU Mastercard, Nova Credit, and the Discover it Student Card</li>
        <li className="text-left">These cards typically require proof of enrollment and a U.S. bank account</li>
      </ul>
    )
  },
  {
    question: "How long does it take to build credit score in the US?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li className="text-left">Building a good credit score typically takes 6-12 months of credit history</li>
        <li className="text-left">Using a credit card responsibly is the fastest way to build credit</li>
        <li className="text-left">Making on-time payments and keeping credit utilization low are key factors</li>
      </ul>
    )
  },
  {
    question: "What documents do I need to open a bank account?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li className="text-left">Passport</li>
        <li className="text-left">Student visa (F-1 or J-1)</li>
        <li className="text-left">I-20 or DS-2019 form</li>
        <li className="text-left">Proof of U.S. address</li>
        <li className="text-left">University student ID</li>
        <li className="text-left">Some banks may ask for an SSN, but many have special programs for international students</li>
      </ul>
    )
  },
  {
    question: "Are there banks that don't charge international transaction fees?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li className="text-left">Yes, several banks offer accounts with no international transaction fees</li>
        <li className="text-left">Charles Schwab, Capital One 360, and HSBC Premier are good options</li>
        <li className="text-left">Online banks like Wise and Revolut also offer competitive exchange rates for international transfers</li>
      </ul>
    )
  },
  {
    question: "What's the difference between a checking and savings account?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li className="text-left">A checking account is designed for everyday transactions with unlimited withdrawals and often comes with a debit card</li>
        <li className="text-left">A savings account is meant for setting money aside, typically offers interest on your balance, but may limit monthly withdrawals</li>
        <li className="text-left">Most students should have both types of accounts</li>
      </ul>
    )
  }
];

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  return (
    <section id="faqs" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-center mb-10">Common questions about banking and finance for international students</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <Accordion 
            type="single" 
            collapsible 
            value={openItem || undefined}
            onValueChange={(value) => setOpenItem(value)}
            className="divide-y divide-slate-200"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <AccordionTrigger className="py-4 px-6 hover:no-underline hover:bg-blue-50/50">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-4 text-slate-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        {/* Google Ad Banner - Below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GoogleAd type="banner" className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
