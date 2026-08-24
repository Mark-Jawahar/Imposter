'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Vote, Smartphone, Check, ArrowRight } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const VotingScreen: React.FC = () => {
  const { state, recordVote, advanceVotePlayer, calculateVoteResults } = useGame();
  const players = state.settings.players;
  const currentIndex = state.currentPlayerIndex;
  const voter = players[currentIndex];

  const [selectedSuspectId, setSelectedSuspectId] = useState<string | null>(null);

  const suspectOptions = players.filter((p) => p.id !== voter?.id);

  const handleConfirmVote = () => {
    if (!selectedSuspectId) return;
    recordVote(voter.id, selectedSuspectId);
    setSelectedSuspectId(null);

    if (currentIndex + 1 >= players.length) {
      calculateVoteResults();
    }
    advanceVotePlayer();
  };

  if (!voter) return null;

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center select-none safe-bottom">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-800/30">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Pass the Phone</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
            Voter {currentIndex + 1} of {players.length}
          </span>
        </div>

        <div className="mb-4">
          <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1 font-ui">
            Hand phone to
          </div>
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">
            {voter.name}
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-ui">
            Who do you suspect is the Imposter? Make your private vote.
          </p>
        </div>
      </div>

      {/* Suspects Selection Grid */}
      <div className="my-auto py-2 space-y-2 max-h-[44vh] overflow-y-auto pr-1">
        {suspectOptions.map((suspect) => {
          const isSelected = selectedSuspectId === suspect.id;

          return (
            <motion.button
              key={suspect.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSuspectId(suspect.id)}
              className={`w-full p-3.5 rounded-2xl flex items-center justify-between transition-all border ${
                isSelected
                  ? 'bg-rose-950/40 border-rose-500/50 shadow-md shadow-rose-950/30'
                  : 'glass-card border-white/8 hover:border-white/15 hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono ${
                  isSelected ? 'bg-rose-500 text-white' : 'bg-white/8 text-slate-300'
                }`}>
                  🕵️
                </div>
                <span className="font-semibold text-sm text-white tracking-wide font-ui">
                  {suspect.name}
                </span>
              </div>

              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                isSelected ? 'bg-rose-500 border-rose-400 text-white' : 'border-white/15 bg-transparent'
              }`}>
                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="pt-4">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          disabled={!selectedSuspectId}
          onClick={handleConfirmVote}
          icon={<ArrowRight className="w-5 h-5" />}
          iconPosition="right"
        >
          Confirm Vote
        </Button>
      </div>
    </div>
  );
};