
import React from 'react';
import { Topic } from '@/components/TopicsSection';

const ssnBenefitsTopic: Topic = {
  id: 'ssn-benefits',
  icon: '🆔',
  title: 'SSN & Its Financial Benefits',
  content: (
    <div className="space-y-4">
      <div className="mb-8 flex flex-col sm:flex-row items-center gap-6 bg-blue-50/50 p-6 rounded-xl border border-blue-100">
        <div className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-full">
          <span className="text-4xl">🆔</span>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-blue-800">What is an SSN?</h3>
          <p className="text-slate-700 mt-2">A Social Security Number is your financial identity in the US. It's essential for employment, credit, and many everyday services.</p>
        </div>
      </div>
      
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
      
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 my-8">
        <h3 className="text-xl font-bold text-indigo-800 mb-4">How to Apply for an SSN</h3>
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
      
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span className="font-medium text-amber-800">Important Note</span>
        </div>
        <p className="text-sm text-slate-700">
          You cannot apply for an SSN without a valid job offer. International students on F-1 visas must have either on-campus employment or approved CPT/OPT to be eligible.
        </p>
      </div>
    </div>
  )
};

export default ssnBenefitsTopic;
