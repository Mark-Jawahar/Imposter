'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Play, RotateCcw, Settings, Home, Crown, Sparkles } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const ScoreboardScreen: React.FC = () => {
  const { state, startNextRound, setPhase, resetGame, exitToHome } = useGame();
  const players = [...state.settings.players].sort((a, b) => b.score - a.score);
  const roundWinner = state.roundWinner;
  const lastHistory = state.gameHistory[0];

  const maxScore = players[0]?.score || 0;

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-2">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Round {state.gameHistory.length} Complete</span>
        </div>

        <h2 className="text-3xl font-black text-white tracking-tight">
          Scoreboard
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Winner: <strong className={roundWinner === 'imposters' ? 'text-rose-400' : 'text-emerald-400'}>
            {roundWinner === 'imposters' ? '🕵️ Imposters Won' : '🛡️ Normal Players Won'}
          </strong> {lastHistory?.secretWord ? `(${lastHistory.secretWord})` : ''}
        </p>
      </div>

      {/* Scoreboard List */}
      <div className="my-auto py-3 space-y-2.5">
        <div className="rounded-3xl glass-panel p-4 border border-white/10 text-left space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-1">
            <span>Player</span>
            <span>Total Points</span>
          </div>

          <div className="space-y-2 max-h-[38vh] overflow-y-auto pr-1">
            {players.map((player, index) => {
              const isLeader = player.score === maxScore && maxScore > 0;

              return (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-2xl border transition-all ${
                    isLeader
                      ? 'bg-gradient-to-r from-amber-950/40 via-violet-950/40 to-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'bg-white/[0.03] border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                      index === 0 ? 'bg-amber-500 text-slate-950 font-black' : 'bg-white/10 text-slate-300'
                    }`}>
                      {index === 0 ? <Crown className="w-4 h-4 fill-current" /> : index + 1}
                    </div>

                    <span className="font-extrabold text-sm text-white tracking-wide">
                      {player.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono font-black text-amber-400 text-base">
                    <span>{player.score}</span>
                    <span className="text-[10px] text-slate-500 font-normal">pts</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="space-y-2.5 pt-2">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => startNextRound(true)}
          icon={<Play className="w-5 h-5 fill-current" />}
        >
          Next Round (Instant)
        </Button>

        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setPhase('setup-topic')}
          >
            Topic
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setPhase('setup-imposters')}
          >
            Imposters
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={exitToHome}
          >
            Menu
          </Button>
        </div>
      </div>
    </div>
  );
};
