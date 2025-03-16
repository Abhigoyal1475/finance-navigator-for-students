import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import TopicCard from '@/components/TopicCard';
import ExpandableSection from '@/components/ExpandableSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import SidebarOverview from '@/components/SidebarOverview';
import { toast } from 'sonner';
import { Menu, X } from 'lucide-react';

// Types for our topics
interface Topic {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

// Topic data
const topics: Topic[] = [
  {
    id: 'bank-account',
    icon: '🏦',
    title: 'Opening a Bank Account',
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Best Banks for International Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Chase Bank</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>No monthly maintenance fee for students under 24 years old</li>
              <li>Extensive ATM network with 16,000+ ATMs nationwide</li>
              <li>Mobile banking app with Zelle for instant transfers</li>
              <li>No minimum balance required to maintain the account</li>
            </ul>
            <p className="text-sm text-blue-700 font-medium mt-2">💰 Referral Bonus: $100 when you open an account using our link and set up direct deposit!</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Bank of America</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>Advantage SafeBalance account with no overdraft fees</li>
              <li>Monthly maintenance fees waived for students under 25</li>
              <li>Digital banking tools with budgeting features</li>
              <li>Access to over 15,000 ATMs nationwide</li>
            </ul>
            <p className="text-sm text-blue-700 font-medium mt-2">💰 Referral Bonus: $100 when opening an account with our link and completing qualifying direct deposits.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Wells Fargo</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>Everyday Checking account with fees waived for students 17-24</li>
              <li>Branches on many university campuses</li>
              <li>No minimum opening deposit required</li>
              <li>Free incoming wire transfers, ideal for receiving money from home</li>
            </ul>
            <p className="text-sm text-blue-700 font-medium mt-2">💰 Referral Bonus: $50 when you open an account with our referral code and maintain a $500 minimum balance for 3 months.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Capital One</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>360 Checking with no fees or minimums for everyone</li>
              <li>0.10% APY interest on all balances</li> 
              <li>Fee-free access to 40,000+ ATMs</li>
              <li>No foreign transaction fees on debit card purchases made outside the US</li>
            </ul>
            <p className="text-sm text-blue-700 font-medium mt-2">💰 Referral Bonus: $75 bonus when you open an account with our link and make 3 debit card purchases within 90 days.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-8">Required Documents</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>Valid passport with visa</li>
          <li>I-20 or DS-2019 form</li>
          <li>Student ID card</li>
          <li>Proof of U.S. address (lease agreement, utility bill)</li>
          <li>Initial deposit (usually $25-$100)</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8">Step-by-Step Process</h3>
        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          <li>Research banks near your campus or with international student programs</li>
          <li>Gather all required documents</li>
          <li>Visit a branch in person (walk-in or appointment)</li>
          <li>Complete application with a bank representative</li>
          <li>Make your initial deposit</li>
          <li>Set up online banking and download the mobile app</li>
          <li>Receive your debit card by mail (usually 7-10 business days)</li>
        </ol>
      </div>
    )
  },
  {
    id: 'ssn-benefits',
    icon: '🆔',
    title: 'SSN & Its Financial Benefits',
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">What is an SSN?</h3>
        <ul className="text-slate-700 list-disc pl-4 space-y-1">
          <li>A Social Security Number (SSN) is a nine-digit identification number issued to U.S. citizens, permanent residents, and temporary working residents</li>
          <li>As an international student, you can get an SSN if you have a job offer from your university or an approved employer</li>
          <li>Having an SSN simplifies many financial processes in the US</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8">Financial Benefits of Having an SSN</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>Easier approval for credit cards with better rewards</li>
          <li>Access to build credit history faster</li>
          <li>Required for most student jobs on campus</li>
          <li>Often needed for apartment rentals and utilities</li>
          <li>Simplifies tax filing process</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8">How to Apply for an SSN</h3>
        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          <li>Secure an on-campus job or authorized employment</li>
          <li>Get a letter from your employer and international student office</li>
          <li>Wait at least 10 days after arriving in the U.S.</li>
          <li>Visit your local Social Security Office with:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Passport with visa</li>
              <li>I-20 or DS-2019</li>
              <li>I-94 record</li>
              <li>Employment authorization letter</li>
            </ul>
          </li>
          <li>Complete the SS-5 application form</li>
          <li>Receive your SSN card by mail in 2-4 weeks</li>
        </ol>
      </div>
    )
  },
  {
    id: 'credit-cards',
    icon: '💳',
    title: 'Best Credit Cards for Beginners',
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Credit Cards That Don't Require SSN</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Deserve EDU Mastercard</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>Specifically designed for international students</li>
              <li>No SSN required, only passport and I-20</li>
              <li>1% cashback on all purchases</li>
              <li>Amazon Prime Student membership for one year</li>
              <li>No annual fee or foreign transaction fees</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: $30 statement credit when approved through our link!</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Discover it® Student Cash Back</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>5% cashback in rotating categories (grocery stores, restaurants, gas stations)</li>
              <li>No SSN required for international students with passport and I-20</li>
              <li>Free FICO® Score monitoring</li>
              <li>No annual fee or foreign transaction fees</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: $50 statement credit + cashback match for the entire first year (effectively doubling your rewards)!</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Petal 2 Visa</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>For students with no credit history</li>
              <li>Uses banking history instead of credit score for approval</li>
              <li>1-1.5% cashback that increases with on-time payments</li>
              <li>No annual fee, late fee, or foreign transaction fees</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: $50 bonus after making $500 in purchases within 90 days of approval via our link.</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Capital One Journey Student</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>1% cashback on all purchases, boosted to 1.25% with on-time payments</li>
              <li>No foreign transaction fees</li>
              <li>Credit limit increases available after 5 months of on-time payments</li>
              <li>Access to CreditWise monitoring tool</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: $100 bonus after spending $500 within the first 3 months when applying through our link.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-8">Credit Cards for Students with SSN</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Chase Freedom Student</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>1% cashback on all purchases</li>
              <li>$50 bonus after first purchase made within 3 months</li>
              <li>Credit limit increases after 5 on-time payments</li>
              <li>Free credit score access</li>
              <li>No annual fee</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: Additional $50 when applying with our referral link, plus $20 Good Standing Rewards annually for up to 5 years.</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Bank of America Cash Rewards</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>3% cashback in your choice category (gas, online shopping, dining, travel, drug stores)</li>
              <li>2% at grocery stores and wholesale clubs</li>
              <li>$200 online cash rewards bonus after spending $1,000 in first 90 days</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: Additional $25 statement credit when approved through our referral link.</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Citi Rewards+ Student</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>2X ThankYou® Points at supermarkets and gas stations (on first $6,000 per year)</li>
              <li>Rounds up to nearest 10 points on every purchase</li>
              <li>10% points back on first 100,000 points redeemed per year</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: 15,000 bonus points (worth $150) after spending $750 in first 3 months through our link.</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium mb-2">Wells Fargo Cash Back College</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>3% cashback on gas, groceries, and drugstores for first 6 months, then 1% on everything</li>
              <li>Cell phone protection up to $600 when paying your bill with the card</li>
              <li>No annual fee</li>
            </ul>
            <p className="text-sm text-indigo-700 font-medium mt-2">💰 Referral Bonus: $50 cash rewards bonus when opening through our link and spending $500 in first 3 months.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-8">Application Process</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li>Research cards designed for international students</li>
          <li>Check if you meet the basic requirements (student visa status, U.S. bank account)</li>
          <li>Apply online through the bank's website</li>
          <li>Provide documentation (passport, I-20, bank statements)</li>
          <li>Wait for approval (typically 7-10 business days)</li>
          <li>Receive your card by mail and activate it</li>
        </ol>
      </div>
    )
  },
  {
    id: 'credit-score',
    icon: '💰',
    title: 'Building Your Credit Score',
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Why Credit Score Matters</h3>
        <p className="text-slate-700">
          A good credit score (above 700) helps you qualify for better credit cards, secure apartments without large deposits, get lower interest rates on loans, and may even affect job opportunities in finance.
        </p>
        
        <h3 className="text-xl font-bold mt-8">How to Build Credit as an International Student</h3>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium mb-2">Use a Secured Credit Card</h4>
            <p className="text-sm text-slate-700">Start with a secured card that requires a deposit. The Discover it® Secured and Capital One Platinum Secured are good options.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium mb-2">Always Pay on Time</h4>
            <p className="text-sm text-slate-700">Payment history accounts for 35% of your score. Set up automatic payments to never miss a deadline.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium mb-2">Keep Credit Utilization Low</h4>
            <p className="text-sm text-slate-700">Try to use less than 30% of your available credit. For a $1,000 limit, keep your balance below $300.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium mb-2">Become an Authorized User</h4>
            <p className="text-sm text-slate-700">If you have a trusted friend or family member with good credit in the U.S., ask to become an authorized user on their card.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium mb-2">Monitor Your Credit</h4>
            <p className="text-sm text-slate-700">Check your credit report regularly using free services like Credit Karma or your credit card's free score access.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-8">Common Credit Mistakes to Avoid</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>Applying for multiple credit cards at once</li>
          <li>Missing payments or paying late</li>
          <li>Maxing out your credit cards</li>
          <li>Closing old credit accounts (this shortens your credit history)</li>
          <li>Co-signing loans for others</li>
        </ul>
      </div>
    )
  },
  {
    id: 'bank-offers',
    icon: '🏦',
    title: 'Best Bank Offers & Referrals',
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Current Promotions for Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">Chase College Checking℠</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>$100 bonus when you open an account and complete 10 qualifying transactions within 60 days</li>
              <li>No monthly service fee for up to 5 years while in college</li>
              <li>Access to 16,000+ ATMs and 4,700+ branches nationwide</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Exclusive Offer: $100 bonus + extra $25 Amazon gift card when using our referral link!</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">Bank of America Advantage Banking</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>$100 bonus for new student checking accounts with qualifying direct deposits</li>
              <li>Monthly maintenance fee waived for students under 25</li>
              <li>Mobile check deposits and Zelle transfers</li>
              <li>Access to financial education resources</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Exclusive Offer: $100 bonus + additional $50 when setting up direct deposit via our link!</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">TD Bank Student Checking</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>$150 bonus when opening a new account and receiving direct deposits of $500+ within 60 days</li>
              <li>No monthly maintenance fee for students 17-23</li>
              <li>Free incoming wire transfers</li>
              <li>Extended hours and Sunday banking at many locations</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Exclusive Offer: $150 bonus + $25 bonus when opening a linked savings account through our referral code!</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">Discover Cashback Debit</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>No bonus, but offers 1% cashback on up to $3,000 in debit card purchases each month</li>
              <li>No monthly fees, minimum balances, or overdraft fees</li>
              <li>Access to 60,000+ fee-free ATMs</li>
              <li>24/7 U.S.-based customer service</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Exclusive Offer: $75 bonus when opening through our referral and making $500 in purchases within 30 days!</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-8">Referral Programs Worth Using</h3>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">Chase Refer-a-Friend</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>Both referrer and new customer can receive $50 when opening a checking account through referral</li>
              <li>Additional $50 bonus when setting up direct deposit within 60 days</li>
              <li>Promotion changes quarterly - check our updated link for current offers</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Our Referral Link: Get up to $100 total bonus ($50 base + $50 for direct deposit)</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">Discover Refer-a-Friend</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>Both parties get $50 or more when a friend opens their first Discover account</li>
              <li>Referrals available for checking, savings, and credit card products</li>
              <li>Bonus paid after account is opened and qualifying activities completed</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Our Referral Link: Get $100 ($50 for you + $50 for us) when opening your first account!</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium mb-2">Capital One Refer-a-Friend</h4>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-1">
              <li>Earn $50 for each friend who opens a checking account with qualifying activities</li>
              <li>No limit to how many friends you can refer</li>
              <li>New customers receive $25-$100 bonus depending on the promotion and qualifying activities</li>
            </ul>
            <p className="text-sm text-yellow-700 font-medium mt-2">💰 Our Referral Link: Get $75 bonus with $250 in direct deposits within 90 days!</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mt-8">Special Features for International Students</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>HSBC International Student Account: No monthly fees, global transfers between HSBC accounts</li>
          <li>Citibank Global Transfers: Free transfers between Citibank accounts worldwide</li>
          <li>Wise Multi-Currency Account: Hold and exchange multiple currencies with minimal fees</li>
          <li>Wells Fargo International Student Program: Dedicated advisors for international students</li>
        </ul>
      </div>
    )
  }
];

