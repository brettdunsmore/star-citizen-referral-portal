import React, { useState, useCallback } from 'react';
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
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (!successful) throw new Error('Copy command failed');
      }
      setCopied(true);
      toast.success('Encryption Key Copied', {
        description: 'Code stored in your local buffer.',
        duration: 3000,
      });
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Clipboard Access Denied:', err);
      toast.error('Copy Failed', {
        description: `Please manually copy: ${REFERRAL_CODE}`,
      });
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg px-2 sm:px-4"
    >
      <Card className="relative overflow-hidden border-white/5 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 md:p-12 shadow-glass transition-all duration-500 ease-out hover:scale-[1.01] hover:border-amber-500/20 transform-gpu group/card">
        {/* Animated Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">
                Identity Verified
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
              Access Granted
            </h2>
          </div>
          <motion.div
            role="button"
            aria-label={`Copy code ${REFERRAL_CODE}`}
            tabIndex={0}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopy();
              }
            }}
            className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 select-none transform-gpu"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">Referral Signature</span>
              <div className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold tracking-tighter text-white tabular-nums">
                  {REFERRAL_CODE}
                </span>
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
                      <Copy className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          <div className="w-full space-y-4">
            <Button
              asChild
              className={cn(
                "h-14 w-full bg-amber-500 text-black hover:bg-amber-400 font-bold text-base transition-all rounded-xl shadow-glow border-none transform-gpu",
                "relative overflow-hidden group/btn"
              )}
            >
              <a href={ENLIST_URL} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enlist for Duty
                  <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
              </a>
            </Button>
            <p className="text-[11px] text-zinc-500 max-w-[280px] mx-auto leading-relaxed">
              Enlistment includes <span className="text-amber-500 font-bold">5,000 UEC</span> bonus currency for your starting journey.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};