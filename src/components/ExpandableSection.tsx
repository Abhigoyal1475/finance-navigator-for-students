
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
}

const ExpandableSection = ({ 
  icon, 
  title, 
  children, 
  isExpanded, 
  onClick 
}: ExpandableSectionProps) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={cn(
          "w-full px-6 py-4 rounded-xl glass-card",
          "flex items-center gap-4",
          "transition-all duration-300",
          isExpanded ? "rounded-b-none" : ""
        )}
      >
        <span className="text-2xl">{icon}</span>
        <span className="font-medium text-lg flex-1 text-left">{title}</span>
        <ChevronRight 
          className={cn(
            "h-5 w-5 text-slate-600 transition-transform duration-300",
            isExpanded ? "rotate-90" : ""
          )} 
        />
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 border border-t-0 border-slate-200 rounded-b-xl bg-white/80 backdrop-blur-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableSection;
