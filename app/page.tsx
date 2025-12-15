'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, MapPin, ArrowRight, ExternalLink, Sparkles, Circle, Terminal, Zap, ChevronDown, ChevronUp, Phone, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setNavbarVisible(false);
        } else {
          setNavbarVisible(true);
        }
      } else {
        setNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(index);
        }
      });

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const experiences = [
    {
      company: "Yokke",
      role: "Backend Developer",
      type: "Contract Employee",
      period: "Sept 2025 - Now",
      location: "Jakarta Selatan",
      tech: ["NestJS", "OracleDB", "Kubernetes", "Docker"],
      description: "Building scalable APIs with microservices architecture",
      details: [
        "Designed and built RESTful APIs including authentication, authorization, request validation, and business logic processing",
        "Created service modules to interact with Oracle using drivers such as oracledb and managed complex transactions and batch operations",
        "Built reusable DTOs, guards, interceptors, and middleware to standardize API behavior across the application",
        "Collaborated with frontend and product teams to translate business requirements into technical solutions",
        "Deployed backend applications using Docker, CI/CD pipelines, and cloud infrastructure to ensure high availability"
      ]
    },
    {
      company: "Private Company Vietnam",
      role: "Fullstack Developer",
      type: "Contract Employee",
      period: "March 2025 - August 2025",
      location: "HCM, Vietnam",
      tech: ["Golang", "Nuxt.js", "PostgreSQL"],
      description: "Clean architecture & performance optimization",
      details: [
        "Developed and maintained backend services using Golang, focusing on clean architecture, high performance, and maintainability",
        "Built reusable and modular frontend components using Nuxt.js, ensuring good SEO, fast rendering, and smooth user experience",
        "Designed and implemented RESTful APIs, including request validation, authentication, authorization, and business logic",
        "Implemented caching strategies, background jobs, and performance optimization on the backend",
        "Managed deployment workflows using tools such as Docker, Git CI/CD, and cloud platforms",
        "Integrated the frontend and backend to create seamless data flows and ensure consistent functionality"
      ]
    },
    {
      company: "PT Astra Digital Mobil (OLX Indonesia)",
      role: "Front End Developer",
      type: "Contract Employee",
      period: "January 2024 - January 2025",
      location: "Jakarta Selatan",
      tech: ["ReactJS", "SSR/SSG", "Google Analytics 4"],
      description: "SEO optimization & performance monitoring",
      details: [
        "Ensured web pages load quickly by employing techniques such as image compression, CSS and JavaScript minification, and browser caching",
        "Implemented lazy loading for images and videos to improve initial page load time",
        "Used techniques like server-side rendering (SSR) or static site generation (SSG) for dynamic content to ensure it can be properly indexed by search engines",
        "Conducted regular audits to identify and fix SEO issues on the site",
        "Used analytics tools like Google Analytics and Google Search Console to monitor site performance and traffic",
        "Added tracking code for every events to measure user interactions and conversion rates"
      ]
    },
    {
      company: "PT Telmark Integrasi Indonesia",
      role: "Front End Developer",
      type: "Contract Employee",
      period: "July 2023 - December 2023",
      location: "Jakarta Barat",
      tech: ["MongoDB", "MySQL", "ReactJS", "NextJS", "NestJS", "NodeJS"],
      description: "CMS dashboard & internal tools",
      details: [
        "Created dashboard CMS (Collection Management Services) for managing content and data",
        "Enhanced internal webapps with modern tech stack and improved user interface",
        "Implemented responsive design patterns to ensure cross-device compatibility",
        "Worked on database optimization and query performance improvements"
      ]
    },
    {
      company: "PT SMART Tbk",
      role: "Full Stack Developer",
      type: "Contract Employee",
      period: "October 2022 - March 2023",
      location: "Jakarta Selatan",
      tech: ["MySQL", "AngularJS", "NodeJS"],
      description: "Enterprise web applications",
      details: [
        "Enhanced internal webapps using Angular framework with modern component architecture",
        "Created new functional controllers (API) for business logic processing",
        "Implemented data validation and error handling mechanisms",
        "Collaborated with backend team to integrate new features and optimize existing workflows"
      ]
    },
    {
      company: "PT Trix Games Studio",
      role: "Front End Developer",
      type: "Permanent Employee",
      period: "March 2022 - October 2022",
      location: "Jakarta Utara",
      tech: ["MongoDB", "PostgreSQL", "ReactJS", "Java Springboot"],
      description: "Gaming platform & responsive UI",
      details: [
        "Converted design mockups from tools like Figma into functional HTML, CSS, and JavaScript",
        "Built responsive layouts ensuring web pages render well across various devices and screen sizes including desktops, tablets, and smartphones",
        "Optimized performance by enhancing page load times through image optimization, minifying CSS and JavaScript, and using browser caching",
        "Implemented code splitting and lazy loading techniques for better performance",
        "Ensured cross-browser compatibility across Chrome, Firefox, Safari, and Edge using polyfills and shims where necessary",
        "Developed interactive features and added interactivity to web pages using JavaScript and React framework",
        "Collaborated closely with UI/UX designers to match visual design intent and with backend developers to integrate APIs and services",
        "Implemented SEO best practices using semantic HTML, proper meta tags, and structured data",
        "Maintained code quality by writing clean, maintainable, and well-documented code and participating in code reviews"
      ]
    },
    {
      company: "PT. Kim Vin Internasional",
      role: "Full Stack Developer",
      type: "Contract Employee",
      period: "November 2021 - March 2022",
      location: "Jakarta Barat",
      tech: ["Laravel", "NodeJS", "VueJS", "Ionic", "MySQL", "Firebase"],
      description: "Laundry app & mobile development",
      details: [
        "Created comprehensive laundry application for managing orders, customers, and inventory",
        "Developed mobile apps using Ionic framework for cross-platform compatibility (iOS and Android)",
        "Implemented real-time notifications using Firebase Cloud Messaging",
        "Handled internal apps support and bug fixes for production applications",
        "Built RESTful APIs using Laravel for mobile app integration"
      ]
    },
    {
      company: "Log In Megastore",
      role: "Full Stack Developer",
      type: "Contract Employee",
      period: "November 2020 - December 2021",
      location: "Kota Bandung",
      tech: ["SQLServer", "MySQL", "Firebase", "CodeIgniter 3", "Laravel", "VueJS", "NodeJS", "AngularJS"],
      description: "E-commerce platform development",
      details: [
        "Developed front end website architecture with modern JavaScript frameworks",
        "Designed user interactions on web pages for optimal user experience",
        "Developed back-end website applications with secure authentication and authorization",
        "Ensured responsiveness of applications across all device types",
        "Stayed abreast of developments in web applications and programming languages",
        "Implemented shopping cart functionality and payment gateway integration",
        "Created admin dashboard for inventory and order management"
      ]
    },
    {
      company: "DOT System Indonesia",
      role: "Consultant",
      type: "Contract Employee",
      period: "July 2019 - February 2020",
      location: "Kota Bandung",
      tech: ["SQLServer", "MySQL", "Microsoft Office"],
      description: "Quality assurance & technical consulting",
      details: [
        "Reviewed quality specifications and technical design documents to provide timely and meaningful feedback",
        "Estimated, prioritized, planned and coordinated quality testing activities",
        "Provided content and other materials to educate and support the users of a product",
        "Conducted user acceptance testing (UAT) and documented test results",
        "Created technical documentation and user manuals for software products"
      ]
    }
  ];

  const projects = [
    {
      title: "IMS - Inventory Management Services",
      desc: "Comprehensive inventory management system with real-time stock tracking, automated reordering, and analytics dashboard",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
      color: "from-emerald-500 to-teal-500",
      features: ["Real-time inventory tracking", "Automated stock alerts", "Multi-warehouse support", "Analytics & reporting"]
    },
    {
      title: "LMS - Japanese Language E-Learning",
      desc: "Interactive e-learning platform for Japanese language with multimedia lessons, practice exercises, and progress tracking",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"],
      color: "from-rose-500 to-pink-500",
      features: ["Video lessons", "Interactive quizzes", "Progress tracking", "Live conversation practice"]
    },
    {
      title: "Game Aggregator API",
      desc: "Scalable API system for game aggregation platform integrating multiple game providers with real-time data synchronization",
      tech: ["NestJS", "PostgreSQL", "Redis", "WebSocket"],
      color: "from-purple-500 to-indigo-500",
      features: ["Multi-provider integration", "Real-time game data sync", "Player management", "Transaction processing"]
    },
    {
      title: "Fintech Collection Management CMS",
      desc: "Enterprise CMS for fintech collection operations with automated billing, payment tracking, and debtor management",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Bull Queue"],
      color: "from-cyan-500 to-blue-500",
      features: ["Automated billing system", "Payment reconciliation", "Debtor tracking", "Collection reports"]
    },
    {
      title: "POS System - Log In Megastore",
      desc: "Point of Sale application for offline retail store in Bandung with inventory management and sales reporting",
      tech: ["Laravel", "MySQL", "Vue.js", "Redis"],
      color: "from-orange-500 to-amber-500",
      features: ["Transaction processing", "Inventory sync", "Sales analytics", "Receipt printing"]
    },
    {
      title: "IT Helpdesk System",
      desc: "Comprehensive IT support ticketing system with ticket management, asset tracking, and SLA monitoring",
      tech: ["Laravel", "MySQL", "Bootstrap", "Queue"],
      color: "from-blue-600 to-indigo-600",
      features: ["Ticket management", "Asset tracking", "SLA monitoring", "Email notifications"]
    },
    {
      title: "Corporate Company Profile",
      desc: "Modern and responsive company profile website with CMS integration and SEO optimization",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi"],
      color: "from-slate-500 to-gray-600",
      features: ["SEO optimized", "CMS integration", "Responsive design", "Contact forms"]
    },
    {
      title: "Coffee Shop POS & Menu System",
      desc: "Complete POS and digital menu application for coffee shop in Bandung with order management and kitchen display",
      tech: ["Laravel", "MySQL", "React", "WebSocket"],
      color: "from-amber-600 to-orange-700",
      features: ["Order management", "Kitchen display", "Digital menu", "Payment integration"]
    },
    {
      title: "Enterprise CMS",
      desc: "Collection management system with advanced analytics",
      tech: ["Next.js", "NestJS", "MongoDB"],
      color: "from-violet-500 to-purple-500",
      features: ["Content management", "User roles", "Analytics dashboard"]
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack solution with real-time inventory",
      tech: ["React", "Node.js", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
      features: ["Product catalog", "Payment gateway", "Order tracking"]
    },
    {
      title: "Mobile Laundry App",
      desc: "Cross-platform app with real-time tracking",
      tech: ["Ionic", "Laravel", "Firebase"],
      color: "from-pink-500 to-rose-500",
      features: ["Order management", "Real-time tracking", "Push notifications"]
    },
    {
      title: "Gaming Platform",
      desc: "Interactive platform with multiplayer features",
      tech: ["React", "Spring Boot", "WebSocket"],
      color: "from-orange-500 to-red-500",
      features: ["Multiplayer support", "Real-time gameplay", "Leaderboards"]
    },
    {
      title: "OLX Website",
      desc: "High-performance classified ads platform",
      tech: ["React", "SSR", "Analytics"],
      color: "from-green-500 to-emerald-500",
      features: ["SEO optimized", "Fast loading", "Advanced search"]
    },
    {
      title: "Corporate Dashboard",
      desc: "ERP system with role-based access",
      tech: ["Angular", "MySQL", "Node.js"],
      color: "from-indigo-500 to-blue-500",
      features: ["Role management", "Data visualization", "Report generation"]
    }
  ];

  const skills = {
    "Backend": ["PHP", "Laravel", "Node.js", "Golang", "NestJS", "Java Spring"],
    "Frontend": ["React", "Next.js", "Vue.js", "Angular", "Nuxt.js"],
    "Database": ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Oracle"],
    "DevOps": ["Docker", "Kubernetes", "CI/CD", "Git"]
  };

  const skillsWithLevel = [
    { name: "NestJS", level: 95, category: "Backend", color: "from-red-500 to-pink-500" },
    { name: "ReactJS", level: 95, category: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", level: 90, category: "Frontend", color: "from-violet-500 to-purple-500" },
    { name: "TypeScript", level: 90, category: "Language", color: "from-blue-600 to-indigo-500" },
    { name: "Node.js", level: 88, category: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "Golang", level: 85, category: "Backend", color: "from-cyan-500 to-blue-500" },
    { name: "PostgreSQL", level: 85, category: "Database", color: "from-blue-500 to-blue-700" },
    { name: "MongoDB", level: 85, category: "Database", color: "from-green-500 to-green-700" },
    { name: "Docker", level: 82, category: "DevOps", color: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", level: 78, category: "DevOps", color: "from-blue-500 to-purple-500" },
    { name: "Vue.js", level: 80, category: "Frontend", color: "from-green-500 to-teal-500" },
    { name: "Angular", level: 75, category: "Frontend", color: "from-red-500 to-red-700" },
    { name: "Laravel", level: 85, category: "Backend", color: "from-red-500 to-orange-500" },
    { name: "MySQL", level: 88, category: "Database", color: "from-orange-500 to-yellow-500" },
    { name: "Redis", level: 80, category: "Database", color: "from-red-600 to-red-800" },
    { name: "AWS", level: 75, category: "Cloud", color: "from-orange-500 to-yellow-600" }
  ];

  const achievements = [
    {
      number: "6+",
      label: "Years Experience",
      description: "Professional software development",
      icon: "💼"
    },
    {
      number: "50+",
      label: "Projects Delivered",
      description: "Successfully completed & deployed",
      icon: "🚀"
    },
    {
      number: "15+",
      label: "Technologies",
      description: "Mastered & production-ready",
      icon: "⚡"
    },
    {
      number: "40%",
      label: "Performance Boost",
      description: "Average load time improvement",
      icon: "📈"
    },
    {
      number: "99.9%",
      label: "Uptime Rate",
      description: "Maintained across projects",
      icon: "✅"
    },
    {
      number: "9",
      label: "Companies",
      description: "Collaborated with diverse teams",
      icon: "🏢"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', index: 0 },
    { label: 'Achievements', index: 1 },
    { label: 'Skills', index: 2 },
    { label: 'Projects', index: 3 },
    { label: 'Experience', index: 4 },
    { label: 'Contact', index: 6 }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-black text-white relative">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        navbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="backdrop-blur-xl bg-black/50 border border-gray-800/50 rounded-full px-6 py-3 shadow-2xl shadow-violet-500/10">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                  MTP
                </span>
              </div>

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeSection === item.index
                        ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/50'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/6285215212323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">WhatsApp</span>
                </a>
                <a
                  href="mailto:mtegarps@gmail.com"
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-full text-sm font-medium hover:bg-violet-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">Hire Me</span>
                </a>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-800/50 space-y-2 animate-slide-down">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.index)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.index
                        ? 'bg-violet-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div 
        className="fixed w-4 h-4 border-2 border-violet-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: cursorVariant === 'hover' ? 'scale(2)' : 'scale(1)'
        }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-violet-600 animate-float"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-15 bg-blue-600 animate-float-delayed" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-15 bg-purple-600 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-pink-600 animate-spin-slow" />
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
      </div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className={`w-1 h-8 rounded-full transition-all duration-300 ${
              activeSection === i ? 'bg-violet-500 h-12' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      <a
        href="https://wa.me/6285215212323"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 bottom-8 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 transition-all hover:scale-110"
        title="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {mounted && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-violet-500 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-6 flex items-center gap-3 animate-slide-down">
            <div className="flex gap-1">
              <Circle className="w-3 h-3 fill-green-500 text-green-500 animate-pulse" />
              <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Circle className="w-3 h-3 fill-red-500 text-red-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-xs font-mono text-gray-500">~/portfolio</span>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-500 to-white animate-gradient"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  opacity: 1 - scrollY * 0.002,
                  lineHeight: '1.1'
                }}
              >
                MOCH TEGAR P<br />
                SEPTIMANSYAH
              </h1>
            </div>
            
            <div className="flex items-center gap-4 text-xl md:text-2xl text-gray-400 font-light animate-slide-up">
              <Terminal className="w-6 h-6 text-violet-500 animate-pulse" />
              <span>Full Stack Developer</span>
              <Zap className="w-5 h-5 text-yellow-500 animate-bounce" />
            </div>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Crafting scalable web solutions with clean code and modern architecture. 
              Specialized in building high-performance applications.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a 
                href="mailto:mtegarps@gmail.com"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-violet-500 hover:text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a
                href="https://wa.me/6285215212323"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              
              <div className="flex items-center gap-3 px-6 py-3 border border-gray-800 rounded-full hover:border-violet-500 transition-all hover:scale-105">
                <MapPin className="w-4 h-4 text-violet-500 animate-pulse" />
                <span className="text-sm text-gray-400">Jakarta, ID</span>
              </div>
            </div>

            <div className="flex gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <a href="mailto:mtegarps@gmail.com" className="text-gray-500 hover:text-violet-500 transition-all hover:scale-125 transform">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/tegar-p-septimansyah-914390107/" className="text-gray-500 hover:text-violet-500 transition-all hover:scale-125 transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6285215212323" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-all hover:scale-125 transform">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-violet-500 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-violet-500 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm font-mono text-violet-500 mb-2 block">00 / HIGHLIGHTS</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Achievements</h2>
            <p className="text-gray-500 text-lg">Track record of delivering excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group relative p-6 md:p-8 border border-gray-900 rounded-2xl hover:border-violet-500 bg-gradient-to-br from-gray-950 to-black hover:scale-105 transform hover:shadow-2xl hover:shadow-violet-500/20 overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-violet-500 transition-colors">
                    {achievement.number}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-300 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {achievement.description}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="mt-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 p-6 md:p-8 border border-gray-900 rounded-2xl bg-gradient-to-r from-violet-950/30 to-purple-950/30 hover:border-violet-500 transition-all">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-white">Ready for Your Next Project</h3>
                  <p className="text-sm text-gray-500">Let's build something amazing together</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a 
                  href="mailto:mtegarps@gmail.com"
                  className="px-6 py-3 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50"
                >
                  Hire Me
                </a>
                <a 
                  href="https://wa.me/6285215212323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm font-mono text-violet-500 mb-2 block">01 / EXPERTISE</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-500 text-lg">Proficiency levels based on production experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillsWithLevel.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-on-scroll opacity-0 translate-x-10 transition-all duration-700 group"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-white group-hover:text-violet-500 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-900 rounded-full text-gray-500">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-gray-500 group-hover:text-violet-500 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative h-3 bg-gray-900 rounded-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20`} />
                  
                  <div 
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 0.05}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                  
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity`}
                    style={{ 
                      left: `calc(${skill.level}% - 4px)`,
                      boxShadow: `0 0 10px 2px rgba(139, 92, 246, 0.6)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={category}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 p-6 border border-gray-900 rounded-2xl hover:border-violet-500 bg-gradient-to-br from-gray-950 to-black hover:scale-105 transform hover:shadow-xl hover:shadow-violet-500/10"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-violet-500 mb-2">
                  {items.length}
                </div>
                <div className="text-sm font-semibold text-gray-400">
                  {category}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Technologies
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm font-mono text-violet-500 mb-2 block">02 / WORK</span>
            <h2 className="text-5xl md:text-6xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group relative p-6 border border-gray-900 rounded-2xl hover:border-violet-500 overflow-hidden bg-black cursor-pointer hover:scale-105 transform hover:shadow-2xl hover:shadow-violet-500/20"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="mb-4 flex justify-between items-start">
                    <Sparkles className="w-6 h-6 text-violet-500 group-hover:rotate-180 transition-transform duration-500" />
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-violet-500 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {project.desc}
                  </p>
                  
                  {project.features && (
                    <div className="mb-4 space-y-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-violet-500 rounded-full group-hover:scale-150 transition-transform" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-gray-600 font-mono hover:text-violet-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm font-mono text-violet-500 mb-2 block">03 / JOURNEY</span>
            <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
            <p className="text-gray-500 mt-4">Click to expand for more details</p>
          </div>

          <div className="space-y-1">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-x-10 transition-all duration-700 group border-b border-gray-900 hover:bg-gray-950"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-violet-500 transition-colors flex items-center gap-2">
                        {exp.company}
                        {expandedExp === index ? <ChevronUp className="w-5 h-5 animate-bounce" /> : <ChevronDown className="w-5 h-5" />}
                      </h3>
                      <p className="text-gray-500">{exp.role}</p>
                      <span className="text-xs text-gray-700 font-mono">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 font-mono">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="text-xs text-gray-700 font-mono hover:text-violet-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {expandedExp === index && (
                  <div className="px-6 pb-6 space-y-3 animate-slide-down">
                    <div className="pt-4 border-t border-gray-900">
                      <h4 className="text-sm font-bold text-violet-500 mb-3">Key Responsibilities & Achievements:</h4>
                      <div className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0" />
                            <p>{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm font-mono text-violet-500 mb-2 block">04 / EDUCATION</span>
            <h2 className="text-5xl md:text-6xl font-bold">Academic</h2>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 p-8 border border-gray-900 rounded-2xl hover:border-violet-500 bg-gradient-to-br from-gray-950 to-black hover:scale-105 transform hover:shadow-2xl hover:shadow-violet-500/20">
            <h3 className="text-2xl font-bold mb-2">Bachelor in Informatics Engineering</h3>
            <p className="text-xl text-violet-500 mb-4">Universitas Komputer Indonesia</p>
            <div className="flex items-center gap-4 text-gray-500 font-mono text-sm">
              <span>Bandung, Indonesia</span>
              <span>•</span>
              <span>2013 - 2018</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Let's create<br />something amazing
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '0.2s' }}>
            <a 
              href="mailto:mtegarps@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-600 transition-all text-lg hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50"
            >
              <Mail className="w-5 h-5" />
              mtegarps@gmail.com
            </a>
            
            <a 
              href="https://wa.me/6285215212323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all text-lg hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50"
            >
              <Phone className="w-5 h-5" />
              +62 852-1521-2323
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>© 2025 Moch Tegar Puja Septimansyah</p>
            <div className="flex gap-6">
              <a href="mailto:mtegarps@gmail.com" className="hover:text-violet-500 transition-colors hover:scale-110 transform">Email</a>
              <a href="https://www.linkedin.com/in/tegar-p-septimansyah-914390107/" className="hover:text-violet-500 transition-colors hover:scale-110 transform">LinkedIn</a>
              <a href="https://wa.me/6285215212323" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors hover:scale-110 transform">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .mix-blend-difference {
          mix-blend-mode: difference;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -30px) rotate(10deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }

        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.2s both;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-on-scroll {
          transition: all 0.7s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;