/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Menu, Zap, Truck, BookOpen, Lightbulb, Rocket, ChevronRight, CloudUpload, Brain, Linkedin, Instagram, Facebook, Mail, HelpCircle, X, AlertTriangle, Search, Zap as ZapIcon, Target, User, Users, Briefcase } from "lucide-react";
import { useRef, useState, useEffect, ReactNode, MouseEvent, useMemo } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const WhatIsShiezoPage = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        exit={{ 
          opacity: 0, 
          scale: 0.9, 
          y: 20,
          rotateX: -10,
          filter: "blur(12px)",
          transition: { duration: 0.25, ease: "easeIn" }
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 250,
          rotateX: { duration: 0.4 }
        }}
        className="relative w-full max-w-[380px] bg-[#0D0D0D] rounded-[32px] p-5 border border-accent/40 shadow-[0_0_60px_rgba(255,45,45,0.15)] overflow-hidden flex flex-col max-h-[85vh]"
        style={{ perspective: "1000px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Accent Glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full -ml-16 -mb-16" />

        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "rgba(255,45,45,0.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-colors text-white/60 hover:text-white z-20"
        >
          <X className="w-4 h-4" />
        </motion.button>

        <div className="relative z-10 flex flex-col min-h-0 h-full">
          <div className="flex flex-col items-center mb-6 flex-shrink-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-3 shadow-[0_0_20px_rgba(255,45,45,0.3)]"
            >
              <HelpCircle className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-display font-bold tracking-tighter text-white">What is SHIEZO AI?</h3>
            <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-medium mt-1">Your AI-powered selling assistant</p>
          </div>

          <div className="flex-grow overflow-y-auto custom-scrollbar space-y-3 pr-2 min-h-0 scroll-smooth">
            {[
              { 
                icon: <AlertTriangle className="w-4 h-4" />, 
                title: "The Problem", 
                content: "Beginner resellers struggle to find viral products and create conversion-focused content.", 
                accent: "border-amber-500/30 bg-amber-500/5 text-amber-500"
              },
              { 
                icon: <Brain className="w-4 h-4" />, 
                title: "The Solution", 
                content: "SHIEZO AI automates product discovery and content creation using advanced AI models.", 
                accent: "border-blue-500/30 bg-blue-500/5 text-blue-500"
              },
              { 
                icon: <ZapIcon className="w-4 h-4" />, 
                title: "The Impact", 
                content: "Scales your business from zero to pro across Meesho, Amazon, and Flipkart instantly.", 
                accent: "border-purple-500/30 bg-purple-500/5 text-purple-500"
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={`p-4 rounded-2xl border ${section.accent} flex gap-4 items-start group hover:bg-white/[0.02] transition-colors`}
              >
                <div className="mt-1">{section.icon}</div>
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-widest mb-1">{section.title}</h4>
                  <p className="text-[11px] leading-relaxed text-white/70">{section.content}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-[24px] bg-accent/5 border border-accent/20 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-3 relative z-10">Winning Workflow</h4>
              <div className="flex items-center justify-between text-[8px] font-bold text-white/40 uppercase tracking-widest px-2 relative z-10">
                <span>Find</span>
                <ChevronRight className="w-3 h-3 text-accent" />
                <span>Optimize</span>
                <ChevronRight className="w-3 h-3 text-accent" />
                <span>Caption</span>
                <ChevronRight className="w-3 h-3 text-accent" />
                <span>Sold</span>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex-shrink-0">
             <motion.button
               whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.95)" }}
               whileTap={{ scale: 0.98 }}
               onClick={onClose}
               className="w-full py-3.5 rounded-2xl bg-white text-black font-display font-bold text-[10px] tracking-widest uppercase shadow-[0_0_20px_rgba(255,45,45,0.15)] transition-all"
             >
               Start Selling Now
             </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
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
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md pointer-events-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95, rotateX: -10, transition: { duration: 0.2 } }}
            className="fixed top-24 left-6 md:left-[calc(50%-576px+24px)] z-[110] w-72 bg-[#0D0D0D]/90 backdrop-blur-2xl rounded-[32px] border border-white/10 p-2 shadow-[0_30px_60px_rgba(0,0,0,0.5)] pointer-events-auto overflow-hidden"
            style={{ perspective: "1000px" }}
          >
            {/* Subtle Gradient Glow inside menu */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full -mr-16 -mt-16 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-1">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Directory</p>
              
              <motion.button
                whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onWhatIsClick();
                  onClose();
                }}
                className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300 group text-left relative overflow-hidden active:bg-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/20 group-hover:border-accent group-hover:bg-accent/30 transition-all shadow-[0_0_15px_rgba(255,45,45,0.1)]">
                  <HelpCircle className="w-5 h-5 text-accent shadow-accent drop-shadow-[0_0_10px_rgba(255,45,45,0.5)]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">What is SHIEZO AI</p>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-0.5">Learn more about us</p>
                </div>
              </motion.button>
              
              <div className="h-[1px] bg-white/5 mx-3 my-1" />
              
              <Link to="/about" onClick={onClose}>
                <motion.button
                  whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300 group text-left relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
                    <Rocket className="w-5 h-5 text-white/50 group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">About Founded</p>
                    <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-0.5">The story of Shivam</p>
                  </div>
                </motion.button>
              </Link>
            </div>
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
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none">
              {/* Menu Overlay Rooted separately to avoid clipping */}
              <MenuOverlay 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                onWhatIsClick={() => setIsWhatIsPageOpen(true)} 
              />
              
              <motion.header 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto w-full max-w-6xl backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[26px] px-6 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
              >
                {/* Header Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Menu Button (ChatGPT Style) */}
                <motion.button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 relative z-10 border border-transparent hover:border-white/10"
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
                
                {/* Logo Center */}
                <div className="flex items-center justify-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {!logoError ? (
                      <img 
                        src="input_file_0.png" 
                        alt="SHIEZO AI" 
                        className="h-7 md:h-8 object-contain mix-blend-screen drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        onError={() => setLogoError(true)}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="font-display font-bold text-lg tracking-[0.2em] uppercase text-glow">SHIEZO AI</span>
                    )}
                  </motion.div>
                </div>

                {/* Right Spacer (Follow Us/Contact Logic could go here eventually) */}
                <div className="w-10 flex justify-end">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#FF2D2D]" />
                </div>
              </motion.header>
            </div>

            <main className="flex-grow pt-4">
              {/* HERO SECTION */}
              <motion.section 
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative min-h-[80vh] flex flex-col items-center justify-start pt-32 md:pt-48 text-center px-6 z-10"
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
        <section className="relative py-8 flex items-center justify-center bg-black z-10 overflow-hidden">
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
        <section className="py-6 px-6 bg-black z-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "UPLOAD", icon: <CloudUpload className="w-6 h-6" />, desc: "Drop your product images" },
                { title: "AI ANALYZE", icon: <Brain className="w-6 h-6" />, desc: "Instant market intelligence" },
                { title: "START SELLING", icon: <Rocket className="w-6 h-6" />, desc: "Ready for the world" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9, boxShadow: "0 0 0px rgba(255, 215, 0, 0)" }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    boxShadow: ["0 0 0px rgba(255, 215, 0, 0)", "0 0 20px rgba(255, 215, 0, 0.3)", "0 0 0px rgba(255, 215, 0, 0)"]
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.1 + (i * 0.2), 
                    duration: 0.8,
                    boxShadow: { duration: 1.2, delay: 0.3 + (i * 0.2) }
                  }}
                  whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(255, 215, 0, 0.4)" }}
                  className="relative group p-[1.5px] rounded-[24px] overflow-hidden animate-golden-border"
                >
                  <div className="relative bg-[#050505] p-6 rounded-[23px] flex flex-col items-center text-center overflow-hidden z-10 min-h-[160px] justify-center">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-[40px] rounded-full -mr-12 -mt-12 group-hover:bg-accent/10 transition-all duration-700" />
                    
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 relative z-10 border border-white/10 group-hover:border-accent/40 transition-all duration-500 shadow-xl"
                    >
                      <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-20 text-accent group-hover:text-yellow-400 transition-colors drop-shadow-[0_0_8px_rgba(255,45,45,0.6)]">
                        {item.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="font-display text-base font-bold tracking-[0.2em] uppercase mb-2 text-white/90 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-[10px] font-medium tracking-wide leading-relaxed max-w-[180px] group-hover:text-white/60 transition-colors italic">{item.desc}</p>
                    
                    {/* Corner Glow */}
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-400/5 blur-[30px] rounded-full -ml-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES (HORIZONTAL) */}
        <section className="py-8 bg-black z-10 relative overflow-hidden">
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
                initial={{ opacity: 0, scale: 0.9, boxShadow: "0 0 0px rgba(255, 215, 0, 0)" }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: ["0 0 0px rgba(255, 215, 0, 0)", "0 0 20px rgba(255, 215, 0, 0.2)", "0 0 0px rgba(255, 215, 0, 0)"]
                }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.8,
                  boxShadow: { duration: 1.2, delay: 0.4 + (i * 0.1) }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative min-w-[280px] md:min-w-[320px] p-[1.5px] rounded-[24px] overflow-hidden animate-golden-border group transition-all duration-300 snap-center"
              >
                <div className="relative bg-[#050505] p-5 rounded-[23px] border border-white/5 flex items-center gap-4 h-28 overflow-hidden z-10">
                  <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent relative z-10 border border-white/10 group-hover:bg-accent group-hover:text-white group-hover:border-accent/40 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-20 drop-shadow-[0_0_8px_rgba(255,45,45,0.4)]">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <h4 className="text-[10px] font-display font-bold text-white/90 mb-1 tracking-wider group-hover:text-yellow-400 transition-colors uppercase">{feature.title}</h4>
                    <p className="text-white/30 text-[9px] font-medium leading-relaxed line-clamp-2 mb-2 group-hover:text-white/50 transition-colors italic">{feature.desc}</p>
                    <button 
                      onClick={() => setSelectedFeature({ title: feature.title, desc: feature.desc })}
                      className="flex items-center text-accent text-[8px] font-bold tracking-[0.2em] uppercase group-hover:text-white transition-all"
                    >
                      Explore <ChevronRight className="w-2.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-yellow-400/5 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FUTURE VISION */}
        <section className="py-8 px-6 bg-black z-10 relative text-center overflow-hidden">
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
        <section className="py-8 px-6 bg-black z-10 relative text-center">
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
            className="mb-3"
          >
            <span className="text-[9px] font-display font-bold tracking-[0.2em] uppercase text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              SHIEZO AI © 2026
            </span>
          </motion.div>

          {/* 2. ABOUT LINK */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <Link 
              to="/about"
              className="text-[10px] font-display font-medium tracking-[0.2em] uppercase text-white hover:text-accent transition-all duration-300 relative group drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              ABOUT
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          {/* 3. FOLLOW US */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
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
              className="font-display font-bold text-[10px] tracking-[0.3em] uppercase text-white/40"
            >
              FOLLOW US
            </motion.h2>
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
              initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ 
                opacity: 0, 
                scale: 0.9, 
                y: 20,
                rotateX: -10,
                filter: "blur(12px)",
                transition: { duration: 0.25, ease: "easeIn" }
              }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 250,
                rotateX: { duration: 0.4 }
              }}
              className="relative w-full max-w-[380px] bg-[#0D0D0D] rounded-[32px] p-6 border border-accent/40 shadow-[0_0_60px_rgba(255,45,45,0.15)] overflow-hidden"
              style={{ perspective: "1000px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Accent Glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full -ml-16 -mb-16" />

              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "rgba(255,45,45,0.2)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-colors text-white/60 hover:text-white z-20"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="relative z-10">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-3 shadow-[0_0_20px_rgba(255,45,45,0.3)]"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold tracking-tighter text-white">Email Directory</h3>
                  <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-medium mt-1">Get in touch with our team</p>
                </div>
                
                <div className="space-y-1.5">
                  {[
                    { label: "Business Inquiry", email: "business@shiezo.ai", icon: <Briefcase className="w-3.5 h-3.5" /> },
                    { label: "Direct Founder", email: "shivam@shiezo.ai", icon: <User className="w-3.5 h-3.5" /> },
                    { label: "Technical Support", email: "team@shiezo.ai", icon: <Users className="w-3.5 h-3.5" /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="group"
                    >
                      <motion.div 
                        whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.02)" }}
                        className="flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-white/10 transition-all cursor-pointer overflow-hidden relative"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[7px] uppercase tracking-widest text-accent font-bold mb-0.5">{item.label}</span>
                          <span className="text-xs font-display font-medium text-white/90 group-hover:text-white transition-colors">
                            {item.email}
                          </span>
                        </div>
                        
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.div 
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <ChevronRight className="w-3 h-3 text-accent" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Section */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex flex-col items-center">
                    <h4 className="text-[8px] font-display font-bold tracking-[0.3em] text-white/30 uppercase mb-4">
                      STRATEGIC PARTNERSHIPS
                    </h4>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all cursor-pointer group"
                    >
                      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[7px] font-bold text-accent/80 uppercase tracking-widest">Talk to Manager</span>
                        <span className="text-xs font-display font-bold text-white group-hover:text-accent transition-colors">
                          shiezoai@gmail.com
                        </span>
                      </div>
                      <div className="ml-auto">
                        <div className="px-2 py-0.5 rounded-md bg-accent/20 text-[7px] font-bold text-accent border border-accent/30 uppercase">Fast</div>
                      </div>
                    </motion.div>
                  </div>
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 45, 45, 0.3);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 45, 45, 0.5);
        }
        .custom-scrollbar {
          scroll-behavior: smooth;
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

