import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: typeof LucideIcon;
  skills: string[];
}

export function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/80 border-2 border-green-400 p-6 rounded-lg hover:transform hover:scale-105 transition-all"
    >
      <Icon className="w-12 h-12 mb-4 text-green-400" />
      <h3 className="text-xl font-mono font-bold mb-4 text-green-400">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="font-mono flex items-center gap-2"
          >
            <span className="text-green-400">›</span> {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}