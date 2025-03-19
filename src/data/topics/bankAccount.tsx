
import React from 'react';
import { Topic } from '@/components/TopicsSection';

const bankAccountTopic: Topic = {
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
};

export default bankAccountTopic;
