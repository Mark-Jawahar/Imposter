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
    indirectClues: ['KABADDI', 'RESCUE', 'RIVAL', 'BROTHER', 'CHASE'],
  },
  {
    movieId: 'tm-02',
    movieTitle: 'Vikram',
    indirectClues: ['CARTEL', 'MASK', 'AGENT', 'MISSION', 'DRUGS'],
  },
  {
    movieId: 'tm-03',
    movieTitle: 'Mankatha',
    indirectClues: ['HEIST', 'MONEY', 'BETRAYAL', 'PLAN', 'GAMBLE'],
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
    indirectClues: ['TEACHER', 'YOUTH', 'REFORM', 'SCHOOL', 'DRINK'],
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
    indirectClues: ['ARMY', 'HOLIDAY', 'SPY', 'MISSION', 'TERROR'],
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
    indirectClues: ['LAWYER', 'TRIBE', 'JAIL', 'TRUTH', 'JUSTICE'],
  },
  {
    movieId: 'tm-15',
    movieTitle: 'Vada Chennai',
    indirectClues: ['CARROM', 'PRISON', 'GANG', 'LOYALTY', 'REVENGE'],
  },
  {
    movieId: 'tm-16',
    movieTitle: 'Petta',
    indirectClues: ['HOSTEL', 'WARDEN', 'FLASHBACK', 'REVENGE', 'STUDENT'],
  },
  {
    movieId: 'tm-17',
    movieTitle: 'Billa',
    indirectClues: ['DOUBLE', 'POLICE', 'LOOKALIKE', 'DIAMOND', 'REPLACEMENT'],
  },
  {
    movieId: 'tm-18',
    movieTitle: 'Doctor',
    indirectClues: ['KIDNAP', 'CHILDREN', 'MILITARY', 'PLAN', 'SILENCE'],
  },
  {
    movieId: 'tm-19',
    movieTitle: 'Maanaadu',
    indirectClues: ['TIMELOOP', 'ASSEMBLY', 'RELIGION', 'RESET', 'POLITICIAN'],
  },
  {
    movieId: 'tm-20',
    movieTitle: 'Super Deluxe',
    indirectClues: ['FATE', 'GENDER', 'ALIEN', 'CHANCE', 'SECRETS'],
  },
  {
    movieId: 'tm-21',
    movieTitle: 'Pariyerum Perumal',
    indirectClues: ['CASTE', 'LAW', 'HORSE', 'UNFAIR', 'JUSTICE'],
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
    indirectClues: ['FOOTBALL', 'COACH', 'CHANCE', 'VILLAGE', 'WOMEN'],
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
    indirectClues: ['MEMORY', 'TATTOO', 'REVENGE', 'NOTE', 'CALENDAR'],
  },
  {
    movieId: 'tm-30',
    movieTitle: 'Pudhupettai',
    indirectClues: ['GANGSTER', 'SURVIVAL', 'POLITICS', 'RISE', 'LOYALTY'],
  },
  {
    movieId: 'tm-31',
    movieTitle: 'Karnan',
    indirectClues: ['BUS', 'CONTROL', 'VILLAGE', 'SWORD', 'PRIDE'],
  },
  {
    movieId: 'tm-32',
    movieTitle: 'I',
    indirectClues: ['BODYBUILDER', 'CHANGE', 'MODEL', 'REVENGE', 'VIRUS'],
  },
  {
    movieId: 'tm-33',
    movieTitle: 'Aadukalam',
    indirectClues: ['ROOSTER', 'BET', 'RIVALRY', 'TRAINING', 'POLITICS'],
  },
  {
    movieId: 'tm-34',
    movieTitle: 'Arundhati',
    indirectClues: ['REBIRTH', 'ANCESTRAL', 'JEWELRY', 'SORCERY', 'BLOODLINE'],
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
    indirectClues: ['SERIAL', 'MENTOR', 'MIND', 'PATTERN', 'TRAINEE'],
  },
  {
    movieId: 'tm-41',
    movieTitle: 'Chithha',
    indirectClues: ['UNCLE', 'NIECE', 'ABDUCTION', 'PROTECTOR', 'PAIN'],
  },
  {
    movieId: 'tm-42',
    movieTitle: 'Amaran',
    indirectClues: ['SOLDIER', 'KASHMIR', 'TRUE', 'LETTER', 'GIVE'],
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
    indirectClues: ['ENCOUNTER', 'JUSTICE', 'RIGHTS', 'FAITH', 'SYSTEM'],
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
  {
    movieId: 'tm-51',
    movieTitle: 'Hey Ram',
    indirectClues: ['PARTITION', 'GANDHI', 'REVENGE', 'ATONEMENT', 'HISTORY'],
  },
  {
    movieId: 'tm-52',
    movieTitle: 'Alaipayuthey',
    indirectClues: ['MARRIAGE', 'ELOPEMENT', 'CHENNAI', 'TRAIN', 'ARGUMENT'],
  },
  {
    movieId: 'tm-53',
    movieTitle: 'Kushi',
    indirectClues: ['COLLEGE', 'EGO', 'FRIENDSHIP', 'MISUNDERSTANDING', 'REUNION'],
  },
  {
    movieId: 'tm-54',
    movieTitle: 'Thenali',
    indirectClues: ['PHOBIA', 'PSYCHIATRIST', 'SRI LANKA', 'VACATION', 'LAUGHTER'],
  },
  {
    movieId: 'tm-55',
    movieTitle: 'Kannukkul Nilavu',
    indirectClues: ['AMNESIA', 'PSYCHOLOGIST', 'PONDICHERRY', 'TRUTH', 'SISTER'],
  },
  {
    movieId: 'tm-56',
    movieTitle: 'Vaanathaippola',
    indirectClues: ['BROTHERS', 'SACRIFICE', 'COOK', 'GRANDMOTHER', 'WEDDING'],
  },
  {
    movieId: 'tm-57',
    movieTitle: 'Appu',
    indirectClues: ['TAXI', 'BROTHEL', 'MUMBAI', 'RESCUE', 'SISTER'],
  },
  {
    movieId: 'tm-58',
    movieTitle: 'Parthen Rasithen',
    indirectClues: ['TENANT', 'MEDICINE', 'STEPBROTHER', 'DECEPTION', 'SUICIDE'],
  },
  {
    movieId: 'tm-59',
    movieTitle: 'Dheena',
    indirectClues: ['BROTHER', 'GANGSTER', 'HAND', 'LOYALTY', 'SISTER'],
  },
  {
    movieId: 'tm-60',
    movieTitle: 'Gemini',
    indirectClues: ['REFORM', 'LOVE', 'RIVAL', 'PAAN', 'COURT'],
  },
  {
    movieId: 'tm-61',
    movieTitle: 'Ramanaa',
    indirectClues: ['PROFESSOR', 'CORRUPTION', 'VIGILANTE', 'STUDENTS', 'EXECUTION'],
  },
  {
    movieId: 'tm-62',
    movieTitle: 'Kaakha Kaakha',
    indirectClues: ['POLICE', 'GANGSTER', 'WIFE', 'REVENGE', 'BROTHER'],
  },
  {
    movieId: 'tm-63',
    movieTitle: 'Anbe Sivam',
    indirectClues: ['COMMUNIST', 'JOURNEY', 'BUS', 'HUMANITY', 'FRIENDSHIP'],
  },
  {
    movieId: 'tm-64',
    movieTitle: 'Saamy',
    indirectClues: ['BRIBE', 'PERUMAL', 'TEMPLE', 'JUSTICE', 'TRANSFER'],
  },
  {
    movieId: 'tm-65',
    movieTitle: 'Chokka Thangam',
    indirectClues: ['SISTER', 'MARRIAGE', 'VILLAGE', 'GOLD', 'MLA'],
  },
  {
    movieId: 'tm-66',
    movieTitle: 'Dum',
    indirectClues: ['IPS', 'COMMISSIONER', 'DAUGHTER', 'KIDNAP', 'JAIL'],
  },
  {
    movieId: 'tm-67',
    movieTitle: 'Winner',
    indirectClues: ['VILLAGE', 'LANDLORD', 'GRANDPARENTS', 'RIVAL', 'RESCUE'],
  },
  {
    movieId: 'tm-68',
    movieTitle: 'Autograph',
    indirectClues: ['MEMORY', 'WEDDING', 'KERALA', 'NOSTALGIA', 'INVITATION'],
  },
  {
    movieId: 'tm-69',
    movieTitle: 'Perazhagan',
    indirectClues: ['HUNCHBACK', 'DUAL', 'VILLAGE', 'COLLEGE', 'GRANDMOTHER'],
  },
  {
    movieId: 'tm-70',
    movieTitle: 'Virumaandi',
    indirectClues: ['JAILIKATTU', 'DEATH ROW', 'VERSION', 'TRUTH', 'INTERVIEW'],
  },
  {
    movieId: 'tm-71',
    movieTitle: 'Vasool Raja MBBS',
    indirectClues: ['DON', 'MEDICAL', 'FATHER', 'HOSPITAL', 'LAUGHTER'],
  },
  {
    movieId: 'tm-72',
    movieTitle: 'Kovil',
    indirectClues: ['TEMPLE', 'RELIGION', 'CHRISTIAN', 'FATHER', 'LOVE'],
  },
{
    movieId: 'tm-50',
    movieTitle: 'Papanasam',
    indirectClues: ['COVERUP', 'CABLE', 'POLICE', 'FAMILY', 'ALIBI'],
  },
  {
    movieId: 'tm-74',
    movieTitle: 'Chandramukhi',
    indirectClues: ['MANSION', 'GHOST', 'PSYCHOLOGIST', 'DANCER', 'TWIN'],
  },
  {
    movieId: 'tm-75',
    movieTitle: 'Thirupaachi',
    indirectClues: ['BROTHER', 'VILLAGE', 'JUSTICE', 'POLICE', 'CHENNAI'],
  },
  {
    movieId: 'tm-76',
    movieTitle: 'Sivakasi',
    indirectClues: ['FACTORY', 'FIREWORKS', 'BROTHER', 'RIVAL', 'FIRE'],
  },
  {
    movieId: 'tm-77',
    movieTitle: 'Sandakozhi',
    indirectClues: ['TRAIN', 'VILLAGE', 'RIVAL', 'SISTER', 'PROTECT'],
  },
  {
    movieId: 'tm-78',
    movieTitle: 'Sachein',
    indirectClues: ['COLLEGE', 'LOVE', 'FRIEND', 'WAIT', 'REJECTION'],
  },
  {
    movieId: 'tm-79',
    movieTitle: 'Aaru',
    indirectClues: ['FRIEND', 'POLITICS', 'REVENGE', 'CHENNAI', 'BROTHER'],
  },
  {
    movieId: 'tm-80',
    movieTitle: 'Varalaru',
    indirectClues: ['FATHER', 'SON', 'WHEELCHAIR', 'IDENTITY', 'TRIPLE'],
  },
  {
    movieId: 'tm-81',
    movieTitle: 'Vettaiyaadu Vilaiyaadu',
    indirectClues: ['POLICE', 'SERIAL', 'KILLER', 'NEW YORK', 'WIFE'],
  },
  {
    movieId: 'tm-82',
    movieTitle: 'Sillunu Oru Kaadhal',
    indirectClues: ['MARRIAGE', 'MEMORY', 'FIRST LOVE', 'REGRET', 'COLLEGE'],
  },
  {
    movieId: 'tm-83',
    movieTitle: 'Thimiru',
    indirectClues: ['COLLEGE', 'RIVAL', 'SISTER', 'PROTECT', 'GANGSTER'],
  },
  {
    movieId: 'tm-84',
    movieTitle: 'Unakkum Enakkum',
    indirectClues: ['AUSTRALIA', 'VILLAGE', 'PRIDE', 'FAMILY', 'RICH'],
  },
  {
    movieId: 'tm-85',
    movieTitle: 'Vallavan',
    indirectClues: ['COLLEGE', 'OBSESSION', 'TEACHER', 'PAST', 'REJECTION'],
  },
  {
    movieId: 'tm-86',
    movieTitle: 'Veyil',
    indirectClues: ['BROTHER', 'VILLAGE', 'FIRE', 'SACRIFICE', 'FAMILY'],
  },
  {
    movieId: 'tm-87',
    movieTitle: 'Paruthiveeran',
    indirectClues: ['VILLAGE', 'CASTE', 'LOVE', 'TRAGEDY', 'KNIFE'],
  },
  {
    movieId: 'tm-88',
    movieTitle: 'Imsai Arasan 23rd Pulikecei',
    indirectClues: ['KING', 'COMEDY', 'BRITISH', 'MINISTER', 'TWIN'],
  },
  {
    movieId: 'tm-89',
    movieTitle: 'Pokkiri',
    indirectClues: ['UNDERCOVER', 'GANGSTER', 'POLICE', 'ROMANCE', 'IDENTITY'],
  },
  {
    movieId: 'tm-90',
    movieTitle: 'Vel',
    indirectClues: ['BROTHER', 'TEMPLE', 'VILLAGE', 'REVENGE', 'DISGUISE'],
  },
  {
    movieId: 'tm-91',
    movieTitle: 'Unnale Unnale',
    indirectClues: ['MELBOURNE', 'FRIEND', 'JEALOUSY', 'REALIZATION', 'PARTNER'],
  },
  {
    movieId: 'tm-92',
    movieTitle: 'Mozhi',
    indirectClues: ['DEAF', 'MUSIC', 'TEACHER', 'FRIENDSHIP', 'SILENCE'],
  },
  {
    movieId: 'tm-93',
    movieTitle: 'Polladhavan',
    indirectClues: ['BIKE', 'GANGSTER', 'FATHER', 'REVENGE', 'LOAN'],
  },
  {
    movieId: 'tm-94',
    movieTitle: 'Chennai 600028',
    indirectClues: ['CRICKET', 'FRIENDS', 'CHILDHOOD', 'RIVALRY', 'TEAM'],
  },
  {
    movieId: 'tm-95',
    movieTitle: 'Dasavatharam',
    indirectClues: ['VIRUS', 'TSUNAMI', 'AVATAR', 'SCIENTIST', 'IDENTITY'],
  },
  {
    movieId: 'tm-96',
    movieTitle: 'Subramaniapuram',
    indirectClues: ['MADURAI', 'FRIENDSHIP', 'BETRAYAL', 'VIOLENCE', 'KARMA'],
  },
  {
    movieId: 'tm-97',
    movieTitle: 'Santosh Subramaniam',
    indirectClues: ['FATHER', 'LOVE', 'MARRIAGE', 'FREEDOM', 'CHOICE'],
  },
  {
    movieId: 'tm-98',
    movieTitle: 'Saroja',
    indirectClues: ['KIDNAP', 'FRIENDS', 'ROAD', 'CRIME', 'RESCUE'],
  },
  {
    movieId: 'tm-99',
    movieTitle: 'Abhiyum Naanum',
    indirectClues: ['FATHER', 'DAUGHTER', 'MARRIAGE', 'GROWTH', 'LETTING GO'],
  },
  {
    movieId: 'tm-100',
    movieTitle: 'Kanchivaram',
    indirectClues: ['WEAVER', 'SILK', 'COMMUNISM', 'DAUGHTER', 'JAIL'],
  },
  {
    movieId: 'tm-101',
    movieTitle: 'Aadhavan',
    indirectClues: ['ASSASSIN', 'JUDGE', 'FAMILY', 'REDEMPTION', 'IDENTITY'],
  },
  {
    movieId: 'tm-102',
    movieTitle: 'Naadodigal',
    indirectClues: ['FRIENDSHIP', 'LOVE', 'SACRIFICE', 'BETRAYAL', 'JUSTICE'],
  },
  {
    movieId: 'tm-103',
    movieTitle: 'Vettaikaaran',
    indirectClues: ['POLICE', 'VIGILANTE', 'VILLAGE', 'JUSTICE', 'REVENGE'],
  },
  {
    movieId: 'tm-104',
    movieTitle: 'Unnaipol Oruvan',
    indirectClues: ['BOMB', 'TERRORIST', 'COMMISSIONER', 'NEGOTIATION', 'TIME'],
  },
  {
    movieId: 'tm-105',
    movieTitle: 'Naan Kadavul',
    indirectClues: ['AGHORI', 'BEGGAR', 'MERCY', 'KASHI', 'SACRIFICE'],
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