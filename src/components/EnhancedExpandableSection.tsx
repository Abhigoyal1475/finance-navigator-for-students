
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface EnhancedExpandableSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
}

const EnhancedExpandableSection = ({ 
  icon, 
  title, 
  children, 
  isExpanded, 
  onClick 
}: EnhancedExpandableSectionProps) => {
  
  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <motion.div
        initial={false}
        onClick={onClick}
        className="p-4 md:p-6 flex items-center justify-between cursor-pointer"
        whileHover={{ backgroundColor: "rgba(245, 247, 252, 0.9)" }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="text-2xl md:text-3xl"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-lg md:text-xl font-medium">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-slate-500" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 pt-0 md:pt-0 border-t border-slate-100">
              <div className="w-full text-sm text-slate-700">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedExpandableSection;
