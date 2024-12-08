import React from 'react';
import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-green-400 pt-16 box-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <Terminal className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8" />
          <div className="px-2 sm:px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-mono mb-4 sm:mb-6 typing-animation break-words leading-tight">
              Crafting Robust Backends
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-mono mb-6 sm:mb-8 typing-animation-delay leading-relaxed">
              with Modern Tools, Retro Vibes_
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-400 text-black font-mono font-bold hover:bg-green-300 transition-colors rounded text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-green-400 text-green-400 font-mono font-bold hover:bg-green-400 hover:text-black transition-all rounded text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}