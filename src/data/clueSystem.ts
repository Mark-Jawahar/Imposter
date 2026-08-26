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
    indirectClues: ['RIVALRY', 'RESCUE', 'SPORT', 'BROTHER', 'CHASE'],
  },
  {
    movieId: 'tm-02',
    movieTitle: 'Vikram',
    indirectClues: ['CARTEL', 'AGENT', 'MISSION', 'DRUGS', 'SHADOW'],
  },
  {
    movieId: 'tm-03',
    movieTitle: 'Mankatha',
    indirectClues: ['HEIST', 'BETRAYAL', 'MONEY', 'PLAN', 'GAMBLE'],
  },
  {
    movieId: 'tm-04',
    movieTitle: 'Anniyan',
    indirectClues: ['RULES', 'JUSTICE', 'PERSONA', 'PUNISH', 'ORDER'],
  },
  {
    movieId: 'tm-05',
    movieTitle: 'Sivaji: The Boss',
    indirectClues: ['WEALTH', 'CORRUPTION', 'SYSTEM', 'RETURN', 'POWER'],
  },
  {
    movieId: 'tm-06',
    movieTitle: 'Master',
    indirectClues: ['TEACHER', 'YOUTH', 'REFORM', 'SCHOOL', 'ADDICTION'],
  },
  {
    movieId: 'tm-07',
    movieTitle: 'Leo',
    indirectClues: ['PAST', 'IDENTITY', 'CHOCOLATE', 'FAMILY', 'ANIMAL'],
  },
  {
    movieId: 'tm-08',
    movieTitle: 'Jailer',
    indirectClues: ['RETIREMENT', 'LEGACY', 'FAMILY', 'SECRET', 'PRISON'],
  },
  {
    movieId: 'tm-09',
    movieTitle: 'Kaithi',
    indirectClues: ['NIGHT', 'CONVOY', 'PRISONER', 'DAUGHTER', 'ESCORT'],
  },
  {
    movieId: 'tm-10',
    movieTitle: 'Asuran',
    indirectClues: ['LAND', 'FIRE', 'CASTE', 'EDUCATION', 'CYCLE'],
  },
  {
    movieId: 'tm-11',
    movieTitle: 'Thuppakki',
    indirectClues: ['ARMY', 'HOLIDAY', 'SLEEPER', 'MISSION', 'TERROR'],
  },
  {
    movieId: 'tm-12',
    movieTitle: 'Enthiran',
    indirectClues: ['ROBOT', 'SCIENTIST', 'CHIP', 'CREATOR', 'EVOLUTION'],
  },
  {
    movieId: 'tm-13',
    movieTitle: 'Soorarai Pottru',
    indirectClues: ['AVIATION', 'DREAM', 'OBSTACLE', 'COMMON', 'SKY'],
  },
  {
    movieId: 'tm-14',
    movieTitle: 'Jai Bhim',
    indirectClues: ['LAWYER', 'TRIBE', 'CUSTODY', 'TRUTH', 'JUSTICE'],
  },
  {
    movieId: 'tm-15',
    movieTitle: 'Vada Chennai',
    indirectClues: ['CARROM', 'PRISON', 'GANG', 'LOYALTY', 'GENERATION'],
  },
  {
    movieId: 'tm-16',
    movieTitle: 'Petta',
    indirectClues: ['HOSTEL', 'WARDEN', 'FLASHBACK', 'VENDETTA', 'STUDENT'],
  },
  {
    movieId: 'tm-17',
    movieTitle: 'Billa',
    indirectClues: ['DOUBLE', 'INTERPOL', 'LOOKALIKE', 'DIAMOND', 'REPLACEMENT'],
  },
  {
    movieId: 'tm-18',
    movieTitle: 'Doctor',
    indirectClues: ['TRAFFICKING', 'CHILDREN', 'MILITARY', 'PLAN', 'SILENCE'],
  },
  {
    movieId: 'tm-19',
    movieTitle: 'Maanaadu',
    indirectClues: ['TIMELOOP', 'ASSEMBLY', 'RELIGION', 'RESET', 'POLITICIAN'],
  },
  {
    movieId: 'tm-20',
    movieTitle: 'Super Deluxe',
    indirectClues: ['FATE', 'TRANSGENDER', 'PORN', 'ALIEN', 'COINCIDENCE'],
  },
  {
    movieId: 'tm-21',
    movieTitle: 'Pariyerum Perumal',
    indirectClues: ['CASTE', 'LAW', 'HORSE', 'DISCRIMINATION', 'JUSTICE'],
  },
  {
    movieId: 'tm-22',
    movieTitle: 'Vikram Vedha',
    indirectClues: ['FOLKTALE', 'ENCOUNTER', 'MORALITY', 'HALF', 'CHOICE'],
  },
  {
    movieId: 'tm-23',
    movieTitle: '96',
    indirectClues: ['REUNION', 'SCHOOL', 'PHOTOGRAPH', 'UNSPOKEN', 'RAIN'],
  },
  {
    movieId: 'tm-24',
    movieTitle: 'Theri',
    indirectClues: ['WITNESS', 'FATHER', 'PROTECTION', 'IDENTITY', 'POLICE'],
  },
  {
    movieId: 'tm-25',
    movieTitle: 'Mersal',
    indirectClues: ['MAGIC', 'MEDICAL', 'TWIN', 'CORRUPTION', 'STAGE'],
  },
  {
    movieId: 'tm-26',
    movieTitle: 'Bigil',
    indirectClues: ['FOOTBALL', 'COACH', 'REDEMPTION', 'VILLAGE', 'WOMEN'],
  },
  {
    movieId: 'tm-27',
    movieTitle: 'Ayan',
    indirectClues: ['SMUGGLING', 'CUSTOMS', 'CONGO', 'DIAMONDS', 'OFFICER'],
  },
  {
    movieId: 'tm-28',
    movieTitle: 'Singam',
    indirectClues: ['TRANSFER', 'VILLAGE', 'EGO', 'DUTY', 'PRIDE'],
  },
  {
    movieId: 'tm-29',
    movieTitle: 'Ghajini',
    indirectClues: ['AMNESIA', 'TATTOO', 'REVENGE', 'SHORTTERM', 'CALENDAR'],
  },
  {
    movieId: 'tm-30',
    movieTitle: 'Pudhupettai',
    indirectClues: ['GANGSTER', 'SURVIVAL', 'POLITICS', 'RISE', 'LOYALTY'],
  },
  {
    movieId: 'tm-31',
    movieTitle: 'Karnan',
    indirectClues: ['BUS', 'OPPRESSION', 'VILLAGE', 'SWORD', 'DIGNITY'],
  },
  {
    movieId: 'tm-32',
    movieTitle: 'I',
    indirectClues: ['BODYBUILDER', 'TRANSFORMATION', 'MODEL', 'REVENGE', 'VIRUS'],
  },
  {
    movieId: 'tm-33',
    movieTitle: 'Aadukalam',
    indirectClues: ['ROOSTER', 'BETTING', 'RIVALRY', 'TRAINING', 'POLITICS'],
  },
  {
    movieId: 'tm-34',
    movieTitle: 'Arundhati',
    indirectClues: ['REINCARNATION', 'ANCESTRAL', 'JEWELRY', 'SORCERY', 'BLOODLINE'],
  },
  {
    movieId: 'tm-35',
    movieTitle: 'Ponniyin Selvan: I',
    indirectClues: ['CHOLA', 'PRINCE', 'SHIP', 'MYSTERY', 'EMPIRE'],
  },
  {
    movieId: 'tm-36',
    movieTitle: 'Gargi',
    indirectClues: ['ADVOCATE', 'CHILD', 'EVIDENCE', 'COURT', 'FATHER'],
  },
  {
    movieId: 'tm-37',
    movieTitle: 'Kolamaavu Kokila',
    indirectClues: ['DRUGS', 'FAMILY', 'COURIER', 'POLICE', 'MORALITY'],
  },
  {
    movieId: 'tm-38',
    movieTitle: 'Vinnaithaandi Varuvaayaa',
    indirectClues: ['FILMMAKER', 'CHRISTIAN', 'USA', 'WAIT', 'SHORTFILM'],
  },
  {
    movieId: 'tm-39',
    movieTitle: 'Good Night',
    indirectClues: ['SNORING', 'MARRIAGE', 'COMEDY', 'ADJUSTMENT', 'SLEEP'],
  },
  {
    movieId: 'tm-40',
    movieTitle: 'Por Thozhil',
    indirectClues: ['SERIAL', 'MENTOR', 'PSYCHOLOGY', 'PATTERN', 'TRAINEE'],
  },
  {
    movieId: 'tm-41',
    movieTitle: 'Chithha',
    indirectClues: ['UNCLE', 'NIECE', 'ABDUCTION', 'PROTECTOR', 'TRAUMA'],
  },
  {
    movieId: 'tm-42',
    movieTitle: 'Amaran',
    indirectClues: ['SOLDIER', 'KASHMIR', 'BIOPIC', 'LETTER', 'SACRIFICE'],
  },
  {
    movieId: 'tm-43',
    movieTitle: 'Meiyazhagan',
    indirectClues: ['HOMECOMING', 'RELATIVE', 'CHILDHOOD', 'LAND', 'MEMORY'],
  },
  {
    movieId: 'tm-44',
    movieTitle: 'Maharaja',
    indirectClues: ['BARBER', 'DUSTBIN', 'DAUGHTER', 'PAST', 'IDENTITY'],
  },
  {
    movieId: 'tm-45',
    movieTitle: 'Lover',
    indirectClues: ['TOXIC', 'BREAKUP', 'EGO', 'COMMUNICATION', 'HEALING'],
  },
  {
    movieId: 'tm-46',
    movieTitle: 'Vettaiyan',
    indirectClues: ['ENCOUNTER', 'JUSTICE', 'HUMANRIGHTS', 'FAITH', 'SYSTEM'],
  },
  {
    movieId: 'tm-47',
    movieTitle: 'The Greatest of All Time',
    indirectClues: ['AGENT', 'CLONE', 'SON', 'TIME', 'LEGACY'],
  },
  {
    movieId: 'tm-48',
    movieTitle: 'Kottukkaali',
    indirectClues: ['ROOSTER', 'RITUAL', 'VILLAGE', 'SILENCE', 'BELIEF'],
  },
  {
    movieId: 'tm-49',
    movieTitle: 'Vaaranam Aayiram',
    indirectClues: ['FATHER', 'SON', 'GRIEF', 'JOURNEY', 'MILITARY'],
  },
  {
    movieId: 'tm-50',
    movieTitle: 'Papanasam',
    indirectClues: ['COVERUP', 'CABLE', 'POLICE', 'FAMILY', 'ALIBI'],
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