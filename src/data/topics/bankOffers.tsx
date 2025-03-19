
import React from 'react';
import { Topic } from '@/components/TopicsSection';

const bankOffersTopic: Topic = {
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
};

export default bankOffersTopic;
