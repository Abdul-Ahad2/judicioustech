// app/page.js
// Judicious Tech - Cyber-Minimalist Portfolio
// Next.js 14 + Tailwind CSS + Framer Motion

"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Google_Sans, Inter } from "next/font/google";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  Star,
  Code2,
  Gamepad2,
  Zap,
  ChevronDown,
  Send,
  Menu,
  X,
  Cpu,
  Globe,
  Database,
  Cloud,
  Terminal,
  Box,
  ArrowUpRight,
  Sparkles,
  Figma,
  Layers,
} from "lucide-react";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiAmazonwebservices,
  SiThreedotjs,
  SiFigma,
  SiBlender,
  SiUnity,
  SiWordpress,
} from "react-icons/si";

const inter = Google_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const projects = [
  {
    id: 1,
    title: "Wine Ecommerce Platform",
    category: "Ecommerce",
    description:
      "A modern ecommerce platform with seamless shopping experience, secure payments, and advanced product recommendations.",
    image: "./1.png",
    tags: ["Next.js", "Stripe", "MongoDB"],
    color: "#00ff88",
    link: "https://postfamiliar.com/",
  },
  {
    id: 2,
    title: "Virgin Active",
    category: "Fitness",
    description:
      "Dynamic gym website with class schedules, membership management, and interactive fitness tracking.",
    image: "/2.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "#00ff88",
    link: "https://www.virginactive.co.uk/",
  },
  {
    id: 3,
    title: "Plagiarism Detection System",
    category: "Education",
    description:
      "Advanced plagiarism detection system using AI to scan documents and ensure academic integrity.",
    image: "/3.png",
    tags: ["FastAPI", "Next.js", "AWS"],
    color: "#00ff88",
    link: "https://plagiarism-detection-frontend.vercel.app",
  },
  {
    id: 4,
    title: "Blooming Flowers 3D",
    category: "Creative",
    description:
      "Interactive 3D model of flowers with realistic animations and customizable designs for botanical visualization.",
    image: "/4.png",
    tags: ["Three.js", "React", "Blender"],
    color: "#00ff88",
    link: "https://www.behance.net/durhaider",
  },
  {
    id: 5,
    title: "Behind the Blackboard",
    category: "Gaming",
    description:
      "An immersive puzzle game set in a mysterious school, featuring hidden secrets and thrilling challenges.",
    image: "./5.png",
    tags: ["Unity", "C#", "Photon"],
    color: "#00ff88",
    link: "https://www.youtube.com/watch?v=Nt_NGaWRw4U",
  },
  {
    id: 6,
    title: "Gym Passport",
    category: "Fitness App",
    description:
      "Dynamic gym app with class schedules, membership management, and interactive fitness tracking.",
    image: "/6.png",
    tags: ["Flutter", "Firebase", "Machine Learning"],
    color: "#00ff88",
    link: "https://gympassport.pk/",
  },
];

const testimonials = [
  {
    id: 1,
    name: "izzatisafwanah",
    role: "Brunei Darussalam",
    quote:
      "Very helpful, easy to communicate and fast response. Highly recommended.",
    metric: "340%",
    metricLabel: "Growth",
  },
  {
    id: 2,
    name: "tray_15",
    role: "United Kingdom",
    quote:
      "The seller was very friendly, the order was finished in a few hours, early than I ever expected, and the website is looking stunning. Great experience thank you!",
    metric: "99/100",
    metricLabel: "Performance",
  },
  {
    id: 3,
    name: "Mahirl",
    role: "Australia",
    quote:
      "Very well done, kept me updated throughout the project. Followed all the instructions and requirements needed perfectly, Would highly recommend. :)",
    metric: "4.9★",
    metricLabel: "Rating",
  },

  {
    id: 4,
    name: "Brendan Wills",
    role: "United States",
    quote:
      "I wanted to take a moment to recognize the seller for the outstanding job he did on his recent project. He tackled a challenging task with determination, attention to detail, and an unwavering commitment to quality, and the results speak for themselves.",
    metric: "4.9★",
    metricLabel: "Rating",
  },
];

const techStack = [
  { name: "Next.js", category: "Framework", icon: SiNextdotjs },
  { name: "TypeScript", category: "Language", icon: SiTypescript },
  { name: "Tailwind", category: "Styling", icon: SiTailwindcss },
  { name: "Node.js", category: "Runtime", icon: SiNodedotjs },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "AWS", category: "Cloud", icon: SiAmazonwebservices },
  { name: "Three.js", category: "3D", icon: SiThreedotjs },
  { name: "Figma", category: "Design", icon: SiFigma },
  { name: "Blender", category: "Design", icon: SiBlender },
  { name: "Unity", category: "Game Engine", icon: SiUnity },
  { name: "Wordpress", category: "CMS", icon: SiWordpress },
];

