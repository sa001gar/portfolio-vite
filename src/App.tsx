import React from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { SkillCard } from './components/Skills/SkillCard';
import { ProjectCard } from './components/Projects/ProjectCard';
import { ContactForm } from './components/Contact/ContactForm';
import {
  Code2,
  Database,
  Server,
  Cloud,
} from 'lucide-react';

function App() {
  const skills = {
    languages: ['Python', 'JavaScript', 'SQL', 'C++'],
    frameworks: ['Django', 'FastAPI', 'Express.js', 'Flask'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  };

  const projects = [
    {
      title: 'AI Password Generator',
      description: 'Secure password generator with AI-powered strength analysis and encryption.',
      technologies: ['Python', 'Django', 'Machine Learning', 'PostgreSQL'],
      githubUrl: 'https://github.com/sa001gar/Password-Manager-On-the-top-of-Streamlit',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Kitto AI Writing Assistant',
      description: 'AI-powered writing assistant with SEO optimization and content suggestions.',
      technologies: ['Python', 'FastAPI', 'Docker', 'MongoDB'],
      githubUrl: 'https://github.com/sa001gar/ai_project_aws_deployment',
      liveUrl: 'https://kitto-ai.sagarkundu.live',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Just Found - Web App',
      description: 'Lost & Found system with digital FIR generation and AI-based object recognition.',
      technologies: ['Django', 'PostgreSQL', 'AWS', 'TensorFlow'],
      githubUrl: 'https://github.com/sa001gar/just-found',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      <Header />
      
      <Hero />

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
              <ProjectCard key={project.title} {...project} />
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

      <footer className="bg-black text-green-400 py-8">
        <div className="container mx-auto px-4 text-center font-mono">
          <p>&copy; {new Date().getFullYear()} Portfolio | Sagar Kundu . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;