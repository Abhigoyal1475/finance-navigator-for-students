
import React from 'react';
import { motion } from 'framer-motion';
import TopicCard from './TopicCard';

interface Topic {
  id: string;
  icon: string;
  title: string;
}

interface SidebarOverviewProps {
  topics: Topic[];
  activeTopicId: string | null;
  setActiveTopic: (id: string) => void;
  className?: string;
}

const SidebarOverview = ({ topics, activeTopicId, setActiveTopic, className }: SidebarOverviewProps) => {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-slate-100 shadow-sm ${className}`}
    >
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
            onClick={() => setActiveTopic(topic.id)}
            isActive={activeTopicId === topic.id}
            variant="sidebar"
          />
        ))}
      </div>
    </motion.aside>
  );
};

export default SidebarOverview;
