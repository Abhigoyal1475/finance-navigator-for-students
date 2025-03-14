
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TopicCardProps {
  icon: string;
  title: string;
  onClick: () => void;
  isActive: boolean;
  variant?: 'card' | 'sidebar';
}

const TopicCard = ({ icon, title, onClick, isActive, variant = 'card' }: TopicCardProps) => {
  if (variant === 'sidebar') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className={cn(
          "p-2 rounded-lg cursor-pointer",
          "flex items-center gap-3",
          "transition-all duration-200",
          isActive 
            ? "bg-blue-100/70 text-blue-800" 
            : "hover:bg-blue-50/50 text-slate-700 hover:text-blue-800"
        )}
      >
        <div className="text-xl">{icon}</div>
        <h3 className="font-medium text-sm">{title}</h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={cn(
        "glass-card p-6 rounded-xl cursor-pointer",
        "flex flex-col items-center gap-4",
        "transition-all duration-300",
        isActive ? "ring-2 ring-primary/60 shadow-md" : ""
      )}
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="font-medium text-center">{title}</h3>
    </motion.div>
  );
};

export default TopicCard;
