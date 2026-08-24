'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Play, Film, Check } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/Button';

export const SetupTopicScreen: React.FC = () => {
  const { state, availableTopics, setTopicId, setPhase, startRoundSetup } = useGame();
  const selectedTopicId = state.settings.topicId;

  const specialTopics = availableTopics.filter((t) => t.category === 'special');
  const indianTopics = availableTopics.filter((t) => t.category === 'indian');

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full safe-bottom">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setPhase('setup-imposters')}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors btn-press"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 font-mono">
            Step 3 of 3
          </span>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            Select Topic
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Choose the category of words for this round.
          </p>
        </div>

        {/* Scrollable Topics List */}
        <div className="space-y-4 max-h-[58vh] overflow-y-auto pr-1 pb-2">
          {/* Featured / Special Topic Category */}
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-amber-400 mb-2 px-1">
              <Film className="w-3.5 h-3.5" />
              <span>Special Category</span>
            </div>

            {specialTopics.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              return (
                <motion.button
                  key={topic.id}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setTopicId(topic.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-950/30 via-violet-950/30 to-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'glass-card border-white/8 hover:border-amber-400/30 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{topic.icon}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-sm text-white tracking-wide truncate font-ui">
                            {topic.name}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-snug font-ui">
                          {topic.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/20 font-ui">
                            50+ Kollywood Classics
                          </span>
                          <span className="text-[9px] text-slate-400 font-ui">
                            Vijay • Ajith • Rajini • Kamal
                          </span>
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Standard Indian Topics */}
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-2 px-1">
              <span>🇮🇳 Indian Topics</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {indianTopics.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <motion.button
                    key={topic.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setTopicId(topic.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all border relative flex items-center justify-between ${
                      isSelected
                        ? 'bg-violet-950/30 border-violet-500/50 shadow-md shadow-violet-900/15'
                        : 'glass-card border-white/8 hover:border-white/15 hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xl shrink-0">{topic.icon}</span>
                      <div className="truncate">
                        <h4 className="font-semibold text-xs text-white truncate font-ui">
                          {topic.name}
                        </h4>
                        <p className="text-[9px] text-slate-400 truncate font-ui">
                          {topic.words.length} words
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center text-white shrink-0 ml-2">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-4 mt-auto">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={() => startRoundSetup()}
          icon={<Play className="w-5 h-5 fill-current" />}
          iconPosition="left"
        >
          Start Round
        </Button>
      </div>
    </div>
  );
};