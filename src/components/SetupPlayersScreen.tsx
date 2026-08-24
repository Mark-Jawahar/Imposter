'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, X, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

const QUICK_NAMES = [
  'Arun', 'Priya', 'Karthik', 'Sanjay', 'Ananya', 'Rahul', 'Divya', 'Vikram', 
  'Sneha', 'Manoj', 'Pooja', 'Deepak', 'Aishwarya', 'Vijay', 'Naveen'
];

export const SetupPlayersScreen: React.FC = () => {
  const { state, addPlayer, removePlayer, setPhase } = useGame();
  const [nameInput, setNameInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const players = state.settings.players;
  const canProceed = players.length >= 3 && players.length <= 15;

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = nameInput.trim();
    if (!trimmed) return;

    if (players.some((p) => p.name.toLowerCase() === trimmed.toLowerCase())) {
      setErrorMsg('Player with this name already added');
      return;
    }

    if (players.length >= 15) {
      setErrorMsg('Maximum 15 players allowed');
      return;
    }

    const success = addPlayer(trimmed);
    if (success) {
      setNameInput('');
      setErrorMsg('');
    }
  };

  const handleQuickAdd = (name: string) => {
    if (players.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
      return;
    }
    if (players.length >= 15) {
      setErrorMsg('Maximum 15 players allowed');
      return;
    }
    addPlayer(name);
  };

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setPhase('home')}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 font-mono">
            Step 1 of 3
          </span>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Users className="w-6 h-6 text-violet-400" />
            Add Players
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Enter the names of everyone playing together ({players.length}/15 players).
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleAdd} className="relative mb-3">
          <input
            type="text"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            placeholder="Enter player name..."
            maxLength={18}
            className="w-full bg-slate-900/90 text-white placeholder:text-slate-500 text-sm font-medium rounded-2xl pl-4 pr-12 py-3.5 border border-white/10 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 shadow-inner"
          />
          <button
            type="submit"
            disabled={!nameInput.trim()}
            className="absolute right-2 top-2 bottom-2 px-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors flex items-center justify-center shadow"
          >
            <UserPlus className="w-4 h-4" />
          </button>
        </form>

        {errorMsg && (
          <p className="text-xs text-rose-400 mb-3 px-1 font-medium">{errorMsg}</p>
        )}

        {/* Quick Name Suggestions */}
        <div className="mb-4">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 mb-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Quick add:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pr-1">
            {QUICK_NAMES.filter((qn) => !players.some((p) => p.name.toLowerCase() === qn.toLowerCase())).map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => handleQuickAdd(name)}
                className="px-2.5 py-1 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 hover:border-violet-500/40 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                + {name}
              </button>
            ))}
          </div>
        </div>

        {/* Player List */}
        <div className="space-y-2 max-h-[36vh] overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {players.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, height: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl glass-card border border-white/10 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-xs font-bold text-violet-300 font-mono">
                    {index + 1}
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">
                    {player.name}
                  </span>
                </div>

                <button
                  onClick={() => removePlayer(player.id)}
                  disabled={players.length <= 3}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 disabled:opacity-20 disabled:hover:text-slate-400 disabled:hover:bg-transparent transition-colors"
                  aria-label={`Remove ${player.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="pt-4 mt-auto">
        {!canProceed && (
          <p className="text-center text-xs text-amber-400/90 mb-3 font-medium">
            ⚠️ Minimum 3 players required to start the game
          </p>
        )}
        <Button
          variant="primary"
          size="xl"
          fullWidth
          disabled={!canProceed}
          onClick={() => setPhase('setup-imposters')}
          icon={<ArrowRight className="w-5 h-5" />}
        >
          Next: Imposter Count
        </Button>
      </div>
    </div>
  );
};
