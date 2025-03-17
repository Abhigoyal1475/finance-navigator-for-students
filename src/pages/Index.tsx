
import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import MobileSidebarToggle from '@/components/MobileSidebarToggle';
import ResponsiveSidebar from '@/components/ResponsiveSidebar';
import TopicsSection from '@/components/TopicsSection';
import topics from '@/data/topicsData';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Index = () => {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  // Show welcome toast when component mounts
  useEffect(() => {
    setTimeout(() => {
      toast.success('Welcome to the International Student Finance Guide!', {
        description: 'Click on any topic to learn more about managing your finances in the US.',
        duration: 5000,
      });
    }, 2000);
  }, []);
  
  const handleTopicClick = (topicId: string) => {
    setActiveTopicId(topicId);
    setExpandedSectionId(topicId);
    
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden"
    >
      <Hero />
      
      <MobileSidebarToggle 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div className="flex flex-col md:flex-row">
        <ResponsiveSidebar
          topics={topics}
          activeTopicId={activeTopicId}
          setActiveTopic={handleTopicClick}
          isSidebarOpen={isSidebarOpen}
        />
        
        <div className="flex-1">
          <TopicsSection
            topics={topics}
            activeTopicId={activeTopicId}
            expandedSectionId={expandedSectionId}
            onTopicClick={handleTopicClick}
            onSectionClick={handleSectionClick}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </div>
      
      <FaqSection />
      <CtaSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
