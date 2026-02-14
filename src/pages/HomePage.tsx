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
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-x-hidden flex flex-col items-center justify-center font-sans selection:bg-amber-500/30">
      <AmbientBackground />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full py-20"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center">
            <motion.header variants={itemVariants} className="mb-16 space-y-6">
              <h1 className="text-display tracking-tight text-white">
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
              className="mt-32 text-[9px] uppercase tracking-[0.6em] text-zinc-600 font-bold"
            >
              Star Citizen is a registered trademark of Cloud Imperium Games.
            </motion.footer>
          </div>
        </div>
      </motion.main>
      {/* Cinematic Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black opacity-40" />
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-zinc-950 text-white border-zinc-800 shadow-2xl font-sans',
        }}
      />
    </div>
  );
}