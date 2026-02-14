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
        delayChildren: 0.5,
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
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-x-hidden font-sans selection:bg-amber-500/30 selection:text-white">
      <AmbientBackground />
      {/* Root Wrapper with Non-Negotiable Gutters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12 min-h-[100dvh] flex items-center justify-center">
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 flex flex-col items-center text-center w-full"
          >
            <div className="flex flex-col items-center w-full">
              <motion.header variants={itemVariants} className="mb-12 md:mb-16 space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Citizenship <span className="text-zinc-600">Awaits</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
                  Embark on an odyssey across the stars. Claim your starting bonus
                  and join the persistent universe of Star Citizen.
                </p>
              </motion.header>
              <motion.div variants={itemVariants} className="w-full flex justify-center">
                <ReferralInterface />
              </motion.div>
              <motion.footer
                variants={itemVariants}
                className="mt-24 md:mt-32 text-[9px] uppercase tracking-[0.6em] text-zinc-600 font-bold"
              >
                Star Citizen is a registered trademark of Cloud Imperium Games.
              </motion.footer>
            </div>
          </motion.main>
        </div>
      </div>
      {/* Cinematic Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-zinc-950 text-white border-zinc-800 shadow-2xl font-sans z-[100]',
        }}
      />
    </div>
  );
}