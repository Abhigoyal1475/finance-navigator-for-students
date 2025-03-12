
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TopicCardProps {
  icon: string;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const TopicCard = ({ icon, title, onClick, isActive }: TopicCardProps) => {
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
