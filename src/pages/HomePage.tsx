import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import { AmbientBackground } from '@/components/AmbientBackground';
import { ReferralInterface } from '@/components/ReferralInterface';
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
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 1.2,
      ease: "easeOut"
    }
  }
};
export function HomePage() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-x-hidden font-sans flex flex-col">
      <AmbientBackground />
      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[40] opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-b from-black via-transparent to-black opacity-60" aria-hidden="true" />
      <div className="flex-1 flex flex-col w-full relative z-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center justify-center py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center w-full max-w-5xl"
          >
            <motion.header variants={itemVariants} className="mb-8 md:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Welcome <span className="text-zinc-500 transition-colors duration-1000 hover:text-amber-500/60 cursor-default">to the Verse</span>
              </h1>
            </motion.header>
            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <ReferralInterface />
            </motion.div>
            <motion.div
              variants={logoVariants}
              className="mt-16 md:mt-20"
            >
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <img
                  src="https://support.robertsspaceindustries.com/hc/article_attachments/360021770294"
                  alt="Star Citizen Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out cursor-default filter drop-shadow-[0_0_10px_rgba(245,158,11,0.1)] object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>
            <motion.footer
              variants={itemVariants}
              className="mt-12 text-[8px] uppercase tracking-[0.5em] text-zinc-700 font-medium px-6 max-w-[90vw] mx-auto select-none"
            >
              Star Citizen is a registered trademark of Cloud Imperium Games.
            </motion.footer>
          </motion.div>
        </main>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-zinc-950/90 backdrop-blur-xl text-white border-zinc-800/50 shadow-2xl font-sans rounded-xl p-4',
          duration: 3500,
        }}
      />
    </div>
  );
}