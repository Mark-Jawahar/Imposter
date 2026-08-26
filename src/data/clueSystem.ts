import { TamilMovie } from '@/types/game';

export interface MovieClueSet {
  movieId: string;
  movieTitle: string;
  indirectClues: string[];
}

export const MOVIE_INDIRECT_CLUES: MovieClueSet[] = [
  {
    movieId: 'tm-01',
    movieTitle: 'Ghilli',
    indirectClues: ['KABADDI', 'SWITCH', 'RESCUE', 'PRIDE', 'TEAM'],
  },
  {
    movieId: 'tm-02',
    movieTitle: 'Vikram',
    indirectClues: ['MASK', 'SHADOW', 'AGENT', 'MISSION', 'DRUGS'],
  },
  {
    movieId: 'tm-03',
    movieTitle: 'Mankatha',
    indirectClues: ['HEIST', 'BETRAYAL', 'MONEY', 'TEAM', 'PLAN'],
  },
  {
    movieId: 'tm-04',
    movieTitle: 'Anniyan',
    indirectClues: ['RULES', 'JUSTICE', 'CHANGE', 'PUNISH', 'MIND'],
  },
  {
    movieId: 'tm-05',
    movieTitle: 'Sivaji: The Boss',
    indirectClues: ['MONEY', 'BLACK', 'RETURN', 'POWER', 'SYSTEM'],
  },
  {
    movieId: 'tm-06',
    movieTitle: 'Master',
    indirectClues: ['SCHOOL', 'TEACHER', 'YOUTH', 'CHANGE', 'DRINK'],
  },
  {
    movieId: 'tm-07',
    movieTitle: 'Leo',
    indirectClues: ['PAST', 'IDENTITY', 'CHOCOLATE', 'FAMILY', 'ANIMAL'],
  },
  {
    movieId: 'tm-08',
    movieTitle: 'Jailer',
    indirectClues: ['RETIREMENT', 'FAMILY', 'SECRET', 'RETURN', 'JAIL'],
  },
  {
    movieId: 'tm-09',
    movieTitle: 'Kaithi',
    indirectClues: ['NIGHT', 'PRISONER', 'TRUCK', 'POLICE', 'DAUGHTER'],
  },
  {
    movieId: 'tm-10',
    movieTitle: 'Asuran',
    indirectClues: ['LAND', 'FIRE', 'FAMILY', 'SCHOOL', 'FIGHT'],
  },
  {
    movieId: 'tm-11',
    movieTitle: 'Thuppakki',
    indirectClues: ['ARMY', 'HOLIDAY', 'BOMB', 'MISSION', 'COUNTRY'],
  },
  {
    movieId: 'tm-12',
    movieTitle: 'Enthiran',
    indirectClues: ['ROBOT', 'SCIENTIST', 'LOVE', 'CHIP', 'CREATOR'],
  },
  {
    movieId: 'tm-13',
    movieTitle: 'Soorarai Pottru',
    indirectClues: ['FLIGHT', 'DREAM', 'MONEY', 'STRUGGLE', 'COMMON'],
  },
  {
    movieId: 'tm-14',
    movieTitle: 'Jai Bhim',
    indirectClues: ['LAWYER', 'TRIBE', 'JAIL', 'TRUTH', 'CASE'],
  },
  {
    movieId: 'tm-15',
    movieTitle: 'Vada Chennai',
    indirectClues: ['CARROM', 'JAIL', 'GANG', 'LOYALTY', 'AREA'],
  },
  {
    movieId: 'tm-16',
    movieTitle: 'Petta',
    indirectClues: ['HOSTEL', 'PAST', 'WARDEN', 'REVENGE', 'STUDENT'],
  },
  {
    movieId: 'tm-17',
    movieTitle: 'Billa',
    indirectClues: ['TWIN', 'POLICE', 'DIAMOND', 'SWAP', 'CRIME'],
  },
  {
    movieId: 'tm-18',
    movieTitle: 'Doctor',
    indirectClues: ['KIDNAP', 'CHILDREN', 'ARMY', 'PLAN', 'QUIET'],
  },
  {
    movieId: 'tm-19',
    movieTitle: 'Maanaadu',
    indirectClues: ['TIME', 'LOOP', 'MEETING', 'POLITICS', 'RESET'],
  },
  {
    movieId: 'tm-20',
    movieTitle: 'Super Deluxe',
    indirectClues: ['FATE', 'ALIEN', 'CHANCE', 'SECRETS', 'LIVES'],
  },
  {
    movieId: 'tm-21',
    movieTitle: 'Pariyerum Perumal',
    indirectClues: ['HORSE', 'LAW', 'CASTE', 'FIGHT', 'FAIR'],
  },
  {
    movieId: 'tm-22',
    movieTitle: 'Vikram Vedha',
    indirectClues: ['STORY', 'POLICE', 'GANGSTER', 'HALF', 'CHOICE'],
  },
  {
    movieId: 'tm-23',
    movieTitle: '96',
    indirectClues: ['SCHOOL', 'OLD', 'PHOTO', 'RAIN', 'MEET'],
  },
  {
    movieId: 'tm-24',
    movieTitle: 'Theri',
    indirectClues: ['FATHER', 'POLICE', 'DAUGHTER', 'HIDE', 'PAST'],
  },
  {
    movieId: 'tm-25',
    movieTitle: 'Mersal',
    indirectClues: ['MAGIC', 'DOCTOR', 'TWIN', 'SHOW', 'REVENGE'],
  },
  {
    movieId: 'tm-26',
    movieTitle: 'Bigil',
    indirectClues: ['FOOTBALL', 'COACH', 'WOMEN', 'TEAM', 'WIN'],
  },
  {
    movieId: 'tm-27',
    movieTitle: 'Ayan',
    indirectClues: ['SMUGGLE', 'CUSTOMS', 'AFRICA', 'DIAMOND', 'OFFICER'],
  },
  {
    movieId: 'tm-28',
    movieTitle: 'Singam',
    indirectClues: ['POLICE', 'VILLAGE', 'TRANSFER', 'PRIDE', 'DUTY'],
  },
  {
    movieId: 'tm-29',
    movieTitle: 'Ghajini',
    indirectClues: ['MEMORY', 'TATTOO', 'REVENGE', 'SHORT', 'NOTE'],
  },
  {
    movieId: 'tm-30',
    movieTitle: 'Pudhupettai',
    indirectClues: ['GANG', 'SURVIVE', 'POLITICS', 'RISE', 'LOYAL'],
  },
  {
    movieId: 'tm-31',
    movieTitle: 'Karnan',
    indirectClues: ['BUS', 'VILLAGE', 'SWORD', 'RIGHTS', 'FIGHT'],
  },
  {
    movieId: 'tm-32',
    movieTitle: 'I',
    indirectClues: ['BODY', 'CHANGE', 'MODEL', 'REVENGE', 'VIRUS'],
  },
  {
    movieId: 'tm-33',
    movieTitle: 'Aadukalam',
    indirectClues: ['ROOSTER', 'BET', 'RIVAL', 'TRAIN', 'POLITICS'],
  },
  {
    movieId: 'tm-34',
    movieTitle: 'Arundhati',
    indirectClues: ['PAST', 'JEWEL', 'MAGIC', 'FAMILY', 'EVIL'],
  },
  {
    movieId: 'tm-35',
    movieTitle: 'Ponniyin Selvan: I',
    indirectClues: ['KING', 'PRINCE', 'SHIP', 'SECRET', 'KINGDOM'],
  },
  {
    movieId: 'tm-36',
    movieTitle: 'Gargi',
    indirectClues: ['LAWYER', 'CHILD', 'COURT', 'TRUTH', 'DAD'],
  },
  {
    movieId: 'tm-37',
    movieTitle: 'Kolamaavu Kokila',
    indirectClues: ['DRUGS', 'FAMILY', 'DELIVER', 'POLICE', 'CHOICE'],
  },
  {
    movieId: 'tm-38',
    movieTitle: 'Vinnaithaandi Varuvaayaa',
    indirectClues: ['FILM', 'LOVE', 'WAIT', 'AMERICA', 'SHORT'],
  },
  {
    movieId: 'tm-39',
    movieTitle: 'Good Night',
    indirectClues: ['SNORE', 'WIFE', 'FUNNY', 'SLEEP', 'ADJUST'],
  },
  {
    movieId: 'tm-40',
    movieTitle: 'Por Thozhil',
    indirectClues: ['KILLER', 'TEACHER', 'MIND', 'PATTERN', 'LEARN'],
  },
  {
    movieId: 'tm-41',
    movieTitle: 'Chithha',
    indirectClues: ['UNCLE', 'NIECE', 'MISSING', 'SEARCH', 'BOND'],
  },
  {
    movieId: 'tm-42',
    movieTitle: 'Amaran',
    indirectClues: ['SOLDIER', 'KASHMIR', 'TRUE', 'LETTER', 'BRAVE'],
  },
  {
    movieId: 'tm-43',
    movieTitle: 'Meiyazhagan',
    indirectClues: ['HOME', 'RELATIVE', 'CHILD', 'LAND', 'MEMORY'],
  },
  {
    movieId: 'tm-44',
    movieTitle: 'Maharaja',
    indirectClues: ['BARBER', 'TRASH', 'DAUGHTER', 'PAST', 'WHO'],
  },
  {
    movieId: 'tm-45',
    movieTitle: 'Lover',
    indirectClues: ['TOXIC', 'BREAKUP', 'EGO', 'TALK', 'HEAL'],
  },
  {
    movieId: 'tm-46',
    movieTitle: 'Vettaiyan',
    indirectClues: ['POLICE', 'FAIR', 'FAITH', 'RULES', 'JUSTICE'],
  },
  {
    movieId: 'tm-47',
    movieTitle: 'The Greatest of All Time',
    indirectClues: ['AGENT', 'COPY', 'SON', 'TIME', 'OLD'],
  },
  {
    movieId: 'tm-48',
    movieTitle: 'Kottukkaali',
    indirectClues: ['ROOSTER', 'RITUAL', 'VILLAGE', 'QUIET', 'FAITH'],
  },
  {
    movieId: 'tm-49',
    movieTitle: 'Vaaranam Aayiram',
    indirectClues: ['FATHER', 'SON', 'SAD', 'LIFE', 'ARMY'],
  },
  {
    movieId: 'tm-50',
    movieTitle: 'Papanasam',
    indirectClues: ['HIDE', 'CABLE', 'POLICE', 'FAMILY', 'PROOF'],
  },
];

