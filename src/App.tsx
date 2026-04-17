/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Menu, Zap, Truck, BookOpen, Lightbulb, Rocket, ChevronRight, CloudUpload, Brain, Linkedin, Instagram, Facebook, Mail, HelpCircle, X, AlertTriangle, Search, Zap as ZapIcon, Target } from "lucide-react";
import { useRef, useState, useEffect, ReactNode, MouseEvent, useMemo } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const WhatIsShiezoPage = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -8, 0]
        }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ 
          scale: { delay: 0.1 },
          opacity: { delay: 0.1 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-full max-w-2xl bg-[#0A0A0A] text-white rounded-[26px] overflow-hidden border border-accent/30 shadow-[0_0_50px_rgba(255,45,45,0.15)] flex flex-col max-h-[90vh]"
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/20 blur-[120px] rounded-full"
          />
          {/* Graphic Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        </div>

        {/* Close Button */}
        <motion.button 
          onClick={onClose}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 45, 45, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 transition-all z-[60] border border-white/10 hover:border-accent/40"
        >
          <X className="w-5 h-5 text-white/70" />
        </motion.button>

        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block mb-4 p-3 rounded-2xl bg-accent/10 border border-accent/20 shadow-[0_0_20px_rgba(255,45,45,0.1)]"
            >
              <HelpCircle className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-2 text-glow"
            >
              What is SHIEZO AI?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 font-medium tracking-wide uppercase text-[10px]"
            >
              Your AI-powered selling assistant
            </motion.p>
          </div>

          <div className="space-y-12">
            {[
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Problem", content: "Most beginners don’t know what to sell or how to sell online", color: "text-amber-500" },
              { icon: <Brain className="w-6 h-6" />, title: "Solution", content: "SHIEZO AI helps you find products, create content, and start selling instantly", color: "text-blue-500" },
              { 
                icon: <Search className="w-6 h-6" />, 
                title: "What it does", 
                items: ["Finds trending products", "Generates product details", "Creates sales captions", "Gives growth suggestions"],
                color: "text-purple-500"
              },
              { 
                icon: <ZapIcon className="w-6 h-6" />, 
                title: "How it works", 
                steps: ["Find product", "Generate details", "Create caption", "Start selling"],
                color: "text-yellow-500"
              },
              { 
                icon: <Target className="w-6 h-6" />, 
                title: "Who is it for", 
                items: ["Meesho sellers", "Amazon beginners", "Flipkart resellers", "Students / side hustlers"],
                color: "text-accent"
              }
            ].map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ x: -30, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5 + idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 relative">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 rounded-[22px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-accent/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                  >
                    {/* Graphic Glow Layer */}
                    <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500 ${section.color}`} />
                    <div className={`absolute -inset-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                      className={`${section.color} group-hover:scale-110 transition-transform duration-500 relative z-20 drop-shadow-[0_0_8px_currentColor]`}
                    >
                      {section.icon}
                    </motion.div>
                  </motion.div>
                  {idx < 4 && (
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 40 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                      className="absolute top-16 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" 
                    />
                  )}
                </div>
                <div className="pt-2 flex-grow">
                  <motion.h4 
                    whileHover={{ x: 5 }}
                    className="font-display font-bold text-base uppercase tracking-[0.2em] mb-3 flex items-center gap-3 text-white/90 group-hover:text-white transition-all duration-300"
                  >
                    <span className="group-hover:text-accent transition-colors">{section.title}</span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/40 to-transparent origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
                  </motion.h4>
                  {section.content && <p className="text-white/50 text-sm leading-relaxed font-medium">{section.content}</p>}
                  {section.items && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.items.map(item => (
                        <li key={item} className="text-white/50 text-xs flex items-center gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors" />
                          <span className="group-hover/item:text-white/80 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.steps && (
                    <div className="flex flex-wrap gap-4 mt-3">
                      {section.steps.map((step, sIdx) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="relative">
                            <span className="text-[10px] font-bold bg-accent/10 border border-accent/20 text-accent px-2.5 py-1 rounded-lg shadow-[0_0_10px_rgba(255,45,45,0.1)]">
                              {sIdx + 1}
                            </span>
                          </div>
                          <span className="text-xs text-white/50 font-bold uppercase tracking-tighter">{step}</span>
                          {sIdx < section.steps.length - 1 && <ChevronRight className="w-4 h-4 text-white/10" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Footer */}
        <div className="mt-auto p-8 border-t border-white/5 bg-white/[0.02] flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-red-900 p-[1px] shadow-[0_0_20px_rgba(255,45,45,0.2)]">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/shivam/100/100" alt="Shivam" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-white/90">Founder – SHIEZO AI</p>
              <p className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">~SHIVAM</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/30">
              Est. 2024
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MenuOverlay = ({ isOpen, onClose, onWhatIsClick }: { isOpen: boolean; onClose: () => void; onWhatIsClick: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-6 z-[70] w-64 bg-[#111111] rounded-2xl border border-white/10 p-2 shadow-2xl"
          >
            <button
              onClick={() => {
                onWhatIsClick();
                onClose();
              }}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-white/5 transition-all duration-300 group text-left relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 relative z-10 border border-accent/20 group-hover:border-accent/40 shadow-[0_0_15px_rgba(255,45,45,0.1)]">
                <HelpCircle className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="relative z-10">
                <p className="text-sm font-bold text-white/90 group-hover:text-white transition-colors tracking-tight">What is SHIEZO AI</p>
                <p className="text-[9px] text-accent/60 font-bold uppercase tracking-[0.2em]">Learn more</p>
              </div>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const FadeInSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CinematicIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [breakingWordIndex, setBreakingWordIndex] = useState(-1);
  const [showFinalText, setShowFinalText] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const words = ["DEPRESSION", "OVERTHINKING", "STUDY", "DELIVERY"];

  useEffect(() => {
    let timer = 0;

    // SCENE 1: Word Entry
    words.forEach((_, i) => {
      setTimeout(() => setActiveWordIndex(i), timer);
      timer += 900;
    });

    // SCENE 2: Ready State
    timer += 800;

    // SCENE 3: Break sequentially
    words.forEach((_, i) => {
      setTimeout(() => setBreakingWordIndex(i), timer);
      timer += 400;
    });

    // SCENE 4: Empty Moment
    timer += 500;

    // SCENE 5: Next Text
    setTimeout(() => setShowFinalText(true), timer);
    timer += 2200;

    // SCENE 6: Brand Reveal
    setTimeout(() => {
      setShowFinalText(false);
      setShowBrand(true);
    }, timer);
    timer += 3000;

    // Exit
    setTimeout(() => onComplete(), timer + 500);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden select-none px-6"
    >
      <AnimatePresence>
        {breakingWordIndex >= 0 && breakingWordIndex < words.length && (
          <motion.div
            key={breakingWordIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-accent/15 blur-[80px] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {!showFinalText && !showBrand && (
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-16 max-w-sm md:max-w-2xl w-full">
          {words.map((word, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <AnimatePresence>
                {activeWordIndex >= i && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={
                      breakingWordIndex >= i
                        ? { 
                            scale: 1.1,
                            opacity: 0,
                            filter: "blur(20px)",
                            x: [0, -1, 1, -1, 0],
                          }
                        : { 
                            scale: [0.95, 1.05, 1],
                            opacity: 1,
                            filter: "blur(0px)",
                            textShadow: [
                              "0 0 5px rgba(255, 45, 45, 0.2)",
                              "0 0 10px rgba(255, 45, 45, 0.4)",
                              "0 0 5px rgba(255, 45, 45, 0.2)"
                            ]
                          }
                    }
                    transition={
                      breakingWordIndex >= i
                        ? { duration: 0.7, ease: "easeInOut" }
                        : activeWordIndex === i 
                          ? { 
                              scale: { duration: 0.2, times: [0, 0.7, 1], ease: "easeOut" },
                              opacity: { duration: 0.6 },
                              textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }
                          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="relative"
                  >
                    <div className="text-white font-display font-bold text-lg md:text-6xl tracking-[0.15em] md:tracking-[0.2em] text-center uppercase">
                      {word}
                    </div>

                    {breakingWordIndex === i && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 pointer-events-none flex items-center justify-center"
                      >
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                          <motion.path
                            d="M 10 20 L 30 15 L 50 25 L 70 10 L 90 20"
                            stroke="#FF2D2D"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3 }}
                            className="drop-shadow-[0_0_8px_rgba(255,45,45,1)]"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {showFinalText && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white drop-shadow-[0_0_20px_rgba(255,45,45,0.4)]">
              I didn't stop.
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBrand && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <h1 className="text-5xl md:text-9xl font-display font-bold tracking-tighter text-white relative">
                SHIEZO AI
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 blur-3xl bg-accent/20 -z-10 rounded-full"
                />
              </h1>
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2 text-accent font-display text-[10px] md:text-xl tracking-[0.5em] font-medium uppercase"
              >
                SMART SELLING WITH AI
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="relative"
            >
              <p className="text-white/30 text-[8px] md:text-[10px] tracking-widest uppercase mb-1">Founder Identity</p>
              <h3 className="text-lg md:text-3xl font-display font-bold tracking-tight text-white/90">~SHIVAM</h3>
              <p className="text-white/30 text-[7px] md:text-[10px] tracking-[0.2em] uppercase max-w-[280px] mx-auto leading-relaxed mt-1">
                AI EXPERT, DEVELOPER, FOUNDER, ENTREPRENEUR
              </p>
              <div className="absolute -inset-4 bg-accent/5 blur-xl -z-10 rounded-full" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Particles = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: ["-10%", "110%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className={`absolute w-1 h-1 rounded-full ${Math.random() > 0.5 ? 'bg-accent' : 'bg-white'}`}
        />
      ))}
    </div>
  );
};

function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatIsPageOpen, setIsWhatIsPageOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<{ title: string; desc: string } | null>(null);
  const [logoError, setLogoError] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [activeStoryLine, setActiveStoryLine] = useState(0);
  const storyLines = [
    "I worked every morning...",
    "I studied during the day...",
    "I built at night...",
    "I saw people struggling to sell..."
  ];

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("shiezo-intro-seen");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const storySection = document.getElementById("story-flow");
      
      if (storySection) {
        const rect = storySection.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));
        const index = Math.floor(progress * storyLines.length);
        setActiveStoryLine(Math.min(index, storyLines.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("shiezo-intro-seen", "true");
  };

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-accent selection:text-white min-h-screen flex flex-col">
      <AnimatePresence>
        {isWhatIsPageOpen && (
          <WhatIsShiezoPage onClose={() => setIsWhatIsPageOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showIntro ? (
          <CinematicIntro onComplete={handleIntroComplete} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-grow flex flex-col"
          >
            {/* Background Glow Pulse */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <Particles />
              <motion.div 
                style={{ y: bgY1 }}
                animate={{ 
                  opacity: [0.1, 0.15, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-1/4 w-full h-full bg-accent/10 blur-[120px] rounded-full"
              />
              <motion.div 
                style={{ y: bgY2 }}
                animate={{ 
                  opacity: [0.05, 0.1, 0.05],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 -right-1/4 w-full h-full bg-accent/5 blur-[150px] rounded-full"
              />
            </div>

            {/* HEADER */}
            <motion.header 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5"
            >
              {/* Menu Button (ChatGPT Style) */}
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.96 }}
                className="w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-colors"
              >
                <motion.div 
                  animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  className="w-5 h-[1.5px] bg-white/80" 
                />
                <motion.div 
                  animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  className="w-5 h-[1.5px] bg-white/80" 
                />
              </motion.button>

              <MenuOverlay 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                onWhatIsClick={() => setIsWhatIsPageOpen(true)} 
              />
              
              {/* Logo Center */}
              <div className="flex items-center justify-center">
                {!logoError ? (
                  <img 
                    src="input_file_0.png" 
                    alt="SHIEZO AI" 
                    className="h-7 md:h-9 object-contain mix-blend-screen"
                    onError={() => setLogoError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="font-display font-bold text-lg tracking-[0.2em] uppercase">SHIEZO AI</span>
                )}
              </div>

              {/* Right Spacer for alignment */}
              <div className="w-10" />
            </motion.header>

            <main className="flex-grow pt-20">
              {/* HERO SECTION */}
              <motion.section 
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 z-10"
              >
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="mb-4"
                  >
                    <motion.h2 
                      initial={{ y: 30, opacity: 0, scale: 0.9 }}
                      whileInView={{ y: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2"
                    >
                      SHIEZO AI
                    </motion.h2>
                    <motion.p 
                      initial={{ y: 20, opacity: 0, scale: 0.95 }}
                      whileInView={{ y: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="text-accent font-display text-lg md:text-xl tracking-[0.3em] font-medium"
                    >
                      SMART SELLING WITH AI
                    </motion.p>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white/50 text-base md:text-lg mb-10 font-light italic"
                  >
                    Built from struggle. Designed for sellers.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mb-10"
                  >
                    <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Founder Identity</p>
                    <h3 className="text-lg font-display font-bold tracking-tight text-white/90">~SHIVAM</h3>
                    <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">
                      AI EXPERT, DEVELOPER, FOUNDER, ENTREPRENEUR
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 45, 45, 0.3)" }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-accent text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300"
                  >
                    Start Experience
                  </motion.button>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                  <span className="text-[9px] tracking-[0.4em] uppercase font-light text-white/40">Scroll</span>
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent"
                  />
                </motion.div>
              </motion.section>

              {/* STORY FLOW */}
              <section id="story-flow" className="relative h-[300vh] bg-black z-10">
                <div className="sticky top-0 h-screen flex items-center justify-center px-6">
                  <div className="max-w-2xl w-full text-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeStoryLine}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-display font-light leading-tight text-white/90"
                      >
                        “{storyLines[activeStoryLine]}”
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </section>

        {/* IDEA SECTION */}
        <section className="relative py-12 flex items-center justify-center bg-black z-10 overflow-hidden">
          <motion.div 
            style={{ y: bgY1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.15 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="absolute w-[400px] h-[400px] bg-accent/20 blur-[80px] rounded-full"
          />
          
          <FadeInSection className="relative z-10 text-center px-6">
            <motion.h2 
              style={{ y: bgY2 }}
              className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-2"
            >
              “So I built something simple...”
            </motion.h2>
          </FadeInSection>
        </section>

        {/* CORE IDEA BLOCK */}
        <section className="py-10 px-6 bg-black z-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "UPLOAD", icon: <CloudUpload className="w-6 h-6" />, desc: "Drop your product images" },
                { title: "AI ANALYZE", icon: <Brain className="w-6 h-6" />, desc: "Instant market intelligence" },
                { title: "START SELLING", icon: <Rocket className="w-6 h-6" />, desc: "Ready for the world" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                  className="relative group p-[1px] rounded-[24px] overflow-hidden"
                >
                  {/* Moving Red Glow Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#FF2A2A_50%,transparent_60%,transparent_100%)] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative bg-[#080808] p-6 rounded-[23px] flex flex-col items-center text-center overflow-hidden z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 relative z-10 border border-white/10 group-hover:border-accent/40 transition-all duration-500 shadow-xl"
                    >
                      <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-20 text-accent group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,45,45,0.6)]">
                        {item.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="font-display text-base font-bold tracking-[0.2em] uppercase mb-2 text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-[10px] font-medium tracking-wide leading-relaxed max-w-[180px]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES (HORIZONTAL) */}
        <section className="py-12 bg-black z-10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full -z-10 opacity-20" />
          
          <FadeInSection className="mb-8 px-6 text-center">
            <motion.p 
              initial={{ opacity: 0, tracking: "0.2em" }}
              whileInView={{ opacity: 1, tracking: "0.4em" }}
              className="text-accent text-[9px] uppercase font-bold mb-2"
            >
              Capabilities
            </motion.p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">POWERED BY INTELLIGENCE</h2>
          </FadeInSection>

          <div className="flex overflow-x-auto pb-12 px-6 no-scrollbar gap-5 snap-x">
            {[
              { title: "Find Winning Products", icon: <Zap className="w-5 h-5" />, desc: "Discover trending and high-demand products using AI. Analyze market demand, competition, and growth potential." },
              { title: "Create Product Details", icon: <Lightbulb className="w-5 h-5" />, desc: "Generate optimized titles, descriptions, and highlights tailored for marketplaces like Meesho, Flipkart, and Amazon." },
              { title: "Generate Sales Caption", icon: <Rocket className="w-5 h-5" />, desc: "Create high-converting captions using AI copywriting models to boost engagement and sales." },
              { title: "Smart AI Suggestions", icon: <Zap className="w-5 h-5" />, desc: "Get intelligent recommendations based on your product, niche, and target audience to improve performance." },
              { title: "Market Analysis", icon: <Lightbulb className="w-5 h-5" />, desc: "Deep dive into competitor strategies and market trends to stay ahead of the curve." },
              { title: "Trend Prediction", icon: <Rocket className="w-5 h-5" />, desc: "Anticipate what's next in your niche and prepare your inventory for future demand." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="relative min-w-[280px] md:min-w-[320px] p-[1px] rounded-[20px] overflow-hidden group transition-all duration-300 snap-center"
              >
                {/* Moving Red Glow Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#FF2A2A_50%,transparent_60%,transparent_100%)] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative bg-[#0A0A0A] p-5 rounded-[19px] border border-white/5 flex items-center gap-4 h-28 overflow-hidden z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent relative z-10 border border-white/10 group-hover:border-accent/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-accent/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-20 drop-shadow-[0_0_5px_rgba(255,45,45,0.4)]">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <h4 className="text-xs font-display font-bold text-white/90 mb-1 tracking-tight group-hover:text-white transition-colors uppercase">{feature.title}</h4>
                    <p className="text-white/30 text-[9px] font-medium leading-relaxed line-clamp-2 mb-2">{feature.desc}</p>
                    <button 
                      onClick={() => setSelectedFeature({ title: feature.title, desc: feature.desc })}
                      className="flex items-center text-accent text-[8px] font-bold tracking-[0.2em] uppercase group-hover:gap-2 transition-all"
                    >
                      Explore <ChevronRight className="w-2.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FUTURE VISION */}
        <section className="py-12 px-6 bg-black z-10 relative text-center overflow-hidden">
          <motion.div 
            style={{ y: bgY1, opacity: 0.1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -z-10"
          />
          <motion.div
            style={{ y: bgY2 }}
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-2 leading-none">
              “This is just the beginning...”
            </h2>
            <p className="text-base md:text-xl font-display font-light text-white/40">
              SHIEZO AI will change selling.
            </p>
          </motion.div>
        </section>

        {/* FOUNDER STORY CARD */}
        <section className="py-8 px-6 bg-black z-10 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0A0A0A] rounded-[20px] p-6 md:p-8 border border-accent/15 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full -mr-16 -mt-16" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-lg font-display font-bold tracking-tight mb-0.5 text-white/90">~SHIVAM</h3>
                    <p className="text-accent text-[8px] tracking-[0.2em] uppercase font-bold">
                      AI EXPERT, DEVELOPER, FOUNDER, ENTREPRENEUR
                    </p>
                  </div>
                  <div className="h-[1px] flex-grow mx-4 bg-white/10 hidden md:block mb-1" />
                  <div className="text-white/20 text-[8px] font-mono tracking-widest">EST. 2026</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: <Zap className="w-3 h-3" />, text: "Student Hustler" },
                    { icon: <Truck className="w-3 h-3" />, text: "Delivery + Study" },
                    { icon: <BookOpen className="w-3 h-3" />, text: "School Life" },
                    { icon: <Lightbulb className="w-3 h-3" />, text: "Idea from Struggle" },
                    { icon: <Rocket className="w-3 h-3" />, text: "Built SHIEZO" }
                  ].map((point, i) => (
                    <motion.div
                      key={point.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                      className="flex items-center gap-2.5 group/point"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover/point:bg-accent group-hover/point:text-white transition-all duration-300">
                        {point.icon}
                      </div>
                      <span className="text-xs md:text-sm font-display font-medium text-white/70">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-12 px-6 bg-black z-10 relative text-center">
          <FadeInSection>
            <h2 className="text-xl md:text-2xl font-display font-bold tracking-tight mb-4 text-glow">
              IF YOU ARE INTERESTED, CONTACT US
            </h2>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 45, 45, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              animate={{ boxShadow: ["0 0 5px rgba(255, 45, 45, 0.1)", "0 0 15px rgba(255, 45, 45, 0.2)", "0 0 5px rgba(255, 45, 45, 0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => setIsContactOpen(true)}
              className="bg-black border border-accent/40 text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </FadeInSection>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 px-6 bg-black z-10 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* 1. COPYRIGHT TEXT */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <span className="text-[9px] font-display font-bold tracking-[0.2em] uppercase text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              SHIEZO AI © 2026
            </span>
          </motion.div>

          {/* 2. FOLLOW US */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <motion.h2 
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(255, 255, 255, 0.2)",
                  "0 0 10px rgba(255, 255, 255, 0.4)",
                  "0 0 5px rgba(255, 255, 255, 0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-display font-bold text-[10px] tracking-[0.3em] uppercase text-white"
            >
              FOLLOW US
            </motion.h2>
          </motion.div>

          {/* 2.5 ABOUT LINK */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Link 
              to="/about"
              className="text-[10px] font-display font-medium tracking-[0.2em] uppercase text-white hover:text-accent transition-all duration-300 relative group drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              ABOUT
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          {/* 3. SOCIAL ICONS */}
          <div className="flex items-center justify-center gap-3">
            {[
              { 
                icon: <Linkedin className="w-3.5 h-3.5" />, 
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shivam-1ab814403?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              },
              { 
                icon: <Instagram className="w-3.5 h-3.5" />, 
                label: "Instagram",
                href: "https://www.instagram.com/hey.iam.shivamm?igsh=MWNsaGZpM3p0dTdyNA=="
              },
              { 
                icon: <Facebook className="w-3.5 h-3.5" />, 
                label: "Facebook",
                href: "https://www.facebook.com/share/1A4ZzqzBQS/"
              }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href || "#"}
                target={social.href ? "_blank" : undefined}
                rel={social.href ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.8, y: 5 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-7 h-7 rounded-md bg-[#1A1A1A] flex items-center justify-center text-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.05)]"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      {/* FEATURE POPUP */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-[12px]"
            >
              <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#111111] rounded-[24px] p-8 border border-accent/30 shadow-[0_0_50px_rgba(255,45,45,0.25)] overflow-hidden"
            >
              {/* Pulse Glow Effect */}
              <motion.div 
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-accent/10 blur-3xl -z-10"
              />
              
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-white/10 transition-colors text-white/60 hover:text-white z-20"
              >
                ✕
              </button>

              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold mb-4 tracking-[0.1em] text-white uppercase drop-shadow-[0_0_8px_rgba(255,45,45,0.4)]">
                  {selectedFeature.title}
                </h3>
                
                <div className="h-[1px] w-full bg-gradient-to-r from-accent/50 to-transparent mb-6" />
                
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                  {selectedFeature.desc}
                </p>
                
                <div className="mt-8 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFeature(null)}
                    className="bg-accent text-white px-8 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase shadow-[0_0_15px_rgba(255,45,45,0.3)]"
                  >
                    Got it
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONTACT POPUP */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                scale: 0.9, 
                y: 10,
                filter: "blur(8px)",
                transition: { duration: 0.3, ease: "easeIn" }
              }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#111111] rounded-[20px] p-6 border border-accent/30 red-glow shadow-2xl"
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-xl font-display font-bold mb-6 text-center tracking-tight">Email List</h3>
              
              <div className="flex flex-col gap-0.5">
                {[
                  { label: "Business Email", email: "business@shiezo.ai" },
                  { label: "Personal Email", email: "shivam@shiezo.ai" },
                  { label: "SHIEZO AI Team", email: "team@shiezo.ai" }
                ].map((item, i) => (
                  <div key={item.label} className="group">
                    <div className="flex flex-col py-3 px-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <span className="text-[9px] uppercase tracking-widest text-white/30 mb-0.5">{item.label}</span>
                      <span className="text-base font-display font-medium text-white/80 group-hover:text-accent transition-colors">
                        {item.email}
                      </span>
                    </div>
                    {i < 2 && <div className="h-[1px] w-full bg-white/5" />}
                  </div>
                ))}
              </div>

              {/* Talk to Manager Section */}
              <div className="mt-4 flex flex-col items-center">
                <div className="w-1/2 h-[1px] bg-white/20 mb-3" />
                
                <h4 className="text-[10px] font-display font-medium tracking-[0.2em] text-white uppercase mb-3">
                  TALK TO MANAGER
                </h4>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-display text-white/80 group-hover:text-white transition-colors">
                    shiezoai@gmail.com
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
}

