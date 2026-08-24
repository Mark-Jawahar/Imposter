'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RotateCw, CheckCircle, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const WordPreviewScreen: React.FC = () => {
  const { state, selectedTopic, generateNewWord, setPhase } = useGame();
  const currentWord = state.currentRound?.secretWord || '';

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full text-center">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setPhase('setup-topic')}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Change Topic
          </button>
          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Host Check</span>
          </div>
        </div>

        <div className="mb-2">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Generated Word
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
            Review the secret word or skip if unsuitable.
          </p>
        </div>
      </div>

      {/* Secret Word Card */}
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        className="my-auto py-6"
      >
        <div className="relative rounded-3xl glass-panel p-6 border border-violet-500/30 shadow-2xl overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-semibold mb-4">
            <span>{selectedTopic?.icon}</span>
            <span>{selectedTopic?.name}</span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-wider break-words my-3 py-2">
            {currentWord}
          </div>

          <p className="text-xs text-slate-400">
            Topic: <strong className="text-white">{selectedTopic?.name}</strong>
          </p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => setPhase('reveal')}
          icon={<CheckCircle className="w-5 h-5" />}
        >
          Use Word
        </Button>

        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={generateNewWord}
          icon={<RotateCw className="w-4 h-4 text-violet-400" />}
        >
          Skip Word
        </Button>
      </div>
    </div>
  );
};
