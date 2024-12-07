import React from 'react';
import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-green-400 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Terminal className="w-16 h-16 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6 typing-animation">
            Crafting Robust Backends
          </h1>
          <p className="text-xl md:text-2xl font-mono mb-8 typing-animation-delay">
            with Modern Tools, Retro Vibes_
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-green-400 text-black font-mono font-bold hover:bg-green-300 transition-colors rounded"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-green-400 text-green-400 font-mono font-bold hover:bg-green-400 hover:text-black transition-all rounded"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}