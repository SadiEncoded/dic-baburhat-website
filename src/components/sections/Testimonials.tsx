// src/components/sections/Testimonials.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { theme } from "@/config/theme";
import type { Testimonial } from "@/types";

interface TestimonialsProps {
  id: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  const [reviews, setReviews] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data: Testimonial[] = [
        {
          name: "Adeba Karim",
          role: "B. Studies Group",
          quote: "DIC helped me build confidence and practical skills.",
        },
        {
          name: "Md Maher Al Haque",
          role: "Class XI",
          quote: "Supportive faculty and modern labs.",
        },
      ];
      setReviews(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <section id={id} className="py-12">
      <Container>
        <h3
          style={{ color: theme.colors.neutralText }}
          className="text-xl font-semibold"
        >
          What Our Students Say
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
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
                className="font-semibold"
              >
                {r.name}
              </div>
              <div
                style={{ color: theme.colors.neutralSoft }}
                className="text-sm"
              >
                {r.role}
              </div>
              <p
                style={{ color: theme.colors.neutralSoft }}
                className="mt-3 text-sm"
              >
                &quot;{r.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
