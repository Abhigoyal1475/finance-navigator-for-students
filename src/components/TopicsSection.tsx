
import React from 'react';
import { motion } from 'framer-motion';
import TopicCard from '@/components/TopicCard';
import ExpandableSection from '@/components/ExpandableSection';
import GoogleAd from '@/components/GoogleAd';
import { BookOpen, Award, Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Types for our topics
export interface Topic {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

interface TopicsSectionProps {
  topics: Topic[];
  activeTopicId: string | null;
  expandedSectionId: string | null;
  onTopicClick: (topicId: string) => void;
  onSectionClick: (sectionId: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const TopicsSection = ({
  topics,
  activeTopicId,
  expandedSectionId,
  onTopicClick,
  onSectionClick,
  isSidebarOpen,
  setIsSidebarOpen
}: TopicsSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative pt-16 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full mb-4">
            <BookOpen size={16} />
            <span className="text-sm font-medium">Interactive Guide</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4" id="topics">Essential Financial Topics</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Click on a topic to learn everything you need to know about managing your finances as an international student in the US.
          </p>
        </motion.div>
        
        {/* New Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100 p-6 mb-10 text-slate-700"
        >
          <h3 className="text-xl font-bold mb-4 text-blue-800">Why These Topics Matter for International Students</h3>
          
          <p className="mb-4">
            Coming to the US from countries like India, you'll quickly discover that the American financial system works very differently. Unlike back home where cash transactions are common and many can get by without formal banking, in the US, these financial tools aren't luxuries—they're necessities for daily life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-100 rounded-full p-1">
                  <Check size={16} className="text-blue-700" />
                </div>
                <h4 className="font-semibold text-blue-800">Banking is Essential</h4>
              </div>
              <p className="text-sm">
                Without a US bank account, you'll struggle with basics like paying rent, receiving stipends, and even shopping online. Most landlords won't accept cash, and carrying large amounts is unsafe.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-100 rounded-full p-1">
                  <Check size={16} className="text-blue-700" />
                </div>
                <h4 className="font-semibold text-blue-800">SSN Opens Doors</h4>
              </div>
              <p className="text-sm">
                A Social Security Number isn't just for work—it's the key to building credit, renting apartments without massive deposits, and accessing better financial products throughout your stay.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-100 rounded-full p-1">
                  <Check size={16} className="text-blue-700" />
                </div>
                <h4 className="font-semibold text-blue-800">Credit History Matters</h4>
              </div>
              <p className="text-sm">
                In the US, your credit score affects everything from housing to phone plans. Without credit history, you'll face higher security deposits, denied applications, and limited options.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <Award size={18} className="text-indigo-700" />
              <h4 className="font-semibold text-indigo-800">Our Commitment to You</h4>
            </div>
            <p className="text-sm">
              We've spent months researching and negotiating special deals for international students. The referral links and offers in this guide aren't just random recommendations—they're carefully selected partnerships that give you better bonuses and benefits than you'd get by applying directly. We've done the hard work so you can start your US journey with the best financial foundation possible.
            </p>
          </div>
        </motion.div>
        
        <div className="mb-10">
          <GoogleAd type="banner" className="mx-auto" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-slate-100 shadow-sm md:sticky md:top-4">
              <div className="mb-4">
                <h2 className="font-bold text-lg text-slate-800">Topics</h2>
                <p className="text-xs text-slate-500">Select a topic to learn more</p>
              </div>
              
              <div className="space-y-2">
                {topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    icon={topic.icon}
                    title={topic.title}
                    onClick={() => onTopicClick(topic.id)}
                    isActive={activeTopicId === topic.id}
                    variant="sidebar"
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:flex-1">
            <div className="grid grid-cols-2 md:hidden gap-4 mb-8">
              {activeTopicId === null && topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  icon={topic.icon}
                  title={topic.title}
                  onClick={() => onTopicClick(topic.id)}
                  isActive={activeTopicId === topic.id}
                />
              ))}
            </div>
            
            <section id="topic-sections" className="space-y-6">
              {topics.map((topic) => (
                <ExpandableSection
                  key={topic.id}
                  icon={topic.icon}
                  title={topic.title}
                  isExpanded={expandedSectionId === topic.id}
                  onClick={() => onSectionClick(topic.id)}
                >
                  {topic.content}
                </ExpandableSection>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsSection;
