import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="bg-black/80 border-2 border-green-400 p-6 rounded-lg hover:transform hover:scale-105 transition-all">
      <Icon className="w-12 h-12 mb-4 text-green-400" />
      <h3 className="text-xl font-mono font-bold mb-4 text-green-400">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {skills.map((skill) => (
          <li key={skill} className="font-mono">
            &gt; {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}