const services = [
  {
    title: "Web Development",
    description: "High-performance websites with cutting-edge animations.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Real-time multiplayer games with scalable backends.",
    icon: Box,
  },
  {
    title: "3D Models & Visuals",
    description: "Interfaces that balance aesthetics with usability.",
    icon: Figma,
  },
  {
    title: "Game Development",
    description: "Real-time multiplayer games with scalable backends.",
    icon: Gamepad2,
  },
];

// --- Components ---

const Spotlight = ({ mousePosition }) => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(127,255,255,0.05), transparent 40%)`,
      }}
    />
  );
};

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#00ff88]/50 pointer-events-none z-9999 mix-blend-difference hidden lg:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-[#00ff88] rounded-full pointer-events-none z-9999 hidden lg:block"
        style={{ x: cursorX, y: cursorY }}
      />
    </>
  );
};

// --- Main Page ---

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [formError, setFormError] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <main
      className={`${inter.className}  bg-[#050505] text-white min-h-screen overflow-x-hidden selection:bg-[#00ff88] selection:text-black`}
    >
      <CustomCursor />
      <Spotlight mousePosition={mousePosition} />
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-1 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      {/* Navigation */}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection("hero")}
            >
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:bg-[#00ff88] transition-colors duration-300">
                <img
                  src="/logo.png"
                  alt="Judicious Tech Logo"
                  className="w-8 h-8"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Judicious Tech<span className="text-[#00ff88]">.</span>
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-light text-white/60 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff88] transition-all group-hover:w-full" />
                </button>
              ))}

              <a
                href="mailto:abdulahadhaq@outlook.com?subject=Project Inquiry from Portfolio"
                className="inline-flex items-center px-5 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-[#00ff88] hover:text-black transition-all duration-300"
                target="_blank" // Opens email client in new tab/window
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Talk
              </a>
            </div>

            <button
              className="md:hidden p-2 text-white touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050505] border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {["Work", "Services", "About", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    onTouchStart={() => scrollToSection(item.toLowerCase())}
                    className="text-lg font-light text-left text-white/80 hover:text-[#00ff88] transition-colors w-full py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Available for projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Digital
            <br />
            <span className="text-transparent p-2 bg-clip-text bg-linear-to-r from-white via-white to-white/40">
              Craftsmanship
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            We build immersive web experiences, high-performance applications,
            stunning 3D models and modern games for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("work")}
              className="group px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-[#00ff88] transition-all flex items-center gap-2"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/20">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-[#00ff88] uppercase tracking-widest mb-4">
              What we do
            </h2>
            <p className="text-3xl sm:text-4xl font-light text-white/90 max-w-2xl">
              Comprehensive digital solutions tailored to your vision.
            </p>
          </div>

          <div className="grid-cols-1 grid  md:grid-cols-2 lg:grid-cols-4 lg:h-72 place-items-center gap-px bg-black border border-white/10 rounded-2xl overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[#050505] p-8 hover:bg-white/5 transition-colors duration-500"
              >
                <service.icon className="w-8 h-8 text-white/20 group-hover:text-[#00ff88] mb-6 transition-colors" />
                <h3 className="text-xl font-medium text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="work" className="py-16 md:py-32 relative z-10 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-xs md:text-sm font-medium text-[#00ff88] uppercase tracking-widest mb-4">
                Selected Work
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90">
                Featured Projects
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] hover:border-white/20 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        borderColor: `${project.color}40`,
                        color: project.color,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 md:mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/30 bg-white/5 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#00ff88] text-black flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Stack Marquee */}
      <section
        id="about"
        className="py-24 relative z-10 border-y border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-sm font-medium text-[#00ff88] uppercase tracking-widest text-center">
            Trusted Technologies
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-default"
              >
                <tech.icon className="w-6 h-6 text-white" />
                <span className="text-2xl font-light text-white">
                  {tech.name}
                </span>
                <span className="text-xs text-white/30 uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="py-32 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-sm font-medium text-[#00ff88] uppercase tracking-widest mb-4">
              The Crew
            </h2>
            <p className="text-3xl sm:text-4xl font-light text-white/90">
              Meet the Architects
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Member 1: Web & App Dev */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-[#00ff88]/30 hover:bg-white/4 transition-all duration-500"
            >
              <div className="aspect-square w-full mb-6 rounded-xl bg-linear-to-br from-white/10 to-white/5 overflow-hidden relative">
                {/* Placeholder for image - replace src with actual photo */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <img
                    src="/abdulahad.webp" // Replace with actual image path
                    width={100}
                    alt="Abdul Ahad"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#00ff88] transition-colors">
                Abdul Ahad
              </h3>
              <p className="text-[#00ff88] text-sm font-medium mb-3">
                Web & App Developer
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                Full-stack architect specializing in Next.js, React Native, and
                scalable cloud infrastructure. Builds pixel-perfect interfaces.
              </p>
            </motion.div>

            {/* Member 2: Game Dev */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-[#00ff88]/30 hover:bg-white/4 transition-all duration-500"
            >
              <div className="aspect-square w-full mb-6 rounded-xl bg-linear-to-br from-white/10 to-white/5 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <img
                    src="/arham.webp" // Replace with actual image path
                    width={100}
                    height={100}
                    alt="Arham Jamil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#00ff88] transition-colors">
                Arham Jamil
              </h3>
              <p className="text-[#00ff88] text-sm font-medium mb-3">
                Game Developer
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                Unity & Unreal Engine specialist. Crafts immersive gameplay
                mechanics and optimized engine architecture for high-performance
                experiences.
              </p>
            </motion.div>

            {/* Member 3: 3D Artist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-[#00ff88]/30 hover:bg-white/4 transition-all duration-500"
            >
              <div className="aspect-square w-full mb-6 rounded-xl bg-linear-to-br from-white/10 to-white/5 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <img
                    src="/haider.webp" // Replace with actual image path
                    width={100}
                    height={100}
                    alt="Durr Haider"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#00ff88] transition-colors">
                Durr Haider
              </h3>
              <p className="text-[#00ff88] text-sm font-medium mb-3">
                3D Artist
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                Blender & Maya expert. Creates cinematic environments, character
                models, and assets optimized for real-time rendering and WebGL.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-[#00ff88] uppercase tracking-widest mb-4">
              Testimonials
            </h2>
            <p className="text-3xl font-light text-white/90">Client Stories</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#00ff88] text-[#00ff88]"
                    />
                  ))}
                </div>
                <p className="text-2xl sm:text-3xl font-light text-white/80 leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-white/20 to-white/5 flex items-center justify-center text-lg font-medium">
                    {testimonials[activeTestimonial].name[0]}
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-sm text-white/40">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeTestimonial
                      ? "bg-[#00ff88] w-8"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 bg-white/2">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-[#00ff88] uppercase tracking-widest mb-4">
              Get in Touch
            </h2>
            <p className="text-3xl sm:text-4xl font-light text-white/90 mb-6">
              Let's build something extraordinary
            </p>
            <p className="text-white/40 font-light">
              Ready to start your project? Fill out the form below and we'll get
              back to you within 24 hours.
            </p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("submitting");
              setFormError(null);

              const form = e.target;
              const data = new FormData(form);

              try {
                const response = await fetch(
                  "https://formspree.io/f/mykdkkrb",
                  {
                    method: "POST",
                    body: data,
                    headers: {
                      Accept: "application/json",
                    },
                  },
                );

                const result = await response.json();

                if (response.ok) {
                  setFormStatus("success");
                  form.reset();
                  setTimeout(() => {
                    setFormStatus("idle");
                    setFormError(null);
                  }, 3000);
                } else {
                  setFormStatus("error");
                  // Extract specific error message from Formspree
                  if (result.errors && result.errors.length > 0) {
                    const errorMsg = result.errors
                      .map((err) => {
                        const field =
                          err.field === "_replyto" || err.field === "email"
                            ? "Email"
                            : err.field === "message"
                              ? "Message"
                              : err.field === "name"
                                ? "Name"
                                : err.field === "subject"
                                  ? "Subject"
                                  : err.field;
                        return `${err.message[0].toUpperCase()}${err.message.slice(1)}`;
                      })
                      .join(", ");
                    setFormError(errorMsg);
                  } else {
                    setFormError("Something went wrong. Please try again.");
                  }
                }
              } catch (error) {
                setFormStatus("error");
                setFormError("Network error. Please check your connection.");
              }
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors placeholder:text-white/20"
                placeholder="Project inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors resize-none placeholder:text-white/20"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="pt-6 space-y-3">
              <button
                type="submit"
                disabled={
                  formStatus === "submitting" || formStatus === "success"
                }
                className={`w-full py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all ${
                  formStatus === "success"
                    ? "bg-[#00ff88] text-black"
                    : formStatus === "error"
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-white text-black hover:bg-[#00ff88]"
                }`}
              >
                {formStatus === "submitting" ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : formStatus === "success" ? (
                  <>
                    Message Sent <Sparkles className="w-4 h-4" />
                  </>
                ) : formStatus === "error" ? (
                  <>
                    Try Again <X className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {formStatus === "error" && formError && (
                <p className="text-center text-red-400 text-sm animate-pulse">
                  {formError}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Judicious Tech Logo"
                className="w-6 h-6"
              />
            </div>
            <span className="font-semibold tracking-tight">
              Judicious Tech<span className="text-[#00ff88]">.</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-white/30">
            <a
              href="https://www.linkedin.com/in/abdul-ahad-swe/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Abdul-Ahad2"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="text-sm text-white/20">
            © {new Date().getFullYear()} Judicious Tech.
          </div>
        </div>
      </footer>
      {/* Global Styles for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
