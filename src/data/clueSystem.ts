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
    indirectClues: ['PLAYER', 'ESCAPE', 'OFFICER', 'SHELTER', 'MEDAL'],
  },
  {
    movieId: 'tm-02',
    movieTitle: 'Vikram',
    indirectClues: ['AGENT', 'DRUGS', 'MASK', 'BASE', 'AMBUSH'],
  },
  {
    movieId: 'tm-03',
    movieTitle: 'Mankatha',
    indirectClues: ['GAMBLE', 'CRICKET', 'HEIST', 'LOOT', 'DOUBLE'],
  },
  {
    movieId: 'tm-04',
    movieTitle: 'Anniyan',
    indirectClues: ['RULES', 'PERSONA', 'MODEL', 'PUNISH', 'COMPLAINT'],
  },
  {
    movieId: 'tm-05',
    movieTitle: 'Sivaji: The Boss',
    indirectClues: ['RETURN', 'SCHOOL', 'DONATE', 'WEALTH', 'RIVAL'],
  },
  {
    movieId: 'tm-06',
    movieTitle: 'Master',
    indirectClues: ['TEACHER', 'ALCOHOL', 'REFORM', 'KIDS', 'CAMP'],
  },
  {
    movieId: 'tm-07',
    movieTitle: 'Leo',
    indirectClues: ['CHOCOLATE', 'CAFE', 'PAST', 'IDENTITY', 'AMBUSH'],
  },
  {
    movieId: 'tm-08',
    movieTitle: 'Jailer',
    indirectClues: ['RETIRED', 'PRISON', 'SON', 'GANG', 'KIDNAP'],
  },
  {
    movieId: 'tm-09',
    movieTitle: 'Kaithi',
    indirectClues: ['NIGHT', 'PRISONER', 'DAUGHTER', 'LORRY', 'DRUGS'],
  },
  {
    movieId: 'tm-10',
    movieTitle: 'Asuran',
    indirectClues: ['LAND', 'CASTE', 'FIRE', 'FATHER', 'FLEE'],
  },
  {
    movieId: 'tm-100',
    movieTitle: 'Kanchivaram',
    indirectClues: ['SILK', 'LOOM', 'SAREE', 'WEAVER', 'JAIL'],
  },
  {
    movieId: 'tm-101',
    movieTitle: 'Aadhavan',
    indirectClues: ['ASSASSIN', 'COOK', 'JUDGE', 'TARGET', 'DISGUISE'],
  },
  {
    movieId: 'tm-102',
    movieTitle: 'Naadodigal',
    indirectClues: ['GROUP', 'ABDUCTION', 'TEMPLE', 'SACRIFICE', 'SEPARATION'],
  },
  {
    movieId: 'tm-103',
    movieTitle: 'Vettaikaaran',
    indirectClues: ['ASPIRE', 'VILLAGE', 'ROWDY', 'CHENNAI', 'HUNTER'],
  },
  {
    movieId: 'tm-104',
    movieTitle: 'Unnaipol Oruvan',
    indirectClues: ['BOMB', 'COMMISSIONER', 'TERRORIST', 'PHONE', 'DEMAND'],
  },
  {
    movieId: 'tm-105',
    movieTitle: 'Naan Kadavul',
    indirectClues: ['PILGRIM', 'BEGGAR', 'MUTT', 'KASHI', 'MERCY'],
  },
  {
    movieId: 'tm-106',
    movieTitle: 'Velaiyilla Pattathari',
    indirectClues: ['ENGINEER', 'UNEMPLOYED', 'DEGREE', 'JOB', 'EGO'],
  },
  {
    movieId: 'tm-107',
    movieTitle: 'Goli Soda',
    indirectClues: ['MARKET', 'COOLIE', 'MESS', 'IDENTITY', 'REVENGE'],
  },
  {
    movieId: 'tm-108',
    movieTitle: 'Cuckoo',
    indirectClues: ['BLIND', 'MUSIC', 'VILLAGE', 'DOG', 'SEPARATION'],
  },
  {
    movieId: 'tm-109',
    movieTitle: 'Thegidi',
    indirectClues: ['DICE', 'INSURANCE', 'DETECTIVE', 'MURDER', 'CLAIM'],
  },
  {
    movieId: 'tm-11',
    movieTitle: 'Thuppakki',
    indirectClues: ['ARMY', 'HOLIDAY', 'SLEEPER', 'BOMB', 'TRAIN'],
  },
  {
    movieId: 'tm-110',
    movieTitle: 'Madras',
    indirectClues: ['WALL', 'NORTH', 'POLITICS', 'COMMUNITY', 'PAINT'],
  },
  {
    movieId: 'tm-111',
    movieTitle: 'Kaaviya Thalaivan',
    indirectClues: ['THEATRE', 'STAGE', 'RIVAL', 'BRITISH', 'PLAY'],
  },
  {
    movieId: 'tm-112',
    movieTitle: 'Nimirndhu Nil',
    indirectClues: ['CORRUPTION', 'VIGILANTE', 'OFFICIAL', 'STING', 'JUSTICE'],
  },
  {
    movieId: 'tm-113',
    movieTitle: 'Bramman',
    indirectClues: ['THEATRE', 'DREAM', 'TAX', 'LUCK', 'SACRIFICE'],
  },
  {
    movieId: 'tm-114',
    movieTitle: 'Yaamirukka Bayamey',
    indirectClues: ['HOTEL', 'HILL', 'GHOST', 'RESORT', 'INHERIT'],
  },
  {
    movieId: 'tm-115',
    movieTitle: 'Mundasupatti',
    indirectClues: ['CAMERA', 'SOUL', 'TURBAN', 'HEADMAN', 'STUDIO'],
  },
  {
    movieId: 'tm-116',
    movieTitle: 'Naan Sigappu Manithan',
    indirectClues: ['SLEEP', 'FAINT', 'GUN', 'REVENGE', 'WISH'],
  },
  {
    movieId: 'tm-117',
    movieTitle: 'Tenaliraman',
    indirectClues: ['JESTER', 'KING', 'KINGDOM', 'TRADER', 'CROWN'],
  },
  {
    movieId: 'tm-118',
    movieTitle: 'Kaaki Sattai',
    indirectClues: ['CONSTABLE', 'ORGAN', 'NURSE', 'MURDER', 'HOSPITAL'],
  },
  {
    movieId: 'tm-119',
    movieTitle: '36 Vayadhinile',
    indirectClues: ['HOUSEWIFE', 'CLERK', 'VISA', 'PRESIDENT', 'IRELAND'],
  },
  {
    movieId: 'tm-12',
    movieTitle: 'Enthiran',
    indirectClues: ['ROBOT', 'SCIENTIST', 'CHIP', 'CREATOR', 'JEALOUSY'],
  },
  {
    movieId: 'tm-120',
    movieTitle: 'Uttama Villain',
    indirectClues: ['STAGE', 'TUMOUR', 'MENTOR', 'KINGDOM', 'FOLK'],
  },
  {
    movieId: 'tm-121',
    movieTitle: 'Puli',
    indirectClues: ['TIGER', 'DEMON', 'QUEEN', 'KIDNAP', 'SWORD'],
  },
  {
    movieId: 'tm-122',
    movieTitle: 'Massu Engira Masilamani',
    indirectClues: ['GHOST', 'CONMAN', 'ACCIDENT', 'REVENGE', 'SPIRIT'],
  },
  {
    movieId: 'tm-123',
    movieTitle: 'Trisha Illana Nayanthara',
    indirectClues: ['TEENAGER', 'BREAKUP', 'EGO', 'GIRLFRIEND', 'FLIRT'],
  },
  {
    movieId: 'tm-124',
    movieTitle: '24',
    indirectClues: ['CLOCK', 'WATCH', 'SCIENTIST', 'TWIN', 'TRAVEL'],
  },
  {
    movieId: 'tm-125',
    movieTitle: 'Iru Mugan',
    indirectClues: ['SPY', 'DRUG', 'DUAL', 'EMBASSY', 'MALAYSIA'],
  },
  {
    movieId: 'tm-126',
    movieTitle: 'Achcham Yenbadhu Madamaiyada',
    indirectClues: ['ROADTRIP', 'ACCIDENT', 'GANGSTER', 'PROTECT', 'GIRLFRIEND'],
  },
  {
    movieId: 'tm-127',
    movieTitle: 'Kadhalum Kadandhu Pogum',
    indirectClues: ['ENGINEER', 'NEIGHBOR', 'ROWDY', 'SHOP', 'UNEMPLOYED'],
  },
  {
    movieId: 'tm-128',
    movieTitle: 'Kadavul Irukaan Kumaru',
    indirectClues: ['BACHELOR', 'LIQUOR', 'COP', 'WEDDING', 'PONDICHERRY'],
  },
  {
    movieId: 'tm-129',
    movieTitle: 'Miruthan',
    indirectClues: ['ZOMBIE', 'VIRUS', 'COP', 'ANTIDOTE', 'SISTER'],
  },
  {
    movieId: 'tm-13',
    movieTitle: 'Soorarai Pottru',
    indirectClues: ['AVIATION', 'DREAM', 'TICKET', 'STRUGGLE', 'SKY'],
  },
  {
    movieId: 'tm-130',
    movieTitle: 'Taramani',
    indirectClues: ['MOTHER', 'OFFICE', 'RAIN', 'EGO', 'CORPORATE'],
  },
  {
    movieId: 'tm-131',
    movieTitle: 'Theeran Adhigaaram Ondru',
    indirectClues: ['OFFICER', 'ROBBER', 'HIGHWAY', 'FINGERPRINT', 'BORDER'],
  },
  {
    movieId: 'tm-132',
    movieTitle: 'Aval',
    indirectClues: ['HAUNTED', 'NEIGHBOR', 'POSSESSION', 'CHILD', 'SURGERY'],
  },
  {
    movieId: 'tm-133',
    movieTitle: 'Magalir Mattum',
    indirectClues: ['FRIENDS', 'REUNION', 'WOMEN', 'OFFICE', 'BOSS'],
  },
  {
    movieId: 'tm-134',
    movieTitle: 'Dharala Prabhu',
    indirectClues: ['CLINIC', 'BABY', 'FOOTBALL', 'SECRET', 'MARRIAGE'],
  },
  {
    movieId: 'tm-135',
    movieTitle: 'Ponmagal Vandhal',
    indirectClues: ['OOTY', 'CHILD', 'COURT', 'WITNESS', 'INNOCENT'],
  },
  {
    movieId: 'tm-136',
    movieTitle: 'Kannum Kannum Kollaiyadithaal',
    indirectClues: ['GOA', 'HACKER', 'FAKE', 'DIAMOND', 'TRUST'],
  },
  {
    movieId: 'tm-137',
    movieTitle: 'Oh My Kadavule',
    indirectClues: ['GOD', 'DIVORCE', 'SECOND', 'MAGIC', 'REGRET'],
  },
  {
    movieId: 'tm-138',
    movieTitle: 'Penguin',
    indirectClues: ['PREGNANT', 'MISSING', 'MASK', 'HILL', 'UMBRELLA'],
  },
  {
    movieId: 'tm-139',
    movieTitle: 'Walter',
    indirectClues: ['BABY', 'TOWN', 'TRAFFICKING', 'POLITICIAN', 'HOSPITAL'],
  },
  {
    movieId: 'tm-14',
    movieTitle: 'Jai Bhim',
    indirectClues: ['LAWYER', 'TRIBE', 'CUSTODY', 'TRUTH', 'SEARCH'],
  },
  {
    movieId: 'tm-140',
    movieTitle: 'Utraan',
    indirectClues: ['COLLEGE', 'COP', 'GOON', 'ARREST', 'FATHER'],
  },
  {
    movieId: 'tm-141',
    movieTitle: 'Vidaa Muyarchi',
    indirectClues: ['DESERT', 'CAR', 'WIFE', 'SEARCH', 'DIVORCE'],
  },
  {
    movieId: 'tm-142',
    movieTitle: 'Retro',
    indirectClues: ['GANGSTER', 'PAST', 'WIFE', 'SCAR', 'ISLAND'],
  },
  {
    movieId: 'tm-143',
    movieTitle: 'Thug Life',
    indirectClues: ['GANG', 'ADOPT', 'SON', 'TRUST', 'SHOOTING'],
  },
  {
    movieId: 'tm-144',
    movieTitle: 'Coolie',
    indirectClues: ['PORT', 'GOLD', 'WATCH', 'HOSTEL', 'CRIME'],
  },
  {
    movieId: 'tm-145',
    movieTitle: 'Jana Nayagan',
    indirectClues: ['ELECTION', 'VILLAGE', 'ARMY', 'PRISON', 'LEADER'],
  },
  {
    movieId: 'tm-15',
    movieTitle: 'Vada Chennai',
    indirectClues: ['CARROM', 'PRISON', 'GANG', 'LOYALTY', 'HARBOR'],
  },
  {
    movieId: 'tm-16',
    movieTitle: 'Petta',
    indirectClues: ['HOSTEL', 'WARDEN', 'FLASHBACK', 'SON', 'GANG'],
  },
  {
    movieId: 'tm-17',
    movieTitle: 'Billa',
    indirectClues: ['LOOKALIKE', 'DIAMOND', 'REPLACEMENT', 'SMUGGLING', 'SPY'],
  },
  {
    movieId: 'tm-18',
    movieTitle: 'Doctor',
    indirectClues: ['KIDNAP', 'CHILD', 'MILITARY', 'ORGAN', 'RESCUE'],
  },
  {
    movieId: 'tm-19',
    movieTitle: 'Maanaadu',
    indirectClues: ['LOOP', 'ASSEMBLY', 'RESET', 'ASSASSIN', 'MEETING'],
  },
  {
    movieId: 'tm-20',
    movieTitle: 'Super Deluxe',
    indirectClues: ['MOTHER', 'CONDOM', 'ANCHOR', 'ALIEN', 'IDOL'],
  },
  {
    movieId: 'tm-21',
    movieTitle: 'Pariyerum Perumal',
    indirectClues: ['HORSE', 'DOG', 'COLLEGE', 'BRIDGE', 'LAW'],
  },
  {
    movieId: 'tm-22',
    movieTitle: 'Vikram Vedha',
    indirectClues: ['FABLE', 'COIN', 'CYCLE', 'ENCOUNTER', 'MORAL'],
  },
  {
    movieId: 'tm-23',
    movieTitle: '96',
    indirectClues: ['RAIN', 'PHOTO', 'SCHOOL', 'WAIT', 'MEMORY'],
  },
  {
    movieId: 'tm-24',
    movieTitle: 'Theri',
    indirectClues: ['DAUGHTER', 'BAKERY', 'SCHOOL', 'PAST', 'MASK'],
  },
  {
    movieId: 'tm-25',
    movieTitle: 'Mersal',
    indirectClues: ['MAGIC', 'DOCTOR', 'VILLAGE', 'SCAM', 'STAGE'],
  },
  {
    movieId: 'tm-26',
    movieTitle: 'Bigil',
    indirectClues: ['FOOTBALL', 'COACH', 'GOAL', 'WOMEN', 'BROTHER'],
  },
  {
    movieId: 'tm-27',
    movieTitle: 'Ayan',
    indirectClues: ['DIAMOND', 'CONGO', 'CUSTOMS', 'CARGO', 'PLANE'],
  },
  {
    movieId: 'tm-28',
    movieTitle: 'Singam',
    indirectClues: ['VILLAGE', 'TRANSFER', 'COP', 'ROWDY', 'PRIDE'],
  },
  {
    movieId: 'tm-29',
    movieTitle: 'Ghajini',
    indirectClues: ['FORGET', 'TATTOO', 'NOTE', 'REVENGE', 'PHOTO'],
  },
  {
    movieId: 'tm-30',
    movieTitle: 'Pudhupettai',
    indirectClues: ['STREET', 'GANG', 'POLITICS', 'RISE', 'KNIFE'],
  },
  {
    movieId: 'tm-31',
    movieTitle: 'Karnan',
    indirectClues: ['BUS', 'VILLAGE', 'SWORD', 'GODDESS', 'STATUE'],
  },
  {
    movieId: 'tm-32',
    movieTitle: 'I',
    indirectClues: ['BODYBUILDER', 'MODEL', 'VIRUS', 'REVENGE', 'ACID'],
  },
  {
    movieId: 'tm-33',
    movieTitle: 'Aadukalam',
    indirectClues: ['ROOSTER', 'CONTEST', 'BET', 'MADURAI', 'ARENA'],
  },
  {
    movieId: 'tm-34',
    movieTitle: 'Arundhati',
    indirectClues: ['FORT', 'ANCESTOR', 'CURSE', 'JEWEL', 'REBIRTH'],
  },
  {
    movieId: 'tm-35',
    movieTitle: 'Ponniyin Selvan: I',
    indirectClues: ['CHOLA', 'PRINCE', 'SHIP', 'RIVER', 'CROWN'],
  },
  {
    movieId: 'tm-36',
    movieTitle: 'Gargi',
    indirectClues: ['COURT', 'FATHER', 'ACCUSED', 'CHILD', 'LAWYER'],
  },
  {
    movieId: 'tm-37',
    movieTitle: 'Kolamaavu Kokila',
    indirectClues: ['DRUGS', 'CANCER', 'MOTHER', 'COURIER', 'CHASE'],
  },
  {
    movieId: 'tm-38',
    movieTitle: 'Vinnaithaandi Varuvaayaa',
    indirectClues: ['CHRISTIAN', 'FILMMAKER', 'USA', 'WAIT', 'RAIN'],
  },
  {
    movieId: 'tm-39',
    movieTitle: 'Good Night',
    indirectClues: ['SNORING', 'ROOFTOP', 'MARRIAGE', 'RECORD', 'DOCTOR'],
  },
  {
    movieId: 'tm-40',
    movieTitle: 'Por Thozhil',
    indirectClues: ['SERIAL', 'TRAINEE', 'WIRE', 'TRICHY', 'WOODS'],
  },
  {
    movieId: 'tm-41',
    movieTitle: 'Chithha',
    indirectClues: ['NIECE', 'MISSING', 'ACCUSED', 'SEARCH', 'RESCUE'],
  },
  {
    movieId: 'tm-42',
    movieTitle: 'Amaran',
    indirectClues: ['ARMY', 'KASHMIR', 'MEDAL', 'COLLEGE', 'WIDOW'],
  },
  {
    movieId: 'tm-43',
    movieTitle: 'Meiyazhagan',
    indirectClues: ['WEDDING', 'BICYCLE', 'BULL', 'TRAIN', 'ANCESTRAL'],
  },
  {
    movieId: 'tm-44',
    movieTitle: 'Maharaja',
    indirectClues: ['DUSTBIN', 'BARBER', 'TRUCK', 'BRIBE', 'ACCIDENT'],
  },
  {
    movieId: 'tm-45',
    movieTitle: 'Lover',
    indirectClues: ['ALCOHOL', 'CAFE', 'BREAKUP', 'BEACH', 'EGO'],
  },
  {
    movieId: 'tm-46',
    movieTitle: 'Vettaiyan',
    indirectClues: ['ENCOUNTER', 'TEACHER', 'INFORMER', 'COURT', 'DRUGS'],
  },
  {
    movieId: 'tm-47',
    movieTitle: 'The Greatest of All Time',
    indirectClues: ['AGENT', 'CLONE', 'STADIUM', 'SON', 'VACATION'],
  },
  {
    movieId: 'tm-48',
    movieTitle: 'Kottukkaali',
    indirectClues: ['ROOSTER', 'SHRINE', 'SILENCE', 'SPIRIT', 'ROAD'],
  },
  {
    movieId: 'tm-49',
    movieTitle: 'Vaaranam Aayiram',
    indirectClues: ['FATHER', 'ARMY', 'TRAIN', 'GUITAR', 'PHOTO'],
  },
  {
    movieId: 'tm-50',
    movieTitle: 'Papanasam',
    indirectClues: ['CABLE', 'ALIBI', 'SHOP', 'COVERUP', 'DAUGHTER'],
  },
  {
    movieId: 'tm-51',
    movieTitle: 'Hey Ram',
    indirectClues: ['PARTITION', 'ASSASSIN', 'RIOT', 'TRAIN', 'MURDER'],
  },
  {
    movieId: 'tm-52',
    movieTitle: 'Alaipayuthey',
    indirectClues: ['MARRIAGE', 'TRAIN', 'SECRET', 'ARGUMENT', 'CHENNAI'],
  },
  {
    movieId: 'tm-53',
    movieTitle: 'Kushi',
    indirectClues: ['COLLEGE', 'EGO', 'CRUSH', 'MISUNDERSTANDING', 'REUNION'],
  },
  {
    movieId: 'tm-54',
    movieTitle: 'Thenali',
    indirectClues: ['PHOBIA', 'PSYCHIATRIST', 'SRILANKA', 'VACATION', 'SNAKE'],
  },
  {
    movieId: 'tm-55',
    movieTitle: 'Kannukkul Nilavu',
    indirectClues: ['AMNESIA', 'PONDICHERRY', 'PSYCHOLOGIST', 'MEMORY', 'ACCIDENT'],
  },
  {
    movieId: 'tm-56',
    movieTitle: 'Vaanathaippola',
    indirectClues: ['COOK', 'GRANDMOTHER', 'WEDDING', 'SACRIFICE', 'ELDER'],
  },
  {
    movieId: 'tm-57',
    movieTitle: 'Appu',
    indirectClues: ['TAXI', 'BROTHEL', 'MUMBAI', 'RESCUE', 'DEBT'],
  },
  {
    movieId: 'tm-58',
    movieTitle: 'Parthen Rasithen',
    indirectClues: ['BUS', 'TENANT', 'POISON', 'STRIKE', 'SAREE'],
  },
  {
    movieId: 'tm-59',
    movieTitle: 'Dheena',
    indirectClues: ['GANGSTER', 'REVENGE', 'KILLER', 'ADOPTED', 'LOYALTY'],
  },
  {
    movieId: 'tm-60',
    movieTitle: 'Gemini',
    indirectClues: ['PAAN', 'REFORM', 'RIVAL', 'COLLEGE', 'ROWDY'],
  },
  {
    movieId: 'tm-61',
    movieTitle: 'Ramanaa',
    indirectClues: ['PROFESSOR', 'CORRUPTION', 'STUDENTS', 'KIDNAP', 'PUNISH'],
  },
  {
    movieId: 'tm-62',
    movieTitle: 'Kaakha Kaakha',
    indirectClues: ['GANGSTER', 'WIFE', 'REVENGE', 'SQUAD', 'TEACHER'],
  },
  {
    movieId: 'tm-63',
    movieTitle: 'Anbe Sivam',
    indirectClues: ['JOURNEY', 'BUS', 'ACCIDENT', 'LIMP', 'HUMANITY'],
  },
  {
    movieId: 'tm-64',
    movieTitle: 'Saamy',
    indirectClues: ['BRIBE', 'TEMPLE', 'POLITICIAN', 'JUSTICE', 'PRAYER'],
  },
  {
    movieId: 'tm-65',
    movieTitle: 'Chokka Thangam',
    indirectClues: ['MILL', 'SISTER', 'MARRIAGE', 'RESCUE', 'ORPHAN'],
  },
  {
    movieId: 'tm-66',
    movieTitle: 'Dum',
    indirectClues: ['CONSTABLE', 'BLOOD', 'COLLEGE', 'COMMISSIONER', 'IPS'],
  },
  {
    movieId: 'tm-67',
    movieTitle: 'Winner',
    indirectClues: ['GRANDPARENTS', 'LANDLORD', 'KIDNAP', 'WEDDING', 'ENGINEERING'],
  },
  {
    movieId: 'tm-68',
    movieTitle: 'Autograph',
    indirectClues: ['BOOK', 'SCHOOL', 'COLLEGE', 'MEMORY', 'JOURNEY'],
  },
  {
    movieId: 'tm-69',
    movieTitle: 'Perazhagan',
    indirectClues: ['HUNCHBACK', 'DOUBLE', 'BLIND', 'COLLEGE', 'BOOTH'],
  },
  {
    movieId: 'tm-70',
    movieTitle: 'Virumaandi',
    indirectClues: ['BULL', 'PRISON', 'MURDER', 'INTERVIEW', 'FEUD'],
  },
  {
    movieId: 'tm-71',
    movieTitle: 'Vasool Raja MBBS',
    indirectClues: ['DON', 'MEDICAL', 'FATHER', 'HOSPITAL', 'COLLEGE'],
  },
  {
    movieId: 'tm-72',
    movieTitle: 'Kovil',
    indirectClues: ['NUN', 'CYCLE', 'ADOPTED', 'FEUD', 'COLLEGE'],
  },
  {
    movieId: 'tm-73',
    movieTitle: 'Arul',
    indirectClues: ['TRUCK', 'GOLDSMITH', 'EXILE', 'REUNION', 'CHAIN'],
  },
  {
    movieId: 'tm-74',
    movieTitle: 'Chandramukhi',
    indirectClues: ['MANSION', 'GHOST', 'DANCER', 'LOCKED', 'KING'],
  },
  {
    movieId: 'tm-75',
    movieTitle: 'Thirupaachi',
    indirectClues: ['SISTER', 'CHENNAI', 'WEAPON', 'ROWDY', 'FORGE'],
  },
  {
    movieId: 'tm-76',
    movieTitle: 'Sivakasi',
    indirectClues: ['FACTORY', 'FIREWORKS', 'FIRE', 'RIVAL', 'ESCAPE'],
  },
  {
    movieId: 'tm-77',
    movieTitle: 'Sandakozhi',
    indirectClues: ['TRAIN', 'WEDDING', 'FEUD', 'DON', 'PROTECT'],
  },
  {
    movieId: 'tm-78',
    movieTitle: 'Sachein',
    indirectClues: ['COLLEGE', 'CHALLENGE', 'WALL', 'BIKE', 'ARRANGED'],
  },
  {
    movieId: 'tm-79',
    movieTitle: 'Aaru',
    indirectClues: ['HENCHMAN', 'BETRAYAL', 'FIRE', 'PROTEST', 'CHENNAI'],
  },
  {
    movieId: 'tm-80',
    movieTitle: 'Varalaru',
    indirectClues: ['WHEELCHAIR', 'FATHER', 'LOOKALIKE', 'IMPERSONATE', 'PAST'],
  },
  {
    movieId: 'tm-81',
    movieTitle: 'Vettaiyaadu Vilaiyaadu',
    indirectClues: ['SERIAL', 'NEWYORK', 'WIDOWER', 'DUAL', 'DETECTIVE'],
  },
  {
    movieId: 'tm-82',
    movieTitle: 'Sillunu Oru Kaadhal',
    indirectClues: ['DIARY', 'PAST', 'COLLEGE', 'LETTER', 'REGRET'],
  },
  {
    movieId: 'tm-83',
    movieTitle: 'Thimiru',
    indirectClues: ['MEDICAL', 'MONEYLENDER', 'BROTHERS', 'CHENNAI', 'PAST'],
  },
  {
    movieId: 'tm-84',
    movieTitle: 'Unakkum Enakkum',
    indirectClues: ['AUSTRALIA', 'VILLAGE', 'FARM', 'PRIDE', 'CHALLENGE'],
  },
  {
    movieId: 'tm-85',
    movieTitle: 'Vallavan',
    indirectClues: ['COLLEGE', 'TEACHER', 'OBSESSION', 'PAST', 'REJECTION'],
  },
  {
    movieId: 'tm-86',
    movieTitle: 'Veyil',
    indirectClues: ['RUNAWAY', 'THEATRE', 'SUICIDE', 'RETURN', 'GUILT'],
  },
  {
    movieId: 'tm-87',
    movieTitle: 'Paruthiveeran',
    indirectClues: ['CASTE', 'COUSIN', 'TRAGEDY', 'KIDNAP', 'VILLAGE'],
  },
  {
    movieId: 'tm-88',
    movieTitle: 'Imsai Arasan 23rd Pulikecei',
    indirectClues: ['KING', 'TWIN', 'BRITISH', 'MINISTER', 'CROWN'],
  },
  {
    movieId: 'tm-89',
    movieTitle: 'Pokkiri',
    indirectClues: ['UNDERCOVER', 'GANG', 'IDENTITY', 'AMBUSH', 'GIRLFRIEND'],
  },
  {
    movieId: 'tm-90',
    movieTitle: 'Vel',
    indirectClues: ['TEMPLE', 'VILLAGE', 'FATHER', 'DISGUISE', 'SEPARATED'],
  },
  {
    movieId: 'tm-91',
    movieTitle: 'Unnale Unnale',
    indirectClues: ['FLIGHT', 'MELBOURNE', 'JEALOUSY', 'EX', 'BOSS'],
  },
  {
    movieId: 'tm-92',
    movieTitle: 'Mozhi',
    indirectClues: ['DEAF', 'MUSIC', 'SIGN', 'SILENCE', 'HELP'],
  },
  {
    movieId: 'tm-93',
    movieTitle: 'Polladhavan',
    indirectClues: ['BIKE', 'GANGSTER', 'FATHER', 'THEFT', 'LOAN'],
  },
  {
    movieId: 'tm-94',
    movieTitle: 'Chennai 600028',
    indirectClues: ['CRICKET', 'TEAM', 'STREET', 'RIVALRY', 'MATCH'],
  },
  {
    movieId: 'tm-95',
    movieTitle: 'Dasavatharam',
    indirectClues: ['VIRUS', 'TSUNAMI', 'IDOL', 'SCIENTIST', 'AVATAR'],
  },
  {
    movieId: 'tm-96',
    movieTitle: 'Subramaniapuram',
    indirectClues: ['ROWDY', 'CYCLE', 'BETRAYAL', 'SENTENCE', 'STREET'],
  },
  {
    movieId: 'tm-97',
    movieTitle: 'Santosh Subramaniam',
    indirectClues: ['FATHER', 'BRIDE', 'ALBUM', 'FREEDOM', 'CONTROL'],
  },
  {
    movieId: 'tm-98',
    movieTitle: 'Saroja',
    indirectClues: ['ROAD', 'CRICKET', 'FACTORY', 'KIDNAP', 'CAR'],
  },
  {
    movieId: 'tm-99',
    movieTitle: 'Abhiyum Naanum',
    indirectClues: ['FATHER', 'DAUGHTER', 'WEDDING', 'DIARY', 'BABY'],
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