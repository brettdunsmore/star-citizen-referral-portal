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
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};
export function HomePage() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050505] overflow-x-hidden font-sans flex flex-col">
      <AmbientBackground />
      {/* Cinematic Overlays */}
      <div
        className="fixed inset-0 pointer-events-none z-[40] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-b from-black via-transparent to-black opacity-70"
        aria-hidden="true"
      />
      <div className="flex-1 flex flex-col w-full relative z-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center justify-center py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center w-full max-w-5xl"
          >
            <motion.header variants={itemVariants} className="mb-8 md:mb-12">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium mb-4 md:mb-6">
                Star Citizen Referral
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_0_50px_rgba(255,255,255,0.12)]">
                Join me <span className="text-zinc-500 transition-colors duration-1000 hover:text-amber-500/70 cursor-default">in the Verse</span>
              </h1>
            </motion.header>
            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <ReferralInterface />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-16 md:mt-24 mb-12"
            >
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <img
                  src="https://support.robertsspaceindustries.com/hc/article_attachments/360021770294"
                  alt="Star Citizen Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out cursor-default filter drop-shadow-[0_0_15px_rgba(245,158,11,0.2)] object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>
            <motion.footer
              variants={itemVariants}
              className="mt-auto flex flex-col items-center space-y-6 px-4 max-w-lg mx-auto select-none"
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-medium">
                  Referred by{" "}
                  <a
                    href="https://robertsspaceindustries.com/en/citizens/Quantum_Reaction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500/80 hover:text-amber-400 underline decoration-amber-500/20 underline-offset-4 transition-all duration-300"
                  >
                    Quantum_Reaction
                  </a>
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-medium">
                  Follow on X:{" "}
                  <a
                    href="https://x.com/brett_dunsmore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 underline transition-colors duration-300"
                  >
                    @brett_dunsmore
                  </a>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-medium text-center leading-relaxed opacity-80">
                This is an unofficial Star Citizen fan site, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners.
              </p>
            </motion.footer>
          </motion.div>
        </main>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-zinc-950/95 backdrop-blur-2xl text-white border-white/5 shadow-2xl font-sans rounded-xl p-4',
          duration: 3500,
        }}
      />
    </div>
  );
}
