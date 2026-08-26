'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Check, Smartphone, RotateCw, AlertTriangle } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const RevealScreen: React.FC = () => {
  const { state, advanceRevealPlayer, selectedTopic, skipCurrentWord } = useGame();
  const [isRevealed, setIsRevealed] = useState(false);

  const players = state.settings.players;
  const revealOrder = state.revealOrder.length > 0 ? state.revealOrder : players.map((_, i) => i);
  const currentRevealIndex = state.currentPlayerIndex;
  const actualPlayerIndex = revealOrder[currentRevealIndex];
  const currentPlayer = players[actualPlayerIndex];

  const imposterIndices = state.currentRound?.imposterIndices || [];
  const isImposter = imposterIndices.includes(actualPlayerIndex);

  const secretWord = state.currentRound?.secretWord || '';
  const imposterClue = state.currentRound?.imposterClue || '';

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleGotIt = () => {
    setIsRevealed(false);
    setTimeout(() => {
      advanceRevealPlayer();
    }, 120);
  };

  const handleSkip = () => {
    setIsRevealed(false);
    skipCurrentWord();
  };

  if (!currentPlayer) return null;

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center select-none safe-bottom">
      {/* Top Header / Progress */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-300 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-800/30">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Pass the Phone</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
            Player {currentRevealIndex + 1} of {revealOrder.length}
          </span>
        </div>

        {/* Player Name Banner */}
        <div className="mb-2">
          <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">
            Hand phone to
          </div>
          <h2 className="text-2xl font-display font-bold text-white tracking-tight flex items-center justify-center gap-2">
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <div
                onClick={handleReveal}
                className="cursor-pointer group relative rounded-3xl glass-panel p-8 sm:p-10 border border-white/8 shadow-xl hover:border-violet-500/40 transition-all flex flex-col items-center justify-center min-h-[260px]"
              >
                <div className="w-18 h-18 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-105 group-hover:bg-violet-600/15 transition-all shadow-inner">
                  <EyeOff className="w-8 h-8" />
                </div>

                <h3 className="text-base font-semibold text-white mb-1">
                  Private Information
                </h3>
                <p className="text-xs text-slate-400 max-w-[220px] mb-4">
                  Make sure no one else is looking at your screen.
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-violet-600/25 group-hover:from-violet-500 group-hover:to-indigo-500">
                  <Eye className="w-4 h-4" />
                  <span>Tap to Reveal</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* REVEALED SECRET STATE */
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.96, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              className="w-full"
            >
              <div
                className={`relative rounded-3xl p-7 sm:p-9 shadow-xl min-h-[280px] flex flex-col items-center justify-center border transition-all ${
                  isImposter
                    ? 'bg-gradient-to-b from-[#1a1018] via-[#121018] to-[#0c0d14] border-rose-500/40 glow-crimson ring-1 ring-rose-500/20'
                    : 'bg-gradient-to-b from-[#101428] via-[#0e1020] to-[#0c0d14] border-violet-500/25 glow-purple'
                }`}
              >
                {/* Topic Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/8 text-slate-300 text-xs font-semibold mb-3">
                  <span>{selectedTopic?.icon}</span>
                  <span>{selectedTopic?.name}</span>
                </div>

                {isImposter ? (
                  /* IMPOSTER STATE - Extremely Clear */
                  <>
                    {/* Imposter Alert Banner */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      className="w-full mb-4 px-4 py-3 rounded-2xl bg-rose-950/40 border border-rose-500/50 flex items-center justify-center gap-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-rose-500/20 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-rose-300 font-ui">
                          You are the Imposter
                        </div>
                        <div className="text-xs text-rose-400/80 font-ui">
                          You don&apos;t know the secret movie
                        </div>
                      </div>
                    </motion.div>

                    {/* Subtitle / Header */}
                    <div className="text-xs font-bold uppercase tracking-widest mb-2 text-rose-400 font-ui">
                      YOUR CLUE
                    </div>

                    {/* Imposter Clue */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', damping: 15, stiffness: 200 }}
                      className="text-3xl sm:text-4xl font-display font-bold font-mono tracking-wider break-words my-4 text-rose-300"
                    >
                      {imposterClue}
                    </motion.div>

                    {/* Subtle description */}
                    <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed font-ui text-center">
                      Give a subtle clue related to this word. Blend in with the others!
                    </p>
                  </>
                ) : (
                  /* NORMAL PLAYER STATE */
                  <>
                    {/* Subtitle / Header */}
                    <div className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-400 font-ui">
                      YOUR WORD
                    </div>

                    {/* Secret Word */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', damping: 15, stiffness: 200 }}
                      className="text-3xl sm:text-4xl font-display font-bold font-mono tracking-wider break-words my-4 text-white"
                    >
                      {secretWord}
                    </motion.div>

                    {/* Subtle description */}
                    <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed font-ui text-center">
                      Everyone else has this exact word. Give a smart clue so others know you know it.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-2 space-y-2">
        {isRevealed ? (
          <>
            <Button
              variant="primary"
              size="xl"
              fullWidth
              onClick={handleGotIt}
              icon={<Check className="w-5 h-5" />}
            >
              Got It
            </Button>

            <Button
              variant="tertiary"
              size="md"
              fullWidth
              onClick={handleSkip}
              icon={<RotateCw className="w-4 h-4" />}
              iconPosition="left"
            >
              Skip Word
            </Button>
          </>
        ) : (
          <Button
            variant="secondary"
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