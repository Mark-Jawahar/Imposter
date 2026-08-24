export interface Player {
  id: string;
  name: string;
  score: number;
  isImposter?: boolean;
  vote?: string;
}

export interface TamilMovie {
  id: string;
  title: string;
  year: number;
  actor: string;
  director: string;
  genre: string[];
  clueTags: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Topic {
  id: string;
  name: string;
  category: 'indian' | 'tamil-movies';
  words?: string[];
  movies?: TamilMovie[];
}

export interface GameSettings {
  players: Player[];
  imposterCount: number;
  topicId: string;
}

export interface RoundData {
  secretWord: string;
  imposterClue: string;
  imposterIndices: number[];
  usedWords: string[];
}

export interface VoteResult {
  playerId: string;
  votes: number;
}

export interface GameState {
  phase: 'home' | 'setup-players' | 'setup-imposters' | 'setup-topic' | 'word-preview' | 'reveal' | 'discussion' | 'voting' | 'results' | 'imposter-guess' | 'scoreboard';
  settings: GameSettings;
  currentRound: RoundData | null;
  currentPlayerIndex: number;
  votes: Record<string, string>;
  voteResults: VoteResult[];
  caughtImposters: string[];
  roundWinner: 'players' | 'imposters' | null;
  gameHistory: RoundHistory[];
}

export interface RoundHistory {
  round: number;
  secretWord: string;
  imposters: string[];
  caughtImposters: string[];
  winner: 'players' | 'imposters';
  scores: Record<string, number>;
}

export type GamePhase = GameState['phase'];