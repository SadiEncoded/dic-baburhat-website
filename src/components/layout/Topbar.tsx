// components/layout/Topbar.tsx
"use client";
import { theme } from "@/config/theme";
import React from "react";
import { Container } from "../shared/Container";
import { FaPhone, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@heroui/react";

export const Topbar: React.FC = () => {
  return (
    <div
      className="text-sm shadow-sm"
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.neutralWhite,
      }}
    >
      <Container className="py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-white">
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          {/* Phone */}
          <a
            href="tel:+8801713493091"
            className="flex items-center gap-2 font-medium underline hover:text-[#E6F0FF] transition-colors duration-200"
          >
            <FaPhone className="text-base" />
            <span>01713 493091</span>
          </a>

          {/* Email */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:info.bh@dic.edu.bd"
              className="flex items-center gap-2 font-medium underline hover:text-[#E6F0FF] transition-colors duration-200"
            >
              <FaEnvelope className="text-base" />
              <span>info.bh@dic.edu.bd</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.bh@dic.edu.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6F0FF] transition-colors duration-200"
              aria-label="Open Gmail compose"
            >
              <FaExternalLinkAlt className="text-xs opacity-80" />
            </a>
          </div>
        </div>

        {/* Center: Recognition */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs md:text-sm font-medium text-center opacity-90">
          <span>EIIN: 134493</span>
          <span>College Code: 7261</span>
        </div>

        {/* Right: Action */}
        <div className="flex justify-center sm:justify-end">
          <Button
            as="a"
            href="/student-login"
            variant="ghost"
            size="md"
            className="rounded-2xl font-medium border text-white border-white hover:bg-white hover:text-[#004C9E] transition-all duration-200"
          >
            Student Login
          </Button>
        </div>
      </Container>

      {/* Divider */}
      <div
        className="h-px opacity-25"
        style={{ backgroundColor: theme.colors.neutralWhite }}
      />
    </div>
  );
};
