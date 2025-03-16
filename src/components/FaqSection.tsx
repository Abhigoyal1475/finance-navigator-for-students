
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    question: "Can I get a credit card without an SSN?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Yes, several banks offer credit cards to international students without an SSN</li>
        <li>Popular options include the Deserve EDU Mastercard, Nova Credit, and the Discover it Student Card</li>
        <li>These cards typically require proof of enrollment and a U.S. bank account</li>
      </ul>
    )
  },
  {
    question: "How long does it take to build credit score in the US?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Building a good credit score typically takes 6-12 months of credit history</li>
        <li>Using a credit card responsibly is the fastest way to build credit</li>
        <li>Making on-time payments and keeping credit utilization low are key factors</li>
      </ul>
    )
  },
  {
    question: "What documents do I need to open a bank account?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Passport</li>
        <li>Student visa (F-1 or J-1)</li>
        <li>I-20 or DS-2019 form</li>
        <li>Proof of U.S. address</li>
        <li>University student ID</li>
        <li>Some banks may ask for an SSN, but many have special programs for international students</li>
      </ul>
    )
  },
  {
    question: "Are there banks that don't charge international transaction fees?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Yes, several banks offer accounts with no international transaction fees</li>
        <li>Charles Schwab, Capital One 360, and HSBC Premier are good options</li>
        <li>Online banks like Wise and Revolut also offer competitive exchange rates for international transfers</li>
      </ul>
    )
  },
  {
    question: "What's the difference between a checking and savings account?",
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>A checking account is designed for everyday transactions with unlimited withdrawals and often comes with a debit card</li>
        <li>A savings account is meant for setting money aside, typically offers interest on your balance, but may limit monthly withdrawals</li>
        <li>Most students should have both types of accounts</li>
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
      </div>
    </section>
  );
};

export default FaqSection;
