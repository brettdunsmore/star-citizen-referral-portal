import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
const REFERRAL_CODE = 'STAR-XCTW-2GM7';
const ENLIST_URL = 'https://www.robertsspaceindustries.com/enlist?referral=STAR-XCTW-2GM7';
export const ReferralInterface: React.FC = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(REFERRAL_CODE);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = REFERRAL_CODE;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        try {
          textArea.select();
          const successful = document.execCommand('copy');
          if (!successful) throw new Error('Fallback copy command failed');
        } finally {
          document.body.removeChild(textArea);
        }
      }
      setCopied(true);
      toast.success('Access Key Copied', {
        description: 'Code stored for enlistment.',
      });
    } catch (err) {
      console.error('Copy Error:', err);
      toast.error('Copy Failed', {
        description: `Manual copy required: ${REFERRAL_CODE}`,
      });
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px -15px rgba(251, 191, 36, 0.15)"
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="w-full max-w-2xl px-4"
    >
      <Card className="relative overflow-hidden border-white/5 bg-white/[0.03] backdrop-blur-3xl p-6 sm:p-8 md:p-12 shadow-glass group/card">
        {/* Subtle radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.05),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <motion.div
              className="flex items-center justify-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black whitespace-nowrap">
                Identity Verified
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white whitespace-nowrap">
              Access Granted
            </h2>
          </div>
          <motion.div
            role="button"
            aria-label={`Copy referral code ${REFERRAL_CODE}`}
            tabIndex={0}
            whileHover={{
              scale: 1.005,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderColor: "rgba(255,255,255,0.12)"
            }}
            whileTap={{ scale: 0.995 }}
            onClick={handleCopy}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopy();
              }
            }}
            className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 select-none transform-gpu transition-all duration-500 shadow-inner"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] uppercase font-bold whitespace-nowrap">
                Signature Key
              </span>
              <div className="flex flex-row items-center justify-center gap-6 md:gap-8 w-full">
                <span className="text-xl sm:text-3xl md:text-4xl font-mono font-bold tracking-tighter text-white tabular-nums drop-shadow-sm whitespace-nowrap">
                  {REFERRAL_CODE}
                </span>
                <div aria-live="polite" className="shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={copied ? 'checked' : 'copy'}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                    >
                      {copied ? (
                        <Check className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                      ) : (
                        <Copy className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="w-full space-y-4">
            <Button
              asChild
              className={cn(
                "h-12 w-full bg-amber-500 text-black hover:bg-amber-400 font-black text-sm transition-all rounded-lg shadow-glow border-none transform-gpu group/btn",
                "relative overflow-hidden"
              )}
            >
              <a href={ENLIST_URL} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase whitespace-nowrap">
                  Enlist for Duty
                  <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
              </a>
            </Button>
            <p className="text-[10px] text-zinc-500 max-w-[280px] mx-auto leading-relaxed font-medium">
              Using this referral and obtaining a Game Package with a minimum value of $40 USD on the Pledge Store, you will receive <span className="text-amber-500/90 font-bold">50,000 UEC</span> starting credits.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
