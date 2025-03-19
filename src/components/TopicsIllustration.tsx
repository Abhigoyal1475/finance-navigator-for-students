
import React from 'react';
import { motion } from 'framer-motion';

type IllustrationType = 'bank' | 'credit-card' | 'ssn' | 'credit-score' | 'offers';

interface TopicIllustrationProps {
  type: IllustrationType;
  className?: string;
}

const TopicIllustration = ({ type, className = "" }: TopicIllustrationProps) => {
  // Animated elements for each illustration type
  const renderIllustration = () => {
    switch (type) {
      case 'bank':
        return (
          <div className="relative h-40 w-40 mx-auto">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-blue-100 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-4xl">🏦</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-0 left-0 p-2 bg-green-100 rounded-full"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">💵</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-5 right-0 p-2 bg-blue-50 rounded-full"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-2xl">📱</span>
            </motion.div>
          </div>
        );
      
      case 'credit-card':
        return (
          <div className="relative h-40 w-40 mx-auto">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-indigo-100 rounded-lg h-24 w-36 flex items-center justify-center"
              animate={{ 
                rotateY: [0, 180, 0],
                backgroundColor: ['rgb(224 231 255)', 'rgb(238 242 255)', 'rgb(224 231 255)']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-4xl">💳</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-0 left-0 p-2 bg-yellow-100 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">⭐</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-5 right-0 p-2 bg-green-100 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">✅</span>
            </motion.div>
          </div>
        );
      
      case 'ssn':
        return (
          <div className="relative h-40 w-40 mx-auto">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-blue-100 rounded-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-4xl">🆔</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-0 left-5 p-2 bg-indigo-100 rounded-lg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">📄</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-10 right-0 p-2 bg-green-100 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">🔒</span>
            </motion.div>
          </div>
        );
      
      case 'credit-score':
        return (
          <div className="relative h-40 w-40 mx-auto">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-green-100 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-4xl">📈</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-0 left-0 p-2 bg-blue-100 rounded-full"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">💰</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-5 right-0 p-2 bg-yellow-100 rounded-full"
              animate={{ scale: [1, 0.9, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">⭐</span>
            </motion.div>
          </div>
        );
      
      case 'offers':
        return (
          <div className="relative h-40 w-40 mx-auto">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-indigo-100 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-4xl">🎁</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-0 left-5 p-2 bg-green-100 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">💵</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-5 right-0 p-2 bg-yellow-100 rounded-full"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">🔥</span>
            </motion.div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      {renderIllustration()}
    </div>
  );
};

export default TopicIllustration;
