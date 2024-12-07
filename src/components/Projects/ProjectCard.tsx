import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-black/80 border-2 border-green-400 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-mono font-bold mb-2 text-green-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-green-400/20 text-green-400 rounded text-sm font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            className="flex items-center gap-2 text-green-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              className="flex items-center gap-2 text-green-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}