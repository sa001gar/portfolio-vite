import React, { useState } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { SocialLinks } from './SocialLinks';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 text-green-400 border-b border-green-400 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span className="font-mono text-xl">SAGAR@KUNDU:~$</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
            <div className="border-l border-green-400/30 h-6 mx-4" />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-green-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <NavLinks mobile onClose={() => setIsMenuOpen(false)} />
              <div className="border-t border-green-400/30 my-4" />
              <SocialLinks mobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}