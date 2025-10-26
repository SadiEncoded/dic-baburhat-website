// components/layout/Header.tsx
'use client';
import { navItems } from '@/config/navigation';
import { theme } from '@/config/theme';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from '../shared/Container';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY - 100;
        if (window.scrollY >= top) current = section.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="backdrop-blur-sm sticky top-0 z-40 border-b"
      style={{
        backgroundColor: theme.colors.neutralWhite,
        boxShadow: theme.shadows.neumorphic,
        fontFamily: theme.fontFamily,
      }}
    >
      <Container className="py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <Image
              src="/DICLogo.png"
              alt="Daffodil International College Logo"
              width={120}
              height={120}
              className="rounded"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center gap-6 text-sm" 
          style={{ color: theme.colors.neutralText }}
        >
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href || '#'}
                className={`px-3 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  activeSection === item.href?.substring(1) 
                    ? 'text-blue-700 font-semibold' 
                    : 'text-neutral-700'
                }`}
                style={{
                  backgroundColor: theme.colors.neutralWhite,
                  boxShadow: theme.shadows.neumorphic,
                }}
                aria-current={activeSection === item.href?.substring(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
              {item.submenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 hidden group-hover:block rounded-xl min-w-[220px] z-50"
                  style={{
                    backgroundColor: theme.colors.neutralWhite,
                    boxShadow: theme.shadows.neumorphic,
                    border: `1px solid ${theme.colors.primaryLight}`,
                    backdropFilter: 'blur(5px)',
                  }}
                >
                  {item.submenu.map((sub, i) => (
                    <a
                      key={i}
                      href={sub.href}
                      className="block px-5 py-3 text-sm font-medium text-neutralText hover:bg-linear-to-r hover:from-primaryLight hover:to-accentBlue hover:text-primaryDark transition-all duration-200"
                    >
                      {sub.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#apply"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl font-bold shadow hover:bg-accentBlue transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.neutralWhite,
              boxShadow: theme.shadows.neumorphic,
            }}
          >
            Apply Now
          </a>
          <button
            className="inline-flex items-center md:hidden p-2 rounded-xl border hover:bg-primaryLight transition-all duration-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ boxShadow: theme.shadows.neumorphic }}
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d={isMenuOpen ? 'M18 6L6 18M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
            style={{
              backgroundColor: theme.colors.neutralWhite,
              boxShadow: theme.shadows.neumorphic,
              color: theme.colors.neutralText,
            }}
          >
            <Container className="py-4">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button
                    className="flex justify-between w-full items-center px-4 py-3 text-sm font-medium rounded-xl"
                    onClick={() => toggleDropdown(i)}
                    aria-expanded={activeDropdown === i}
                    style={{ boxShadow: theme.shadows.neumorphic }}
                  >
                    {item.label}
                    {item.submenu && (
                      <span
                        className={`ml-2 transform transition-transform duration-200 ${
                          activeDropdown === i ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </button>
                  <AnimatePresence>
                    {item.submenu && activeDropdown === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {item.submenu.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            className="block px-5 py-3 text-sm font-medium text-neutralText hover:bg-linear-to-r hover:from-primaryLight hover:to-accentBlue hover:text-primaryDark rounded-md transition-all duration-200"
                            style={{ boxShadow: theme.shadows.neumorphic }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
