'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Play, User } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const WhoStartsScreen: React.FC = () => {
  const { state, advanceWhoStarts, startWhoStarts } = useGame();
  const [isRandomized, setIsRandomized] = useState(false);
  const [starterName, setStarterName] = useState('');

  const starter = state.settings.players.find(p => p.id === state.whoStartsPlayerId);

  useEffect(() => {
    // Auto-randomize when entering the screen
    startWhoStarts();
    setTimeout(() => {
      setIsRandomized(true);
      if (starter) {
        setStarterName(starter.name);
      }
    }, 100);
  }, [startWhoStarts, starter]);

  if (!starter) return null;

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center safe-bottom">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-3">
          <Shuffle className="w-3.5 h-3.5" />
          <span>Who Starts?</span>
        </div>

        <h2 className="text-2xl font-display font-bold text-white tracking-tight">
          Who Gives the First Clue?
        </h2>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="my-auto py-8 flex flex-col items-center justify-center"
      >
        {!isRandomized ? (
          /* Randomizing State */
          <motion.div
            key="randomizing"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 rounded-full border-4 border-violet-500/30 border-t-violet-400 flex items-center justify-center mx-auto mb-6"
          >
            <Shuffle className="w-8 h-8 text-violet-400" />
          </motion.div>
        ) : (
          /* Result State */
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="w-full"
          >
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 via-indigo-500 to-rose-500 rounded-full blur-2xl opacity-30 animate-pulse-subtle" />
              <div className="relative w-full h-full rounded-full glass-card p-1.5 border border-white/15 flex items-center justify-center shadow-xl">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-1">
              {starterName}
            </h3>
            <p className="text-sm text-slate-400 font-medium font-ui">
              starts the discussion!
            </p>
          </motion.div>
        )}

        <p className="text-xs text-slate-500 mt-6 max-w-xs mx-auto font-ui">
          {isRandomized
            ? 'Tap below to begin the discussion round.'
            : 'Randomizing...'}
        </p>
      </motion.div>

      {/* Bottom Action */}
      <div className="pt-2">
        {isRandomized ? (
          <Button
            variant="primary"
            size="xl"
            fullWidth
            onClick={advanceWhoStarts}
            icon={<Play className="w-5 h-5 fill-current" />}
            iconPosition="left"
          >
            Start Discussion
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="xl"
            fullWidth
            disabled
            icon={<Shuffle className="w-5 h-5 animate-spin" />}
            iconPosition="left"
          >
            Randomizing...
          </Button>
        )}
      </div>
    </div>
  );
};