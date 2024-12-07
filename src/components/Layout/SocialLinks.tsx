import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  mobile?: boolean;
}

export function SocialLinks({ mobile }: SocialLinksProps) {
  const links = [
    {
      href: 'https://github.com/sa001gar',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/sagarkundu/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:kundusagar233@gmail.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <div className={`flex items-center ${mobile ? 'justify-center gap-8' : 'gap-4'}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          className="hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon className={`${mobile ? 'w-6 h-6' : 'w-5 h-5'}`} />
        </a>
      ))}
    </div>
  );
}