
import React from 'react';
import { motion } from 'framer-motion';
import TopicCard from '@/components/TopicCard';
import ExpandableSection from '@/components/ExpandableSection';
import GoogleAd from '@/components/GoogleAd';
import { BookOpen } from 'lucide-react';
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
