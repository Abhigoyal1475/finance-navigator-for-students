
import React from 'react';
import { motion } from 'framer-motion';

interface GoogleAdProps {
  type: 'banner' | 'square' | 'sidebar';
  className?: string;
}

const GoogleAd = ({ type, className = '' }: GoogleAdProps) => {
  const adSizes = {
    banner: 'h-16 md:h-24 w-full', // Standard banner
    square: 'h-64 w-64', // Square ad
    sidebar: 'h-96 w-full' // Tall sidebar ad
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`${adSizes[type]} bg-slate-100 rounded-lg flex flex-col items-center justify-center border border-slate-200 overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between w-full px-3 py-1 bg-slate-200 text-xs text-slate-500">
        <span>Ad</span>
        <span>Google Ads</span>
      </div>
      <div className="flex-1 w-full flex flex-col items-center justify-center p-2">
        <div className="text-slate-500 text-sm font-medium">Sponsored Content</div>
        <div className="mt-2 text-xs text-slate-400">This is a simulated Google Ad</div>
      </div>
    </motion.div>
  );
};

export default GoogleAd;
