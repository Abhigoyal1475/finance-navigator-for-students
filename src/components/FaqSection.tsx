
import React from 'react';
import { motion } from 'framer-motion';
import GoogleAd from '@/components/GoogleAd';

const FaqSection = () => {
  const faqs = [
    {
      question: "Do I need an SSN to open a bank account in the US?",
      answer: "No, most banks don't require an SSN to open a basic checking account. You'll typically need your passport, visa, I-20, and proof of address. However, having an SSN can simplify the process and give you access to more banking features."
    },
    {
      question: "Can international students build credit in the US?",
      answer: "Yes, international students can build credit history in the US. The best ways to start are with secured credit cards, student credit cards like Discover It Student or the Deserve EDU Mastercard, or by becoming an authorized user on someone else's credit card."
    },
    {
      question: "How do I send money back home as an international student?",
      answer: "There are several options for international money transfers, including bank wire transfers, services like Wise (formerly TransferWise), Remitly, or Xoom, and some credit unions that offer low-fee international transfers. Compare exchange rates and fees before choosing a service."
    },
    {
      question: "Are there any special tax considerations for international students?",
      answer: "Yes, international students typically need to file Form 8843, and if you worked, you'll likely need to file a tax return. Most international students are considered non-resident aliens for tax purposes, which affects how you're taxed. Check with your university's international student office for tax resources."
    },
    {
      question: "Can I use my international credit history in the US?",
      answer: "Unfortunately, credit history doesn't transfer between countries. You'll need to build your US credit history from scratch. Some services like Nova Credit are starting to help bring international credit history to the US, but their availability varies by country."
    }
  ];

  return (
    <section className="py-16 px-4 bg-blue-50" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">
            Find answers to common questions about banking and finances for international students in the US.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm"
              whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Add Google Ad Banner below FAQ section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <GoogleAd type="banner" className="mx-auto" />
      </div>
    </section>
  );
};

export default FaqSection;
