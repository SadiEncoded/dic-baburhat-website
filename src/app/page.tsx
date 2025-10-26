// src/app/page.tsx (For App Router)
'use client';
import React from 'react';
import { Topbar } from '@/components/layout/Topbar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Facilities } from '@/components/sections/Facilities';
import { Academics } from '@/components/sections/Academics';
import { Testimonials } from '@/components/sections/Testimonials';
import { News } from '@/components/sections/News';
import { theme } from '@/config/theme';

export default function HomePage() {
  return (
    <div 
      className="min-h-screen" 
      style={{ 
        fontFamily: theme.fontFamily, 
        backgroundColor: theme.colors.neutralWhite 
      }}
    >
      <Topbar />
      <Header />
      
      <main>
        <Hero id="hero" />
        <WhyChoose id="about" />
        <Facilities id="facilities" />
        <Academics id="academics" />
        <Testimonials id="testimonials" />
        <News id="news" />
      </main>
      
      <Footer />
    </div>
  );
}
