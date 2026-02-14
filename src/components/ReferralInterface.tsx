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
  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      document.body.removeChild(textArea);
      return false;
    }
  };
  const handleCopy = async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(REFERRAL_CODE);
        success = true;
      } else {
        success = fallbackCopyTextToClipboard(REFERRAL_CODE);
      }
      if (success) {
        setCopied(true);
        toast.success('Code copied to clipboard', {
          description: 'You are ready to enlist, Citizen.',
          className: 'bg-zinc-900 text-white border-zinc-800',
        });
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error('Copy command failed');
      }
    } catch (err) {
      toast.error('Failed to copy code', {
        description: 'Please manually copy: ' + REFERRAL_CODE
      });
      console.error('Clipboard Error:', err);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCopy();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg px-4"
    >
      <Card className="relative overflow-hidden border-white/5 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-glass transition-transform duration-500 hover:scale-[1.01]">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-400 font-bold drop-shadow-sm">
              Access Granted
            </span>
            <h2 className="text-3xl font-display font-extrabold tracking-tight text-white">
              Enlistment Portal
            </h2>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={handleCopy}
            onKeyDown={handleKeyDown}
            className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 transition-all hover:border-amber-500/40 hover:bg-black/60 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            aria-label={`Referral Code: ${REFERRAL_CODE}. Click to copy.`}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Referral Code</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-mono font-bold tracking-tighter text-white">
                  {REFERRAL_CODE}
                </span>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="h-5 w-5 text-amber-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="grid w-full grid-cols-1 gap-4">
            <Button
              asChild
              className="h-14 bg-amber-500 text-black hover:bg-amber-400 font-bold text-base transition-all rounded-xl shadow-primary hover:shadow-glow border-none"
            >
              <a href={ENLIST_URL} target="_blank" rel="noopener noreferrer">
                Enlist Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs text-zinc-400 max-w-[280px] mx-auto leading-relaxed">
              Use this code to receive <span className="text-amber-400 font-bold">5,000 UEC</span> starting credits in-game.
            </p>
          </div>
        </div>
      </Card>
      <div className="mt-8 flex justify-center opacity-30">
         <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </motion.div>
  );
};