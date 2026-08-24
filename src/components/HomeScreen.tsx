'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, HelpCircle, Users, Film, Flame, Sparkles } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';
import { HowToPlayModal } from './HowToPlayModal';

export const HomeScreen: React.FC = () => {
  const { setPhase, state, startRoundSetup } = useGame();
  const [showRules, setShowRules] = useState(false);

  const hasActiveSession = state.settings.players.length >= 3 && state.gameHistory.length > 0;

  return (
    <div className="flex-1 flex flex-col items-center justify-between px-4 py-6 max-w-md mx-auto w-full text-center">
      {/* Top Ambient Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
        <span>Pass-the-Phone Party Game</span>
      </motion.div>

      {/* Hero Section */}
      <div className="my-auto py-6 flex flex-col items-center">
        {/* Animated Glowing Logo Graphic */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 260 }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 via-indigo-500 to-rose-500 rounded-3xl blur-2xl opacity-40 animate-pulse" />
          
          <div className="relative w-full h-full rounded-3xl glass-card p-1 border border-white/20 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-slate-900/60 to-rose-950/40" />
            <span className="relative text-5xl sm:text-6xl select-none">🎭</span>
            <div className="relative mt-1 text-[10px] font-black uppercase tracking-widest text-violet-300/80 font-mono">
              3–15 PLAYERS
            </div>
          </div>
        </motion.div>

        {/* Title and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 font-mono">
            IMPOSTER
          </h1>
          <p className="text-base sm:text-lg font-medium text-slate-300 tracking-wide max-w-xs mx-auto">
            One word. One liar. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-rose-400 font-bold">
              Find them.
            </span>
          </p>
        </motion.div>

        {/* Feature badges list */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-2 w-full mt-8 max-w-xs"
        >
          <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center">
            <Users className="w-4 h-4 text-indigo-400 mb-1" />
            <span className="text-[11px] font-semibold text-slate-200">1 Phone</span>
            <span className="text-[9px] text-slate-400">Pass around</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center">
            <Film className="w-4 h-4 text-violet-400 mb-1" />
            <span className="text-[11px] font-semibold text-slate-200">Tamil Hits</span>
            <span className="text-[9px] text-slate-400">2000–Present</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center">
            <Flame className="w-4 h-4 text-rose-400 mb-1" />
            <span className="text-[11px] font-semibold text-slate-200">Zero Lag</span>
            <span className="text-[9px] text-slate-400">1 min rounds</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Action Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full space-y-3 pt-4"
      >
        {/* Quick Resume Button if player scores exist */}
        {hasActiveSession && (
          <Button
            variant="gold"
            size="lg"
            fullWidth
            onClick={() => startRoundSetup()}
            icon={<Play className="w-5 h-5 fill-current" />}
          >
            Quick Next Round
          </Button>
        )}

        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => setPhase('setup-players')}
          icon={<Play className="w-5 h-5 fill-current" />}
        >
          {hasActiveSession ? 'New Game Setup' : 'Start Game'}
        </Button>

        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={() => setShowRules(true)}
          icon={<HelpCircle className="w-4 h-4 text-slate-400" />}
        >
          How to Play
        </Button>
      </motion.div>

      <HowToPlayModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
};
