// components/layout/Footer.tsx
"use client";
import { theme } from "@/config/theme";
import React from "react";
import { Container } from "../shared/Container";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: theme.colors.primaryDark,
        color: theme.colors.neutralWhite,
      }}
      className="mt-12"
    >
      <Container className="py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">
            Daffodil International College — Baburhat
          </div>
          <p className="mt-3 text-sm text-white/80">
            Quality education with a focus on employability and ethical
            leadership.
          </p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            {["About", "Admissions", "Academics", "Notice Board"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:underline transition"
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-3 text-sm text-white/90">
            3/3, Block-A, Lalmatia, Dhaka — 1207
          </div>
          <div className="mt-2 text-sm">
            <a
              href="mailto:info@dic.edu.bd"
              className="hover:underline transition"
            >
              info@dic.edu.bd
            </a>
          </div>
          <div className="mt-1 text-sm">
            <a href="tel:+8801713493227" className="hover:underline transition">
              +880 1713 493227
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-sm text-white/80">
        <Container className="flex justify-between items-center">
          <div>
            © {new Date().getFullYear()} Daffodil International College —
            Baburhat. All rights reserved.
          </div>
          <div className="space-x-3">
            <a
              href="#"
              className="underline hover:text-primaryLight transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="underline hover:text-primaryLight transition"
            >
              Terms
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};
