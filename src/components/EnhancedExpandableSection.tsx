
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TopicIllustration from './TopicIllustration';

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
  
  // Map icon to illustration type
  const getIllustrationType = () => {
    switch (icon) {
      case '🏦': 
        return title.includes('Offers') ? 'offers' : 'bank';
      case '💳': 
        return 'credit-card';
      case '🆔': 
        return 'ssn';
      case '💰': 
        return 'credit-score';
      default: 
        return 'bank';
    }
  };

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
              <div className="md:grid md:grid-cols-4 gap-6">
                <div className="hidden md:block">
                  <TopicIllustration 
                    type={getIllustrationType()} 
                    className="sticky top-6"
                  />
                </div>
                <div className="md:col-span-3">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedExpandableSection;
