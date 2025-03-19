
import React from 'react';
import { Topic } from '@/components/TopicsSection';

const creditScoreTopic: Topic = {
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
};

export default creditScoreTopic;
