'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Check, Smartphone, Sparkles } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const RevealScreen: React.FC = () => {
  const { state, advanceRevealPlayer, selectedTopic } = useGame();
  const [isRevealed, setIsRevealed] = useState(false);

  const players = state.settings.players;
  const currentIndex = state.currentPlayerIndex;
  const currentPlayer = players[currentIndex];

  const imposterIndices = state.currentRound?.imposterIndices || [];
  const isImposter = imposterIndices.includes(currentIndex);

  const secretWord = state.currentRound?.secretWord || '';
  const imposterClue = state.currentRound?.imposterClue || '';

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleGotIt = () => {
    setIsRevealed(false);
    // Delay advancing slightly to prevent any flash of secret word
    setTimeout(() => {
      advanceRevealPlayer();
    }, 150);
  };

  if (!currentPlayer) return null;

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center select-none">
      {/* Top Header / Progress */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-300 bg-violet-950/60 px-3 py-1 rounded-full border border-violet-800/40">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Pass the Phone</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
            Player {currentIndex + 1} of {players.length}
          </span>
        </div>

        {/* Player Name Banner */}
        <div className="mb-2">
          <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">
            Hand phone to
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight flex items-center justify-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-200 to-white">
              {currentPlayer.name}
            </span>
          </h2>
        </div>
      </div>

      {/* Main Interactive Card */}
      <div className="my-auto py-4">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            /* PRE-REVEAL STATE (SAFE COVER) */
            <motion.div
              key="covered"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              <div
                onClick={handleReveal}
                className="cursor-pointer group relative rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 shadow-2xl hover:border-violet-500/50 transition-all flex flex-col items-center justify-center min-h-[280px]"
              >
                <div className="w-20 h-20 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 group-hover:bg-violet-600/20 transition-all shadow-inner">
                  <EyeOff className="w-9 h-9" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  Private Information
                </h3>
                <p className="text-xs text-slate-400 max-w-[220px] mb-4">
                  Make sure no one else is looking at your screen.
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-violet-600/30 group-hover:from-violet-500 group-hover:to-indigo-500">
                  <Eye className="w-4 h-4" />
                  <span>Tap to Reveal</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* REVEALED SECRET STATE */
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.95, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 280 }}
              className="w-full"
            >
              <div
                className={`relative rounded-3xl p-7 sm:p-9 shadow-2xl min-h-[280px] flex flex-col items-center justify-center border transition-all ${
                  isImposter
                    ? 'bg-gradient-to-b from-[#1c121d] via-[#15111b] to-[#0c0d14] border-rose-500/30 glow-crimson'
                    : 'bg-gradient-to-b from-[#12182b] via-[#101322] to-[#0c0d14] border-violet-500/30 glow-purple'
                }`}
              >
                {/* Topic Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-semibold mb-3">
                  <span>{selectedTopic?.icon}</span>
                  <span>{selectedTopic?.name}</span>
                </div>

                {/* Subtitle / Header */}
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-400">
                  {isImposter ? 'YOUR CLUE' : 'YOUR WORD'}
                </div>

                {/* Secret Word or Imposter Clue */}
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-wider break-words my-3 text-white">
                  {isImposter ? imposterClue : secretWord}
                </div>

                {/* Subtle description & Role hint */}
                <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed">
                  {isImposter
                    ? 'You do not have the exact word. Give a subtle clue that matches this theme and blend in.'
                    : 'Everyone else has this exact word. Give a smart clue so others know you know it.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-2">
        {isRevealed ? (
          <Button
            variant="primary"
            size="xl"
            fullWidth
            onClick={handleGotIt}
            icon={<Check className="w-5 h-5" />}
          >
            I&apos;ve Got It
          </Button>
        ) : (
          <Button
            variant="glass"
            size="lg"
            fullWidth
            onClick={handleReveal}
            icon={<Eye className="w-4 h-4" />}
          >
            Reveal Secret
          </Button>
        )}
      </div>
    </div>
  );
};
