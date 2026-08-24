'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Player, Topic, GameSettings, RoundData, VoteResult, GameState, GamePhase, RoundHistory } from '@/types/game';
import { TOPICS, TopicData, WordCluePair } from '@/data/topics';
import { sounds, triggerHaptic } from '@/lib/sound';

interface GameContextType {
  state: GameState;
  availableTopics: TopicData[];
  selectedTopic: TopicData | null;
  // Actions
  setPhase: (phase: GamePhase) => void;
  addPlayer: (name: string) => boolean;
  removePlayer: (id: string) => void;
  updatePlayerName: (id: string, name: string) => void;
  setImposterCount: (count: number) => void;
  setTopicId: (topicId: string) => void;
  getMaxAllowedImposters: (playerCount?: number) => number;
  startRoundSetup: () => void;
  generateNewWord: () => void;
  advanceRevealPlayer: () => void;
  advanceVotePlayer: () => void;
  recordVote: (voterId: string, suspectId: string) => void;
  calculateVoteResults: () => void;
  startNextRound: (keepTopic?: boolean) => void;
  resetGame: () => void;
  exitToHome: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

const STORAGE_KEY = 'imposter_game_v2';

const DEFAULT_PLAYERS: Player[] = [
  { id: 'p1', name: 'Arun', score: 0 },
  { id: 'p2', name: 'Priya', score: 0 },
  { id: 'p3', name: 'Karthik', score: 0 },
  { id: 'p4', name: 'Sanjay', score: 0 },
];

const INITIAL_SETTINGS: GameSettings = {
  players: DEFAULT_PLAYERS,
  imposterCount: 1,
  topicId: 'tamil-movies',
};

const INITIAL_STATE: GameState = {
  phase: 'home',
  settings: INITIAL_SETTINGS,
  currentRound: null,
  currentPlayerIndex: 0,
  votes: {},
  voteResults: [],
  caughtImposters: [],
  roundWinner: null,
  gameHistory: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState(parsed);
      }
    } catch {
      // Ignore storage errors
    }
    setIsInitialized(true);
  }, []);

  // Save state to localStorage on updates
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage errors
    }
  }, [state, isInitialized]);

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    sounds.setEnabled(enabled);
  };

  const selectedTopic = TOPICS.find((t) => t.id === state.settings.topicId) || TOPICS[0];

  const setPhase = useCallback((phase: GamePhase) => {
    setState((prev) => ({ ...prev, phase }));
  }, []);

  const getMaxAllowedImposters = useCallback((playerCount?: number): number => {
    const count = playerCount ?? state.settings.players.length;
    if (count < 3) return 1;
    if (count <= 6) return 1;
    if (count <= 10) return 2;
    if (count <= 13) return 3;
    return 4;
  }, [state.settings.players.length]);

  const addPlayer = useCallback((name: string): boolean => {
    const trimmed = name.trim();
    if (!trimmed) return false;
    if (state.settings.players.length >= 15) return false;

    sounds.playTap();
    triggerHaptic(10);

    setState((prev) => {
      const newPlayer: Player = {
        id: `p_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        name: trimmed,
        score: 0,
      };
      const updatedPlayers = [...prev.settings.players, newPlayer];
      const maxImp = getMaxAllowedImposters(updatedPlayers.length);
      const imposterCount = Math.min(prev.settings.imposterCount, maxImp);

      return {
        ...prev,
        settings: {
          ...prev.settings,
          players: updatedPlayers,
          imposterCount,
        },
      };
    });
    return true;
  }, [getMaxAllowedImposters, state.settings.players.length]);

  const removePlayer = useCallback((id: string) => {
    sounds.playClick();
    triggerHaptic(15);

    setState((prev) => {
      if (prev.settings.players.length <= 3) return prev;
      const updatedPlayers = prev.settings.players.filter((p) => p.id !== id);
      const maxImp = getMaxAllowedImposters(updatedPlayers.length);
      const imposterCount = Math.min(prev.settings.imposterCount, maxImp);

      return {
        ...prev,
        settings: {
          ...prev.settings,
          players: updatedPlayers,
          imposterCount,
        },
      };
    });
  }, [getMaxAllowedImposters]);

  const updatePlayerName = useCallback((id: string, name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    setState((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        players: prev.settings.players.map((p) => (p.id === id ? { ...p, name: trimmed } : p)),
      },
    }));
  }, []);

  const setImposterCount = useCallback((count: number) => {
    sounds.playClick();
    triggerHaptic(10);
    setState((prev) => {
      const maxImp = getMaxAllowedImposters(prev.settings.players.length);
      const validCount = Math.max(1, Math.min(count, maxImp));
      return {
        ...prev,
        settings: {
          ...prev.settings,
          imposterCount: validCount,
        },
      };
    });
  }, [getMaxAllowedImposters]);

  const setTopicId = useCallback((topicId: string) => {
    sounds.playClick();
    triggerHaptic(10);
    setState((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        topicId,
      },
    }));
  }, []);

  const pickRandomWord = useCallback((topic: TopicData, usedWords: string[]): WordCluePair => {
    const available = topic.words.filter((w) => !usedWords.includes(w.word));
    const pool = available.length > 0 ? available : topic.words;
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  }, []);

  const pickImposterIndices = useCallback((playerCount: number, imposterCount: number): number[] => {
    const indices: number[] = [];
    const validCount = Math.min(imposterCount, playerCount - 1);
    while (indices.length < validCount) {
      const r = Math.floor(Math.random() * playerCount);
      if (!indices.includes(r)) {
        indices.push(r);
      }
    }
    return indices;
  }, []);

  const generateNewWord = useCallback(() => {
    sounds.playTap();
    triggerHaptic(15);
    const topic = TOPICS.find((t) => t.id === state.settings.topicId) || TOPICS[0];
    const used = state.currentRound?.usedWords || [];
    const selected = pickRandomWord(topic, used);
    const imposterIndices = pickImposterIndices(state.settings.players.length, state.settings.imposterCount);

    const newUsedWords = [...used, selected.word];

    setState((prev) => ({
      ...prev,
      currentRound: {
        secretWord: selected.word,
        imposterClue: selected.clue,
        imposterIndices,
        usedWords: newUsedWords,
      },
    }));
  }, [pickRandomWord, pickImposterIndices, state.settings.topicId, state.currentRound?.usedWords, state.settings.players.length, state.settings.imposterCount]);

  // Start round immediately skips preview and goes straight to reveal
  const startRoundSetup = useCallback(() => {
    sounds.playClick();
    triggerHaptic(20);
    const topic = TOPICS.find((t) => t.id === state.settings.topicId) || TOPICS[0];
    const used = state.currentRound?.usedWords || [];
    const selected = pickRandomWord(topic, used);
    const imposterIndices = pickImposterIndices(state.settings.players.length, state.settings.imposterCount);

    setState((prev) => ({
      ...prev,
      phase: 'reveal',
      currentPlayerIndex: 0,
      votes: {},
      voteResults: [],
      caughtImposters: [],
      roundWinner: null,
      currentRound: {
        secretWord: selected.word,
        imposterClue: selected.clue,
        imposterIndices,
        usedWords: [...used, selected.word],
      },
    }));
  }, [pickRandomWord, pickImposterIndices, state.settings.topicId, state.currentRound?.usedWords, state.settings.players.length, state.settings.imposterCount]);

  const advanceRevealPlayer = useCallback(() => {
    sounds.playClick();
    triggerHaptic(15);
    setState((prev) => {
      const nextIndex = prev.currentPlayerIndex + 1;
      if (nextIndex >= prev.settings.players.length) {
        return {
          ...prev,
          phase: 'discussion',
          currentPlayerIndex: 0,
        };
      }
      return {
        ...prev,
        currentPlayerIndex: nextIndex,
      };
    });
  }, []);

  const advanceVotePlayer = useCallback(() => {
    sounds.playClick();
    triggerHaptic(15);
    setState((prev) => {
      const nextIndex = prev.currentPlayerIndex + 1;
      if (nextIndex >= prev.settings.players.length) {
        return {
          ...prev,
          phase: 'results',
          currentPlayerIndex: 0,
        };
      }
      return {
        ...prev,
        currentPlayerIndex: nextIndex,
      };
    });
  }, []);

  const recordVote = useCallback((voterId: string, suspectId: string) => {
    sounds.playVoteSelected();
    triggerHaptic(20);
    setState((prev) => ({
      ...prev,
      votes: {
        ...prev.votes,
        [voterId]: suspectId,
      },
    }));
  }, []);

  const calculateVoteResults = useCallback(() => {
    setState((prev) => {
      const voteCounts: Record<string, number> = {};
      prev.settings.players.forEach((p) => {
        voteCounts[p.id] = 0;
      });

      Object.values(prev.votes).forEach((suspectId) => {
        if (voteCounts[suspectId] !== undefined) {
          voteCounts[suspectId] += 1;
        }
      });

      const results: VoteResult[] = prev.settings.players
        .map((p) => ({
          playerId: p.id,
          votes: voteCounts[p.id] || 0,
        }))
        .sort((a, b) => b.votes - a.votes);

      const imposterPlayerIds = (prev.currentRound?.imposterIndices || []).map(
        (idx) => prev.settings.players[idx].id
      );

      const maxVotes = results[0]?.votes || 0;
      const topVotedPlayerIds = results.filter((r) => r.votes === maxVotes && maxVotes > 0).map((r) => r.playerId);

      const caught = imposterPlayerIds.filter((impId) => topVotedPlayerIds.includes(impId));
      const isAnyImposterCaught = caught.length > 0;

      let winner: 'players' | 'imposters' = 'players';
      const updatedPlayers = prev.settings.players.map((p) => ({ ...p }));

      if (isAnyImposterCaught) {
        // Players caught the imposter! Normal players get +2 pts
        sounds.playSuccess();
        triggerHaptic([50, 50, 50]);
        winner = 'players';
        updatedPlayers.forEach((p) => {
          if (!imposterPlayerIds.includes(p.id)) {
            p.score += 2;
          }
        });
      } else {
        // Imposter survived! Imposters get +2 pts
        sounds.playBuzzer();
        triggerHaptic([50, 80, 50]);
        winner = 'imposters';
        updatedPlayers.forEach((p) => {
          if (imposterPlayerIds.includes(p.id)) {
            p.score += 2;
          }
        });
      }

      const scoresRecord: Record<string, number> = {};
      updatedPlayers.forEach((p) => {
        scoresRecord[p.name] = p.score;
      });

      const newHistory: RoundHistory = {
        round: prev.gameHistory.length + 1,
        secretWord: prev.currentRound?.secretWord || '',
        imposters: imposterPlayerIds.map((id) => prev.settings.players.find((p) => p.id === id)?.name || ''),
        caughtImposters: caught.map((id) => prev.settings.players.find((p) => p.id === id)?.name || ''),
        winner,
        scores: scoresRecord,
      };

      return {
        ...prev,
        voteResults: results,
        caughtImposters: caught,
        roundWinner: winner,
        settings: {
          ...prev.settings,
          players: updatedPlayers,
        },
        gameHistory: [newHistory, ...prev.gameHistory],
      };
    });
  }, []);

  const startNextRound = useCallback((keepTopic = true) => {
    sounds.playClick();
    triggerHaptic(20);
    setState((prev) => {
      const topic = TOPICS.find((t) => t.id === prev.settings.topicId) || TOPICS[0];
      const used = prev.currentRound?.usedWords || [];
      const selected = pickRandomWord(topic, used);
      const imposterIndices = pickImposterIndices(prev.settings.players.length, prev.settings.imposterCount);

      return {
        ...prev,
        phase: 'reveal',
        currentPlayerIndex: 0,
        votes: {},
        voteResults: [],
        caughtImposters: [],
        roundWinner: null,
        currentRound: {
          secretWord: selected.word,
          imposterClue: selected.clue,
          imposterIndices,
          usedWords: [...used, selected.word],
        },
      };
    });
  }, [pickRandomWord, pickImposterIndices]);

  const resetGame = useCallback(() => {
    sounds.playTap();
    setState({
      ...INITIAL_STATE,
      settings: {
        ...INITIAL_SETTINGS,
        players: state.settings.players.map((p) => ({ ...p, score: 0 })),
      },
    });
  }, [state.settings.players]);

  const exitToHome = useCallback(() => {
    sounds.playTap();
    setState((prev) => ({
      ...prev,
      phase: 'home',
      currentPlayerIndex: 0,
      votes: {},
      voteResults: [],
      caughtImposters: [],
      roundWinner: null,
    }));
  }, []);

  return (
    <GameContext.Provider
      value={{
        state,
        availableTopics: TOPICS,
        selectedTopic,
        setPhase,
        addPlayer,
        removePlayer,
        updatePlayerName,
        setImposterCount,
        setTopicId,
        getMaxAllowedImposters,
        startRoundSetup,
        generateNewWord,
        advanceRevealPlayer,
        advanceVotePlayer,
        recordVote,
        calculateVoteResults,
        startNextRound,
        resetGame,
        exitToHome,
        soundEnabled,
        setSoundEnabled,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
