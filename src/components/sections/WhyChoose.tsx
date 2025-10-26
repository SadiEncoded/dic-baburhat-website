// src/components/sections/WhyChoose.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { theme } from "@/config/theme";

interface WhyChooseProps {
  id: string;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ id }) => {
  const bullets: string[] = [
    "Experienced faculty with industry background.",
    "Modern labs and learning facilities.",
    "Career placement and internship support.",
    "Student support services and counseling.",
  ];

  return (
    <section
      id={id}
      style={{ backgroundColor: theme.colors.neutralGray }}
      className="py-12"
    >
      <Container className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            style={{ color: theme.colors.neutralText }}
            className="text-2xl font-semibold"
          >
            Why Choose DIC — Baburhat
          </h2>
          <p
            style={{ color: theme.colors.neutralSoft }}
            className="mt-4 max-w-lg"
          >
            We focus on quality education, measurable outcomes, and industry
            connectivity to ensure graduates are job-ready and confident.
          </p>
          <ul
            className="mt-6 space-y-3 list-disc list-inside"
            style={{ color: theme.colors.neutralText }}
          >
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <a
            href="#about"
            className="mt-6 inline-block px-4 py-2 rounded-md border font-medium hover:bg-primaryLight hover:text-primaryDark transition"
            style={{
              borderColor: theme.colors.primary,
              color: theme.colors.primary,
            }}
          >
            Read More
          </a>
        </div>
        <div>
          <div
            className="aspect-video rounded-2xl overflow-hidden"
            style={{ boxShadow: theme.shadows.card }}
          >
            <Image
              src="/images/lecture.jpg"
              alt="Lecture at Daffodil International College"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
