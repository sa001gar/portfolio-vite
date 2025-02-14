import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function LoadingScreen() {
  const loadingSteps = [
    'Initializing system...',
    'Loading components...',
    'Preparing animations...',
    'Optimizing performance...',
    'System ready!'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center"
    >
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center mb-8"
        >
          <Terminal className="w-16 h-16 text-green-400" />
        </motion.div>
        
        <div className="space-y-4 font-mono">
          {loadingSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2
                }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              <span className="text-green-400">{step}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 h-1 bg-black rounded-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.8
            }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}