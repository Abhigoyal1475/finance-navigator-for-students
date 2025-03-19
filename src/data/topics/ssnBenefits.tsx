
import React from 'react';
import { Topic } from '@/components/TopicsSection';

const ssnBenefitsTopic: Topic = {
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
};

export default ssnBenefitsTopic;
