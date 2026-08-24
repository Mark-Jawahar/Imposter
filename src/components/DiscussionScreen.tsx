'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Vote, Play, Pause, RotateCcw, Clock } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';
import { sounds, triggerHaptic } from '@/lib/sound';

export const DiscussionScreen: React.FC = () => {
  const { setPhase, state, selectedTopic } = useGame();
  const [timerSeconds, setTimerSeconds] = useState(120); // 2 minutes default
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            sounds.playBuzzer();
            triggerHaptic([100, 100, 200]);
            return 0;
          }
          if (prev <= 6) {
            sounds.playCountdownTick();
            triggerHaptic(10);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds]);

  const toggleTimer = () => {
    sounds.playTap();
    setIsRunning(!isRunning);
  };

  const resetTimer = (secs: number) => {
    sounds.playClick();
    setIsRunning(false);
    setTimerSeconds(secs);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Verbal Clues Discussion</span>
        </div>

        <h2 className="text-3xl font-black text-white tracking-tight">
          Everyone Ready?
        </h2>
        <p className="text-base text-violet-300 font-medium mt-1">
          Put the phone down and give your clues!
        </p>
      </div>

      {/* Center Guideline Card & Optional Timer */}
      <div className="my-auto py-4 space-y-4">
        {/* Offline Clue Guidelines */}
        <div className="rounded-3xl glass-panel p-5 border border-white/10 text-left space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              How Discussion Works
            </span>
            <span className="text-xs text-violet-400 font-medium">
              {selectedTopic?.icon} {selectedTopic?.name}
            </span>
          </div>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-violet-600/30 text-violet-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                1
              </span>
              <p>
                Take turns clockwise giving <strong>one verbal clue</strong>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-violet-600/30 text-violet-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                2
              </span>
              <p>
                <strong>Normal players:</strong> Prove you know the word without making it too easy for the Imposter.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-rose-600/30 text-rose-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                3
              </span>
              <p>
                <strong>Imposter ({state.settings.imposterCount}):</strong> Use your clue, blend in, and guess what others are referencing!
              </p>
            </div>
          </div>
        </div>

        {/* Optional Timer */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 font-mono font-bold text-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                Party Timer (Optional)
              </div>
              <div className={`text-xl font-black font-mono tracking-wider ${timerSeconds <= 10 && timerSeconds > 0 ? 'text-rose-400 animate-pulse' : 'text-white'}`}>
                {formatTime(timerSeconds)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTimer}
              className="p-2 rounded-xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 transition-colors"
              title={isRunning ? 'Pause' : 'Start'}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
            <button
              onClick={() => resetTimer(120)}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
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
          Start Private Voting
        </Button>
      </div>
    </div>
  );
};
