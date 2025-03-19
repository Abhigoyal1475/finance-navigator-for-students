
import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import MobileSidebarToggle from '@/components/MobileSidebarToggle';
import TopicsSection from '@/components/TopicsSection';
import topics from '@/data/topicsData';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if we're in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      
      // Handle navigating between topics with arrow keys
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (activeTopicId) {
          const currentIndex = topics.findIndex(t => t.id === activeTopicId);
          if (currentIndex === -1) return;
          
          let newIndex;
          if (e.key === 'ArrowDown') {
            newIndex = (currentIndex + 1) % topics.length;
          } else {
            newIndex = (currentIndex - 1 + topics.length) % topics.length;
          }
          
          const newTopicId = topics[newIndex].id;
          setActiveTopicId(newTopicId);
          setExpandedSectionId(newTopicId);
          
          document.getElementById('topic-sections')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTopicId, topics]);
  
  useEffect(() => {
    // Close sidebar when switching to desktop
    if (!isMobile && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isMobile, isSidebarOpen]);
  
  const handleTopicClick = (topicId: string) => {
    setActiveTopicId(topicId);
    setExpandedSectionId(topicId);
    
    if (isMobile) {
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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:p-2 focus:bg-blue-600 focus:text-white focus:z-50 focus:rounded">
        Skip to main content
      </a>
      
      <Hero />
      
      <MobileSidebarToggle 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      <main id="main-content">
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
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