export const GENERIC_INDIRECT_CLUES = [
  'SECRET', 'HIDDEN', 'PAST', 'TRUTH', 'LIE', 'CHOICE', 'RESULT',
  'REDEMPTION', 'BETRAYAL', 'IDENTITY', 'MEMORY', 'SHADOW', 'MASK',
  'GAME', 'PLAN', 'TRAP', 'ESCAPE', 'CHASE', 'EVIDENCE', 'WITNESS',
];

export function getIndirectCluesForMovie(movieId: string): string[] {
  const clueSet = MOVIE_INDIRECT_CLUES.find((c) => c.movieId === movieId);
  if (clueSet && clueSet.indirectClues.length > 0) {
    return clueSet.indirectClues;
  }
  return GENERIC_INDIRECT_CLUES;
}

export function validateClue(clue: string, movieTitle: string): boolean {
  if (!clue || typeof clue !== 'string') return false;
  const trimmed = clue.trim();
  if (trimmed.length === 0) return false;
  if (trimmed.includes(' ')) return false;
  if (trimmed.includes('-')) return false;
  
  const upperClue = trimmed.toUpperCase();
  const upperTitle = movieTitle.toUpperCase();
  
  if (upperClue === upperTitle) return false;
  
  const titleWords = upperTitle.split(/[\s:]+/).filter(w => w.length > 2);
  if (titleWords.some(w => upperClue === w || upperClue.includes(w))) return false;
  
  const genericWords = [
    'LOVE', 'ACTION', 'FIGHT', 'FAMILY', 'MOVIE', 'HERO', 'VILLAIN', 'STORY',
    'POLICE', 'FILM', 'CINEMA', 'DRAMA', 'THRILLER', 'COMEDY', 'ROMANCE',
    'GOOD', 'BAD', 'EVIL', 'WIN', 'LOSE', 'LIFE', 'DEATH', 'TIME', 'MAN',
    'WOMAN', 'BOY', 'GIRL', 'FRIEND', 'ENEMY', 'WAR', 'PEACE', 'HOME',
  ];
  if (genericWords.includes(upperClue)) return false;
  
  return true;
}

export function selectClueForMovie(
  movieId: string,
  movieTitle: string,
  usedCluesInSession: string[] = []
): string {
  const clues = getIndirectCluesForMovie(movieId);
  const available = clues.filter((c) => 
    validateClue(c, movieTitle) && !usedCluesInSession.includes(c.toUpperCase())
  );
  
  const pool = available.length > 0 ? available : clues.filter((c) => validateClue(c, movieTitle));
  
  if (pool.length === 0) {
    const fallback = GENERIC_INDIRECT_CLUES.find((c) => 
      validateClue(c, movieTitle) && !usedCluesInSession.includes(c.toUpperCase())
    ) || GENERIC_INDIRECT_CLUES[0];
    return fallback;
  }
  
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}