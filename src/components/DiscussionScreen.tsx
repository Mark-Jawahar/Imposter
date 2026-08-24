'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Vote, Play, Pause, RotateCcw, Clock } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const DiscussionScreen: React.FC = () => {
  const { setPhase, state, selectedTopic } = useGame();
  const [timerSeconds, setTimerSeconds] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = (secs: number) => {
    setIsRunning(false);
    setTimerSeconds(secs);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center safe-bottom">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Verbal Clues Discussion</span>
        </div>

        <h2 className="text-2xl font-display font-bold text-white tracking-tight">
          Everyone Ready?
        </h2>
        <p className="text-sm text-violet-300 font-medium mt-1 font-ui">
          Put the phone down and give your clues!
        </p>
      </div>

      {/* Center Guideline Card & Optional Timer */}
      <div className="my-auto py-4 space-y-4">
        {/* Offline Clue Guidelines */}
        <div className="rounded-2xl glass-panel p-4 border border-white/8 text-left space-y-3 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/8 pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-ui">
              How Discussion Works
            </span>
            <span className="text-xs text-violet-400 font-medium font-ui">
              {selectedTopic?.icon} {selectedTopic?.name}
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-300 font-ui">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-violet-600/25 text-violet-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                1
              </span>
              <p>
                Take turns clockwise giving <strong className="text-white">one verbal clue</strong>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-violet-600/25 text-violet-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                2
              </span>
              <p>
                <strong className="text-white">Normal players:</strong> Prove you know the word without making it too easy for the Imposter.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-rose-600/25 text-rose-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                3
              </span>
              <p>
                <strong className="text-rose-400">Imposter ({state.settings.imposterCount}):</strong> Use your clue, blend in, and guess what others are referencing!
              </p>
            </div>
          </div>
        </div>

        {/* Optional Timer */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-600/15 flex items-center justify-center text-violet-400 font-mono font-bold text-sm">
              <Clock className="w-4.5 h-4.5" />
            </div>
            <div className="text-left">
              <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider font-ui">
                Party Timer (Optional)
              </div>
              <div className={`text-lg font-bold font-mono tracking-wider ${timerSeconds <= 10 && timerSeconds > 0 ? 'text-rose-400 animate-pulse-subtle' : 'text-white'}`}>
                {formatTime(timerSeconds)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTimer}
              className="p-2 rounded-xl bg-violet-600/25 hover:bg-violet-600/40 text-violet-300 transition-colors btn-press"
              title={isRunning ? 'Pause' : 'Start'}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
            <button
              onClick={() => resetTimer(120)}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/8 text-slate-400 hover:text-white transition-colors btn-press"
              title="Reset 2m"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => setPhase('voting')}
          icon={<Vote className="w-5 h-5" />}
        >
          Start Voting
        </Button>
      </div>
    </div>
  );
};