"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GraduationCap,
  Users,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { theme } from "@/config/theme";
import type { Slide, StatItem } from "@/types";

interface HeroProps {
  id: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides: Slide[] = [
    {
      src: "/Hero Corusel/alumni&teachers.jpg",
      alt: "Alumni and teachers at Daffodil International College",
      caption: "Celebrating Alumni & Faculty",
    },
    {
      src: "/Hero Corusel/chairmanvisit.jpg",
      alt: "Chairman visit at Daffodil International College",
      caption: "Leadership & Vision",
    },
    {
      src: "/Hero Corusel/CSEAllSemester.jpg",
      alt: "CSE All Semesters",
      caption: "Empowering Tech Innovators",
    },
    {
      src: "/Hero Corusel/StudentsAchivments.jpg",
      alt: "Student achievements",
      caption: "Inspiring Future Leaders",
    },
  ];

  const stats: StatItem[] = [
    { value: "1200+", label: "Students", icon: GraduationCap },
    { value: "30+", label: "Faculty", icon: Users },
    { value: "10", label: "Departments", icon: Building },
  ];

  // ✅ Stable callbacks to prevent ESLint/react-hooks warnings
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // ✅ Auto-slide with pause support
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(nextSlide, 7000);

    // ✅ Always return a cleanup function — never conditional
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null; // optional, but keeps ref consistent
      }
    };
  }, [nextSlide, isPaused]);

  return (
    <section
      id={id}
      className="relative overflow-hidden select-none"
      style={{ backgroundColor: theme.colors.neutralWhite }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Carousel */}
      <div className="relative h-[80vh] w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[currentSlide].src}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.35, 1] }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[1px]" />

        {/* Content Layer */}
        <Container className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              {slides[currentSlide].caption}
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light text-white/90 leading-relaxed">
              Daffodil International College — where education meets innovation.
              Our mission is to nurture excellence, leadership, and lifelong
              learning.
            </p>

            <div className="mt-8 flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="#apply"
                  className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 backdrop-blur-md"
                >
                  Apply Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="#gallery"
                  className="px-6 py-3 rounded-xl font-semibold border border-white/60 text-white hover:bg-white/20 transition backdrop-blur-sm"
                >
                  View Gallery
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 flex justify-between items-center px-4 md:px-12 top-1/2 -translate-y-1/2">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white focus:ring-2 focus:ring-white/50"
              aria-label="Previous Slide"
            >
              <ArrowLeftIcon size={26} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white focus:ring-2 focus:ring-white/50"
              aria-label="Next Slide"
            >
              <ArrowRightIcon size={26} />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/40"
                }`}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <Container className="py-12 md:py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm font-semibold text-blue-700"
        >
          Daffodil International College — Baburhat
        </motion.p>

        <motion.p
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Academic excellence, global standards, and a culture of innovation —
          that’s Daffodil.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon; // grab the component reference
            return (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-linear-to-br from-blue-50 to-white shadow-md hover:shadow-lg transition text-center"
              >
                {/* Instantiate the icon */}
                <div className="text-3xl mb-2">
                  <Icon className="mx-auto w-10 h-10 text-blue-600" />
                </div>

                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
