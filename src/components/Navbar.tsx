'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, HelpCircle, LogOut } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { HowToPlayModal } from './HowToPlayModal';
import { ExitDialog } from './ExitDialog';

export const Navbar: React.FC = () => {
  const { state, soundEnabled, setSoundEnabled, exitToHome } = useGame();
  const [showRules, setShowRules] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const isMidGame = !['home', 'setup-players', 'setup-imposters', 'setup-topic', 'scoreboard'].includes(state.phase);

  const handleExitClick = () => {
    if (isMidGame) {
      setShowExitConfirm(true);
    } else {
      exitToHome();
    }
  };

  return (
    <>
      <header className="w-full px-4 py-3 sm:px-6 flex items-center justify-between z-30 select-none">
        {/* Left: Brand / Title */}
        <div
          onClick={() => state.phase === 'home' ? null : handleExitClick()}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-rose-500 p-[1.5px] shadow-lg shadow-violet-600/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0f18] rounded-[14px] flex items-center justify-center font-black text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400">
              IMP
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-widest text-white uppercase font-mono">
                IMPOSTER
              </span>
              {state.gameHistory.length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-950/80 text-violet-300 border border-violet-800/40">
                  R{state.gameHistory.length + 1}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Rules Button */}
          <button
            onClick={() => setShowRules(true)}
            className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
            title="How to play"
            aria-label="How to play"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
            title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
            aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-violet-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Exit Game Button (Mid-game or in setup) */}
          {state.phase !== 'home' && (
            <button
              onClick={handleExitClick}
              className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-rose-400/80 hover:text-rose-400 transition-colors"
              title="Exit Game"
              aria-label="Exit Game"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Modals */}
      <HowToPlayModal isOpen={showRules} onClose={() => setShowRules(false)} />
      <ExitDialog
        isOpen={showExitConfirm}
        onConfirm={() => {
          setShowExitConfirm(false);
          exitToHome();
        }}
        onCancel={() => setShowExitConfirm(false)}
      />
    </>
  );
};