const Index = () => {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("Welcome to the Finance Guide", {
        description: "Navigate through different topics to learn about banking and finance in the US",
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleTopicClick = (topicId: string) => {
    setActiveTopicId(topicId);
    setExpandedSectionId(topicId);
    
    // Close sidebar on mobile when topic is selected
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
    
    setTimeout(() => {
      document.getElementById('topic-sections')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };
  
  const handleSectionClick = (sectionId: string) => {
    setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Hero />
      
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-white p-2 rounded-full shadow-md"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className="relative pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" id="topics">Essential Financial Topics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click on a topic to learn everything you need to know about managing your finances as an international student in the US.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar - fixed position on mobile */}
            <div className={`
              fixed md:static top-0 left-0 h-screen md:h-auto w-3/4 md:w-64 
              transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
              transition-transform duration-300 ease-in-out z-40
              overflow-y-auto md:overflow-visible
              md:block
            `}>
              <SidebarOverview 
                topics={topics} 
                activeTopicId={activeTopicId} 
                setActiveTopic={handleTopicClick} 
                className="md:sticky md:top-4"
              />
            </div>
            
            {/* Overlay for mobile */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/30 z-30 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            
            <div className="md:flex-1">
              {/* Mobile card view - show only on mobile if no topic is selected */}
              <div className="grid grid-cols-2 md:hidden gap-4 mb-8">
                {activeTopicId === null && topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    icon={topic.icon}
                    title={topic.title}
                    onClick={() => handleTopicClick(topic.id)}
                    isActive={activeTopicId === topic.id}
                  />
                ))}
              </div>
              
              {/* Topic sections */}
              <section id="topic-sections" className="space-y-6">
                {topics.map((topic) => (
                  <ExpandableSection
                    key={topic.id}
                    icon={topic.icon}
                    title={topic.title}
                    isExpanded={expandedSectionId === topic.id}
                    onClick={() => handleSectionClick(topic.id)}
                  >
                    {topic.content}
                  </ExpandableSection>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
