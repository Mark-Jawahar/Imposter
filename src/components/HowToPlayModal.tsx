'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, EyeOff, MessageSquare, Vote, Trophy, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl glass-panel p-6 shadow-2xl border border-white/10 text-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">How to Play</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close rules"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Steps */}
            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-indigo-400" /> Setup & Secret Word
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Host adds 3–15 players, picks the number of Imposters, and chooses a topic. A secret word is generated.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-xl bg-violet-500/20 text-violet-400 font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
                    <EyeOff className="w-4 h-4 text-violet-400" /> Pass the Phone
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Each player secretly taps to view their card. Normal players see the exact <strong className="text-white">SECRET WORD</strong>. Imposters see only a vague <strong className="text-rose-400">SHORT CLUE</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-sky-400" /> Offline Verbal Clues
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Put the phone down! Everyone takes turns giving a 1-word or short verbal clue. Normal players prove they know the word without giving it away. Imposters bluff and blend in.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0 text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
                    <Vote className="w-4 h-4 text-rose-400" /> Private Voting
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pass the phone around one by one. Each player secretly votes for the player they believe is the Imposter.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-sm">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-400" /> Reveal & Final Guess
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    If the Imposter is caught, they get <strong className="text-amber-400">ONE FINAL CHANCE</strong> to guess the secret word!
                  </p>
                </div>
              </div>

              {/* Scoring breakdown box */}
              <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-500/20 text-xs space-y-1.5 text-slate-300">
                <div className="font-semibold text-violet-300 uppercase tracking-wider text-[11px] mb-1">
                  Scoring Rules
                </div>
                <div className="flex justify-between">
                  <span>Normal players catch the Imposter:</span>
                  <span className="font-bold text-emerald-400">+2 pts</span>
                </div>
                <div className="flex justify-between">
                  <span>Imposter survives without being caught:</span>
                  <span className="font-bold text-violet-400">+2 pts</span>
                </div>
                <div className="flex justify-between">
                  <span>Caught Imposter correctly guesses the secret word:</span>
                  <span className="font-bold text-amber-400">+3 pts</span>
                </div>
              </div>
            </div>

            {/* Bottom button */}
            <div className="mt-6">
              <Button fullWidth size="lg" onClick={onClose}>
                Got it, Let&apos;s Play
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
