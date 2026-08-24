'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skull, ArrowRight, ArrowLeft, ShieldAlert, Check } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const SetupImpostersScreen: React.FC = () => {
  const { state, setImposterCount, setPhase, getMaxAllowedImposters } = useGame();
  const playerCount = state.settings.players.length;
  const maxAllowed = getMaxAllowedImposters(playerCount);
  const currentCount = state.settings.imposterCount;

  const imposterOptions = [1, 2, 3, 4];

  const getRecommendedCount = () => {
    if (playerCount <= 6) return 1;
    if (playerCount <= 10) return 1;
    return 2;
  };

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full safe-bottom">
      {/* Top Navigation */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setPhase('setup-players')}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors btn-press"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 font-mono">
            Step 2 of 3
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
            <Skull className="w-6 h-6 text-rose-500" />
            Number of Imposters
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Choose how many liars hide among your {playerCount} players.
          </p>
        </div>

        {/* Imposter count options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {imposterOptions.map((count) => {
            const isAllowed = count <= maxAllowed;
            const isSelected = currentCount === count;
            const isRecommended = count === getRecommendedCount();

            return (
              <motion.button
                key={count}
                whileTap={isAllowed ? { scale: 0.97 } : undefined}
                onClick={() => isAllowed && setImposterCount(count)}
                disabled={!isAllowed}
                className={`relative p-4 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-rose-950/30 border-rose-500/60 shadow-lg shadow-rose-900/20'
                    : isAllowed
                    ? 'glass-card border-white/8 hover:border-white/15 hover:bg-white/[0.03]'
                    : 'bg-white/[0.01] border-white/4 opacity-30 cursor-not-allowed'
                }`}
              >
                {/* Recommended Badge */}
                {isRecommended && isAllowed && (
                  <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full text-[8px] font-extrabold uppercase bg-amber-500 text-slate-950 shadow">
                    Best Match
                  </span>
                )}

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: count }).map((_, i) => (
                      <span key={i} className="text-lg">🕵️</span>
                    ))}
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>

                <div className="text-lg font-bold text-white font-mono">
                  {count} {count === 1 ? 'Imposter' : 'Imposters'}
                </div>

                <p className="text-[10px] text-slate-400 mt-1 font-ui">
                  {count === 1 && 'Classic high tension'}
                  {count === 2 && 'Deceptive teamwork'}
                  {count === 3 && 'High difficulty'}
                  {count === 4 && 'Maximum chaos'}
                </p>

                {!isAllowed && (
                  <p className="text-[9px] text-rose-400/70 mt-2 font-medium font-ui">
                    Requires {count * 3 + 1}+ players
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Ratio Balance Helper Card */}
        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-400 font-ui">
            <span className="font-semibold text-slate-200">Balance: </span>
            {currentCount} Imposter{currentCount > 1 ? 's' : ''} vs {playerCount - currentCount} Innocents.
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 mt-auto">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => setPhase('setup-topic')}
          icon={<ArrowRight className="w-5 h-5" />}
          iconPosition="right"
        >
          Next: Choose Topic
        </Button>
      </div>
    </div>
  );
};