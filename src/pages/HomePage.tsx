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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      },
    },
  };
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-hidden flex items-center justify-center font-sans selection:bg-amber-500/30">
      <AmbientBackground />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-10 lg:py-12 flex flex-col items-center">
            <motion.header variants={itemVariants} className="mb-12 space-y-4">
              <h1 className="text-display tracking-[-0.04em] text-white">
                Citizenship <span className="text-zinc-500">Awaits</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed">
                Join the universe of Star Citizen with a premium starting bonus.
                Your journey to the stars begins here.
              </p>
            </motion.header>
            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <ReferralInterface />
            </motion.div>
            <motion.footer
              variants={itemVariants}
              className="mt-24 text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-medium"
            >
              Star Citizen & RSI are trademarks of Cloud Imperium Rights LLC.
            </motion.footer>
          </div>
        </div>
      </motion.main>
      {/* Decorative grain/overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <Toaster position="bottom-center" />
    </div>
  );
}