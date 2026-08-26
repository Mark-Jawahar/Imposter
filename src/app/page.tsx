'use client';

import React from 'react';
import { useGame } from '@/context/GameContext';
import { Navbar } from '@/components/Navbar';
import { HomeScreen } from '@/components/HomeScreen';
import { SetupPlayersScreen } from '@/components/SetupPlayersScreen';
import { SetupImpostersScreen } from '@/components/SetupImpostersScreen';
import { SetupTopicScreen } from '@/components/SetupTopicScreen';
import { WordPreviewScreen } from '@/components/WordPreviewScreen';
import { RevealScreen } from '@/components/RevealScreen';
import { WhoStartsScreen } from '@/components/WhoStartsScreen';
import { DiscussionScreen } from '@/components/DiscussionScreen';
import { VotingScreen } from '@/components/VotingScreen';
import { ResultsScreen } from '@/components/ResultsScreen';
import { ScoreboardScreen } from '@/components/ScoreboardScreen';

export default function Page() {
  const { state } = useGame();

  const renderScreen = () => {
    switch (state.phase) {
      case 'home':
        return <HomeScreen />;
      case 'setup-players':
        return <SetupPlayersScreen />;
      case 'setup-imposters':
        return <SetupImpostersScreen />;
      case 'setup-topic':
        return <SetupTopicScreen />;
      case 'word-preview':
        return <WordPreviewScreen />;
      case 'reveal':
        return <RevealScreen />;
      case 'who-starts':
        return <WhoStartsScreen />;
      case 'discussion':
        return <DiscussionScreen />;
      case 'voting':
        return <VotingScreen />;
      case 'results':
        return <ResultsScreen />;
      case 'scoreboard':
        return <ScoreboardScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <main className="min-h-screen min-h-[100dvh] flex flex-col bg-[#08090e] bg-radial-glow text-slate-100 selection:bg-purple-500 selection:text-white">
      <Navbar />
      <div className="flex-1 flex flex-col pb-6 sm:pb-8">
        {renderScreen()}
      </div>
    </main>
  );
}
