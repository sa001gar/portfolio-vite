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
            transition={{ duration: 0.5, delay: 2 }}
          >
            <Terminal className="w-16 h-16 mx-auto mb-8 text-green-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono text-green-400">
              Sagar Kundu
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-green-400/80">
              Full Stack Developer & ML Expert
            </p>
            <div className="font-mono text-lg sm:text-xl text-green-400/60">
              Backend Developer @ Durgapur, West Bengal_
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-green-400 text-black font-mono font-bold rounded-lg hover:bg-green-300 transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-green-400 text-green-400 font-mono font-bold rounded-lg hover:bg-green-400 hover:text-black transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}