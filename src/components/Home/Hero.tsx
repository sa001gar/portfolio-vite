import React from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { NeuralNetwork } from './NeuralNetwork';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <NeuralNetwork />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-green-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-green-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              Sagar Kundu
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-400/90 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              Full Stack Developer & ML Expert
            </p>
            <div className="font-mono text-base sm:text-lg text-green-400/80 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Backend Developer @ Durgapur, West Bengal_
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
          >
            <motion.a
              href="#projects"
              className="px-6 py-2.5 bg-green-400 text-black font-mono font-bold rounded-lg hover:bg-green-300 transition-colors w-full sm:w-auto text-sm sm:text-base shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-2.5 border-2 border-green-400 text-green-400 font-mono font-bold rounded-lg hover:bg-green-400 hover:text-black transition-colors w-full sm:w-auto text-sm sm:text-base shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}