import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
export const ReferralInterface: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const REFERRAL_CODE = 'STAR-XCTW-2GM7';
  const ENLIST_URL = 'https://www.robertsspaceindustries.com/enlist?referral=STAR-XCTW-2GM7';
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(REFERRAL_CODE);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = REFERRAL_CODE;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      toast.success('Code copied to clipboard', {
        description: 'Prepare for liftoff, Citizen.',
        duration: 3000,
        className: 'bg-zinc-950 text-white border-zinc-800 shadow-2xl',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy', {
        description: 'Please copy manually: ' + REFERRAL_CODE,
        className: 'bg-zinc-950 text-white border-zinc-800',
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg px-4"
    >
      <Card className="relative overflow-hidden border-white/5 bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-glass">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">
                Access Granted
              </span>
            </motion.div>
            <h2 className="text-3xl font-display font-extrabold tracking-tight text-white">
              Enlistment Portal
            </h2>
          </div>
          <motion.div
            role="button"
            tabIndex={0}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.6)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Encryption Key</span>
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-mono font-bold tracking-tighter text-white">
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
                      <Check className="h-5 w-5 text-amber-500" />
                    ) : (
                      <Copy className="h-5 w-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          <div className="w-full space-y-4">
            <Button
              asChild
              className="h-14 w-full bg-amber-500 text-black hover:bg-amber-400 font-bold text-base transition-all rounded-xl shadow-glow border-none"
            >
              <a href={ENLIST_URL} target="_blank" rel="noopener noreferrer">
                Enlist Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-[11px] text-zinc-500 max-w-[280px] mx-auto leading-relaxed">
              New citizens receive <span className="text-amber-500 font-bold">5,000 UEC</span> starting credits when using this code.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};