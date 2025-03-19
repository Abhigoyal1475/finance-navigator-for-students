
import React from 'react';
import { Topic } from '@/components/TopicsSection';

// Import individual topic files
import bankAccountTopic from './topics/bankAccount';
import ssnBenefitsTopic from './topics/ssnBenefits';
import creditCardsTopic from './topics/creditCards';
import creditScoreTopic from './topics/creditScore';
import bankOffersTopic from './topics/bankOffers';

// Combine all topics into a single array
const topics: Topic[] = [
  bankAccountTopic,
  ssnBenefitsTopic,
  creditCardsTopic,
  creditScoreTopic,
  bankOffersTopic
];

export default topics;
