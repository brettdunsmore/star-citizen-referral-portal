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
        staggerChildren: 0.3,
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
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-x-hidden font-sans selection:bg-amber-500/30 selection:text-white flex flex-col">
      <AmbientBackground />
      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[40] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black opacity-60" aria-hidden="true" />
      <div className="flex-1 flex flex-col w-full relative z-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center justify-center py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center w-full max-w-4xl"
          >
            <motion.header variants={itemVariants} className="mb-12 md:mb-16 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Welcome <span className="text-zinc-500 transition-colors duration-1000">to the Verse!</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
                Become a Star Citizen and get <span className="text-white font-medium">5,000 free Credits</span>
              </p>
            </motion.header>
            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <ReferralInterface />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-20 md:mt-28"
            >
              <div className="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto flex items-center justify-center">
                <img
                  src="https://support.robertsspaceindustries.com/hc/article_attachments/360021770294"
                  alt="Star Citizen"
                  width={128}
                  height={128}
                  className="w-full h-auto opacity-30 hover:opacity-100 transition-opacity duration-1000 ease-in-out cursor-default grayscale hover:grayscale-0"
                  loading="eager"
                />
              </div>
            </motion.div>
            <motion.footer
              variants={itemVariants}
              className="mt-12 md:mt-16 text-[9px] uppercase tracking-[0.6em] text-zinc-600 font-bold px-4"
            >
              Star Citizen is a registered trademark of Cloud Imperium Games.
            </motion.footer>
          </motion.div>
        </main>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-zinc-950/90 backdrop-blur-xl text-white border-zinc-800 shadow-2xl font-sans rounded-xl p-4',
          duration: 4000,
        }}
      />
    </div>
  );
}