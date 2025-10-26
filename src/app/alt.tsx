/**
 * Canvas: Daffodil International College — Enterprise Homepage
 * Fully self-contained, inline branding, Next.js compatible
 * Includes TypeScript types, interactive neumorphic navigation with premium dropdowns,
 * carousel in Hero with 11 photos, styled stats (no chart),
 * accessibility, dynamic data, and SEO.
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, Dot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// TypeScript interfaces
interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accentYellow: string;
  accentBlue: string;
  neutralWhite: string;
  neutralGray: string;
  neutralText: string;
  neutralSoft: string;
}

interface ThemeShadows {
  subtle: string;
  card: string;
  neumorphic: string;
}

interface ThemeBorderRadius {
  xl: string;
  "2xl": string;
}

interface Theme {
  colors: ThemeColors;
  shadows: ThemeShadows;
  borderRadius: ThemeBorderRadius;
  fontFamily: string;
}

interface NavSubmenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  submenu?: NavSubmenuItem[];
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface Facility {
  title: string;
  desc: string;
}

interface Academic {
  title: string;
  desc: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface NewsArticle {
  title: string;
  date: string;
}

// Theme configuration (added neumorphic shadow)
const theme: Theme = {
  colors: {
    primary: "#0071DC",
    primaryDark: "#004C9E",
    primaryLight: "#E6F0FF",
    accentYellow: "#FFC72C",
    accentBlue: "#005BBF",
    neutralWhite: "#FFFFFF",
    neutralGray: "#F8F9FB",
    neutralText: "#2B2B2B",
    neutralSoft: "#7C8CA0",
  },
  shadows: {
    subtle: "0 2px 8px rgba(0,0,0,0.05)",
    card: "0 4px 12px rgba(0,0,0,0.08)",
    neumorphic:
      "5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.7)",
  },
  borderRadius: {
    xl: "1rem",
    "2xl": "1.5rem",
  },
  fontFamily: "Inter, Poppins, Open Sans, sans-serif",
};

// Structured navigation items
const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    submenu: [
      { label: "Our Story", href: "#about" },
      { label: "Opportunities", href: "#facilities" },
      { label: "Get in Touch", href: "#contact" },
      { label: "Help Center", href: "#news" },
    ],
  },
  {
    label: "Admission",
    href: "#apply",
    submenu: [
      { label: "How to Get Admitted?", href: "#apply" },
      { label: "Apply Online", href: "#apply" },
      { label: "Tuition & Fees", href: "#academics" },
    ],
  },
  {
    label: "Academic",
    href: "#academics",
    submenu: [
      { label: "Programs & Courses", href: "#academics" },
      { label: "Academic Resources", href: "#academics" },
      { label: "Student Guidelines", href: "#academics" },
      { label: "Classrooms & Facilities", href: "#facilities" },
      { label: "Clubs & Activities", href: "#testimonials" },
    ],
  },
  {
    label: "Administration",
    href: "#news",
    submenu: [
      { label: "Meet the Leadership", href: "#news" },
      { label: "Explore Faculty", href: "#academics" },
      { label: "Connect with Staff", href: "#news" },
      { label: "Access Departments", href: "#academics" },
    ],
  },
  {
    label: "Campus",
    href: "#hero",
    submenu: [
      { label: "Explore Media", href: "#hero" },
      { label: "Read the Blog", href: "#news" },
      { label: "View Gallery", href: "#hero" },
    ],
  },
  { label: "Notice Board", href: "#news" },
];

// Utility component: Container
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-6 lg:px-12 ${className || ""}`}>
      {children}
    </div>
  );
};

// Component: Topbar
const Topbar: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.neutralWhite,
      }}
      className="text-sm"
    >
      <Container className="py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">📞 +880 1713 493227</span>
          <a
            href="mailto:info@dic.edu.bd"
            className="underline hover:text-primaryLight transition"
          >
            info@dic.edu.bd
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="px-3 py-1 rounded hover:bg-accentBlue transition"
            style={{
              backgroundColor: theme.colors.neutralWhite,
              color: theme.colors.primary,
            }}
          >
            Student Login
          </a>
          <a
            href="#apply"
            className="px-3 py-1 rounded border border-white/20 hover:bg-accentBlue hover:border-accentBlue transition"
          >
            Apply
          </a>
        </div>
      </Container>
    </div>
  );
};

// Component: Header
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY - 100;
        if (window.scrollY >= top) current = section.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

        <nav
          className="hidden lg:flex items-center gap-6 text-sm"
          style={{ color: theme.colors.neutralText }}
        >
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href || "#"}
                className={`px-3 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  activeSection === item.href?.substring(1)
                    ? "text-blue-700 font-semibold"
                    : "text-neutral-700"
                }`}
                style={{
                  backgroundColor: theme.colors.neutralWhite,
                  boxShadow: theme.shadows.neumorphic,
                }}
                aria-current={
                  activeSection === item.href?.substring(1) ? "page" : undefined
                }
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
                    backdropFilter: "blur(5px)",
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
              <path
                d={
                  isMenuOpen
                    ? "M18 6L6 18M6 6l12 12"
                    : "M3 12h18M3 6h18M3 18h18"
                }
              />
            </svg>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
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
                          activeDropdown === i ? "rotate-180" : ""
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
                        animate={{ height: "auto", opacity: 1 }}
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

// Component: Hero (Integrated Enhanced Slider)
const Hero: React.FC<{ id: string }> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/Hero Corusel/alumni&teachers.jpg",
      alt: "Alumni and teachers at Daffodil International College",
      caption: "Celebrating Alumni & Faculty",
    },
    {
      src: "/Hero Corusel/chairmanvisit.jpg",
      alt: "Chairman visit at Daffodil International College",
      caption: "Leadership Engagement",
    },
    {
      src: "/Hero Corusel/chairmanvisit1.jpg",
      alt: "Another chairman visit at Daffodil International College",
      caption: "Guiding Our Future",
    },
    {
      src: "/Hero Corusel/CSE2ndbatch.jpg",
      alt: "CSE 2nd batch at Daffodil International College",
      caption: "Pioneering Tech Talent",
    },
    {
      src: "/Hero Corusel/CSEAllSemester.jpg",
      alt: "All semesters of CSE at Daffodil International College",
      caption: "Comprehensive Learning",
    },
    {
      src: "/Hero Corusel/HSC25.jpg",
      alt: "HSC 2025 event at Daffodil International College",
      caption: "Excelling in HSC 2025",
    },
    {
      src: "/Hero Corusel/Principle.jpg",
      alt: "Principal at Daffodil International College",
      caption: "Leadership in Action",
    },
    {
      src: "/Hero Corusel/StudentsAchivments.jpg",
      alt: "Student achievements at Daffodil International College",
      caption: "Recognizing Excellence",
    },
    {
      src: "/Hero Corusel/StudentsAchivments1.jpg",
      alt: "More student achievements at Daffodil International College",
      caption: "Achievements Unleashed",
    },
    {
      src: "/Hero Corusel/StudentsAchivments3.jpg",
      alt: "Further student achievements at Daffodil International College",
      caption: "Success Stories",
    },
    {
      src: "/Hero Corusel/VibrantStudents1.jpg",
      alt: "Vibrant students at Daffodil International College",
      caption: "Energetic Campus Life",
    },
  ];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  return (
    <section id={id} style={{ backgroundColor: theme.colors.neutralWhite }}>
      <Container className="py-16 lg:py-24">
        <div className="relative">
          {/* Carousel Images with Fade Animation */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ boxShadow: theme.shadows.card }}
          >
            <AnimatePresence initial={false} mode="wait">
              {slides.map((slide, i) =>
                i === currentSlide ? (
                  <motion.div
                    key={slide.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.35, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover object-top"
                      priority={i === 0}
                    />
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
          </div>

          {/* Gradient Overlay and Caption with Animation */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-2xl flex items-end p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 0.06, 0.1, 1.02] }}
          >
            <div>
              <h1 className="text-white text-3xl lg:text-5xl font-extrabold leading-tight">
                {slides[currentSlide].caption}
              </h1>
              <div className="mt-4 flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Link
                    href="#apply"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-md font-semibold shadow hover:bg-accentBlue transition"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.neutralWhite,
                    }}
                  >
                    Apply Now
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Link
                    href="#gallery"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-md border hover:bg-primaryLight hover:text-primaryDark transition"
                    style={{
                      borderColor: theme.colors.neutralGray,
                      color: theme.colors.neutralText,
                    }}
                  >
                    View Gallery
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots with Advanced Easing */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className={`transition-transform ${currentSlide === index ? "scale-125" : "hover:scale-110"}`}
              >
                <Dot
                  size={16}
                  className={
                    currentSlide === index ? "text-white" : "text-white/40"
                  }
                />
              </motion.button>
            ))}
          </div>

          {/* Navigation Arrows with Spring Animation */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fce38a]"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon size={28} strokeWidth={2} />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fce38a]"
            aria-label="Next slide"
          >
            <ArrowRightIcon size={28} strokeWidth={2} />
          </motion.button>
        </div>

        {/* Text Content */}
        <div className="mt-10">
          <p
            className="text-xs uppercase tracking-wide font-semibold"
            style={{ color: theme.colors.primaryDark }}
          >
            Daffodil International College — Baburhat
          </p>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: theme.colors.neutralText }}
          >
            We combine rigorous academics with hands-on experience to prepare
            students for professional success. Accredited programs,
            industry-aligned curricula, and a vibrant campus life.
          </p>

          {/* Styled Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "1200+", label: "Students", icon: "👨‍🎓" },
              { value: "30+", label: "Faculty", icon: "👩‍🏫" },
              { value: "10", label: "Departments", icon: "🏫" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: theme.colors.primaryLight,
                  boxShadow: theme.shadows.card,
                }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div
                  className="text-xl font-bold"
                  style={{ color: theme.colors.neutralText }}
                >
                  {stat.value}
                </div>
                <div style={{ color: theme.colors.neutralSoft }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Component: WhyChoose
const WhyChoose: React.FC<{ id: string }> = ({ id }) => {
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

// Component: Facilities
const Facilities: React.FC<{ id: string }> = ({ id }) => {
  const [items, setItems] = useState<Facility[]>([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      const data: Facility[] = [
        {
          title: "ICT Lab",
          desc: "State-of-the-art computer lab with high-speed internet and modern software.",
        },
        {
          title: "Hostel",
          desc: "Safe and comfortable on-campus accommodation.",
        },
        {
          title: "Psychological Support",
          desc: "Trained counselors for student well-being.",
        },
        {
          title: "Engineering Drawing Lab",
          desc: "Equipped with tools for technical drawing and design.",
        },
      ];
      setItems(data);
    };
    fetchFacilities();
  }, []);

  return (
    <section id={id} className="py-12">
      <Container>
        <h3
          style={{ color: theme.colors.neutralText }}
          className="text-xl font-semibold"
        >
          Facilities
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
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
                {it.title}
              </div>
              <p
                style={{ color: theme.colors.neutralSoft }}
                className="mt-2 text-sm"
              >
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

// Component: Academics
const Academics: React.FC<{ id: string }> = ({ id }) => {
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

// Component: Testimonials
const Testimonials: React.FC<{ id: string }> = ({ id }) => {
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

// Component: News
const News: React.FC<{ id: string }> = ({ id }) => {
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

// Component: Footer
const Footer: React.FC = () => {
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

// Main Component
const CorporateHomepage: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Daffodil International College — Baburhat | Quality Education
        </title>
        <meta
          name="description"
          content="Daffodil International College offers industry-aligned programs and modern facilities to shape future leaders."
        />
        <meta
          name="keywords"
          content="education, college, Daffodil International, Baburhat, admissions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="min-h-screen"
        style={{
          fontFamily: theme.fontFamily,
          backgroundColor: theme.colors.neutralWhite,
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
    </>
  );
};

export default CorporateHomepage;
