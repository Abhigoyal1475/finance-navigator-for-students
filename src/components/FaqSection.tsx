
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Can I get a credit card without an SSN?",
    answer: "Yes, several banks offer credit cards to international students without an SSN. Some popular options include the Deserve EDU Mastercard, Nova Credit, and the Discover it Student Card. These cards typically require proof of enrollment and a U.S. bank account."
  },
  {
    question: "How long does it take to build credit score in the US?",
    answer: "Building a good credit score typically takes 6-12 months of credit history. Using a credit card responsibly, making on-time payments, and keeping credit utilization low are the fastest ways to build credit as an international student."
  },
  {
    question: "What documents do I need to open a bank account?",
    answer: "To open a bank account, international students typically need: (1) Passport, (2) Student visa (F-1 or J-1), (3) I-20 or DS-2019 form, (4) Proof of U.S. address, and (5) University student ID. Some banks may also ask for an SSN, but many have special programs for international students."
  },
  {
    question: "Are there banks that don't charge international transaction fees?",
    answer: "Yes, several banks offer accounts with no international transaction fees. Charles Schwab, Capital One 360, and HSBC Premier are good options. Online banks like Wise and Revolut also offer competitive exchange rates for international transfers."
  },
  {
    question: "What's the difference between a checking and savings account?",
    answer: "A checking account is designed for everyday transactions with unlimited withdrawals and often comes with a debit card. A savings account is meant for setting money aside, typically offers interest on your balance, but may limit the number of monthly withdrawals. Most students should have both."
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
