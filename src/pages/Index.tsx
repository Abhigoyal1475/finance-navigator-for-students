
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import MobileSidebarToggle from '@/components/MobileSidebarToggle';
import TopicsSection from '@/components/TopicsSection';
import topics from '@/data/topicsData';
import { motion } from 'framer-motion';

const Index = () => {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
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
      
      <TopicsSection
        topics={topics}
        activeTopicId={activeTopicId}
        expandedSectionId={expandedSectionId}
        onTopicClick={handleTopicClick}
        onSectionClick={handleSectionClick}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <FaqSection />
      <CtaSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
