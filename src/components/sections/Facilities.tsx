// src/components/sections/Facilities.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Container } from '@/components/shared/Container';
import { theme } from '@/config/theme';
import type { Facility } from '@/types';

interface FacilitiesProps {
  id: string;
}

export const Facilities: React.FC<FacilitiesProps> = ({ id }) => {
  const [items, setItems] = useState<Facility[]>([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      const data: Facility[] = [
        { title: 'ICT Lab', desc: 'State-of-the-art computer lab with high-speed internet and modern software.' },
        { title: 'Hostel', desc: 'Safe and comfortable on-campus accommodation.' },
        { title: 'Psychological Support', desc: 'Trained counselors for student well-being.' },
        { title: 'Engineering Drawing Lab', desc: 'Equipped with tools for technical drawing and design.' },
      ];
      setItems(data);
    };
    fetchFacilities();
  }, []);

  return (
    <section id={id} className="py-12">
      <Container>
        <h3 style={{ color: theme.colors.neutralText }} className="text-xl font-semibold">
          Facilities
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl hover:shadow-lg transition-all duration-200"
              style={{ boxShadow: theme.shadows.card, backgroundColor: theme.colors.neutralWhite }}
            >
              <div style={{ color: theme.colors.neutralText }} className="text-lg font-semibold">
                {it.title}
              </div>
              <p style={{ color: theme.colors.neutralSoft }} className="mt-2 text-sm">
                {it.desc}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium hover:text-accentBlue transition"
                style={{ color: theme.colors.primaryDark }}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
