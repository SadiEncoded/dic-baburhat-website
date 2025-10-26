// src/components/sections/News.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { theme } from "@/config/theme";
import type { NewsArticle } from "@/types";

interface NewsProps {
  id: string;
}

export const News: React.FC<NewsProps> = ({ id }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data: NewsArticle[] = [
        { title: "Monthly Notice: Exam Dates", date: "05 Jul 2025" },
        { title: "DIU Robo Tech Olympiad 2...", date: "24 Nov 2024" },
        { title: "Mental Health Session Time", date: "01 Jun 2025" },
      ];
      setArticles(data);
    };
    fetchNews();
  }, []);

  return (
    <section
      id={id}
      style={{ backgroundColor: theme.colors.neutralWhite }}
      className="py-12 border-t"
    >
      <Container>
        <h3
          style={{ color: theme.colors.neutralText }}
          className="text-xl font-semibold"
        >
          Latest News & Notices
        </h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl hover:shadow-lg transition-all duration-200"
              style={{
                boxShadow: theme.shadows.card,
                backgroundColor: theme.colors.neutralWhite,
              }}
            >
              <div
                style={{ color: theme.colors.neutralSoft }}
                className="text-sm"
              >
                {a.date}
              </div>
              <h4
                style={{ color: theme.colors.neutralText }}
                className="mt-2 font-semibold"
              >
                {a.title}
              </h4>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium hover:text-accentBlue transition"
                style={{ color: theme.colors.primaryDark }}
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
