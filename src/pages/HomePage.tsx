import React from 'react';
import { Hero } from '../components/Home/Hero';
import { SkillCard } from '../components/Skills/SkillCard';
import { ProjectCard } from '../components/Projects/ProjectCard';
import { ContactForm } from '../components/Contact/ContactForm';
import { About } from '../components/About/About';
import { ShoutoutCard } from '../components/Shoutout/ShoutoutCard';
import { BrandSection } from '../components/Brands/BrandSection';
import {
  Code2,
  Database,
  Server,
  Cloud,
  Brain,
  Cpu,
  Globe,
  Shield,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from 'lucide-react';
import { projects, skills, shoutouts, socialLinks } from '../data';

export function HomePage() {
  return (
    <>
      <Hero />
      
      <About />

      <BrandSection />

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-green-400">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard title="Languages" icon={Code2} skills={skills.languages} />
            <SkillCard title="Frameworks" icon={Server} skills={skills.frameworks} />
            <SkillCard title="Databases" icon={Database} skills={skills.databases} />
            <SkillCard title="DevOps" icon={Cloud} skills={skills.devops} />
            <SkillCard title="AI & ML" icon={Brain} skills={skills.ai_ml} />
            <SkillCard title="Cloud" icon={Cpu} skills={skills.cloud} />
            <SkillCard title="Web3" icon={Globe} skills={skills.web3} />
            <SkillCard title="Security" icon={Shield} skills={skills.security} />
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-green-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="shoutouts" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-green-400">
            Gratitude & Mentorship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shoutouts.map((shoutout, index) => (
              <ShoutoutCard key={shoutout.name} {...shoutout} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-green-400">
            Initialize Connection
          </h2>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-black/80 text-green-400 py-12 border-t border-green-400/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-mono font-bold mb-4">About</h3>
              <p className="text-gray-300 mb-4">
                Co-founder of Prime-Dev Technologies Pvt. Ltd., specializing in innovative tech solutions. Mentoring 20+ students in their coding journey and contributing to educational resources.
              </p>
              <div className="flex gap-4">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href={`mailto:${socialLinks.email}`} className="hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Contact</h3>
              <p className="text-gray-300 mb-2">Prime-Dev Technologies Pvt. Ltd.</p>
              <p className="text-gray-300 mb-2">Durgapur, West Bengal</p>
              <p className="text-gray-300">{socialLinks.email}</p>
            </div>
          </div>
          <div className="border-t border-green-400/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Prime-Dev Technologies Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}