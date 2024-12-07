import React from 'react';

interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function NavLinks({ mobile, onClose }: NavLinksProps) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const baseClasses = 'hover:text-white transition-colors';
  const mobileClasses = 'block py-2 text-lg font-mono';

  return (
    <>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`${baseClasses} ${mobile ? mobileClasses : ''}`}
          onClick={onClose}
        >
          {mobile ? `> ${label}` : label}
        </a>
      ))}
    </>
  );
}