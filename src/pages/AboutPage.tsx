import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, Zap, Lightbulb, Rocket, Instagram, Globe, Facebook, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(255,45,45,0.2)]">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-white tracking-tight">{title}</h3>
  </div>
);

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#000000] text-white selection:bg-accent selection:text-white"
    >
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-4 pb-4 relative z-10">
        <motion.button
          whileHover={{ x: -5, color: "#FF2D2D" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/50 text-sm font-bold uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-2 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 p-3 rounded-2xl bg-accent/10 border border-accent/20 shadow-[0_0_25px_rgba(255,45,45,0.15)]"
          >
            <Rocket className="w-8 h-8 text-accent shadow-accent drop-shadow-[0_0_8px_rgba(255,45,45,0.6)]" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4 text-glow leading-none"
          >
            SHIEZO AI – The Future of Smart Selling with AI
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto"
          >
            SHIEZO AI is a next-generation AI-powered platform designed to transform the way beginners start and grow their online selling journey.
          </motion.p>
        </div>

        {/* Content Body */}
        <div className="w-full space-y-10">
          {/* Main Context */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Built with a clear vision, it simplifies e-commerce by providing intelligent, data-driven tools for resellers across platforms like Meesho, Amazon, and Flipkart.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-bold border-l-2 border-accent/50 pl-4 py-1 bg-accent/5">
              This is not just a tool — it’s a complete system that helps anyone sell smarter, faster, and more effectively using AI.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-[1.5px] rounded-[32px] bg-black shadow-2xl overflow-hidden group mb-6 flex items-center justify-center animate-golden-border max-w-sm mx-auto"
          >
            {/* Inner Content Card (Black) */}
            <div className="w-full h-full bg-[#050505] rounded-[31px] p-5 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-accent/20 transition-all duration-700" />
              <SectionHeader icon={<Brain className="w-5 h-5" />} title="Founder of SHIEZO AI" />
              <div className="space-y-4">
                <p className="text-accent text-[10px] font-bold tracking-[0.1em] uppercase">
                  Shivam — AI Expert, Developer, and Student Entrepreneur
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-accent/40 via-accent/20 to-transparent my-1" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { label: "Student Hustler", text: "Built SHIEZO AI in Class 12." },
                    { label: "Delivery + Study", text: "Balanced work & academics." },
                    { label: "Real Struggle", text: "Experienced seller pain points." },
                    { label: "AI Visionary", text: "Innovating e-commerce." }
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.4)" }}
                      className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 transition-all group/point shadow-[0_0_0px_rgba(255,215,0,0)] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent mt-1.5 group-hover/point:bg-yellow-400 group-hover/point:scale-125 transition-all" />
                      <div>
                        <p className="text-white font-bold text-[9px] uppercase tracking-widest mb-0.5 group-hover/point:text-yellow-400 transition-colors">{point.label}</p>
                        <p className="text-white/30 text-[8px] leading-tight group-hover/point:text-white/50 transition-colors italic">{point.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="pt-2 text-center italic text-white/30 text-[9px]"
                >
                  "Powerful results, even from tough situations."
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:grid md:grid-cols-2 gap-6 space-y-6 md:space-y-0"
          >
            <div className="p-6 rounded-3xl bg-[#080808] border border-white/5 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-white/50">Vision</h4>
              <p className="text-white text-sm font-medium">To change the way of selling using AI.</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#080808] border border-white/5 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <TargetIcon className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-white/50">Mission</h4>
              <p className="text-white/70 text-xs">To empower students, housewives, and small entrepreneurs to start and scale their online business using advanced AI tools without technical knowledge.</p>
            </div>
          </motion.div>

          {/* Core Features */}
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <SectionHeader icon={<Lightbulb className="w-6 h-6" />} title="Core Features of SHIEZO AI" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Trending Product Finder", desc: "Discover high-demand and viral products instantly using AI insights." },
                { title: "AI Product Details Generator", desc: "Create professional titles, descriptions, and highlights that increase conversions." },
                { title: "Sales Caption Generator", desc: "Generate engaging captions with trending hashtags for social media marketing." },
                { title: "Market Intelligence", desc: "Powered by advanced AI models to analyze trends and winning niches in real time." }
              ].map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 transition-all group">
                   <h5 className="text-white font-bold text-sm mb-1 group-hover:text-accent transition-colors">{f.title}</h5>
                   <p className="text-white/40 text-[11px] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PRO Plan */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[32px] bg-accent/5 border border-accent/20 relative overflow-hidden text-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-white mb-2">SHIEZO PRO Plan</h3>
              <div className="text-accent text-3xl font-display font-bold mb-6">₹199<span className="text-sm font-medium text-white/40">/month</span></div>
              <ul className="grid grid-cols-2 gap-3 text-[11px] text-white/60 font-medium">
                {["90+ product searches", "Faster AI processing", "No watermark", "Priority support"].map(item => (
                  <li key={item} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center space-y-6"
          >
            <SectionHeader icon={<Globe className="w-6 h-6" />} title="Connect with SHIEZO AI" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              { [
                { 
                  label: "shiezo.vercel.app", 
                  href: "https://shiezo.vercel.app", 
                  icon: <Globe className="w-4 h-4 text-accent" />,
                  external: true
                },
                { 
                  label: "@hey.iam.shivamm", 
                  href: "https://instagram.com/hey.iam.shivamm", 
                  icon: <Instagram className="w-4 h-4 text-accent" />,
                  external: true
                },
                { 
                  label: "SHIEZO AI Facebook", 
                  href: "https://www.facebook.com/share/1A4ZzqzBQS/", 
                  icon: <Facebook className="w-4 h-4 text-accent" />,
                  external: true
                },
                { 
                  label: "Shivam LinkedIn", 
                  href: "https://www.linkedin.com/in/shivam-1ab814403?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
                  icon: <Linkedin className="w-4 h-4 text-accent" />,
                  external: true
                }
              ].map((link, idx) => (
                <motion.a 
                  key={idx}
                  href={link.href} 
                  target={link.external ? "_blank" : undefined} 
                  rel={link.external ? "noopener noreferrer" : undefined} 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="relative z-10"
                  >
                    {link.icon}
                  </motion.div>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors relative z-10 tracking-tight">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Final Note */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-10 border-t border-white/10"
          >
            <p className="text-white/60 text-sm mb-6 leading-relaxed italic">
              "SHIEZO AI is currently in its early stage, but the foundation is strong. The mission is clear. The vision is big. And this is just the beginning."
            </p>
            <div className="space-y-3 mb-4">
              <motion.div
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1],
                  textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-white font-black text-lg tracking-[0.2em] uppercase">~ SHIVAM</p>
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                {["AI Expert", "Developer", "Founder", "Entrepreneur"].map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.2), duration: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-accent text-[8px] font-bold uppercase tracking-[0.3em]">{role}</span>
                    {i < 3 && <span className="text-white/10 text-[8px]">|</span>}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full mt-4 pt-6 pb-2 border-t border-white/5 flex flex-col items-center gap-4 relative overflow-hidden"
        >
          {/* Decorative Footer Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-display font-medium uppercase tracking-[0.4em] text-white/20">
              SHIEZO AI © 2026
            </span>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/10" />
              <div className="w-1 h-1 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#FF2D2D]" />
              <div className="h-[1px] w-8 bg-white/10" />
            </div>
          </div>
          <p className="text-[8px] text-white/10 font-bold uppercase tracking-widest">Empowering Next-Gen Resellers</p>
        </motion.footer>
      </div>
    </motion.div>
  );
};

// Internal missing Icon for consistency
const TargetIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default AboutPage;
