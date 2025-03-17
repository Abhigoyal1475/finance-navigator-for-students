
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ExternalLink, Gift, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

// Bank logos components for trust signals
const BankLogos = () => (
  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 mt-6">
    <div className="bg-white p-2 rounded-lg shadow-sm">
      <p className="font-bold text-blue-800">Chase</p>
    </div>
    <div className="bg-white p-2 rounded-lg shadow-sm">
      <p className="font-bold text-orange-600">Discover</p>
    </div>
    <div className="bg-white p-2 rounded-lg shadow-sm">
      <p className="font-bold text-red-600">Bank of America</p>
    </div>
    <div className="bg-white p-2 rounded-lg shadow-sm">
      <p className="font-bold text-blue-600">Capital One</p>
    </div>
  </div>
);

// Countdown component for urgency
const CountdownBadge = () => (
  <div className="bg-red-50 p-2 rounded-full inline-flex items-center gap-2 mb-4 animate-pulse-soft">
    <Clock size={16} className="text-red-600" />
    <span className="text-sm font-semibold text-red-600">Limited Time Offer - Expires Soon!</span>
  </div>
);

// Student testimonial section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "I got my first Chase bank account using this guide, and the $100 referral bonus really helped with my first month expenses!",
      name: "Raj",
      school: "University of Houston"
    },
    {
      quote: "As an international student from Brazil, the credit card section was a lifesaver. I got approved for my first card within a week!",
      name: "Maria",
      school: "Boston University"
    },
    {
      quote: "The step-by-step process for getting an SSN made what seemed impossible actually quite simple.",
      name: "Wei",
      school: "UCLA"
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 mb-8"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">What Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="text-4xl mb-4">"</div>
            <p className="text-slate-700 italic mb-4">{testi.quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{testi.name}</p>
                <p className="text-sm text-slate-500">{testi.school}</p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full mb-4">
            <Gift size={16} />
            <span className="text-sm font-medium">Exclusive Referral Bonuses</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get $50-$100 Bonuses with Our Referral Links</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Use our exclusive referral links when you sign up for these recommended financial products to receive special welcome bonuses.
          </p>
          
          {/* Bank logos for trust signals */}
          <BankLogos />
        </motion.div>
        
        {/* Comparison table for referral bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 overflow-x-auto"
        >
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-50 text-blue-800">
              <tr>
                <th className="py-3 px-4 text-left">Bank/Card</th>
                <th className="py-3 px-4 text-left">Standard Bonus</th>
                <th className="py-3 px-4 text-left">Our Referral Bonus</th>
                <th className="py-3 px-4 text-left">Requirements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="py-3 px-4 font-medium">Chase Student Checking</td>
                <td className="py-3 px-4">$50</td>
                <td className="py-3 px-4 font-bold text-green-600">$100 + $25 Amazon Gift Card</td>
                <td className="py-3 px-4">Direct deposit within 60 days</td>
              </tr>
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="py-3 px-4 font-medium">Discover Student</td>
                <td className="py-3 px-4">No bonus</td>
                <td className="py-3 px-4 font-bold text-green-600">$50 + First Year Cashback Match</td>
                <td className="py-3 px-4">Any purchase within 3 months</td>
              </tr>
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="py-3 px-4 font-medium">Bank of America</td>
                <td className="py-3 px-4">$50</td>
                <td className="py-3 px-4 font-bold text-green-600">$100 + $50 Direct Deposit Bonus</td>
                <td className="py-3 px-4">$250 in direct deposits</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-100 mb-6">
              <span className="text-3xl">🏦</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Chase Student Checking</h3>
            <ul className="text-slate-700 mb-4 list-disc pl-4 space-y-1">
              <li>No monthly fees if you're under 24 years old</li>
              <li>Access to 16,000+ ATMs nationwide</li>
              <li>Powerful mobile banking tools with Zelle integration</li>
              <li>No minimum balance requirements</li>
            </ul>
            <div className="bg-blue-50 p-3 rounded-lg mb-6">
              <p className="text-sm font-medium text-blue-800 flex items-center gap-2">
                <Gift size={16} />
                <span>Referral Bonus: $100 after first direct deposit + exclusive $25 Amazon gift card through our link</span>
              </p>
            </div>
            
            <CountdownBadge />
            
            <Button className="w-full group text-lg py-6 font-semibold">
              Open an Account
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
              <CheckCircle2 size={16} />
              <span className="text-sm font-medium">Over 500 students helped</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-indigo-100 mb-6">
              <span className="text-3xl">💳</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Discover It Student Card</h3>
            <ul className="text-slate-700 mb-4 list-disc pl-4 space-y-1">
              <li>No SSN required for international students</li>
              <li>5% cashback on rotating categories</li>
              <li>No annual fee or foreign transaction fees</li>
              <li>Free FICO score monitoring monthly</li>
            </ul>
            <div className="bg-indigo-50 p-3 rounded-lg mb-6">
              <p className="text-sm font-medium text-indigo-800 flex items-center gap-2">
                <Gift size={16} />
                <span>Referral Bonus: $50 statement credit + cashback match for your entire first year (doubles all rewards)</span>
              </p>
            </div>
            
            <CountdownBadge />
            
            <Button className="w-full group text-lg py-6 font-semibold">
              Apply Now
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">95% approval rate for students</span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-bold mb-2">More Bank & Credit Card Referrals</h3>
            <ul className="text-slate-700 mb-4 list-disc pl-4 space-y-1 text-left">
              <li>Bank of America: $100 bonus + $50 direct deposit bonus</li>
              <li>Citibank: Various offers available through our referral program</li>
              <li>Wells Fargo: $50 with referral code after qualifying activities</li>
              <li>Capital One: $75 bonus with our special promotion code</li>
            </ul>
            <Button variant="outline" className="group">
              View All Referrals
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
        
        {/* Student testimonials */}
        <Testimonials />
      </div>
    </section>
  );
};

export default CtaSection;
