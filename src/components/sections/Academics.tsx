// src/components/sections/Academics.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { theme } from "@/config/theme";
import type { Academic } from "@/types";

interface AcademicsProps {
  id: string;
}

export const Academics: React.FC<AcademicsProps> = ({ id }) => {
  const [cards, setCards] = useState<Academic[]>([]);

  useEffect(() => {
    const fetchAcademics = async () => {
      const data: Academic[] = [
        {
          title: "Science",
          desc: "Physics, Chemistry, Biology — practical and theoretical courses.",
        },
        {
          title: "Business Studies",
          desc: "Accounting, Marketing, Management with industry projects.",
        },
        {
          title: "Computer Science",
          desc: "Programming, networks, and modern computing labs.",
        },
      ];
      setCards(data);
    };
    fetchAcademics();
  }, []);

  return (
    <section
      id={id}
      style={{ backgroundColor: theme.colors.neutralGray }}
      className="py-12"
    >
      <Container>
        <h3
          style={{ color: theme.colors.neutralText }}
          className="text-xl font-semibold"
        >
          Academic Groups
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl hover:shadow-lg transition-all duration-200"
              style={{
                boxShadow: theme.shadows.card,
                backgroundColor: theme.colors.neutralWhite,
              }}
            >
              <div
                style={{ color: theme.colors.neutralText }}
                className="text-lg font-semibold"
              >
                {c.title}
              </div>
              <p
                style={{ color: theme.colors.neutralSoft }}
                className="mt-3 text-sm"
              >
                {c.desc}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium hover:text-accentBlue transition"
                style={{ color: theme.colors.primaryDark }}
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
