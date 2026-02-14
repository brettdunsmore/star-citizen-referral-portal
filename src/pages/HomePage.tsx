import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import { AmbientBackground } from '@/components/AmbientBackground';
import { ReferralInterface } from '@/components/ReferralInterface';
export function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 0.4,
      scale: 1,
      transition: {
        duration: 2,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-x-hidden font-sans selection:bg-amber-500/30 selection:text-white flex flex-col">
      <AmbientBackground />
      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[40] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black opacity-60" aria-hidden="true" />
      <div className="flex-1 flex flex-col w-full relative z-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center justify-center py-12 md:py-20 lg:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center w-full max-w-4xl"
          >
            <motion.header variants={itemVariants} className="mb-12 md:mb-16 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Welcome <span className="text-zinc-500 transition-colors duration-1000 hover:text-amber-500/50 cursor-default">to the Verse!</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
                Become a Star Citizen and get <span className="text-white font-medium border-b border-amber-500/30">5,000 free Credits</span>
              </p>
            </motion.header>
            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <ReferralInterface />
            </motion.div>
            <motion.div
              variants={logoVariants}
              className="mt-20 md:mt-28"
            >
              <div className="relative w-20 sm:w-24 h-20 sm:h-24 mx-auto flex items-center justify-center">
                <img
                  src="https://support.robertsspaceindustries.com/hc/article_attachments/360021770294"
                  alt="Star Citizen Gold Orb"
                  width={96}
                  height={96}
                  className="w-full h-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out cursor-default filter drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  loading="eager"
                />
              </div>
            </motion.div>
            <motion.footer
              variants={itemVariants}
              className="mt-12 md:mt-16 text-[9px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-zinc-600 font-bold px-4 max-w-[90vw] mx-auto select-none"
            >
              Star Citizen is a registered trademark of Cloud Imperium Games.
            </motion.footer>
          </motion.div>
        </main>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-zinc-950/95 backdrop-blur-2xl text-white border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-sans rounded-2xl p-5 border border-zinc-800/50',
          duration: 4000,
        }}
      />
    </div>
  );
}