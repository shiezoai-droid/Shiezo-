/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Menu, Zap, Truck, BookOpen, Lightbulb, Rocket, ChevronRight, CloudUpload, Brain, Linkedin, Instagram, Facebook } from "lucide-react";
import { useRef, useState, useEffect, ReactNode, MouseEvent } from "react";

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
  const [scene, setScene] = useState(0); // 0: Entry, 1: Hold, 2: Transition, 3: Reveal
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [crackedWordIndex, setCrackedWordIndex] = useState(-1);

  const words = ["DEPRESSION", "OVERTHINKING", "STUDY", "DELIVERY"];

  useEffect(() => {
    // Scene 1: Liquid Entry (One by one)
    let timer = 0;
    words.forEach((_, i) => {
      setTimeout(() => setActiveWordIndex(i), timer);
      timer += 700; 
    });

    // Scene 2: Hold
    setTimeout(() => setScene(1), timer + 300);
    timer += 1000;

    // Scene 3: Crack (One by one)
    words.forEach((_, i) => {
      setTimeout(() => setCrackedWordIndex(i), timer);
      timer += 600;
    });

    // Scene 4: "I didn't stop."
    setTimeout(() => setScene(2), timer + 400);
    timer += 1800;

    // Scene 5: Brand Reveal
    setTimeout(() => setScene(3), timer);
    timer += 2500;

    // Exit
    setTimeout(() => onComplete(), timer + 500);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden select-none px-6"
    >
      {/* Background Subtle Vibration (Alive Feel) */}
      <motion.div 
        animate={scene === 1 ? { x: [-1, 1, -1], y: [1, -1, 1] } : {}}
        transition={{ duration: 0.1, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Scene 1, 2, 3: The 4 Words Grid */}
      {scene < 2 && (
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:gap-x-20 md:gap-y-24 max-w-sm md:max-w-2xl w-full">
          {words.map((word, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <AnimatePresence>
                {activeWordIndex >= i && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
                    animate={{ 
                      scale: [0, 1.15, 1], 
                      opacity: 1, 
                      filter: "blur(0px)",
                      x: crackedWordIndex >= i ? [0, -2, 2, -2, 0] : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
                      opacity: { duration: 0.5 },
                      filter: { duration: 0.8 },
                      x: { duration: 0.2 }
                    }}
                    className="relative"
                  >
                    {/* Liquid Ripple Effect (Pulse after landing) */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.8, 0.5],
                        textShadow: [
                          "0 0 15px rgba(255, 45, 45, 0.6)",
                          "0 0 30px rgba(255, 45, 45, 0.9)",
                          "0 0 15px rgba(255, 45, 45, 0.6)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-white font-display font-bold text-xl md:text-5xl tracking-widest text-center"
                    >
                      {word}
                    </motion.div>

                    {/* Crack Effect Overlay */}
                    {crackedWordIndex >= i && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                            transition={{ duration: 0.4, ease: "easeOut" }}
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

      {/* Scene 4: "I didn't stop." */}
      {scene === 2 && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,45,45,0.4)]">
            “I didn’t stop.”
          </h2>
        </motion.div>
      )}

      {/* Scene 5: Brand Reveal */}
      {scene === 3 && (
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white relative">
              SHIEZO AI
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 blur-2xl bg-accent/20 -z-10 rounded-full"
              />
            </h1>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-2 text-accent font-display text-sm md:text-lg tracking-[0.5em] font-medium"
            >
              SMART SELLING WITH AI
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative"
          >
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Founder Identity</p>
            <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-white/90">~SHIVAM</h3>
            <p className="text-white/30 text-[8px] md:text-[10px] tracking-[0.2em] uppercase max-w-[250px] mx-auto leading-relaxed mt-1">
              AI EXPERT, DEVELOPER, FOUNDER, ENTREPRENEUR
            </p>
            <div className="absolute -inset-4 bg-accent/5 blur-xl -z-10 rounded-full" />
          </motion.div>
        </div>
      )}
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

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<{ title: string; desc: string } | null>(null);
  const [logoError, setLogoError] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showLinkedInToast, setShowLinkedInToast] = useState(false);

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
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.96 }}
                className="w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-colors"
              >
                <div className="w-5 h-[1.5px] bg-white/80" />
                <div className="w-5 h-[1.5px] bg-white/80" />
              </motion.button>
              
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
        <section className="py-8 px-6 bg-black z-10 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "UPLOAD", icon: <CloudUpload className="w-6 h-6" />, desc: "Drop your product images" },
                { title: "AI ANALYZE", icon: <Brain className="w-6 h-6" />, desc: "Instant market intelligence" },
                { title: "START SELLING", icon: <Rocket className="w-6 h-6" />, desc: "Ready for the world" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative p-[1px] rounded-[20px] overflow-hidden group transition-all duration-300"
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#FF2A2A_50%,transparent_60%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative bg-[#0A0A0A] p-5 rounded-[19px] flex flex-col items-center text-center h-full z-10">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white mb-4 relative z-10 shadow-[0_0_15px_rgba(255,45,45,0.2)]"
                    >
                      <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.icon}
                    </motion.div>
                    <h3 className="font-display text-base font-bold tracking-widest mb-1 relative z-10 text-white">{item.title}</h3>
                    <p className="text-white/30 text-[10px] font-light tracking-wide relative z-10">{item.desc}</p>
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

          <div className="flex overflow-x-auto pb-8 px-6 no-scrollbar gap-4 snap-x">
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
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative min-w-[260px] p-[1px] rounded-[20px] overflow-hidden group transition-all duration-300 snap-center"
              >
                {/* Animated Border Glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#FF2A2A_50%,transparent_60%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative bg-[#0A0A0A] p-6 rounded-[19px] flex flex-col justify-between h-44 z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-accent/80 relative z-10 shadow-[0_0_10px_rgba(255,45,45,0.15)]">
                    <div className="absolute inset-0 bg-accent/10 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {feature.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-base font-display font-bold text-white/90 mb-1">{feature.title}</h4>
                    <p className="text-white/30 text-[10px] mb-3 font-light line-clamp-2">{feature.desc}</p>
                    <button 
                      onClick={() => setSelectedFeature({ title: feature.title, desc: feature.desc })}
                      className="flex items-center text-accent text-[9px] font-bold tracking-widest uppercase group-hover:gap-2 transition-all"
                    >
                      Explore <ChevronRight className="w-3 ml-1" />
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

          {/* 3. SOCIAL ICONS */}
          <div className="flex items-center justify-center gap-3">
            {[
              { 
                icon: <Linkedin className="w-3.5 h-3.5" />, 
                label: "LinkedIn",
                onClick: (e: MouseEvent) => {
                  e.preventDefault();
                  setShowLinkedInToast(true);
                  setTimeout(() => setShowLinkedInToast(false), 2000);
                }
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
                onClick={social.onClick}
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

      {/* LINKEDIN TOAST */}
      <AnimatePresence>
        {showLinkedInToast && (
          <motion.div
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: -40, opacity: 1, x: "-50%" }}
            exit={{ y: 100, opacity: 0, x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-1/2 z-[300] bg-[#111111] px-6 py-2.5 rounded-full border border-accent/20 shadow-[0_0_20px_rgba(255,45,45,0.2)]"
          >
            <span className="text-white font-display font-bold text-sm tracking-wide drop-shadow-[0_0_8px_rgba(255,45,45,0.5)]">
              Coming Soon
            </span>
          </motion.div>
        )}
      </AnimatePresence>

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

