'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skull, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const ResultsScreen: React.FC = () => {
  const { state, calculateVoteResults } = useGame();
  const players = state.settings.players;
  const voteResults = state.voteResults;
  const caughtImposters = state.caughtImposters;
  const imposterIndices = state.currentRound?.imposterIndices || [];
  const imposterNames = imposterIndices.map((idx) => players[idx]?.name);

  const isAnyImposterCaught = caughtImposters.length > 0;

  // Calculate scores immediately on mounting results if not already calculated
  React.useEffect(() => {
    if (state.roundWinner === null) {
      calculateVoteResults();
    }
  }, [state.roundWinner, calculateVoteResults]);

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-3">
          <Skull className="w-3.5 h-3.5" />
          <span>Vote Results & Reveal</span>
        </div>

        <h2 className="text-3xl font-black text-white tracking-tight">
          Who Was The Liar?
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Secret Word: <strong className="text-white font-mono">{state.currentRound?.secretWord}</strong>
        </p>
      </div>

      {/* Main Results Body */}
      <div className="my-auto py-3 space-y-4">
        {/* Imposter Reveal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-3xl p-5 border text-center shadow-xl ${
            isAnyImposterCaught
              ? 'bg-emerald-950/30 border-emerald-500/40 glow-purple'
              : 'bg-rose-950/30 border-rose-500/40 glow-crimson'
          }`}
        >
          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
            {imposterNames.length > 1 ? 'The Imposters Were' : 'The Imposter Was'}
          </div>
          <div className="text-2xl font-black text-white font-mono tracking-wide mb-2">
            🕵️ {imposterNames.join(', ')}
          </div>

          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
            isAnyImposterCaught ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
          }`}>
            {isAnyImposterCaught ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Imposter Caught by Players! (+2 pts)</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Imposter Survived the Vote! (+2 pts)</span>
              </>
            )}
          </div>
        </motion.div>

        {/* Vote Breakdown List */}
        <div className="rounded-3xl glass-panel p-4 border border-white/10 text-left space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
            Ballot Tally
          </div>

          <div className="space-y-2 max-h-[32vh] overflow-y-auto pr-1">
            {voteResults.map((res) => {
              const player = players.find((p) => p.id === res.playerId);
              const isImp = imposterIndices.includes(players.findIndex((p) => p.id === res.playerId));

              return (
                <div
                  key={res.playerId}
                  className="flex items-center justify-between px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{player?.name}</span>
                    {isImp && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        Imposter
                      </span>
                    )}
                  </div>

                  <span className="font-mono font-bold text-violet-300">
                    {res.votes} {res.votes === 1 ? 'vote' : 'votes'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => {
            // Transition directly to scoreboard
            const { setPhase } = useGame();
            setPhase('scoreboard');
          }}
          icon={<ArrowRight className="w-5 h-5" />}
        >
          View Scoreboard
        </Button>
      </div>
    </div>
  );
};
