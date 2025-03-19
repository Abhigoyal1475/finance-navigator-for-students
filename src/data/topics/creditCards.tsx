
import React from 'react';
import { Topic } from '@/components/TopicsSection';

const creditCardsTopic: Topic = {
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
};

export default creditCardsTopic;
