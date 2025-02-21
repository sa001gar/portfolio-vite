import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Globe } from 'lucide-react';

interface Tag {
  label: string;
  color: string;
}

interface ShoutoutCardProps {
  name: string;
  role: string;
  image: string;
  contribution: string;
  index: number;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  tags: Tag[];
}

const getTagColor = (color: string) => {
  const colors = {
    purple: 'bg-purple-400/20 text-purple-400',
    blue: 'bg-blue-400/20 text-blue-400',
    pink: 'bg-pink-400/20 text-pink-400',
    green: 'bg-emerald-400/20 text-emerald-400',
    orange: 'bg-orange-400/20 text-orange-400',
    indigo: 'bg-indigo-400/20 text-indigo-400'
  };
  return colors[color as keyof typeof colors] || 'bg-gray-400/20 text-gray-400';
};

export function ShoutoutCard({
  name,
  role,
  image,
  contribution,
  index,
  github,
  linkedin,
  portfolio,
  tags
}: ShoutoutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/80 border-2 border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-colors"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-400">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div>
          <h3 className="text-xl font-mono font-bold text-green-400">{name}</h3>
          <p className="text-gray-400">{role}</p>
        </div>
      </motion.div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`px-2 py-1 rounded-full text-sm font-medium ${getTagColor(tag.color)}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <p className="text-gray-300 mb-4">{contribution}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-pink-400">
          <Heart className="w-4 h-4" />
          <span className="text-sm">Gratitude</span>
        </div>
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
              aria-label={`${name}'s Portfolio`}
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}