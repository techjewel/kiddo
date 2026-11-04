/* ============================================================
   Magnet Board — letters and numbers on a fridge door.
   No build step, no dependencies. Open index.html and go.
   ============================================================ */

/* ---------- Content: the alphabets ---------------------------
   One row per letter — the letter, the word it starts, and a picture
   of that word. Every language on this board is a list of that shape
   and nothing else, which is what makes "add a language" something you
   do to the data rather than a screen somebody has to build.
   -------------------------------------------------------------- */

const ALPHABETS = {};

ALPHABETS.en = [
  ['A', 'Apple',      '🍎'], ['B', 'Ball',       '⚽'],
  ['C', 'Cat',        '🐱'], ['D', 'Dog',        '🐶'],
  ['E', 'Elephant',   '🐘'], ['F', 'Fish',       '🐟'],
  ['G', 'Goat',       '🐐'], ['H', 'Hat',        '🎩'],
  ['I', 'Ice cream',  '🍦'], ['J', 'Juice',      '🧃'],
  ['K', 'Kite',       '🪁'], ['L', 'Lion',       '🦁'],
  ['M', 'Moon',       '🌙'], ['N', 'Nest',       '🪺'],
  ['O', 'Orange',     '🍊'], ['P', 'Panda',      '🐼'],
  ['Q', 'Queen',      '👸'], ['R', 'Rainbow',    '🌈'],
  ['S', 'Sun',        '☀️'], ['T', 'Tree',       '🌳'],
  ['U', 'Umbrella',   '☂️'], ['V', 'Violin',     '🎻'],
  ['W', 'Watermelon', '🍉'], ['X', 'Xylophone',  '🎵'],
  ['Y', 'Yo-yo',      '🪀'], ['Z', 'Zebra',      '🦓'],
];

/* বর্ণমালা — eleven স্বরবর্ণ, then the ব্যঞ্জনবর্ণ in chart order. The
   second column is the word the letter starts, the way A is for Apple,
   and both the letter and the word are recorded: see
   sounds/bangla/letters/.

   Two absences are deliberate. ং, ঃ and ঁ are on the wall chart but are
   marks, not letters — none of them starts a word, none can be said on
   its own, and there is no recording of one anywhere, because there is
   nothing to record. And eight letters here never begin a word a small
   child meets: ঙ, ঞ, ণ, য, ড়, ঢ়, য় and ৎ sit inside words, so they
   carry no second column and the panel gives the letter alone rather
   than a word no child will meet. Making one up would teach the wrong
   thing more confidently. */
ALPHABETS.bn = [
  ['অ', 'অজগর', '🐍'], ['আ', 'আম',    '🥭'], ['ই', 'ইঁদুর',  '🐭'],
  ['ঈ', 'ঈগল',  '🦅'], ['উ', 'উট',    '🐫'], ['ঊ', 'ঊষা',    '🌅'],
  ['ঋ', 'ঋষি',  '🧘'], ['এ', 'একতারা', '🪕'], ['ঐ', 'ঐরাবত',  '🐘'],
  ['ও', 'ওল',   '🍠'], ['ঔ', 'ঔষধ',   '💊'],

  ['ক', 'কলা',   '🍌'], ['খ', 'খরগোশ', '🐰'], ['গ', 'গরু',   '🐄'],
  ['ঘ', 'ঘড়ি',  '⏰'], ['ঙ'],
  ['চ', 'চাঁদ',  '🌙'], ['ছ', 'ছাতা',  '☂️'], ['জ', 'জাহাজ', '🚢'],
  ['ঝ', 'ঝুড়ি', '🧺'], ['ঞ'],
  ['ট', 'টমেটো', '🍅'], ['ঠ', 'ঠোঁট',  '👄'], ['ড', 'ডিম',   '🥚'],
  ['ঢ', 'ঢোল',  '🥁'], ['ণ'],
  ['ত', 'তারা',  '⭐'], ['থ', 'থালা',  '🍽️'], ['দ', 'দরজা',  '🚪'],
  ['ধ', 'ধান',  '🌾'], ['ন', 'নৌকা',  '🛶'],
  ['প', 'পাখি',  '🐦'], ['ফ', 'ফুল',   '🌸'], ['ব', 'বই',    '📕'],
  ['ভ', 'ভালুক', '🐻'], ['ম', 'মাছ',   '🐟'],
  ['য'],
  ['র', 'রাজা',  '🤴'], ['ল', 'লেবু',  '🍋'], ['শ', 'শিয়াল', '🦊'],
  ['ষ', 'ষাঁড়', '🐂'], ['স', 'সূর্য',  '☀️'], ['হ', 'হাতি',  '🐘'],
  ['ড়'], ['ঢ়'], ['য়'], ['ৎ'],
];

/* Twenty-seven letters: the Latin twenty-six with Ñ after N, which is
   how the Real Academia has counted them since 2010 — CH and LL came
   out of the alphabet, Ñ stayed in it. W is a borrowed letter in
   Spanish and every chart has to reach for a foreign word; "wifi" is
   at least a foreign word a child hears in this house. */
ALPHABETS.es = [
  ['A', 'Abeja',     '🐝'], ['B', 'Barco',     '🚢'],
  ['C', 'Casa',      '🏠'], ['D', 'Dado',      '🎲'],
  ['E', 'Elefante',  '🐘'], ['F', 'Flor',      '🌸'],
  ['G', 'Gato',      '🐱'], ['H', 'Helado',    '🍦'],
  ['I', 'Isla',      '🏝️'], ['J', 'Jirafa',    '🦒'],
  ['K', 'Koala',     '🐨'], ['L', 'León',      '🦁'],
  ['M', 'Mano',      '✋'], ['N', 'Nube',      '☁️'],
  ['Ñ', 'Ñu',        '🐃'], ['O', 'Oso',       '🐻'],
  ['P', 'Pez',       '🐟'], ['Q', 'Queso',     '🧀'],
  ['R', 'Rana',      '🐸'], ['S', 'Sol',       '☀️'],
  ['T', 'Tren',      '🚂'], ['U', 'Uvas',      '🍇'],
  ['V', 'Vaca',      '🐄'], ['W', 'Wifi',      '📶'],
  ['X', 'Xilófono',  '🎵'], ['Y', 'Yoyó',      '🪀'],
  ['Z', 'Zapato',    '👟'],
];

/* Twenty-six, the same set as English. Q and U are the two letters
   every French chart has to work at: a quille is a skittle and a usine
   a factory, both of them things a finger can point at, which is the
   rule the rest of this list follows too. */
ALPHABETS.fr = [
  ['A', 'Avion',     '✈️'], ['B', 'Ballon',    '⚽'],
  ['C', 'Chat',      '🐱'], ['D', 'Dauphin',   '🐬'],
  ['E', 'Éléphant',  '🐘'], ['F', 'Fleur',     '🌸'],
  ['G', 'Gâteau',    '🎂'], ['H', 'Hibou',     '🦉'],
  ['I', 'Île',       '🏝️'], ['J', 'Jardin',    '🌷'],
  ['K', 'Koala',     '🐨'], ['L', 'Lion',      '🦁'],
  ['M', 'Maison',    '🏠'], ['N', 'Nuage',     '☁️'],
  ['O', 'Oiseau',    '🐦'], ['P', 'Poisson',   '🐟'],
  ['Q', 'Quille',    '🎳'], ['R', 'Renard',    '🦊'],
  ['S', 'Soleil',    '☀️'], ['T', 'Tortue',    '🐢'],
  ['U', 'Usine',     '🏭'], ['V', 'Vache',     '🐄'],
  ['W', 'Wagon',     '🚃'], ['X', 'Xylophone', '🎵'],
  ['Y', 'Yaourt',    '🥛'], ['Z', 'Zèbre',     '🦓'],
];

/* Twenty-eight letters in dictionary order, أ to ي. A tile shows the
   isolated form, and the second column is the letter's name — ألف,
   باء, تاء — not a word it starts. Arabic TTS reading أ as a glottal
   stop teaches nothing; the name is the lesson. */
ALPHABETS.ar = [
  ['أ', 'ألف'],  ['ب', 'باء'],
  ['ت', 'تاء'],  ['ث', 'ثاء'],
  ['ج', 'جيم'],  ['ح', 'حاء'],
  ['خ', 'خاء'],  ['د', 'دال'],
  ['ذ', 'ذال'],  ['ر', 'راء'],
  ['ز', 'زاي'],  ['س', 'سين'],
  ['ش', 'شين'],  ['ص', 'صاد'],
  ['ض', 'ضاد'],  ['ط', 'طاء'],
  ['ظ', 'ظاء'],  ['ع', 'عين'],
  ['غ', 'غين'],  ['ف', 'فاء'],
  ['ق', 'قاف'],  ['ك', 'كاف'],
  ['ل', 'لام'],  ['م', 'ميم'],
  ['ن', 'نون'],  ['ه', 'هاء'],
  ['و', 'واو'],  ['ي', 'ياء'],
];

/* The same 28 names in English letters, for the grown-up reading over
   his shoulder. Plain spellings a parent can say. The two pairs that
   would otherwise read the same carry a dot: ت is Ta and ط is Ṭa, ه is
   Ha and ح is Ḥa — the dot marks the heavier, deeper sound. Kept beside
   ALPHABETS.ar rather than as a third column there, because a third
   column on an alphabet row is its emoji. */
const ARABIC_LATIN = [
  'Alif', 'Ba', 'Ta', 'Tha', 'Jeem', 'Ḥa', 'Kha', 'Dal',
  'Dhal', 'Ra', 'Zay', 'Seen', 'Sheen', 'Sad', 'Dad', 'Ṭa',
  'Dha', 'Ain', 'Ghain', 'Fa', 'Qaf', 'Kaf', 'Lam', 'Meem',
  'Noon', 'Ha', 'Waw', 'Ya',
];

/* ---------- Content: the numbers ------------------------------
   One to twenty, named. The numerals themselves are built rather than
   listed — every script here writes them with the same positional
   system, and twenty hand-typed strings is twenty chances to mistype ৯
   for ৮. The names have to be listed: they aren't derivable, since
   এগারো through আঠারো, and eleven through nineteen, are their own words.
   -------------------------------------------------------------- */

const NUMBER_NAMES = {
  en: [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
  ],
  bn: [
    '', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়',
    'দশ', 'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো',
    'ষোলো', 'সতেরো', 'আঠারো', 'উনিশ', 'বিশ',
  ],
  es: [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince',
    'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte',
  ],
  fr: [
    '', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf',
    'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze',
    'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
  ],
  ar: [
    '', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة',
    'عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر',
    'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر', 'عشرون',
  ],
};

/* What gets counted out under a numeral. Deliberately the same in every
   language: quantity is the part that does not change between scripts,
   so it should not look like it has. */
const NUMBER_EMOJI = [
  '', '🍎', '🐝', '🐟', '🌸', '⭐', '🍓', '🦋', '🐧', '🍇', '🐢',
  '🌵', '🥕', '🍄', '🐬', '🍋', '🐞', '🌻', '🐙', '🍒', '🎈',
];

/* One row of digit faces per script that has its own. Both of these
   write numbers with the same positional system as Latin, so ১৭ and
   ١٧ are derived from 17 rather than listed — twenty hand-typed
   strings per script is twenty chances to mistype ৯ for ৮. */
const SCRIPT_DIGITS = {
  bangla: '০১২৩৪৫৬৭৮৯',
  arabic: '٠١٢٣٤٥٦٧٨٩',
};

const numeralIn = (script, n) =>
  String(n).replace(/\d/g, (d) => SCRIPT_DIGITS[script][+d]);

/* The name is the whole lesson here — he is collecting the word, and a
   sentence after it is one more thing to sit through before the next tap. */
const FRUITS = [
  ['Apple',       '🍎'], ['Banana',      '🍌'],
  ['Orange',      '🍊'], ['Grapes',      '🍇'],
  ['Strawberry',  '🍓'], ['Watermelon',  '🍉'],
  ['Pineapple',   '🍍'], ['Mango',       '🥭'],
  ['Peach',       '🍑'], ['Pear',        '🍐'],
  ['Cherries',    '🍒'], ['Lemon',       '🍋'],
  ['Kiwi',        '🥝'], ['Coconut',     '🥥'],
  ['Melon',       '🍈'], ['Blueberries', '🫐'],
  ['Avocado',     '🥑'], ['Tomato',      '🍅'],
  ['Guava',        '🍏'], ['Pomegranate', '🟠'],
  ['Pumpkin',      '🎃'],
  /* Same rule as the pumpkin: append only. Inserting would recolour
     every fruit after the new one, and he knows those tiles by colour. */
  ['Jackfruit',    '🟡'],
  ['Papaya',       '🧡'],
  ['Lychee',       '🔴'],
];

/* Bangladeshi kitchen vegetables. English name + emoji stay the photo
   slug and the game's ask-word; the third entry is the Bangla kitchen
   name shown and spoken when the board is set to বাংলা. Append-only if
   this list grows — same colour rule as fruit. */
const VEGETABLES = [
  ['Eggplant',       '🍆', { bn: 'বেগুন' }],
  ['Okra',           '🟢', { bn: 'ঢেঁড়স' }],
  ['Potato',         '🥔', { bn: 'আলু' }],
  ['Cauliflower',    '🤍', { bn: 'ফুলকপি' }],
  ['Cabbage',        '🥬', { bn: 'বাঁধাকপি' }],
  ['Cucumber',       '🥒', { bn: 'শসা' }],
  ['Carrot',         '🥕', { bn: 'গাজর' }],
  ['Radish',         '⚪', { bn: 'মুলা' }],
  ['Bottle Gourd',   '🍈', { bn: 'লাউ' }],
  ['Bitter Gourd',   '🟢', { bn: 'করলা' }],
  ['Green Chili',    '🌶️', { bn: 'কাঁচা মরিচ' }],
  ['Bean',           '🫛', { bn: 'শিম' }],
];

/* Everyday kids' clothes, English names. Same board language as fruit
   and vegetables. Append-only if the shelf grows. */
const CLOTHES = [
  ['T-shirt',  '👕'],
  ['Shirt',    '👔'],
  ['Pants',    '👖'],
  ['Shorts',   '🩳'],
  ['Dress',    '👗'],
  ['Cap',      '🧢'],
  ['Hat',      '👒'],
  ['Shoe',     '👟'],
  ['Sandal',   '👡'],
  ['Sock',     '🧦'],
  ['Jacket',   '🧥'],
  ['Sweater',  '🧶'],
];

/* Transport and vehicles kids see every day, English names. Same board
   language as fruit, vegetables and clothes. */
const VEHICLES = [
  ['Car',          '🚗'],
  ['Bus',          '🚌'],
  ['Truck',        '🚚'],
  ['Van',          '🚐'],
  ['Bike',         '🚲'],
  ['Motorbike',    '🏍️'],
  ['Rickshaw',     '🛺'],
  ['Train',        '🚆'],
  ['Plane',        '✈️'],
  ['Boat',         '⛵'],
  ['Ship',         '🚢'],
  ['Helicopter',   '🚁'],
  ['Ambulance',    '🚑'],
  ['Fire Truck',   '🚒'],
  ['Tractor',      '🚜'],
  ['Scooter',      '🛴'],
];

/* The third column is the noise itself, not a sentence about it. Where a
   real recording exists it plays that instead — the written noise is for
   the panel, and is only spoken by the ones with no recording. The ones
   that make no noise a child can say leave it empty. */
const ANIMALS = [
  ['Cat',      '🐱', 'Meow.'],
  ['Dog',      '🐶', 'Woof woof.'],
  ['Cow',      '🐮', 'Moo.'],
  ['Sheep',    '🐑', 'Baa.'],
  ['Goat',     '🐐', 'Maa.'],
  ['Pig',      '🐷', 'Oink oink.'],
  ['Horse',    '🐴', 'Neigh.'],
  ['Frog',     '🐸', 'Ribbit.'],
  ['Bee',      '🐝', 'Buzz.'],
  ['Mouse',    '🐭', 'Squeak.'],
  ['Snake',    '🐍', 'Hiss.'],
  ['Lion',     '🦁', 'Roar!'],
  ['Tiger',    '🐯', 'Grrr!'],
  ['Elephant', '🐘', 'Pawoo!'],
  ['Monkey',   '🐵', 'Ooh ooh aah aah.'],
  ['Rabbit',   '🐰'],
  ['Turtle',   '🐢'],
  /* P is for Panda on the letter board, F is for Fish and Z is for Zebra, and
     a child who meets an animal on one screen should find it on the shelf
     where the animals live. Appended rather than slotted in beside the other
     wild ones: `seedFor` is the position in this list, so inserting in the
     middle would repaint and re-tilt every animal after it, and he knows
     these tiles by colour. The panda and the zebra now have recordings;
     the fish still has none a child says back. */
  ['Panda',    '🐼'],
  ['Zebra',    '🦓'],
  ['Fish',     '🐟'],
  /* Same rule: append only. A donkey, a bear and a fox keep the colours
     he already knows on the tiles above them. */
  ['Donkey',   '🫏', 'Hee-haw.'],
  ['Bear',     '🐻', 'Grrr.'],
  ['Fox',      '🦊', 'Yip yip.'],
];

/* Birds get their own shelf, and the duck, the chicken, the owl and the
   penguin moved onto it — a shelf a child browses has to mean what it says,
   and the four of them were the only birds on the animal one. Their three
   recordings came with them; nothing about a duck changed except which tab
   it sits behind.

   Same third column, same rule: the noise itself, and only where a child can
   say it back. A peacock's scream and an eagle's cry are not sounds a
   three-year-old repeats, so those birds give their name and stop. */
const BIRDS = [
  ['Crow',       '🐦‍⬛', 'Caw caw.'],
  ['Pigeon',     '🕊️', 'Coo coo.'],
  ['Sparrow',    '🐦', 'Chirp chirp.'],
  ['Duck',       '🦆', 'Quack quack.'],
  ['Chicken',    '🐔', 'Cluck cluck.'],
  ['Parrot',     '🦜'],
  ['Myna',       '🐦'],
  ['Owl',        '🦉', 'Hoot hoot.'],
  ['Cuckoo',     '🐦', 'Cuckoo! Cuckoo!'],
  ['Woodpecker', '🐦', 'Tap tap tap.'],
  ['Kingfisher', '🐦'],
  ['Peacock',    '🦚'],
  ['Eagle',      '🦅'],
  ['Swan',       '🦢'],
  ['Flamingo',   '🦩'],
  ['Penguin',    '🐧'],
  ['Ostrich',    '🐦'],
  ['Goose',      '🪿', 'Honk honk.'],
  ['Turkey',     '🦃', 'Gobble gobble.'],
];

/* Things in the house. A chair is just a chair, and it has nothing to say
   for itself — the voice gives the name and stops. */
const HOUSEHOLD = [
  ['Chair',      '🪑'], ['Table',      '🍽️'],
  ['Bed',        '🛏️'], ['Pillow',     '🛌'],
  ['Sofa',       '🛋️'], ['Lamp',       '💡'],
  ['Clock',      '⏰'], ['Door',       '🚪'],
  ['Window',     '🪟'], ['Mirror',     '🪞'],
  ['Television', '📺'], ['Fan',        '🌀'],
  ['Spoon',      '🥄'], ['Fork',       '🍴'],
  ['Plate',      '🍽️'], ['Cup',        '☕'],
  ['Bowl',       '🥣'], ['Bottle',     '🧴'],
  ['Kettle',     '🫖'], ['Fridge',     '🧊'],
  ['Toothbrush', '🪥'], ['Soap',       '🧼'],
  ['Towel',      '🧖'], ['Comb',       '🪮'],
  ['Broom',      '🧹'], ['Bucket',     '🪣'],
  ['Key',        '🔑'], ['Scissors',   '✂️'],
  ['Book',       '📕'], ['Shoe',       '👟'],
  ['Umbrella',   '☂️'], ['Basket',     '🧺'],
];

/* Flowers earn their own shelf because a child meets them by name and
   nothing else — he is not going to check the petal count, he is going to
   point at the red one in the garden and say hibiscus. */
const FLOWERS = [
  ['Rose',      '🌹'], ['Sunflower', '🌻'],
  ['Tulip',     '🌷'], ['Daisy',     '🌼'],
  ['Lily',      '🪷'], ['Lotus',     '🪷'],
  ['Marigold',  '🌼'], ['Hibiscus',  '🌺'],
  ['Jasmine',   '🤍'], ['Orchid',    '🌸'],
  ['Daffodil',  '🌼'], ['Lavender',  '💜'],
];

/* People with jobs — the shelf he asked for, because a three-year-old
   meets these before he meets a flamingo: the doctor who looks in his
   ear, the man on the ladder outside, the woman driving the fire engine.

   The third column earns its place here in a way it doesn't on the fruit
   shelf. "Plumber" is a sound, not a picture; what makes it stick is what
   a plumber does, said in one short sentence a child can repeat. Every
   line is the job, not the person — no "he", no "she", because the
   photograph is one plumber and the word is all of them. */
const PROFESSIONS = [
  ['Doctor',         '🩺', 'A doctor helps you get better.'],
  ['Nurse',          '💉', 'A nurse takes care of you.'],
  ['Teacher',        '🍎', 'A teacher shows you how to read.'],
  ['Dentist',        '🦷', 'A dentist looks after your teeth.'],
  ['Firefighter',    '🚒', 'A firefighter puts out fires.'],
  ['Police Officer', '🚓', 'A police officer keeps us safe.'],
  ['Pilot',          '✈️', 'A pilot flies the aeroplane.'],
  ['Farmer',         '🚜', 'A farmer grows our food.'],
  ['Chef',           '🍳', 'A chef cooks the food.'],
  ['Engineer',       '⚙️', 'An engineer builds machines and bridges.'],
  ['Plumber',        '🔧', 'A plumber mends the pipes.'],
  ['Carpenter',      '🪚', 'A carpenter makes things out of wood.'],
  ['Electrician',    '💡', 'An electrician mends the wires.'],
  ['Mechanic',       '🔩', 'A mechanic fixes the car.'],
  ['Painter',        '🖌️', 'A painter paints the walls.'],
  ['Barber',         '✂️', 'A barber cuts your hair.'],
  ['Fisherman',      '🎣', 'A fisherman catches the fish.'],
  ['Scientist',      '🔬', 'A scientist finds out how things work.'],
  ['Astronaut',      '🚀', 'An astronaut flies up into space.'],
];

/* Each colour carries two values. `hex` is the true colour and fills the
   swatch — no gradient over it, or the child learns the wrong colour.
   `ink` is a darkened version used for the name, which has to stay
   readable on a cream card. `on` says whether the tile's own label
   should be light or dark. Examples lean on the fruit he already knows. */
const COLORS = [
  { name: 'Red',    hex: '#E23B32', ink: '#BF241C', on: 'light', pics: ['🍓', '🚒', '🍎'],
    line: 'Like a strawberry, a fire engine and an apple.' },
  { name: 'Orange', hex: '#F58220', ink: '#B85E06', on: 'light', pics: ['🍊', '🥕', '🏀'],
    line: 'Like an orange, a carrot and a basketball.' },
  { name: 'Yellow', hex: '#F7CE2B', ink: '#96700A', on: 'dark',  pics: ['🍋', '☀️', '🐥'],
    line: 'Like a lemon, the sun and a baby chick.' },
  { name: 'Green',  hex: '#34A05B', ink: '#20733F', on: 'light', pics: ['🥑', '🐸', '🌳'],
    line: 'Like an avocado, a frog and a tree.' },
  { name: 'Blue',   hex: '#2E6BD4', ink: '#2352A6', on: 'light', pics: ['🫐', '🌊', '🐳'],
    line: 'Like blueberries, the sea and a whale.' },
  { name: 'Purple', hex: '#8B4FCF', ink: '#6832A8', on: 'light', pics: ['🍇', '🍆', '💜'],
    line: 'Like grapes and an aubergine.' },
  { name: 'Pink',   hex: '#F27FB2', ink: '#C13B79', on: 'dark',  pics: ['🌸', '🐷', '🩰'],
    line: 'Like a blossom, a pig and ballet shoes.' },
  { name: 'Brown',  hex: '#8B5A2B', ink: '#6B4520', on: 'light', pics: ['🐻', '🍫', '🥥'],
    line: 'Like a bear, chocolate and a coconut.' },
  { name: 'Black',  hex: '#22252B', ink: '#22252B', on: 'light', pics: ['🐧', '🎩', '🌑'],
    line: 'Like a penguin, a top hat and the night sky.' },
  { name: 'White',  hex: '#FFFFFF', ink: '#78828F', on: 'dark',  pics: ['☁️', '🥛', '⛄'],
    line: 'Like a cloud, milk and a snowman.' },
  { name: 'Grey',   hex: '#9AA3AF', ink: '#5A6472', on: 'dark',  pics: ['🐘', '🪨', '🐺'],
    line: 'Like an elephant, a rock and a wolf.' },
];

/* Shapes are drawn, not photographed and not emoji — a real triangle has
   to be a real triangle, sharp at any size, and it has to give up its
   corners so they can be counted. Everything lives in a 100×100 box:
   `pts` for the straight-sided ones (which doubles as the list of corners
   to dot), `d` for the curved ones. `note` is the geometry a child can
   check; `line` is where it lives in the real world. */
const SHAPES = [
  { name: 'Circle', corners: 0,
    note: 'No corners at all — round the whole way round.',
    line: 'Like a ball, a cookie and a big wheel.', pics: ['⚽', '🍪', '🎡'],
    d: 'M 6 50 A 44 44 0 1 0 94 50 A 44 44 0 1 0 6 50 Z' },

  { name: 'Triangle', corners: 3,
    note: 'Three corners and three sides.',
    line: 'Like a slice of pizza, a mountain and a tent.', pics: ['🍕', '⛰️', '🎪'],
    pts: [[50, 8], [92, 88], [8, 88]] },

  { name: 'Square', corners: 4,
    note: 'Four corners, and all four sides are the same.',
    line: 'Like a waffle, a window and a box.', pics: ['🧇', '🪟', '📦'],
    pts: [[13, 13], [87, 13], [87, 87], [13, 87]] },

  { name: 'Rectangle', corners: 4,
    note: 'Four corners, two long sides and two short ones.',
    line: 'Like a door, a book and a phone.', pics: ['🚪', '📕', '📱'],
    pts: [[6, 26], [94, 26], [94, 74], [6, 74]] },

  { name: 'Oval', corners: 0,
    note: 'No corners — it is a circle that got squashed.',
    line: 'Like an egg, a rugby ball and a potato.', pics: ['🥚', '🏉', '🥔'],
    d: 'M 5 50 A 45 31 0 1 0 95 50 A 45 31 0 1 0 5 50 Z' },

  { name: 'Star', corners: 5, unit: 'points', dotEvery: 2,
    note: 'Five sharp points.',
    line: 'Like the stars up in the night sky.', pics: ['⭐', '🌟', '✨'],
    pts: [[50, 7], [60.6, 37.4], [92.8, 38.1], [67.1, 57.6], [76.5, 88.4],
          [50, 70], [23.5, 88.4], [32.9, 57.6], [7.2, 38.1], [39.4, 37.4]] },

  { name: 'Heart', corners: 0,
    note: 'Two bumps on top and one point at the bottom.',
    line: 'Like a card you give someone you love.', pics: ['❤️', '💌', '🎈'],
    d: 'M 50 91 C 20 69 7 51 7 34 C 7 18 19 9 31 9 C 40 9 47 14 50 21 '
     + 'C 53 14 60 9 69 9 C 81 9 93 18 93 34 C 93 51 80 69 50 91 Z' },

  { name: 'Diamond', corners: 4,
    note: 'Four corners, standing up on its tip.',
    line: 'Like a kite in the sky and a road sign.', pics: ['🪁', '💎', '⚠️'],
    pts: [[50, 6], [92, 50], [50, 94], [8, 50]] },

  { name: 'Pentagon', corners: 5,
    note: 'Five corners and five sides.',
    line: 'Like the black patches on a football.', pics: ['⚽', '🏠', '🛡️'],
    pts: [[50, 8], [91.9, 38.4], [75.9, 87.6], [24.1, 87.6], [8.1, 38.4]] },

  { name: 'Hexagon', corners: 6,
    note: 'Six corners and six sides.',
    line: 'Like a honeycomb and a snowflake.', pics: ['🍯', '🐝', '❄️'],
    pts: [[94, 50], [72, 88.1], [28, 88.1], [6, 50], [28, 11.9], [72, 11.9]] },

  { name: 'Crescent', corners: 0,
    note: 'A big curve with two sharp tips.',
    line: 'Like the moon at night and a croissant.', pics: ['🌙', '🥐', '🌛'],
    d: 'M 62 9.75 A 42 42 0 1 0 62 90.25 A 46 46 0 0 1 62 9.75 Z' },

  { name: 'Arrow', corners: 7,
    note: 'Seven corners, and it points the way to go.',
    line: 'Like a sign showing you where to turn.', pics: ['➡️', '🏹', '🧭'],
    pts: [[6, 38], [56, 38], [56, 16], [95, 50], [56, 84], [56, 62], [6, 62]] },
];

/* ---------- The body -----------------------------------------
   A boy, standing there to be poked. Tap his nose and he says "nose";
   tap his knee and he says "knee". That is the whole screen, and it is
   the only way this section was ever going to work — a close-up of an
   ear teaches you what an ear looks like, which he already knows. What
   he's after is where it is, and only a whole body pointed at with a
   finger can say that.

   `FIGURE` is the child, ordered back to front, and every piece names
   the part it belongs to (or none, for the shorts). `BODY` is the list
   of parts and where to ring them. Everything lives in a 240×450 box.
   -------------------------------------------------------------- */

/* Wider than the boy and taller than him by a little: the rings drawn
   round his hair and his toes reach past his outline, and a ring with
   its top sliced off stops looking like a ring. */
const BODY_BOX = '0 0 240 450';

const HAIR_PATH =
  'M 60 86 A 60 60 0 0 1 180 86 C 176 76 172 62 120 62 C 68 62 64 76 60 86 Z';
const NOSE_PATH = 'M 120 88 L 129 104 Q 120 110 111 104 Z';
const MOUTH_PATH = 'M 98 116 Q 120 142 142 116 Q 120 126 98 116 Z';
const TEETH_PATH = 'M 101 118 Q 120 128 141 118 Q 120 136 101 118 Z';
const SHORTS_PATH = 'M 74 244 Q 74 238 80 238 L 160 238 Q 166 238 166 244 '
                  + 'L 171 294 Q 172 302 164 302 L 133 302 Q 127 302 126 296 '
                  + 'L 120 266 L 114 296 Q 113 302 107 302 L 76 302 '
                  + 'Q 68 302 69 294 Z';

const FIGURE = [
  { part: 'legs',      tag: 'line', cls: 'bd-limb bd-leg', at: { x1: 102, y1: 274, x2: 98, y2: 396 } },
  { part: 'legs',      tag: 'line', cls: 'bd-limb bd-leg', at: { x1: 138, y1: 274, x2: 142, y2: 396 } },
  { part: 'arms',      tag: 'line', cls: 'bd-limb bd-arm', at: { x1: 88, y1: 186, x2: 54, y2: 262 } },
  { part: 'arms',      tag: 'line', cls: 'bd-limb bd-arm', at: { x1: 152, y1: 186, x2: 186, y2: 262 } },
  { part: 'tummy',     tag: 'rect', cls: 'bd-skin', at: { x: 78, y: 162, width: 84, height: 124, rx: 32 } },
  { part: 'shoulders', tag: 'circle', cls: 'bd-skin', at: { cx: 86, cy: 182, r: 19 } },
  { part: 'shoulders', tag: 'circle', cls: 'bd-skin', at: { cx: 154, cy: 182, r: 19 } },
  { part: null,        tag: 'path', cls: 'bd-shorts', at: { d: SHORTS_PATH } },
  { part: 'elbows',    tag: 'circle', cls: 'bd-joint', at: { cx: 71, cy: 224, r: 12 } },
  { part: 'elbows',    tag: 'circle', cls: 'bd-joint', at: { cx: 169, cy: 224, r: 12 } },
  { part: 'knees',     tag: 'circle', cls: 'bd-joint', at: { cx: 99, cy: 340, r: 14 } },
  { part: 'knees',     tag: 'circle', cls: 'bd-joint', at: { cx: 141, cy: 340, r: 14 } },
  { part: 'feet',      tag: 'ellipse', cls: 'bd-skin', at: { cx: 90, cy: 410, rx: 26, ry: 16 } },
  { part: 'feet',      tag: 'ellipse', cls: 'bd-skin', at: { cx: 150, cy: 410, rx: 26, ry: 16 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 71, cy: 415, r: 5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 82, cy: 421, r: 5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 94, cy: 422, r: 5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 105, cy: 418, r: 4.5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 169, cy: 415, r: 5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 158, cy: 421, r: 5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 146, cy: 422, r: 5 } },
  { part: 'toes',      tag: 'circle', cls: 'bd-bump', at: { cx: 135, cy: 418, r: 4.5 } },
  { part: 'hands',     tag: 'circle', cls: 'bd-skin', at: { cx: 50, cy: 268, r: 19 } },
  { part: 'hands',     tag: 'circle', cls: 'bd-skin', at: { cx: 190, cy: 268, r: 19 } },
  { part: 'fingers',   tag: 'line', cls: 'bd-finger', at: { x1: 42, y1: 282, x2: 33, y2: 300 } },
  { part: 'fingers',   tag: 'line', cls: 'bd-finger', at: { x1: 52, y1: 285, x2: 49, y2: 305 } },
  { part: 'fingers',   tag: 'line', cls: 'bd-finger', at: { x1: 62, y1: 282, x2: 64, y2: 301 } },
  { part: 'fingers',   tag: 'line', cls: 'bd-finger', at: { x1: 198, y1: 282, x2: 207, y2: 300 } },
  { part: 'fingers',   tag: 'line', cls: 'bd-finger', at: { x1: 188, y1: 285, x2: 191, y2: 305 } },
  { part: 'fingers',   tag: 'line', cls: 'bd-finger', at: { x1: 178, y1: 282, x2: 176, y2: 301 } },
  { part: 'neck',      tag: 'rect', cls: 'bd-skin', at: { x: 105, y: 132, width: 30, height: 36, rx: 11 } },
  { part: 'ears',      tag: 'ellipse', cls: 'bd-ear', at: { cx: 60, cy: 94, rx: 11, ry: 16 } },
  { part: 'ears',      tag: 'ellipse', cls: 'bd-ear', at: { cx: 180, cy: 94, rx: 11, ry: 16 } },
  { part: 'head',      tag: 'circle', cls: 'bd-skin', at: { cx: 120, cy: 86, r: 60 } },
  { part: 'hair',      tag: 'path', cls: 'bd-hair', at: { d: HAIR_PATH } },
  { part: 'eyes',      tag: 'circle', cls: 'bd-eye', at: { cx: 99, cy: 84, r: 8 } },
  { part: 'eyes',      tag: 'circle', cls: 'bd-eye', at: { cx: 141, cy: 84, r: 8 } },
  { part: 'nose',      tag: 'path', cls: 'bd-nose', at: { d: NOSE_PATH } },
  { part: 'mouth',     tag: 'path', cls: 'bd-mouth', at: { d: MOUTH_PATH } },
  { part: 'teeth',     tag: 'path', cls: 'bd-teeth', at: { d: TEETH_PATH } },
];

/* Where the tapping happens. The drawing can't be its own target: a
   nose is nine pixels of path, an arm is a stroke with no fill at all,
   and a toe is smaller than the finger reaching for it. So the parts
   get a second, invisible set of shapes — round, generous, bigger than
   what they cover — laid over the child.

   Order is the whole trick. These are hit-tested front to back, so the
   list runs back to front: the tummy first and the teeth last. A knee
   sits on a leg, a finger on a hand, a tooth in a mouth, and every
   time the smaller thing has to win the tap, because the child who
   reaches for a knee is not reaching for a leg. */
const HITS = [
  { part: 'tummy',     tag: 'rect',    at: { x: 74, y: 156, width: 92, height: 96, rx: 30 } },
  { part: 'legs',      tag: 'rect',    at: { x: 74, y: 268, width: 50, height: 132, rx: 22 } },
  { part: 'legs',      tag: 'rect',    at: { x: 116, y: 268, width: 50, height: 132, rx: 22 } },
  { part: 'arms',      tag: 'line',    at: { x1: 88, y1: 186, x2: 54, y2: 262, 'stroke-width': 42 } },
  { part: 'arms',      tag: 'line',    at: { x1: 152, y1: 186, x2: 186, y2: 262, 'stroke-width': 42 } },
  { part: 'shoulders', tag: 'circle',  at: { cx: 84, cy: 180, r: 24 } },
  { part: 'shoulders', tag: 'circle',  at: { cx: 156, cy: 180, r: 24 } },
  { part: 'head',      tag: 'circle',  at: { cx: 120, cy: 86, r: 60 } },
  { part: 'hair',      tag: 'path',    at: { d: HAIR_PATH } },
  { part: 'neck',      tag: 'rect',    at: { x: 101, y: 130, width: 38, height: 40, rx: 14 } },
  { part: 'feet',      tag: 'ellipse', at: { cx: 90, cy: 406, rx: 32, ry: 20 } },
  { part: 'feet',      tag: 'ellipse', at: { cx: 150, cy: 406, rx: 32, ry: 20 } },
  { part: 'hands',     tag: 'circle',  at: { cx: 50, cy: 268, r: 24 } },
  { part: 'hands',     tag: 'circle',  at: { cx: 190, cy: 268, r: 24 } },
  { part: 'knees',     tag: 'circle',  at: { cx: 99, cy: 340, r: 19 } },
  { part: 'knees',     tag: 'circle',  at: { cx: 141, cy: 340, r: 19 } },
  { part: 'elbows',    tag: 'circle',  at: { cx: 71, cy: 224, r: 18 } },
  { part: 'elbows',    tag: 'circle',  at: { cx: 169, cy: 224, r: 18 } },
  { part: 'toes',      tag: 'ellipse', at: { cx: 88, cy: 420, rx: 24, ry: 12 } },
  { part: 'toes',      tag: 'ellipse', at: { cx: 152, cy: 420, rx: 24, ry: 12 } },
  { part: 'fingers',   tag: 'ellipse', at: { cx: 48, cy: 295, rx: 23, ry: 16 } },
  { part: 'fingers',   tag: 'ellipse', at: { cx: 192, cy: 295, rx: 23, ry: 16 } },
  { part: 'ears',      tag: 'ellipse', at: { cx: 59, cy: 94, rx: 16, ry: 21 } },
  { part: 'ears',      tag: 'ellipse', at: { cx: 181, cy: 94, rx: 16, ry: 21 } },
  { part: 'eyes',      tag: 'circle',  at: { cx: 99, cy: 84, r: 15 } },
  { part: 'eyes',      tag: 'circle',  at: { cx: 141, cy: 84, r: 15 } },
  { part: 'nose',      tag: 'circle',  at: { cx: 120, cy: 99, r: 13 } },
  { part: 'mouth',     tag: 'ellipse', at: { cx: 120, cy: 123, rx: 27, ry: 15 } },
  { part: 'teeth',     tag: 'ellipse', at: { cx: 120, cy: 124, rx: 13, ry: 7 } },
];

/* Plural where a grown-up would say it out loud — nobody asks a child
   to point at their eye. `ring` is where the marker lands, twice over
   for the parts there are two of, and it is the same in every language:
   a nose is in the same place in Dhaka and in Madrid, which is why this
   screen switches language rather than having one screen per language.

   `names` carries the part in each of them, and each is a name rather
   than a gloss — the screen shows one language at a time, and this is
   what it shows. Two Bangla pairs are worth knowing about, because
   colloquial Bangla runs them together and a child being asked to
   point needs them apart: হাত is the hand and বাহু the arm above it;
   পা is the leg and পায়ের পাতা the flat of the foot at the end of it.

   English stays the name the game asks by, because the game asks out
   loud in English. */
const BODY = [
  { key: 'head', ring: [[120, 86, 66]],
    names: { en: 'Head', bn: 'মাথা', es: 'Cabeza', fr: 'Tête', ar: 'رأس' } },
  { key: 'hair', ring: [[120, 56, 62]],
    names: { en: 'Hair', bn: 'চুল', es: 'Pelo', fr: 'Cheveux', ar: 'شعر' } },
  /* The Arabic pairs are duals — عينان, not the plural عيون — because
     the boy has exactly two of each, and the dual is how a grown-up
     pointing at both of them would say it. */
  { key: 'eyes', ring: [[99, 84, 17], [141, 84, 17]],
    names: { en: 'Eyes', bn: 'চোখ', es: 'Ojos', fr: 'Yeux', ar: 'عينان' } },
  { key: 'ears', ring: [[60, 94, 21], [180, 94, 21]],
    names: { en: 'Ears', bn: 'কান', es: 'Orejas', fr: 'Oreilles', ar: 'أذنان' } },
  { key: 'nose', ring: [[120, 99, 19]],
    names: { en: 'Nose', bn: 'নাক', es: 'Nariz', fr: 'Nez', ar: 'أنف' } },
  { key: 'mouth', ring: [[120, 124, 27]],
    names: { en: 'Mouth', bn: 'মুখ', es: 'Boca', fr: 'Bouche', ar: 'فم' } },
  { key: 'teeth', ring: [[120, 124, 27]],
    names: { en: 'Teeth', bn: 'দাঁত', es: 'Dientes', fr: 'Dents', ar: 'أسنان' } },
  { key: 'neck', ring: [[120, 152, 25]],
    names: { en: 'Neck', bn: 'গলা', es: 'Cuello', fr: 'Cou', ar: 'رقبة' } },
  { key: 'shoulders', ring: [[86, 182, 27], [154, 182, 27]],
    names: { en: 'Shoulders', bn: 'কাঁধ', es: 'Hombros', fr: 'Épaules', ar: 'كتفان' } },
  { key: 'arms', ring: [[71, 224, 46], [169, 224, 46]],
    names: { en: 'Arms', bn: 'বাহু', es: 'Brazos', fr: 'Bras', ar: 'ذراعان' } },
  { key: 'elbows', ring: [[71, 224, 21], [169, 224, 21]],
    names: { en: 'Elbows', bn: 'কনুই', es: 'Codos', fr: 'Coudes', ar: 'مرفقان' } },
  { key: 'hands', ring: [[50, 268, 27], [190, 268, 27]],
    names: { en: 'Hands', bn: 'হাত', es: 'Manos', fr: 'Mains', ar: 'يدان' } },
  { key: 'fingers', ring: [[48, 292, 27], [192, 292, 27]],
    names: { en: 'Fingers', bn: 'আঙুল', es: 'Dedos', fr: 'Doigts', ar: 'أصابع' } },
  { key: 'tummy', ring: [[120, 210, 46]],
    names: { en: 'Tummy', bn: 'পেট', es: 'Barriga', fr: 'Ventre', ar: 'بطن' } },
  { key: 'legs', ring: [[100, 336, 48], [140, 336, 48]],
    names: { en: 'Legs', bn: 'পা', es: 'Piernas', fr: 'Jambes', ar: 'ساقان' } },
  { key: 'knees', ring: [[99, 340, 20], [141, 340, 20]],
    names: { en: 'Knees', bn: 'হাঁটু', es: 'Rodillas', fr: 'Genoux', ar: 'ركبتان' } },
  { key: 'feet', ring: [[90, 412, 32], [150, 412, 32]],
    names: { en: 'Feet', bn: 'পায়ের পাতা', es: 'Pies', fr: 'Pieds', ar: 'قدمان' } },
  { key: 'toes', ring: [[90, 419, 28], [150, 419, 28]],
    names: { en: 'Toes', bn: 'পায়ের আঙুল', es: 'Dedos del pie', fr: 'Orteils',
             ar: 'أصابع القدم' } },
];

/* ---------- The languages ------------------------------------
   Every language the board can be set to, and everything that differs
   between them, in one table. A language is an alphabet, a set of
   number names, a name for each body part, and the answer to two
   questions: what voice says it, and where its own colours start on
   the palette.

   Language used to be a tab — an English board with a বাংলা tab beside
   it. That works for exactly two languages and then runs out of room:
   eight tabs was already the most a phone could carry. So language
   stopped being a place and became a switch on the screens that have
   it, the way it always was on the body screen. The rule it was
   protecting is untouched, because the rule was never "separate tabs":
   it is that only one language is ever on the screen. A switch keeps
   that. A subtitle under a numeral is what broke it.

   `ids` are load-bearing and must not be tidied. A tile's id is what
   `state.seen` remembers, so the English letters stay 'LA'…'LZ' and
   the Bangla ones 'BL0'…'BL46' — the shape they had before there was a
   registry. Renaming them would silently empty every board already on
   a fridge.
   -------------------------------------------------------------- */

const LANGS = {

  en: {
    code: 'en',
    native: 'English',
    label: 'English',
    /* What to match a voice's `lang` against, and what to tag the
       utterance with when one is found. */
    voice: 'en',
    speech: 'en-US',
    script: 'latin',
    /* Latin letters come in pairs and the panel shows both; a বর্ণ has
       no lowercase partner, and an empty slot under it is a hole. */
    hasCase: true,
    letters: ALPHABETS.en,
    numbers: NUMBER_NAMES.en,
    letterId: (face, i) => 'L' + face,
    numberId: (n) => 'N' + n,
    /* Where this language's tiles start in the six-colour palette. Each
       language gets its own offset so two alphabets never run the same
       sequence of colours down the grid and invite being read as
       translations of each other. The English and Bangla numbers are
       kept exactly where they were, because a letter that changes
       colour is a letter a child has to learn again. */
    seedLetter: 0,
    seedNumber: 2,
    /* Spoken by the device when it has a voice. When it hasn't — a TV
       browser is the usual case — `speak()` plays a file from
       sounds/voice/en/ instead, so English is never silent. */
    clips: null,
    hint: {
      letters: 'Tap a letter to hear it.',
      numbers: 'Tap a number to hear it.',
      body: 'Tap the boy — his nose, his hand, his toes.',
    },
  },

  /* The one language here that is spoken from files rather than by the
     browser. Almost no device ships a bn voice, and one handed সাত
     either says nothing or guesses in English — so all 86 letter clips,
     20 numbers, 18 body parts and the kitchen vegetables are recordings
     of a real person, the same voice on every device, offline. See
     sounds/CREDITS.md.

     Nothing on this screen is ever labelled in English, the hints
     included: a বর্ণ with an English caption underneath is a screen
     about English with Bangla decoration. */
  bn: {
    code: 'bn',
    native: 'বাংলা',
    label: 'Bangla',
    voice: 'bn',
    speech: 'bn-BD',
    script: 'bangla',
    hasCase: false,
    letters: ALPHABETS.bn,
    numbers: NUMBER_NAMES.bn,
    letterId: (face, i) => 'BL' + i,
    numberId: (n) => 'BN' + n,
    seedLetter: 1,
    seedNumber: 6,
    clips: {
      /* `n` is the position on the chart and the filename both — অ is 1,
         and its two clips are letters/1.m4a and letters/1-word.m4a. The
         order of ALPHABETS.bn is therefore not cosmetic. */
      letter: (it) => `sounds/bangla/letters/${it.n}.m4a`,
      /* A letter that starts no word has no second clip. */
      letterWord: (it) => (it.word ? `sounds/bangla/letters/${it.n}-word.m4a` : null),
      number: (it) => `sounds/bangla/${it.n}.m4a`,
      body: (it) => `sounds/bangla/body/${it.key}.m4a`,
      /* Kitchen vegetables: slug matches the photo filename. */
      veg: (it) => `sounds/bangla/veg/${it.slug}.m4a`,
    },
    hint: {
      letters: 'একটি বর্ণে টোকা দাও।',
      numbers: 'একটি সংখ্যায় টোকা দাও।',
      body: 'ছেলেটিকে টোকা দাও — তার নাক, তার হাত, তার পায়ের আঙুল।',
      veg: 'একটি সবজিতে টোকা দাও।',
    },
  },

  es: {
    code: 'es',
    native: 'Español',
    label: 'Spanish',
    voice: 'es',
    speech: 'es-ES',
    script: 'latin',
    hasCase: true,
    letters: ALPHABETS.es,
    numbers: NUMBER_NAMES.es,
    letterId: (face, i) => 'Les' + i,
    numberId: (n) => 'Nes' + n,
    seedLetter: 3,
    seedNumber: 5,
    /* Spoken from files, the way বাংলা is, so a tablet with no Spanish
       voice can still offer the language. */
    clips: {
      letter: (it) => `sounds/voice/es/letters/${it.n}.m4a`,
      letterWord: (it) => (it.word ? `sounds/voice/es/letters/${it.n}-word.m4a` : null),
      number: (it) => `sounds/voice/es/${it.n}.m4a`,
      body: (it) => `sounds/voice/es/body/${it.key}.m4a`,
    },
    hint: {
      letters: 'Toca una letra para oírla.',
      numbers: 'Toca un número para oírlo.',
      body: 'Toca al niño — su nariz, su mano, sus dedos del pie.',
    },
  },

  fr: {
    code: 'fr',
    native: 'Français',
    label: 'French',
    voice: 'fr',
    speech: 'fr-FR',
    script: 'latin',
    hasCase: true,
    letters: ALPHABETS.fr,
    numbers: NUMBER_NAMES.fr,
    letterId: (face, i) => 'Lfr' + i,
    numberId: (n) => 'Nfr' + n,
    seedLetter: 4,
    seedNumber: 0,
    clips: {
      letter: (it) => `sounds/voice/fr/letters/${it.n}.m4a`,
      letterWord: (it) => (it.word ? `sounds/voice/fr/letters/${it.n}-word.m4a` : null),
      number: (it) => `sounds/voice/fr/${it.n}.m4a`,
      body: (it) => `sounds/voice/fr/body/${it.key}.m4a`,
    },
    hint: {
      letters: 'Touche une lettre pour l’entendre.',
      numbers: 'Touche un chiffre pour l’entendre.',
      body: 'Touche le garçon — son nez, sa main, ses orteils.',
    },
  },

  /* Spoken by the device, the way English is — there are no Arabic
     recordings yet, so the language is only offered where the device
     has an Arabic voice to say it with (see `langAvailable`). Two
     things are new here and neither is a special case elsewhere:
     `dir`, because Arabic runs right to left and the panels and hints
     have to run with it, and the numerals, which come out of
     SCRIPT_DIGITS as the Eastern Arabic ٧ a child in an Arabic
     classroom actually meets — not the Western 7 that only shares an
     ancestor with it. */
  ar: {
    code: 'ar',
    native: 'العربية',
    label: 'Arabic',
    voice: 'ar',
    speech: 'ar-SA',
    script: 'arabic',
    dir: 'rtl',
    hasCase: false,
    letters: ALPHABETS.ar,
    /* English name under each letter, on the tile and in the panel. */
    latin: ARABIC_LATIN,
    numbers: NUMBER_NAMES.ar,
    letterId: (face, i) => 'Lar' + i,
    numberId: (n) => 'Nar' + n,
    seedLetter: 5,
    seedNumber: 3,
    /* Letter names only, one Lingua Libre recording per letter (CC0,
       CC BY, and CC BY-SA for ب, د and و; see sounds/CREDITS.md). New
       folder, not new files under letters/, because MEDIA never
       expires a filename. Numbers and body parts use the device voice. */
    clips: {
      letter: (it) => `sounds/arabic/names/${it.n}.m4a`,
      letterWord: () => null,
      number: () => null,
      body: () => null,
    },
    sayName: true,
    hint: {
      letters: 'المس حرفًا لتسمعه.',
      numbers: 'المس رقمًا لتسمعه.',
      body: 'المس الولد — أنفه ويده وأصابع قدميه.',
    },
  },
};

/* Registry order, which is the order the switch and the picker use.
   English first because it is the language the app itself is written
   in — the labels in the grown-ups drawer, and the game. */
const LANG_CODES = Object.keys(LANGS);

const MAX_NUMBER = 20;
const ROUNDS_PER_GAME = 10;

/* Every item — letter or number, in whichever language — shares one
   shape, so the grid, the panel and the game all render from the same
   object. `lang` is the only field the registry added, and it is what
   tells a tile which voice to speak with, which typeface it is set in,
   and where its colours come from. */

function lettersFor(code) {
  const L = LANGS[code];
  return L.letters.map(([face, word, emoji], i) => ({
    kind: 'letter',
    lang: code,
    id: L.letterId(face, i),
    index: i,
    /* Position on the chart, which for a recorded language is also the
       clip number: অ is 1 and its files are letters/1*.m4a. */
    n: i + 1,
    face,
    /* Derived, not listed, so Ñ and É get theirs right with no second
       column to keep in step. Bangla has no lowercase at all and says
       so through `hasCase`, rather than by carrying an empty string
       the panel has to guess the meaning of. */
    lower: L.hasCase ? face.toLowerCase() : '',
    word: word || '',
    emoji: emoji || '',
    latin: (L.latin && L.latin[i]) || '',
    /* Arabic speaks the letter's name (ألف) and stops. Face-plus-word
       is the English chart: "A. Apple." */
    say: L.sayName
      ? `${word || face}.`
      : (word ? `${face}. ${word}.` : face),
  }));
}

/* The numeral, the name, and that many pictures — the same panel in
   every language, because counting is the part that doesn't change. */
function numbersFor(code) {
  const L = LANGS[code];
  return Array.from({ length: MAX_NUMBER }, (_, i) => {
    const n = i + 1;
    return {
      kind: 'number',
      lang: code,
      id: L.numberId(n),
      index: i,
      n,
      face: SCRIPT_DIGITS[L.script] ? numeralIn(L.script, n) : String(n),
      word: L.numbers[n],
      lower: L.numbers[n],
      emoji: NUMBER_EMOJI[n],
      say: L.numbers[n],
    };
  });
}

/* Built for every language, not only the ones switched on. The lists
   are small, and `byId` has to be able to find a tile explored under a
   language that has since been switched off — turning Spanish back on
   should find the board the way he left it, not blank. */
const LETTERS_BY_LANG = {};
const NUMBERS_BY_LANG = {};
LANG_CODES.forEach((code) => {
  LETTERS_BY_LANG[code] = lettersFor(code);
  NUMBERS_BY_LANG[code] = numbersFor(code);
});

/* Only the English lists carry the words to be asked with, because the
   game asks out loud and it asks in English — see "The game stays in
   English" in the README. An item with no `askPrefix` can be tapped
   and named but never made into a question. */
LETTERS_BY_LANG.en.forEach((it) => {
  it.askPrefix = 'Find the letter ';
  it.askFace = it.face;
});
NUMBERS_BY_LANG.en.forEach((it) => {
  it.askPrefix = 'Find the number ';
  it.askFace = it.face;
});

/* A row with no third entry has nothing to add out loud, and says so by
   leaving `line` empty — the panel drops the second line and the voice
   stops after the name.

   `sayName` splits the two: the line stays on the panel to be read and
   is kept out of the voice. Jobs use it. What a plumber does is worth
   printing under his name, and worth a grown-up reading aloud, but
   spoken on every single tap it turns a tap into a lecture — the same
   reason a shape says "Triangle" and leaves the corner count on the
   page. */
function pictureItems(rows, group, prefix, { sayName = false } = {}) {
  return rows.map((row, i) => {
    const name = row[0];
    const emoji = row[1];
    /* A plain string in the third slot is the spoken/printed line
       (animals, jobs). An object there is extra language names — the
       vegetables carry `{ bn: '...' }` so বাংলা can label the shelf
       without inventing a second English sentence. */
    let line = '';
    let names;
    if (row[2] && typeof row[2] === 'object') {
      names = { en: name, ...row[2] };
    } else {
      line = row[2] || '';
      if (row[3] && typeof row[3] === 'object') {
        names = { en: name, ...row[3] };
      }
    }
    const item = {
      kind: 'picture',
      group,
      id: prefix + i,
      index: i,
      face: emoji,
      caption: name,
      word: name,
      emoji,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      line,
      say: line && !sayName ? `${name}. ${line}` : `${name}.`,
      askPrefix: 'Find the ',
      askFace: name.toLowerCase(),
    };
    if (names) item.names = names;
    return item;
  });
}

const fruitItems = pictureItems(FRUITS, 'fruit', 'F');
const vegItems = pictureItems(VEGETABLES, 'veg', 'V');
const clothesItems = pictureItems(CLOTHES, 'clothes', 'K');
const vehicleItems = pictureItems(VEHICLES, 'vehicle', 'T');
const animalItems = pictureItems(ANIMALS, 'animal', 'A');
/* 'R' because B is the body's and BN the Bangla numbers' — `byId` is one
   flat map and a second B0 would quietly shadow the head. */
const birdItems = pictureItems(BIRDS, 'bird', 'R');
const homeItems = pictureItems(HOUSEHOLD, 'home', 'H');
const flowerItems = pictureItems(FLOWERS, 'flower', 'W');
/* 'J' for job: P is free but reads as picture, and the ids in this map
   are read by a grown-up looking at saved progress. */
const jobItems = pictureItems(PROFESSIONS, 'job', 'J', { sayName: true });
const pictureAll = [...fruitItems, ...vegItems, ...clothesItems, ...vehicleItems, ...animalItems, ...birdItems,
                    ...flowerItems, ...homeItems, ...jobItems];

const PICTURE_GROUPS = {
  fruit:  { list: fruitItems,  grid: 'fruitGrid',
            hint: 'Tap a fruit to hear its name.' },
  veg:    { list: vegItems,    grid: 'vegGrid',
            hint: 'Tap a vegetable to hear its name.' },
  clothes:{ list: clothesItems, grid: 'clothesGrid',
            hint: 'Tap a piece of clothing to hear its name.' },
  vehicle:{ list: vehicleItems, grid: 'vehicleGrid',
            hint: 'Tap a vehicle to hear its name.' },
  animal: { list: animalItems, grid: 'animalGrid',
            hint: 'Tap an animal to hear what it says.' },
  bird:   { list: birdItems,   grid: 'birdGrid',
            hint: 'Tap a bird to hear its name.' },
  flower: { list: flowerItems, grid: 'flowerGrid',
            hint: 'Tap a flower to hear its name.' },
  home:   { list: homeItems,   grid: 'homeGrid',
            hint: 'Tap a thing to hear its name.' },
  job:    { list: jobItems,    grid: 'jobGrid',
            hint: 'Tap someone to hear what they do.' },
};

const colorItems = COLORS.map((c, i) => ({
  kind: 'color',
  id: 'C' + i,
  index: i,
  hex: c.hex,
  ink: c.ink,
  on: c.on,
  pics: c.pics,
  word: c.name,
  caption: c.name,
  line: c.line,
  say: `${c.name}. ${c.line}`,
  askPrefix: 'Find the ',
  askFace: c.name.toLowerCase(),
  askSuffix: ' one',
}));

function pathFromPoints(pts) {
  return 'M ' + pts.map((p) => p.join(' ')).join(' L ') + ' Z';
}

const shapeItems = SHAPES.map((s, i) => ({
  kind: 'shape',
  id: 'S' + i,
  index: i,
  word: s.name,
  caption: s.name,
  corners: s.corners,
  /* A star has ten vertices but five points — that's what a child counts,
     so it says which ones to dot and what to call them. */
  unit: s.unit || 'corners',
  dotEvery: s.dotEvery || 1,
  pts: s.pts || null,
  d: s.d || pathFromPoints(s.pts),
  note: s.note,
  line: s.line,
  pics: s.pics,
  /* The name and nothing else. The corner count and the examples stay on
     the panel to be looked at — spoken, they turn a tap into a lecture. */
  say: `${s.name}.`,
  askPrefix: 'Find the ',
  askFace: s.name.toLowerCase(),
}));

/* One item per part. `names` is every language's word for it; `word`
   and `say` stay English because that is what the game reads, and the
   game asks in English. Same `id` in every language — a nose he has
   already met is a nose he has met, and changing the label shouldn't
   empty the board of its ticks. */
const bodyItems = BODY.map((b, i) => ({
  kind: 'body',
  id: 'B' + i,
  index: i,
  key: b.key,
  names: b.names,
  word: b.names.en,
  caption: b.names.en,
  ring: b.ring,
  say: `${b.names.en}.`,
  askPrefix: 'Find the ',
  askFace: b.names.en.toLowerCase(),
}));

const bodyByKey = new Map(bodyItems.map((it) => [it.key, it]));

/* ---------- Words: actions, feelings, opposites, where -------
   The words a three-year-old needs to make a sentence of three or
   four: what someone is doing, how they feel, how big or full a
   thing is, and where it is. Nouns alone don't make sentences.

   Actions are photographs of animals doing the thing — a dog running,
   a cat asleep. An animal shows a verb as clearly as a person does,
   and none of them is somebody else's child. Feelings, opposites and
   places are drawn, like the shapes: a frown has to be a frown at any
   size, and a ball has to be exactly *under* the box, not near it.
   -------------------------------------------------------------- */

const ACTIONS = [
  { word: 'Running',  slug: 'action-run',   emoji: '🏃', line: 'The dog is running.' },
  { word: 'Jumping',  slug: 'action-jump',  emoji: '🐸', line: 'The dog is jumping.' },
  { word: 'Swimming', slug: 'action-swim',  emoji: '🏊', line: 'The dog is swimming.' },
  { word: 'Flying',   slug: 'action-fly',   emoji: '🕊️', line: 'The bird is flying.' },
  { word: 'Eating',   slug: 'action-eat',   emoji: '🐿️', line: 'The squirrel is eating.' },
  { word: 'Drinking', slug: 'action-drink', emoji: '🐈', line: 'The cat is drinking.' },
  { word: 'Sleeping', slug: 'action-sleep', emoji: '😴', line: 'The cat is sleeping.' },
  { word: 'Climbing', slug: 'action-climb', emoji: '🧗', line: 'The cat is climbing.' },
  { word: 'Walking',  slug: 'action-walk',  emoji: '🐘', line: 'The elephant is walking.' },
  { word: 'Digging',  slug: 'action-dig',   emoji: '🐕', line: 'The dog is digging.' },
  { word: 'Washing',  slug: 'action-wash',  emoji: '🐘', line: 'The elephant is washing.' },
  { word: 'Playing',  slug: 'action-play',  emoji: '🐶', line: 'The puppies are playing.' },
  { word: 'Sitting',  slug: 'action-sit',   emoji: '🐕', line: 'The dog is sitting.' },
  { word: 'Rolling',  slug: 'action-roll',  emoji: '🐕', line: 'The dog is rolling.' },
  { word: 'Hugging',  slug: 'action-hug',   emoji: '🐒', line: 'The monkeys are hugging.' },
];

/* Each face is a few parameters, drawn by makeFaceArt. */
const FEELINGS = [
  { word: 'Happy',     face: 'happy',     line: 'A big smile.' },
  { word: 'Sad',       face: 'sad',       line: 'A frown and a tear.' },
  { word: 'Angry',     face: 'angry',     line: 'Cross eyebrows, red cheeks.' },
  { word: 'Scared',    face: 'scared',    line: 'Eyes wide, mouth wobbly.' },
  { word: 'Surprised', face: 'surprised', line: 'Oh! A round mouth.' },
  { word: 'Sleepy',    face: 'sleepy',    line: 'Eyes closing. Yawn.' },
  { word: 'Silly',     face: 'silly',     line: 'Tongue out, one eye shut.' },
];

/* In pairs, side by side on the grid, so each word sits next to its
   opposite. Big and small, fast and slow are the photographs already
   on the shelves; the rest are drawn. */
const OPPOSITES = [
  { word: 'Big',    pair: 'Small',  photo: 'elephant', emoji: '🐘', line: 'The elephant is big.' },
  { word: 'Small',  pair: 'Big',    photo: 'mouse',    emoji: '🐭', line: 'The mouse is small.' },
  { word: 'Fast',   pair: 'Slow',   photo: 'rabbit',   emoji: '🐇', line: 'The rabbit is fast.' },
  { word: 'Slow',   pair: 'Fast',   photo: 'turtle',   emoji: '🐢', line: 'The turtle is slow.' },
  { word: 'Up',     pair: 'Down',   art: 'up',     line: 'The balloon goes up.' },
  { word: 'Down',   pair: 'Up',     art: 'down',   line: 'The ball falls down.' },
  { word: 'Full',   pair: 'Empty',  art: 'full',   line: 'The glass is full.' },
  { word: 'Empty',  pair: 'Full',   art: 'empty',  line: 'The glass is empty.' },
  { word: 'Open',   pair: 'Closed', art: 'open',   line: 'The door is open.' },
  { word: 'Closed', pair: 'Open',   art: 'closed', line: 'The door is closed.' },
  { word: 'Long',   pair: 'Short',  art: 'long',   line: 'A long pencil.' },
  { word: 'Short',  pair: 'Long',   art: 'short',  line: 'A short pencil.' },
  { word: 'Hot',    pair: 'Cold',   art: 'hot',    line: 'The sun is hot.' },
  { word: 'Cold',   pair: 'Hot',    art: 'cold',   line: 'The snow is cold.' },
  { word: 'Day',    pair: 'Night',  art: 'day',    line: 'The sun is out. It is day.' },
  { word: 'Night',  pair: 'Day',    art: 'night',  line: 'The moon is out. It is night.' },
];

/* One red ball and six places. "On" and "under" use a table, because
   under a box sitting on the floor is nowhere; the rest use a box.
   The phrases are the ones a child hears anyway — under the table, in
   the box. */
const PLACES = [
  { word: 'In',       place: 'in',     thing: 'box',   say: 'In the box.' },
  { word: 'On',       place: 'on',     thing: 'table', say: 'On the table.' },
  { word: 'Under',    place: 'under',  thing: 'table', say: 'Under the table.' },
  { word: 'Next to',  place: 'next',   thing: 'box',   say: 'Next to the box.' },
  { word: 'Behind',   place: 'behind', thing: 'box',   say: 'Behind the box.' },
  { word: 'In front', place: 'front',  thing: 'box',   say: 'In front of the box.' },
];

function wordItems(rows, group, prefix, ask) {
  return rows.map((r, i) => {
    const item = {
      ...r,
      kind: 'word',
      group,
      id: prefix + i,
      index: i,
      caption: r.word,
      line: r.line || (r.say ? `The ball is ${r.say.toLowerCase()}` : ''),
      say: r.say || `${r.word}.`,
      ...ask(r),
    };
    if (r.photo) item.slug = r.photo;
    return item;
  });
}

const actionItems = wordItems(ACTIONS, 'action', 'X',
  (r) => ({ askPrefix: 'Who is ', askFace: r.word.toLowerCase(), askSuffix: '?' }));
const feelingItems = wordItems(FEELINGS, 'feeling', 'E',
  (r) => ({ askPrefix: 'Who is ', askFace: r.word.toLowerCase(), askSuffix: '?' }));
const oppositeItems = wordItems(OPPOSITES, 'opposite', 'O',
  (r) => ({ askPrefix: 'Which one is ', askFace: r.word.toLowerCase(), askSuffix: '?' }));
const placeItems = wordItems(PLACES, 'place', 'P',
  (r) => ({ askPrefix: 'Find the ball ', askFace: r.say.replace(/ the \w+\.$/, '').toLowerCase(), askSuffix: ` the ${r.thing}` }));

/* Which screen each group of words lives on. */
const WORD_SCREENS = {
  actions:   { group: 'action',   list: actionItems,   title: 'Actions',   hint: 'Tap to hear what they are doing.' },
  feelings:  { group: 'feeling',  list: feelingItems,  title: 'Feelings',  hint: 'Tap a face. How does it feel?' },
  opposites: { group: 'opposite', list: oppositeItems, title: 'Opposites', hint: 'Big and small, up and down. Tap one.' },
  where:     { group: 'place',    list: placeItems,    title: 'Where?',    hint: 'Where is the ball? Tap to hear.' },
};
const WORD_SCREEN_OF = Object.fromEntries(Object.entries(WORD_SCREENS).map(([k, v]) => [v.group, k]));

const allItems = [
  ...LANG_CODES.flatMap((c) => LETTERS_BY_LANG[c]),
  ...LANG_CODES.flatMap((c) => NUMBERS_BY_LANG[c]),
  ...pictureAll, ...colorItems, ...shapeItems, ...bodyItems,
  ...actionItems, ...feelingItems, ...oppositeItems, ...placeItems,
];
const byId = new Map(allItems.map((it) => [it.id, it]));

function listFor(item) {
  if (item.kind === 'letter') return LETTERS_BY_LANG[item.lang];
  if (item.kind === 'number') return NUMBERS_BY_LANG[item.lang];
  if (item.kind === 'color') return colorItems;
  if (item.kind === 'shape') return shapeItems;
  if (item.kind === 'body') return bodyItems;
  if (item.kind === 'word') return WORD_SCREENS[WORD_SCREEN_OF[item.group]].list;
  return PICTURE_GROUPS[item.group].list;
}

function askOf(item) {
  return item.askPrefix + item.askFace + (item.askSuffix || '');
}

/* ---------- Saved progress ---------------------------------- */

const STORE_KEY = 'magnet-board-v1';

const defaultState = {
  stars: 0, seen: [], muted: false, focusMode: false,
  /* Which languages are switched on, and which one the board is
     showing. Two settings rather than one: a household that wants
     English and বাংলা and nothing else shouldn't have to walk past
     Spanish and French every time it flips the switch. */
  langs: ['en'], lang: 'en', chosen: false,
};

/* What to switch on before anybody has said. The device's own language
   if this board has it, and English either way — a Spanish tablet
   opening on an English board with the Spanish hidden behind a switch
   nobody knows is there is exactly how a second language ends up
   unused. */
function defaultLangs() {
  const want = new Set(['en']);
  [navigator.language, ...(navigator.languages || [])].forEach((tag) => {
    const code = String(tag || '').slice(0, 2).toLowerCase();
    if (LANGS[code]) want.add(code);
  });
  return LANG_CODES.filter((c) => want.has(c));
}

function defaultLang() {
  const first = String(navigator.language || '').slice(0, 2).toLowerCase();
  return LANGS[first] ? first : 'en';
}

function load() {
  let raw = null;
  try {
    raw = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
  } catch {
    raw = null;
  }

  if (!raw || typeof raw !== 'object') {
    return { ...defaultState, langs: defaultLangs(), lang: defaultLang() };
  }

  const out = { ...defaultState, ...raw };

  /* Before the registry there were exactly two languages, both always
     on, and `bodyLang` was where the body screen's choice lived. Carry
     both across, and count the choice as already made: a board that is
     already on a fridge and already works should not meet a setup
     screen the next time a three-year-old opens it. The picker is in
     the grown-ups drawer for whoever wants it. */
  if (!Array.isArray(raw.langs)) {
    out.langs = ['en', 'bn'];
    out.lang = raw.bodyLang === 'bn' ? 'bn' : 'en';
    out.chosen = true;
  }

  /* Registry order, not saved order, and nothing in it that isn't a
     language any more — so a corrupted save can't leave the board with
     no words on it. */
  out.langs = LANG_CODES.filter((c) => out.langs.includes(c));
  if (!out.langs.length) out.langs = ['en'];
  if (!LANGS[out.lang] || !out.langs.includes(out.lang)) out.lang = out.langs[0];
  return out;
}

function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      stars: state.stars,
      seen: [...state.seen],
      muted: state.muted,
      focusMode: state.focusMode,
      langs: state.langs,
      lang: state.lang,
      chosen: state.chosen,
    }));
  } catch {
    /* Private browsing — the app still works, it just forgets. */
  }
}

const saved = load();
const state = {
  stars: saved.stars,
  seen: new Set(saved.seen),
  muted: saved.muted,
  focusMode: saved.focusMode,
  langs: saved.langs,
  /* Remembered, because a household that reads the board in Bangla
     reads it in Bangla every time, and having to find the switch again
     on every visit is how a second language ends up unused. */
  lang: saved.lang,
  chosen: saved.chosen,
  /* Null until the first navigation, so the home menu is drawn by it. */
  screen: null,
  /* The open shelf on Pictures. The shelf list shows when none is open. */
  picGroup: 'fruit',
  letterItem: null,
  numberItem: null,
  pictureItem: null,
  colorItem: null,
  shapeItem: null,
  bodyItem: null,
  /* The last word tapped on each word screen, by screen. */
  wordItem: {},
  game: null,
};

/* ---------- Which languages are on ---------------------------
   Switched on is not the same as usable. A language with recordings
   is always usable; a synthesised one depends on what voices the
   device has. English is the exception that is always offered, and
   it falls back to a spoken-name file when the device has no voice.
   -------------------------------------------------------------- */

function langAvailable(code) {
  if (code === 'en') return true;
  if (LANGS[code].clips) return true;
  return !!voiceFor(LANGS[code].voice);
}

/* Never empty: English is always available, and something has to be on
   the board. */
function activeLangs() {
  const on = LANG_CODES.filter((c) => state.langs.includes(c) && langAvailable(c));
  return on.length ? on : ['en'];
}

function curLang() {
  const on = activeLangs();
  return on.includes(state.lang) ? state.lang : on[0];
}

function cur() {
  return LANGS[curLang()];
}

/* ---------- Voice ------------------------------------------- */

let chosenVoice = null;

function pickVoice() {
  if (chosenVoice) return chosenVoice;
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const english = voices.filter((v) => /^en/i.test(v.lang));
  const preferred = ['Samantha', 'Google US English', 'Karen', 'Moira', 'Daniel'];
  chosenVoice =
    english.find((v) => preferred.includes(v.name)) ||
    english.find((v) => v.localService) ||
    english[0] ||
    voices[0];
  return chosenVoice;
}

/* One voice per language, found by matching the tag a device labels
   its voices with. A tag is kept out of the cache until the list has
   actually loaded, so "no voices yet" — which is what Chrome reports
   for the first moment of every page — is never mistaken for "no
   Spanish voice on this device". */
const voiceCache = new Map();

function voiceFor(tag) {
  if (tag === 'en') return pickVoice();
  if (voiceCache.has(tag)) return voiceCache.get(tag);
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const found = voices.filter((v) => new RegExp('^' + tag, 'i').test(v.lang));
  const v = found.find((x) => x.localService) || found[0] || null;
  voiceCache.set(tag, v);
  return v;
}

if ('speechSynthesis' in window) {
  speechSynthesis.addEventListener('voiceschanged', () => {
    chosenVoice = null;
    voiceCache.clear();
    pickVoice();
    /* A voice arriving late can add a language to the switch. */
    refreshAvailability();
  });
  pickVoice();
}

/* A spoken line maps to a file in sounds/voice/en/ by the same slug
   the generator used — "Cat." is cat.m4a, "Find the red one" is
   find-the-red-one.m4a. Accents fold away so "Éléphant" and "Elephant"
   would share a name if they ever had to. */
function voiceSlug(text) {
  return String(text).toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[.!?]+/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function voiceClipFor(text) {
  const s = voiceSlug(text);
  return s ? `sounds/voice/en/${s}.m4a` : null;
}

/* Slow and a touch bright — easier for small ears to copy.

   A TV browser often has no speechSynthesis, or has the API and an
   empty voice list. English must still speak, so the matching file
   plays when there is no usable voice. Mute still wins. */
/* 1 normally. The 🐢 button sets it below 1 for the one thing it
   replays; any other tap puts it back (see the speak bar). */
let slowFactor = 1;

function speak(text, opts = {}) {
  const { rate = 0.82, pitch = 1.12, then, lang = 'en-US', voice } = opts;
  if (state.muted) {
    if (then) setTimeout(then, 340);
    return;
  }
  const v = voice || pickVoice();
  const clip = voiceClipFor(text);
  if (!('speechSynthesis' in window) || !v) {
    if (clip) {
      const go = then || null;
      playClip('voice-' + voiceSlug(text), clip, go, go);
      return;
    }
    if (then) setTimeout(then, 340);
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = rate * slowFactor;
  u.pitch = pitch;
  u.lang = lang;
  if (v) u.voice = v;
  let finished = false;
  const done = () => { if (!finished) { finished = true; if (then) then(); } };
  u.onend = done;
  u.onerror = done;
  speechSynthesis.speak(u);
  /* Some browsers drop onend silently; don't let a sequence stall. */
  setTimeout(done, 400 + text.length * 130);
}

/* Say something in one language's own voice. A language with no voice
   on this device says nothing at all rather than handing its words to
   an engine that will read them as English — the tap still pops and
   the tile still ticks. English is the one exception, because it is
   what everything else falls back to and a board that says nothing
   anywhere is a broken board. */
function speakIn(code, text, opts = {}) {
  const L = LANGS[code];
  const v = voiceFor(L.voice);
  if (!v && code !== 'en') return;
  speak(text, { ...opts, lang: v ? v.lang : L.speech, voice: v || undefined });
}

/* ---------- Little sounds ------------------------------------ */

let audioCtx = null;

function ctx() {
  if (state.muted) return null;
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function tone(freq, dur, type = 'sine', vol = 0.16, delay = 0) {
  const ac = ctx();
  if (!ac) return;
  const t0 = ac.currentTime + delay;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

const sfx = {
  pop:   () => tone(700, 0.09, 'sine', 0.13),
  right: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22, 'triangle', 0.13, i * 0.08)),
  wrong: () => tone(196, 0.16, 'sine', 0.09),
  cheer: () => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.32, 'triangle', 0.13, i * 0.1)),
};

/* ---------- Magnet tiles ------------------------------------- */

const PALETTE = ['--m1', '--m2', '--m3', '--m4', '--m5', '--m6'];

/* Fixed per item so a letter keeps its colour and angle between
   visits — kids recognise "the red B". */
/* Every kind needs an entry: a missing one makes `seedFor` NaN, which
   silently costs the tile both its colour and its tilt.

   Letters and numbers are not in this table, because for them the
   offset is a fact about the language rather than about the screen.
   Each alphabet starts at its own point in the palette so that two of
   them never run the same sequence of colours down the grid and invite
   being read as translations of each other — see `seedLetter` and
   `seedNumber` in the registry. */
const SEED_OFFSET = {
  fruit: 4, veg: 7, clothes: 8, vehicle: 2, animal: 1, bird: 5, flower: 0, home: 3, job: 6,
  color: 3, shape: 5, body: 2,
  action: 1, feeling: 0, opposite: 4, place: 2,
};

function seedFor(item) {
  if (item.kind === 'letter') return item.index + LANGS[item.lang].seedLetter;
  if (item.kind === 'number') return item.index + LANGS[item.lang].seedNumber;
  const key = item.kind === 'picture' || item.kind === 'word' ? item.group : item.kind;
  return item.index + SEED_OFFSET[key];
}

function colorFor(item) {
  /* Colour tiles are the lesson — they wear their own colour. */
  if (item.kind === 'color') return item.hex;
  return `var(${PALETTE[seedFor(item) % PALETTE.length]})`;
}

function tiltFor(item) {
  return `${((((seedFor(item) + 3) * 37) % 13) - 6) * 0.8}deg`;
}

function labelFor(item) {
  if (item.kind === 'letter') {
    return item.lang === 'en'
      ? `Letter ${item.face}`
      : `${LANGS[item.lang].label} letter ${item.latin || item.face}`;
  }
  if (item.kind === 'number') {
    return item.lang === 'en'
      ? `Number ${item.face}`
      : `${LANGS[item.lang].label} number ${item.n}`;
  }
  if (item.kind === 'color') return `The color ${item.word.toLowerCase()}`;
  if (item.kind === 'shape') return `The shape ${item.word.toLowerCase()}`;
  return item.caption;
}

/* What a body part is called right now. Everything the body screen
   prints or speaks goes through here, so the switch has one thing to
   flip and no corner of the screen can be left in another language.
   The game does not call it: it asks out loud in English. */
function bodyName(item) {
  return item.names[curLang()] || item.word;
}

/* What a picture tile is called right now. Vegetables carry Bangla
   names; every other shelf stays English until it grows its own.
   The game still asks in English via `item.word`. */
function pictureName(item) {
  if (item.names && curLang() === 'bn' && item.names.bn) return item.names.bn;
  return item.word;
}

function pictureUsesBangla(item) {
  return !!(item.names && curLang() === 'bn' && item.names.bn);
}

function pictureHint(group) {
  const L = cur();
  if (group === 'veg' && L.hint && L.hint.veg) return L.hint.veg;
  return PICTURE_GROUPS[group].hint;
}

/* ---------- Drawing a shape ----------------------------------
   One SVG builder for both places a shape appears. On the grid it's
   just the filled face. In the panel it also gets an outline that
   draws itself and a dot on every corner, popping in one at a time so
   the corners can be counted along with the voice.
   -------------------------------------------------------------- */

const SVG_NS = 'http://www.w3.org/2000/svg';

function makeShapeArt(item, cls, { animate = false } = {}) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('class', cls);
  svg.setAttribute('aria-hidden', 'true');

  const face = document.createElementNS(SVG_NS, 'path');
  face.setAttribute('d', item.d);
  face.setAttribute('class', 'shape-face');
  svg.appendChild(face);

  if (!animate) return svg;

  const line = document.createElementNS(SVG_NS, 'path');
  line.setAttribute('d', item.d);
  line.setAttribute('class', 'shape-line');
  svg.appendChild(line);

  if (item.pts && item.corners) {
    item.pts
      .filter((_, i) => i % item.dotEvery === 0)
      .forEach(([x, y], i) => {
        const pip = document.createElementNS(SVG_NS, 'circle');
        pip.setAttribute('cx', x);
        pip.setAttribute('cy', y);
        pip.setAttribute('r', 5.5);
        pip.setAttribute('class', 'shape-pip');
        pip.style.animationDelay = `${0.95 + i * 0.17}s`;
        svg.appendChild(pip);
      });
  }
  return svg;
}

/* The outline is drawn by walking a dash the length of the path, so the
   path has to be measured after it's in the document — a detached one
   measures zero in some browsers. The fallback keeps a stray zero from
   leaving the outline invisible. */
function runDraw(svg) {
  const line = svg.querySelector('.shape-line');
  if (!line) return;
  const len = line.getTotalLength() || 300;
  line.style.setProperty('--len', len);
  line.classList.add('is-drawing');
}

/* ---------- Drawing the body ---------------------------------
   The same child every time; only the part that keeps its colour
   changes. A ring lands on it as well, because a nose is small and the
   fade alone isn't enough to find it. `still` is for the game, where
   four boys stand side by side and a ring that pulses on all four is
   just four things moving. `hits` adds the invisible tap targets — the
   panel wants them, a tile inside a button must not have them.

   `item` may be null: nothing lit, nothing ringed, just a boy waiting
   to be tapped.
   -------------------------------------------------------------- */

function makeBodyArt(item, cls, { still = false, hits = false } = {}) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', BODY_BOX);
  svg.setAttribute('class', cls + (item ? ' has-lit' : ''));
  svg.setAttribute('aria-hidden', 'true');

  FIGURE.forEach((piece) => {
    const node = document.createElementNS(SVG_NS, piece.tag);
    Object.entries(piece.at).forEach(([k, v]) => node.setAttribute(k, v));
    node.setAttribute('class',
      `bd ${piece.cls}${item && piece.part === item.key ? ' is-lit' : ''}`);
    svg.appendChild(node);
  });

  if (item) {
    item.ring.forEach(([cx, cy, r], i) => {
      const ring = document.createElementNS(SVG_NS, 'circle');
      ring.setAttribute('cx', cx);
      ring.setAttribute('cy', cy);
      ring.setAttribute('r', r);
      ring.setAttribute('class', 'bd-ring' + (still ? ' is-still' : ''));
      /* Stagger the arrival, but beat in unison — two eyes at
         different brightnesses look like two different answers. */
      if (!still) ring.style.animationDelay = `${i * 0.12}s, 0.55s`;
      svg.appendChild(ring);
    });
  }

  /* Last, so they sit over everything and catch the tap first. */
  if (hits) {
    HITS.forEach((spot) => {
      const node = document.createElementNS(SVG_NS, spot.tag);
      Object.entries(spot.at).forEach(([k, v]) => node.setAttribute(k, v));
      node.setAttribute('class', 'bd-hit');
      node.dataset.part = spot.part;
      svg.appendChild(node);
    });
  }
  return svg;
}

/* Real photographs, not emoji — he doesn't like cartoons. If one is
   missing the emoji stands in, so a failed image never leaves a hole.

   Lazy, which here means the rest of a shelf: thirty-two things at
   home is six on screen and twenty-six below the fold. It does not
   help with a shelf that is hidden — a browser fetches an image
   inside `display: none` as soon as it exists, because deferring
   needs a layout box and a hidden screen hasn't got one — which is
   why the shelves themselves are built on first sight instead. A
   browser too old to know the attribute ignores it. */
function makePhoto(item, cls) {
  const img = document.createElement('img');
  img.className = cls;
  img.src = `photos/${item.slug}.jpg`;
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.addEventListener('error', () => {
    const stand = document.createElement('span');
    stand.className = `${cls} is-fallback`;
    stand.textContent = item.emoji;
    img.replaceWith(stand);
  }, { once: true });
  return img;
}

/* ---------- Drawing the words ---------------------------------
   Feelings, opposites and places are SVG, drawn from a few shapes so
   they stay sharp at tile size and at panel size. Each returns the
   inside of an <svg>; makeWordArt wraps it. */

const INK = '#33261F';
const BALL = '<circle cx="0" cy="0" r="11" fill="#E24A3F"/><ellipse cx="-4" cy="-4" rx="3.5" ry="2.5" fill="#fff" opacity="0.7"/>';
const ball = (x, y) => `<g transform="translate(${x} ${y})">${BALL}</g>`;

const FACE_PARTS = {
  happy: `<path d="M28 34 Q36 28 44 34 M56 34 Q64 28 72 34"/>
    <ellipse cx="36" cy="45" rx="4.5" ry="6" fill="${INK}" stroke="none"/><ellipse cx="64" cy="45" rx="4.5" ry="6" fill="${INK}" stroke="none"/>
    <ellipse cx="26" cy="60" rx="6" ry="4" fill="#F28C8C" opacity="0.6" stroke="none"/><ellipse cx="74" cy="60" rx="6" ry="4" fill="#F28C8C" opacity="0.6" stroke="none"/>
    <path d="M30 60 Q50 86 70 60 Z" fill="#A8322D"/>`,
  sad: `<path d="M28 37 L44 31 M56 31 L72 37"/>
    <ellipse cx="36" cy="46" rx="4.5" ry="5.5" fill="${INK}" stroke="none"/><ellipse cx="64" cy="46" rx="4.5" ry="5.5" fill="${INK}" stroke="none"/>
    <path d="M34 75 Q50 61 66 75"/>
    <path d="M33 55 Q28 64 33 67 Q38 64 33 55 Z" fill="#5BB8F0" stroke="none"/>`,
  angry: `<path d="M26 29 L45 38 M55 38 L74 29" stroke-width="5"/>
    <ellipse cx="37" cy="47" rx="4.5" ry="5" fill="${INK}" stroke="none"/><ellipse cx="63" cy="47" rx="4.5" ry="5" fill="${INK}" stroke="none"/>
    <ellipse cx="25" cy="61" rx="8" ry="5" fill="#E24A3F" opacity="0.45" stroke="none"/><ellipse cx="75" cy="61" rx="8" ry="5" fill="#E24A3F" opacity="0.45" stroke="none"/>
    <path d="M35 73 Q50 63 65 73"/>`,
  scared: `<path d="M27 29 L44 23 M56 23 L73 29"/>
    <circle cx="36" cy="44" r="8.5" fill="#fff"/><circle cx="64" cy="44" r="8.5" fill="#fff"/>
    <circle cx="36" cy="45" r="3" fill="${INK}" stroke="none"/><circle cx="64" cy="45" r="3" fill="${INK}" stroke="none"/>
    <path d="M33 72 Q37.5 66 42 72 Q46.5 78 51 72 Q55.5 66 60 72 Q64 77 67 72"/>
    <path d="M84 30 Q80 38 84 41 Q88 38 84 30 Z" fill="#5BB8F0" stroke="none"/>`,
  surprised: `<path d="M27 27 Q36 19 45 27 M55 27 Q64 19 73 27"/>
    <circle cx="36" cy="44" r="7.5" fill="#fff"/><circle cx="64" cy="44" r="7.5" fill="#fff"/>
    <circle cx="36" cy="44" r="3.5" fill="${INK}" stroke="none"/><circle cx="64" cy="44" r="3.5" fill="${INK}" stroke="none"/>
    <ellipse cx="50" cy="71" rx="8" ry="10" fill="#A8322D"/>`,
  sleepy: `<path d="M28 36 Q36 34 44 37 M56 37 Q64 34 72 36"/>
    <path d="M29 46 Q36 52 43 46 M57 46 Q64 52 71 46"/>
    <ellipse cx="50" cy="70" rx="6" ry="7.5" fill="#A8322D"/>
    <text x="72" y="24" font-size="13" font-weight="800" fill="#4A6FD8" stroke="none" font-family="sans-serif">z</text>
    <text x="81" y="14" font-size="17" font-weight="800" fill="#4A6FD8" stroke="none" font-family="sans-serif">Z</text>`,
  silly: `<path d="M28 33 Q36 28 44 33 M56 31 Q64 26 72 31"/>
    <path d="M29 46 Q36 40 43 46"/>
    <ellipse cx="64" cy="45" rx="4.5" ry="6" fill="${INK}" stroke="none"/>
    <path d="M44 66 L44 76 Q44 84 50 84 Q56 84 56 76 L56 66 Z" fill="#F07A86"/>
    <path d="M30 62 Q50 76 70 62"/>`,
};

function faceSvg(item) {
  return `<svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="52" r="41" fill="#FFD45C" stroke="#E0A82E" stroke-width="2.5"/>
    <g fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${FACE_PARTS[item.face]}</g>
  </svg>`;
}

const glass = (water) => `${water ? '<path d="M32.5 34 L67.5 34 L63 86 L37 86 Z" fill="#5BB8F0" opacity="0.85"/>' : ''}
  <path d="M30 18 L70 18 L64 88 L36 88 Z" fill="${water ? 'none' : '#F3F8FC'}" fill-opacity="0.6" stroke="#7D8A99" stroke-width="3" stroke-linejoin="round"/>`;
const pencil = (x0, x1) => `<g stroke="#8A5A2B" stroke-width="2" stroke-linejoin="round">
  <rect x="${x0}" y="43" width="${x1 - x0}" height="14" rx="2" fill="#FFC93C"/>
  <rect x="${x0 - 6}" y="43" width="8" height="14" rx="2" fill="#F07A86"/>
  <path d="M${x1} 43 L${x1 + 12} 50 L${x1} 57 Z" fill="#F3D2A2"/></g>
  <path d="M${x1 + 8} 48 L${x1 + 12} 50 L${x1 + 8} 52 Z" fill="${INK}"/>`;
const arrow = (up) => `<path d="M14 ${up ? 78 : 22} L14 ${up ? 24 : 76} M6 ${up ? 32 : 68} L14 ${up ? 22 : 78} L22 ${up ? 32 : 68}" fill="none" stroke="#7D8A99" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
const rays = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4;
  const p = (r) => `${(50 + Math.cos(a) * r).toFixed(1)} ${(50 + Math.sin(a) * r).toFixed(1)}`;
  return `M${p(27)} L${p(40)}`;
}).join(' ');
const flake = Array.from({ length: 6 }, (_, i) => {
  const a = (i * Math.PI) / 3;
  const pt = (r, da = 0) => `${(50 + Math.cos(a + da) * r).toFixed(1)} ${(50 + Math.sin(a + da) * r).toFixed(1)}`;
  return `M50 50 L${pt(38)} M${pt(24)} L${pt(31, 0.35)} M${pt(24)} L${pt(31, -0.35)}`;
}).join(' ');

const OPPOSITE_ART = {
  up: `${arrow(true)}<path d="M58 46 Q60 62 54 92" fill="none" stroke="#7D8A99" stroke-width="1.5"/>
    <ellipse cx="58" cy="28" rx="15" ry="18" fill="#E24A3F"/><path d="M55 45 L61 45 L58 49 Z" fill="#C23A31"/>
    <ellipse cx="52" cy="21" rx="4" ry="6" fill="#fff" opacity="0.55"/>`,
  down: `${arrow(false)}<path d="M48 30 L48 48 M58 24 L58 50 M68 30 L68 48" stroke="#BCC5D0" stroke-width="3" stroke-linecap="round"/>
    <g transform="translate(58 76) scale(1.4)">${BALL}</g><path d="M30 94 L86 94" stroke="#BCC5D0" stroke-width="3" stroke-linecap="round"/>`,
  full: glass(true),
  empty: glass(false),
  open: `<rect x="24" y="10" width="52" height="84" fill="#2B2F45" stroke="#6B4423" stroke-width="4"/>
    <path d="M24 10 L42 18 L42 88 L24 94 Z" fill="#C8873E" stroke="#8A5A2B" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="38" cy="54" r="2.5" fill="#FFD45C"/>`,
  closed: `<rect x="24" y="10" width="52" height="84" fill="#C8873E" stroke="#6B4423" stroke-width="4"/>
    <rect x="32" y="20" width="36" height="26" rx="2" fill="none" stroke="#8A5A2B" stroke-width="2"/>
    <rect x="32" y="54" width="36" height="30" rx="2" fill="none" stroke="#8A5A2B" stroke-width="2"/>
    <circle cx="68" cy="52" r="3.5" fill="#FFD45C" stroke="#8A5A2B"/>`,
  long: pencil(10, 80),
  short: pencil(40, 58),
  hot: `<path d="${rays}" stroke="#F5A623" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="50" r="22" fill="#FFC93C" stroke="#F5A623" stroke-width="3"/>`,
  cold: `<path d="${flake}" fill="none" stroke="#5BB8F0" stroke-width="4.5" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="#5BB8F0"/>`,
  day: `<rect x="4" y="6" width="92" height="88" rx="10" fill="#8FD3FF"/>
    <rect x="4" y="72" width="92" height="22" rx="0" fill="#6CC070"/><path d="M4 84 L4 84" />
    <circle cx="68" cy="30" r="13" fill="#FFC93C"/>
    <path d="M18 40 q6 -8 14 -3 q6 -6 12 1 q6 2 2 8 h-26 q-6 -2 -2 -6 Z" fill="#fff"/>`,
  night: `<rect x="4" y="6" width="92" height="88" rx="10" fill="#1F2A5A"/>
    <rect x="4" y="72" width="92" height="22" fill="#2E4A3A"/>
    <circle cx="66" cy="30" r="13" fill="#F6F1C7"/><circle cx="72" cy="25" r="12" fill="#1F2A5A"/>
    <path d="M24 22 l2 5 5 0 -4 3 1.5 5 -4.5 -3 -4.5 3 1.5 -5 -4 -3 5 0 Z M40 42 l1.2 3 3 0 -2.4 1.8 1 3 -2.8 -1.8 -2.8 1.8 1 -3 -2.4 -1.8 3 0 Z" fill="#FFD45C"/>`,
};

function oppositeSvg(item) {
  return `<svg viewBox="0 0 100 100" aria-hidden="true">${OPPOSITE_ART[item.art]}</svg>`;
}

/* The box: front, lid and side, sitting on the floor at y = 104. */
const BOX_BACK_OPEN = '<path d="M30 62 L40 52 L100 52 L90 62 Z" fill="#5A3A1C"/>';
const BOX_LID = '<path d="M30 62 L40 52 L100 52 L90 62 Z" fill="#E2AE6A" stroke="#8A5A2B" stroke-width="2" stroke-linejoin="round"/>';
const BOX_BODY = `<path d="M90 62 L100 52 L100 94 L90 104 Z" fill="#A86E33" stroke="#8A5A2B" stroke-width="2" stroke-linejoin="round"/>
  <rect x="30" y="62" width="60" height="42" fill="#C8873E" stroke="#8A5A2B" stroke-width="2"/>`;
const TABLE = `<path d="M30 52 L30 96 M98 48 L98 92" stroke="#8A5A2B" stroke-width="4"/>
  <path d="M18 56 L28 48 L104 48 L94 56 Z" fill="#E2AE6A" stroke="#8A5A2B" stroke-width="2" stroke-linejoin="round"/>
  <rect x="18" y="56" width="76" height="6" fill="#C8873E" stroke="#8A5A2B" stroke-width="2"/>
  <path d="M23 62 L23 104 M89 62 L89 104" stroke="#8A5A2B" stroke-width="5" stroke-linecap="round"/>`;
const FLOOR = '<path d="M4 104.5 L122 104.5" stroke="#BCC5D0" stroke-width="2.5" stroke-linecap="round"/>';

const PLACE_ART = {
  in: `${BOX_BACK_OPEN}${ball(64, 56)}${BOX_BODY}`,
  on: `${TABLE}${ball(58, 41)}`,
  under: `${TABLE}${ball(56, 93)}`,
  next: `${BOX_LID}${BOX_BODY}${ball(112, 93)}`,
  /* Drawn before the box, so the lid hides its lower half: the ball
     peeks over the back edge. */
  behind: `<g transform="translate(70 47) scale(1.25)">${BALL}</g>${BOX_LID}${BOX_BODY}`,
  front: `${BOX_LID}${BOX_BODY}${ball(54, 101)}`,
};

function placeSvg(item) {
  return `<svg viewBox="0 0 126 116" aria-hidden="true">${FLOOR}${PLACE_ART[item.place]}</svg>`;
}

function makeWordArt(item, cls) {
  if (item.slug) return makePhoto(item, cls);
  const span = document.createElement('span');
  span.className = `${cls} word-art`;
  span.innerHTML = item.group === 'feeling' ? faceSvg(item)
    : item.group === 'opposite' ? oppositeSvg(item) : placeSvg(item);
  return span;
}

/* `caption` prints the name under the picture. On the browsing grid
   that builds word recognition; in the game it would give the answer
   away, so the game leaves it off. `quiz` is the game asking for a
   tile it can be answered from, which for a body part means a whole
   boy with one part ringed — the question is where it is, so the
   choice has to be a place, not a picture. */
function makeMagnet(item, { known = false, caption = false, quiz = false } = {}) {
  const btn = document.createElement('button');
  btn.className = 'magnet' + (known && state.seen.has(item.id) ? ' is-known' : '');
  btn.style.setProperty('--c', colorFor(item));
  btn.style.setProperty('--tilt', tiltFor(item));
  btn.dataset.id = item.id;
  btn.setAttribute('aria-label', labelFor(item));

  if (item.kind === 'color') {
    btn.classList.add('magnet--color');
    btn.style.setProperty('--ct', item.on === 'dark' ? 'var(--ink)' : '#fff');
    if (caption) {
      const cap = document.createElement('span');
      cap.className = 'magnet-cap magnet-cap--color';
      cap.textContent = item.word;
      btn.appendChild(cap);
    }
  } else if (item.kind === 'shape') {
    btn.classList.add('magnet--shape');
    btn.appendChild(makeShapeArt(item, 'magnet-shape'));
    if (caption) {
      const cap = document.createElement('span');
      cap.className = 'magnet-cap';
      cap.textContent = item.caption;
      btn.appendChild(cap);
    }
  } else if (item.kind === 'body') {
    if (quiz) {
      btn.classList.add('magnet--body');
      btn.appendChild(makeBodyArt(item, 'magnet-body', { still: true }));
    } else {
      /* Off the boy, a part is just its name. The drawing is right
         there above the list to be pointed at, so the tile doesn't
         have to draw it again badly. One name, in whichever language
         the screen is set to — not both, because a tile carrying নাক
         under "Nose" is a tile whose Bangla is a footnote. */
      btn.classList.add('magnet--word');
      const L = cur();
      if (L.script === 'bangla') btn.classList.add('magnet--bn-word');
      if (L.script === 'arabic') btn.classList.add('magnet--ar-word');
      btn.lang = L.code;
      btn.dir = L.dir || '';
      btn.textContent = bodyName(item);
    }
  } else if (item.kind === 'word') {
    btn.classList.add('magnet--pic', 'magnet--wordart');
    btn.appendChild(makeWordArt(item, 'magnet-photo'));
    if (caption) {
      const cap = document.createElement('span');
      cap.className = 'magnet-cap';
      cap.textContent = item.caption;
      btn.appendChild(cap);
    }
  } else if (item.kind === 'picture') {
    btn.classList.add('magnet--pic');
    btn.appendChild(makePhoto(item, 'magnet-photo'));
    if (caption) {
      const cap = document.createElement('span');
      const bn = pictureUsesBangla(item);
      cap.className = 'magnet-cap' + (bn ? ' magnet-cap--bn' : '');
      cap.textContent = pictureName(item);
      if (bn) cap.lang = 'bn';
      btn.appendChild(cap);
    }
  } else {
    /* A tile carries its own script and nothing else — no second
       language in the corner to fall back on, because the fallback is
       what gets read. */
    if (LANGS[item.lang].script === 'bangla') btn.classList.add('magnet--bn');
    if (LANGS[item.lang].script === 'arabic') btn.classList.add('magnet--ar');
    btn.lang = item.lang;
    btn.dir = LANGS[item.lang].dir || 'ltr';
    /* The English name rides under the letter on the shelf, never in
       the game — there it would be the answer printed on the tile. */
    if (item.latin && !quiz) {
      btn.classList.add('magnet--latin');
      const face = document.createElement('span');
      face.className = 'magnet-face';
      face.textContent = item.face;
      const name = document.createElement('span');
      name.className = 'magnet-latin';
      name.lang = 'en';
      name.dir = 'ltr';
      name.textContent = item.latin;
      btn.append(face, name);
    } else {
      btn.textContent = item.face;
    }
  }
  return btn;
}

/* ---------- Elements ----------------------------------------- */

const el = (id) => document.getElementById(id);

const lettersGrid = el('lettersGrid');
const numbersGrid = el('numbersGrid');
const fruitGrid = el('fruitGrid');
const vegGrid = el('vegGrid');
const clothesGrid = el('clothesGrid');
const vehicleGrid = el('vehicleGrid');
const animalGrid = el('animalGrid');
const birdGrid = el('birdGrid');
const flowerGrid = el('flowerGrid');
const homeGrid = el('homeGrid');
const jobGrid = el('jobGrid');
const colorsGrid = el('colorsGrid');
const shapesGrid = el('shapesGrid');
const bodyGrid = el('bodyGrid');
const shapeView = el('shapeView');
const bodyView = el('bodyView');
const letterView = el('letterView');
const picView = el('picView');
const numView = el('numView');
const scoreEl = el('score');
const cheerWrap = el('cheerWrap');
const parentWrap = el('parentWrap');
const choicesBox = el('choices');
const dotsBox = el('dots');
const askEl = el('ask');

/* ---------- Grids -------------------------------------------- */

function buildGrids() {
  buildLetterGrid();
  buildNumberGrid();
  colorsGrid.replaceChildren(...colorItems.map((it) => makeMagnet(it, { known: true, caption: true })));
  shapesGrid.replaceChildren(...shapeItems.map((it) => makeMagnet(it, { known: true, caption: true })));
  buildBodyGrid();
  buildWordScreens();
}

/* The three grids that carry a language have their own builders,
   because the switch rebuilds them. Rebuilt rather than relabelled:
   the tick marking a tile explored lives on the tile, and `makeMagnet`
   puts it back from `state.seen`, so a fresh set of tiles arrives
   already knowing what he has met. */
function buildLetterGrid() {
  const L = cur();
  /* Arabic charts start on the right. The tiles are still in dictionary
     order; dir is what puts أ on the first cell a finger meets. */
  lettersGrid.dir = L.dir || 'ltr';
  lettersGrid.lang = L.code;
  lettersGrid.replaceChildren(
    ...LETTERS_BY_LANG[L.code].map((it) => makeMagnet(it, { known: true })));
}

function buildNumberGrid() {
  numbersGrid.replaceChildren(
    ...NUMBERS_BY_LANG[curLang()].map((it) => makeMagnet(it, { known: true })));
}

function buildBodyGrid() {
  bodyGrid.replaceChildren(...bodyItems.map((it) => makeMagnet(it, { known: true, caption: true })));
}

/* A shelf of photographs is built the first time it is looked at, not
   at start-up. Seven shelves is more than 125 <img> elements and 7.4 MB,
   and a browser asks for every one of them the moment they exist, even
   on a screen that is hidden — so a child who opened the board and
   tapped a letter used to pay for several shelves of pictures he never
   saw. Now he pays for the shelf he is on.

   Nothing is lost by waiting: `makeMagnet` reads `state.seen`, so a
   shelf built late arrives already knowing what he has met. And the
   whole set is still there to be had deliberately, from the download
   in the grown-ups drawer. */
const builtShelves = new Set();

function buildPictureGrid(group) {
  if (builtShelves.has(group)) return;
  builtShelves.add(group);
  const shelf = PICTURE_GROUPS[group];
  el(shelf.grid).replaceChildren(
    ...shelf.list.map((it) => makeMagnet(it, { known: true, caption: true })));
}

/* Mix up the shelf that is open. A shelf in the order it was written
   gets learned as an order rather than as a set of pictures — the
   apple is first and top-left every time, and a child who has met it
   twenty times can find it with the photograph covered up. Moving the
   tiles takes the crutch away and leaves the picture.

   The tiles already on the shelf are reordered, not rebuilt: appending
   a node that is already in the document moves it, so no photograph is
   fetched twice, none of them blink, and the tick marking a tile
   explored travels with the tile that owns it. A shelf nobody has
   opened yet has no tiles to move, so it is built first — the same
   build first sight would have done.

   The new order lives only in the page. Coming back tomorrow starts
   from the written order again, which is the right place to start
   from: it is the one a grown-up naming things down the shelf can
   follow. */
function shuffleShelf(group) {
  buildPictureGrid(group);
  const grid = el(PICTURE_GROUPS[group].grid);
  const tiles = shuffled([...grid.children]);
  grid.replaceChildren(...tiles);

  /* Let them land in a ripple rather than all at once, and cap the
     stagger so the last tile of a thirty-two tile shelf doesn't keep
     a child waiting half a second for it. Taking the class off and
     reading the layout back is what starts the animation over on a
     second tap — the browser skips a class that goes on and off
     within one frame. */
  grid.classList.remove('is-settling');
  void grid.offsetWidth;
  tiles.forEach((tile, i) => {
    tile.style.setProperty('--settle', `${Math.min(i, 14) * 0.022}s`);
  });
  grid.classList.add('is-settling');
}

/* The shelf last opened from the shelf list — the fruit until one is. */
function currentPicGroup() {
  return state.picGroup || 'fruit';
}

function markSeen(item) {
  if (state.seen.has(item.id)) return;
  state.seen.add(item.id);
  save();
  const tile = document.querySelector(`.grid .magnet[data-id="${item.id}"]`);
  if (tile) tile.classList.add('is-known');
}

function onGridTap(e) {
  const btn = e.target.closest('.magnet');
  if (!btn) return;
  clearCue();
  sfx.pop();
  showItem(byId.get(btn.dataset.id));
}

[lettersGrid, numbersGrid, fruitGrid, vegGrid, clothesGrid, vehicleGrid, animalGrid,
 birdGrid, flowerGrid, homeGrid, jobGrid, colorsGrid, shapesGrid, bodyGrid]
  .forEach((grid) => grid.addEventListener('click', onGridTap));

/* ---------- Real recordings ----------------------------------
   Short clips from Wikimedia Commons, levelled to a common loudness
   so no single one startles him. Two sets: the animal noises, and a
   Bangla speaker counting এক to বিশ. See sounds/CREDITS.md.

   Keyed by name, not by shelf, which is why the duck, the chicken and
   the owl still quack, cluck and hoot from the birds tab.
   -------------------------------------------------------------- */

const ANIMAL_SOUNDS = new Set([
  'bee', 'cat', 'chicken', 'cow', 'dog', 'duck', 'elephant', 'frog',
  'goat', 'horse', 'lion', 'monkey', 'owl', 'pig', 'sheep', 'tiger',
  'crow', 'pigeon', 'sparrow', 'woodpecker', 'parrot', 'myna', 'cuckoo',
  'kingfisher', 'swan', 'flamingo', 'penguin', 'panda',
  'zebra', 'donkey', 'bear', 'goose', 'fox', 'turkey',
]);

/* One audio element for every clip, its source swapped each time.
   iOS lets a media element start only from inside a tap, and it
   remembers: once an element has played from a tap, that same element
   may play again later, from an `ended` handler say. A new element made
   in that handler has not been unlocked, so on an iPhone the word after
   a Bangla letter (ক, then কলা) would stay silent. One element also
   means one decoder, where there used to be one per clip heard. */
const player = typeof Audio === 'function' ? new Audio() : null;
if (player) player.preload = 'auto';
/* The clip that is current, as a number: the element is always the same
   one, so "is this still my clip" has to be asked of something else. */
let playingSound = null;
let clipSeq = 0;

/* The first touch anywhere unlocks the player with a moment of silence,
   so a sound the app starts by itself later (the next question in the
   game) is allowed too. */
const SILENCE = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
function unlockPlayer() {
  ['touchend', 'click'].forEach((t) => document.removeEventListener(t, unlockPlayer, true));
  if (!player || playingSound) return;
  player.src = SILENCE;
  player.play().catch(() => {});
}
['touchend', 'click'].forEach((t) => document.addEventListener(t, unlockPlayer, true));

function hasSound(name) {
  return ANIMAL_SOUNDS.has(name.toLowerCase());
}

function stopSound() {
  if (playingSound) {
    player.pause();
    playingSound = null;
  }
}

/* One player for both sets. `onFail` runs only when the clip itself
   couldn't play — a missing or undecodable file.

   Two rejections are not that and must not trigger it. `NotAllowedError`
   is a browser refusing to start audio before the first tap; whatever we
   fell back to would be blocked too. `AbortError` is this clip being
   paused because a newer tap arrived — a child tapping ৭ then ৮ gets it
   every time, and treating it as failure would say "seven" over the top
   of আট. The `playingSound` check is the same guard from the other side:
   if we're no longer the current sound, we have nothing to say. */
function playClip(key, src, onFail, onEnd) {
  if (state.muted || !player) return;
  stopSound();
  /* A clip always wins over whatever the voice was still saying —
     otherwise walking from Numbers to বাংলা plays "seven" over সাত. */
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  const mine = ++clipSeq;
  if (player.src !== new URL(src, location.href).href) player.src = src;
  else player.currentTime = 0;
  /* Both, because a new src resets playbackRate to the default. The
     pitch stays put: browsers keep it by default when slowing. */
  player.defaultPlaybackRate = slowFactor;
  player.playbackRate = slowFactor;
  /* Assigned, not added, so a clip that once had a follow-on doesn't
     keep it forever. */
  player.onended = onEnd ? () => { if (playingSound === mine) onEnd(); } : null;
  playingSound = mine;
  player.play().catch((err) => {
    const benign = err && (err.name === 'NotAllowedError' || err.name === 'AbortError');
    if (onFail && !benign && playingSound === mine) onFail();
  });
}

function playAnimal(name) {
  const key = name.toLowerCase();
  if (!ANIMAL_SOUNDS.has(key)) return;
  playClip(key, `sounds/${key}.m4a`);
}

/* এক to বিশ, অ to ৎ, নাক to পায়ের আঙুল — spoken by a person, from a
   file. A language declares `clips` when the browser's own voice
   can't be trusted to say it — Bangla almost never ships, and
   Spanish and French often don't on a TV. Those words arrive the
   way the animal noises do. English is the one that still prefers
   the device voice, and plays a file only when that voice is missing. */
function playNumberClip(item, onFail) {
  const L = LANGS[item.lang];
  playClip(`${item.lang}n${item.n}`, L.clips.number(item), onFail);
}

/* Keyed off the part rather than a number, because the file is named
   for the part — nose.m4a is নাক, and there is no index to get wrong. */
function playBodyClip(item, code, onFail) {
  playClip(`${code}body-${item.key}`, LANGS[code].clips.body(item), onFail);
}

/* The letter, then the word it starts — two files, played back to back,
   because Lingua Libre recorded them separately. The gap between them
   is the breath a person leaves anyway, and the second only starts if
   the first finished: tapping ক then খ has to sound like খ, not like
   কলা arriving over the top of it. */
function playLetterClips(item, onFail) {
  const L = LANGS[item.lang];
  const word = L.clips.letterWord(item);
  const next = word ? () => playClip(`${item.lang}lw${item.n}`, word) : null;
  playClip(`${item.lang}l${item.n}`, L.clips.letter(item), onFail, next);
}

/* ---------- Showing a thing ----------------------------------
   Nothing opens over the page. Each screen keeps a panel at the top
   that updates in place, so a tap never has to be undone.
   -------------------------------------------------------------- */

function showItem(item) {
  if (item.kind === 'color') return showColor(item);
  if (item.kind === 'number') return showNumber(item);
  if (item.kind === 'picture') return showPicture(item);
  if (item.kind === 'shape') return showShape(item);
  if (item.kind === 'body') return showBody(item);
  if (item.kind === 'word') return showWord(item);
  return showLetter(item);
}

function showLetter(item) {
  markSeen(item);
  state.letterItem = item;
  renderLetter(item);
  bump(letterView);
  stopSound();
  sayLetter(item);
}

/* Which of the two ways of speaking a letter uses is a fact about the
   language, not about the screen: a recorded language plays its clip,
   a synthesised one is read out by the device.

   A recorded language has no stand-in when the clip won't play. No
   English letter is অ, and reading out "o" would be a wrong answer
   said confidently. A device with a real Bangla voice gets that
   instead; a device with neither still gives the tap its pop and its
   tick. */
function sayLetter(item) {
  if (letterSounds(item)) return sayLetterSound(item);
  if (ownVoice(item)) return;
  if (!LANGS[item.lang].clips) return speakIn(item.lang, item.say);
  playLetterClips(item, () => speakIn(item.lang, item.say, { rate: 0.8 }));
}

function paintPicture(item) {
  picView.style.setProperty('--c', colorFor(item));
  el('picEmoji').replaceChildren(makePhoto(item, 'sc-photo'));
  const word = el('picWord');
  const bn = pictureUsesBangla(item);
  word.textContent = pictureName(item);
  word.classList.toggle('sc-word--bn', bn);
  word.lang = bn ? 'bn' : '';
  /* No sentence means no empty line under the name — the word gets the
     panel to itself. Bangla veg names have no English sentence under. */
  const line = el('picLine');
  const showLine = item.line && !bn;
  line.textContent = showLine ? item.line : '';
  line.classList.toggle('is-hidden', !showLine);
}

function renderPicture(item) {
  state.pictureItem = item;
  paintPicture(item);
}

/* Name, then the animal itself. Where a real recording exists it does the
   second half — a spoken "meow" on top of an actual cat is a worse cat.
   Mouse and snake have no recording worth having and say their noise
   instead, which is why the written one is still there. A peacock and
   an eagle stay name-only — those cries are not for a three-year-old.

   Shared by the shelf panel and the "what's that?" focus stage so a
   tap in either place makes the same sound. */
function sayPicture(item) {
  stopSound();
  if (ownVoice(item)) return;
  /* Vegetables in বাংলা play a recording — devices almost never have a
     bn voice, the same reason the body and the numbers use files. */
  const code = curLang();
  const L = LANGS[code];
  if (item.group === 'veg' && code === 'bn' && L.clips && L.clips.veg) {
    const src = L.clips.veg(item);
    if (src) {
      playClip(`bnveg-${item.slug}`, src, () => speak(item.say));
      return;
    }
  }
  if (hasSound(item.word)) speak(`${item.word}.`, { then: () => playAnimal(item.word) });
  else speak(item.say);
}

function showPicture(item) {
  markSeen(item);
  renderPicture(item);
  bump(picView);
  sayPicture(item);
}

/* ---------- Shapes -------------------------------------------
   The panel redraws from scratch on every tap, which is what restarts
   the animation: the outline draws itself, the colour floods in behind
   it, then a dot lands on each corner in turn. Same panel-on-the-page
   rule as everywhere else.
   -------------------------------------------------------------- */

function renderShape(item) {
  shapeView.style.setProperty('--c', colorFor(item));
  const art = makeShapeArt(item, 'sc-shape-art', { animate: true });
  el('shapeArt').replaceChildren(art);
  runDraw(art);
  el('shapeWord').textContent = item.word;
  el('shapeCount').textContent = item.corners
    ? `${item.corners} ${item.unit}`
    : `no corners`;
  el('shapeLine').textContent = item.line;
  el('shapePics').textContent = item.pics.join(' ');
}

function showShape(item) {
  markSeen(item);
  state.shapeItem = item;
  renderShape(item);
  bump(shapeView);
  stopSound();
  if (!ownVoice(item)) speak(item.say);
}

/* ---------- The body -----------------------------------------
   Redrawn from scratch on every tap, which is what restarts the ring
   landing on the part. Same panel-on-the-page rule as everywhere else.
   -------------------------------------------------------------- */

function renderBody(item) {
  const L = cur();
  const bn = L.script === 'bangla';
  bodyView.style.setProperty('--c', item ? colorFor(item) : `var(${PALETTE[0]})`);
  el('bodyArt').replaceChildren(makeBodyArt(item, 'sc-body-art', { hits: true }));
  const word = el('bodyWord');
  word.textContent = item ? bodyName(item) : '';
  word.classList.toggle('sc-word--bn', bn);
  word.classList.toggle('sc-word--ar', L.script === 'arabic');
  word.lang = L.code;
  word.dir = L.dir || '';
}

/* A recorded language plays a person saying it; a synthesised one is
   read out. The speech engine is only the safety net for a clip that
   won't play: a real voice for that language if the device has one,
   and failing that the English name, because a boy who makes no sound
   when you poke his nose is a broken boy. */
function showBody(item) {
  markSeen(item);
  state.bodyItem = item;
  renderBody(item);
  bump(bodyView);
  stopSound();
  if (ownVoice(item)) return;
  const code = curLang();
  const L = LANGS[code];
  const bodyClip = L.clips && L.clips.body && L.clips.body(item);
  if (!bodyClip) return speakIn(code, `${bodyName(item)}.`);
  playBodyClip(item, code, () => {
    if (voiceFor(L.voice)) speakIn(code, bodyName(item), { rate: 0.8 });
    else speak(item.say);
  });
}

function bump(node) {
  node.classList.remove('is-bumped');
  void node.offsetWidth;
  node.classList.add('is-bumped');
}

/* The letter big, its lowercase partner beside it where the language
   has one, and under them the word it starts with a picture of it.
   One panel for every alphabet: the script, the typeface and the words
   change, which is all that ought to. The letters that begin no word a
   child meets show the letter alone — the row is dropped rather than
   left standing empty. */
function renderLetter(item) {
  const L = LANGS[item.lang];
  const bn = L.script === 'bangla';
  const ar = L.script === 'arabic';
  letterView.style.setProperty('--c', colorFor(item));
  letterView.lang = item.lang;
  letterView.dir = L.dir || '';

  const main = el('letterMain');
  main.textContent = item.face;
  main.classList.toggle('sc-main--bn', bn);
  main.classList.toggle('sc-main--ar', ar);

  const sub = el('letterSub');
  sub.textContent = item.lower;
  sub.classList.toggle('is-hidden', !L.hasCase);

  const latin = el('letterLatin');
  const sound = letterSounds(item);
  latin.textContent = sound ? `says /${item.face.toLowerCase()}/` : item.latin;
  latin.classList.toggle('is-hidden', !item.latin && !sound);
  latin.classList.toggle('sc-latin--sound', sound);

  el('letterEmoji').textContent = item.emoji;
  el('letterWord').textContent = item.word;
  const pair = el('letterPair');
  pair.classList.toggle('sc-word--bn', bn);
  pair.classList.toggle('sc-word--ar', ar);
  pair.classList.toggle('is-hidden', !item.word);
}

/* Numbers stay on the page. A modal that had to be dismissed after every
   tap turned "show me 7" into two taps and a wait; this way the grid is
   never covered and he can keep going.

   The same panel in every language — numeral, name, and that many
   pictures. Identical on purpose: counting is the part that doesn't
   change between scripts, so it shouldn't look like it has. */
function renderNumber(item) {
  const L = LANGS[item.lang];
  const bn = L.script === 'bangla';
  const ar = L.script === 'arabic';
  numView.style.setProperty('--c', colorFor(item));
  numView.lang = item.lang;
  numView.dir = L.dir || '';

  const face = el('numFace');
  face.textContent = item.face;
  face.classList.toggle('sc-main--bn', bn);
  face.classList.toggle('sc-main--ar', ar);

  const word = el('numWord');
  word.textContent = item.word;
  word.classList.toggle('sc-word--bn', bn);
  word.classList.toggle('sc-word--ar', ar);

  el('numPics').replaceChildren(...countPics(item));
}

function countPics(item) {
  return Array.from({ length: item.n }, (_, i) => {
    const s = document.createElement('span');
    s.className = 'count-item';
    s.textContent = item.emoji;
    /* Staggered so the group still reads as "one after another"
       without making him wait through a spoken count. */
    s.style.animationDelay = `${i * 0.035}s`;
    return s;
  });
}

/* Fills the panels on first load without speaking, and without
   claiming anything has been explored yet. */
function primePanels() {
  const code = curLang();
  renderNumber(NUMBERS_BY_LANG[code][0]);
  renderLetter(LETTERS_BY_LANG[code][0]);
  paintPicture(fruitItems[0]);
  const c = colorItems[0];
  colorView.style.setProperty('--ci', c.ink);
  el('colorName').textContent = c.word;
  renderShape(shapeItems[0]);
  /* No part chosen yet — the boy stands there whole, which is the
     invitation. Lighting one up before he's touched anything would
     answer a question nobody asked. */
  renderBody(null);
}

function showNumber(item) {
  markSeen(item);
  state.numberItem = item;
  renderNumber(item);
  bump(numView);
  stopSound();
  sayNumber(item);
}

/* Where there is a recording it is the voice of this tile — a real
   person, the same one every time, on every device. The speech engine
   is only the safety net for a clip that won't play at all: the
   device's own voice for that language if it has one, and failing that
   the English name, because a magnet that makes no sound when a
   three-year-old taps it is a broken magnet.

   A number gets that English stand-in and a letter doesn't. Seven is
   seven in every script here, so "seven" is a right answer said in the
   wrong language; no English letter is অ, so "o" would just be wrong. */
function sayNumber(item) {
  if (ownVoice(item)) return;
  const L = LANGS[item.lang];
  const clip = L.clips && L.clips.number && L.clips.number(item);
  if (!clip) return speakIn(item.lang, item.word, { rate: 0.8 });
  playNumberClip(item, () => {
    if (voiceFor(L.voice)) speakIn(item.lang, item.word, { rate: 0.8 });
    else speak(NUMBER_NAMES.en[item.n], { rate: 0.8 });
  });
}

/* Tapping the panel repeats it — a big, obvious target. */
letterView.addEventListener('click', () => {
  if (state.letterItem) showLetter(state.letterItem);
});
picView.addEventListener('click', () => {
  if (state.pictureItem) showPicture(state.pictureItem);
});
numView.addEventListener('click', () => {
  if (state.numberItem) showNumber(state.numberItem);
});
shapeView.addEventListener('click', () => {
  if (state.shapeItem) showShape(state.shapeItem);
});
/* The boy is one big button with invisible shapes laid over him, so a
   tap either lands on a part — and names it — or lands on the shorts
   and the background, where the panel does what every other panel
   does and says the last thing again. */
bodyView.addEventListener('click', (e) => {
  const spot = e.target.closest('[data-part]');
  const item = spot ? bodyByKey.get(spot.dataset.part) : state.bodyItem;
  if (item) showBody(item);
});

/* ---------- The word screens ----------------------------------
   Actions, Feelings, Opposites and Where? are one screen built four
   times from WORD_SCREENS: a hint, a panel with the big picture and
   the word, and a grid. Built here rather than written out four times
   in index.html.
   -------------------------------------------------------------- */

function buildWordScreens() {
  const play = el('screen-play');
  Object.entries(WORD_SCREENS).forEach(([name, ws]) => {
    const sec = document.createElement('section');
    sec.className = 'screen is-hidden';
    sec.id = `screen-${name}`;
    sec.setAttribute('aria-label', ws.title);
    sec.innerHTML = `<p class="screen-hint">${ws.hint}</p>
      <button class="showcase showcase--word" aria-live="polite">
        <span class="sc-art"></span>
        <span class="sc-text"><span class="sc-word"></span><span class="sc-line"></span></span>
      </button>
      <div class="grid grid--words${ws.group === 'opposite' ? ' grid--pairs' : ''}"></div>`;
    play.before(sec);
    const grid = sec.querySelector('.grid');
    grid.addEventListener('click', onGridTap);
    const view = sec.querySelector('.showcase');
    view.addEventListener('click', () => {
      const it = state.wordItem[name];
      if (it) showWord(it);
    });
    addSpeakBar(view);
  });
}

/* Built the first time the screen opens, like a shelf of photos: the
   actions are thirteen photographs nobody asked for until then. */
function fillWordScreen(name) {
  const ws = WORD_SCREENS[name];
  const sec = el(`screen-${name}`);
  const grid = sec.querySelector('.grid');
  if (grid.childElementCount) return;
  grid.replaceChildren(...ws.list.map((it) => makeMagnet(it, { known: true, caption: true })));
  renderWord(state.wordItem[name] || ws.list[0], sec);
}

function renderWord(item, sec = el(`screen-${WORD_SCREEN_OF[item.group]}`)) {
  const view = sec.querySelector('.showcase');
  view.style.setProperty('--c', colorFor(item));
  const art = sec.querySelector('.sc-art');
  const mine = makeWordArt(item, 'sc-art-img');
  if (item.group === 'opposite') {
    /* An opposite is shown with its partner beside it, dimmed — the
       word means something only next to the other one. */
    const partner = oppositeItems.find((o) => o.word === item.pair);
    const other = makeWordArt(partner, 'sc-art-img');
    other.classList.add('is-dim');
    mine.classList.add('is-lit');
    const pair = item.index % 2 === 0 ? [mine, other] : [other, mine];
    art.replaceChildren(...pair);
    art.classList.add('sc-art--pair');
  } else {
    art.replaceChildren(mine);
  }
  if (mine.loading) mine.loading = 'eager';
  sec.querySelector('.sc-word').textContent = item.word;
  sec.querySelector('.sc-line').textContent = item.line;
}

function showWord(item) {
  const name = WORD_SCREEN_OF[item.group];
  markSeen(item);
  state.wordItem[name] = item;
  renderWord(item);
  bump(el(`screen-${name}`).querySelector('.showcase'));
  stopSound();
  if (!ownVoice(item)) speak(item.say, { rate: 0.8 });
}

/* ---------- Colours -------------------------------------------
   The page itself takes the colour, the tapped tile is ringed, and
   the name is spoken on its own. Seeing "green" fill the whole door
   while hearing the word is the lesson — no extra screen needed.
   -------------------------------------------------------------- */

const colorView = el('colorView');
const appEl = document.querySelector('.app');

function showColor(item) {
  markSeen(item);
  state.colorItem = item;

  appEl.style.setProperty('--page', item.hex);
  /* Light colours need dark page text and vice versa; the tile
     already carries that judgement. */
  appEl.style.setProperty('--page-ct', item.on === 'dark' ? 'var(--ink)' : '#fff');
  appEl.classList.add('is-tinted');

  colorsGrid.querySelectorAll('.magnet').forEach((m) => {
    m.classList.toggle('is-picked', m.dataset.id === item.id);
  });

  colorView.style.setProperty('--ci', item.ink);
  el('colorName').textContent = item.word;
  bump(colorView);
  stopSound();
  if (!ownVoice(item)) speak(item.word, { rate: 0.8 });
}

colorView.addEventListener('click', () => {
  if (state.colorItem) showColor(state.colorItem);
});

/* ---------- Play --------------------------------------------- */

/* The English lists, named explicitly. The game asks out loud and it
   asks in English — see "The game stays in English" in the README —
   and these are the only two lists carrying the words to ask with. */
const CATEGORIES = {
  letters: LETTERS_BY_LANG.en,
  numbers: NUMBERS_BY_LANG.en,
  pictures: pictureAll,
  colors: colorItems,
  shapes: shapeItems,
  body: bodyItems,
  actions: actionItems,
  feelings: feelingItems,
  opposites: oppositeItems,
  where: placeItems,
};

/* Every round draws its four choices from one category. Asking a child
   to pick "red" from a letter, a lion and the number 7 isn't a choice,
   it's a riddle — so "All" varies the category per round instead of
   mixing them inside one. */
/* "What makes that sound?" asks only about the animals and birds that
   have a real recording. A spoken "moo" would be the answer said out
   loud, so the ones without a recording are not asked about. */
const SOUND_POOL = pictureAll.filter((it) => hasSound(it.word));

function poolFor(setName) {
  if (setName !== 'all') return CATEGORIES[setName];
  const keys = Object.keys(CATEGORIES);
  return CATEGORIES[keys[Math.floor(Math.random() * keys.length)]];
}

function shuffled(list) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function startGame(setName) {
  state.game = { set: setName, round: 0, target: null, locked: false };
  renderDots();
  nextRound();
}

function renderDots() {
  const g = state.game;
  dotsBox.replaceChildren(
    ...Array.from({ length: ROUNDS_PER_GAME }, (_, i) => {
      const d = document.createElement('span');
      d.className = 'dot' + (i < g.round ? ' is-done' : '');
      return d;
    })
  );
}

function nextRound() {
  const g = state.game;
  stopSound();
  if (g.round >= ROUNDS_PER_GAME) return finishGame();

  const pool = g.set === 'sounds' ? SOUND_POOL : poolFor(g.set);
  const picks = shuffled(pool).slice(0, 4);
  g.target = picks[Math.floor(Math.random() * picks.length)];
  g.locked = false;

  askEl.replaceChildren();
  if (g.set === 'sounds') {
    askEl.textContent = 'Who makes this sound?';
    choicesBox.replaceChildren(...shuffled(picks).map((it, i) => {
      const tile = makeMagnet(it, { quiz: true });
      tile.style.setProperty('--c', `var(${PALETTE[i]})`);
      return tile;
    }));
    speak('Who makes this sound?', { then: () => { if (state.game === g) playAnimal(g.target.word); } });
    return;
  }
  askEl.append(document.createTextNode(g.target.askPrefix));
  const strong = document.createElement('span');
  strong.className = 'ask-target';
  strong.textContent = g.target.askFace;
  /* Say "red" in red. Uses the darkened ink so it stays readable. */
  strong.style.color = g.target.kind === 'color' ? g.target.ink : '';
  askEl.append(strong);
  if (g.target.askSuffix) askEl.append(document.createTextNode(g.target.askSuffix));

  const tiles = shuffled(picks).map((it) => makeMagnet(it, { quiz: true }));
  if (g.target.kind !== 'color') {
    /* Four distinct colours per round. On the grid a letter keeps its
       colour so it stays recognisable; here it must not, or the child
       can win by matching colour instead of reading the letter. Colour
       rounds are exempt — there the colour is the whole question. */
    const shades = shuffled(PALETTE).slice(0, tiles.length);
    tiles.forEach((tile, i) => tile.style.setProperty('--c', `var(${shades[i]})`));
  }
  choicesBox.replaceChildren(...tiles);

  speak(askOf(g.target));
}

function finishGame() {
  cheerWrap.classList.remove('is-hidden');
  el('cheerSub').textContent = `${ROUNDS_PER_GAME} out of ${ROUNDS_PER_GAME}`;
  burst();
  sfx.cheer();
  speak('You did it! Well done!', { rate: 0.9 });
}

/* Every right answer gets its own small party, thrown from the tile
   the child actually tapped. */
const CHEER_WORDS = ['Yaaay!', 'Woohoo!', 'Yaaay!', 'Hooray!', 'Yaaay!', 'Yippee!'];
const CONFETTI = ['⭐', '🎉', '✨', '🌈', '🎈', '💫', '🎊', '❤️'];

let cheerTurn = 0;

function party(fromEl) {
  const box = el('party');
  const r = fromEl.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const word = CHEER_WORDS[cheerTurn++ % CHEER_WORDS.length];

  const badge = document.createElement('span');
  badge.className = 'party-word';
  badge.textContent = word;
  badge.style.left = `${cx}px`;
  badge.style.top = `${cy}px`;
  box.appendChild(badge);
  setTimeout(() => badge.remove(), 1500);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return word;

  for (let i = 0; i < 26; i++) {
    const bit = document.createElement('span');
    bit.className = 'party-bit';
    bit.textContent = CONFETTI[i % CONFETTI.length];
    const angle = (i / 26) * Math.PI * 2 + Math.random() * 0.3;
    const dist = 120 + Math.random() * 190;
    bit.style.left = `${cx}px`;
    bit.style.top = `${cy}px`;
    bit.style.fontSize = `${20 + Math.random() * 18}px`;
    bit.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    bit.style.setProperty('--dy', `${Math.sin(angle) * dist + 60}px`);
    bit.style.setProperty('--rot', `${Math.round(Math.random() * 540 - 270)}deg`);
    bit.style.animationDelay = `${Math.random() * 0.12}s`;
    box.appendChild(bit);
    setTimeout(() => bit.remove(), 1500);
  }
  return word;
}

function burst() {
  const box = el('cheerBurst');
  box.replaceChildren();
  const marks = ['⭐', '🎉', '✨', '🌈', '🎈'];
  for (let i = 0; i < 16; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    s.textContent = marks[i % marks.length];
    const angle = (i / 16) * Math.PI * 2;
    const dist = 110 + Math.random() * 70;
    s.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    s.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
    s.style.setProperty('--rot', `${Math.round(Math.random() * 360 - 180)}deg`);
    s.style.animationDelay = `${i * 0.03}s`;
    box.appendChild(s);
  }
}

choicesBox.addEventListener('click', (e) => {
  const btn = e.target.closest('.magnet');
  const g = state.game;
  if (!btn || !g || g.locked) return;

  const item = byId.get(btn.dataset.id);

  if (item.id === g.target.id) {
    g.locked = true;
    btn.classList.add('is-right');
    sfx.right();
    addStar();
    markSeen(item);
    const word = party(btn);
    /* The slow rate is what stretches "Yaaay!" out — speech synthesis
       won't lengthen a vowel just because it's spelled long. Finding
       the cow is rewarded with an actual moo. */
    const roar = item.kind === 'picture' && hasSound(item.word);
    /* In the sound game the noise was the question, so the answer is
       the name: "Cow." and then the moo once more, to pair them. */
    const named = g.set === 'sounds'
      ? () => speak(item.say, { rate: 0.86, then: () => playAnimal(item.word) })
      : () => (roar ? playAnimal(item.word) : speak(item.say, { rate: 0.86 }));
    speak(word, { rate: 0.58, pitch: 1.4, then: named });
    g.round += 1;
    renderDots();
    setTimeout(() => { if (state.game === g) nextRound(); }, g.set === 'sounds' ? 4200 : 2900);
  } else {
    /* Wrong taps cost nothing — just a nudge to try again. */
    btn.classList.remove('is-wrong');
    void btn.offsetWidth;
    btn.classList.add('is-wrong');
    sfx.wrong();
    setTimeout(() => btn.classList.remove('is-wrong'), 450);
  }
});

el('repeatAsk').addEventListener('click', () => {
  const g = state.game;
  const t = g && g.target;
  if (!t) return;
  if (g.set === 'sounds') playAnimal(t.word);
  else speak(askOf(t));
});

/* ---------- The shelf list and the game list -----------------
   Pictures and Play each open on a list of big cards, the same way the
   home menu does. A card opens one shelf or one game; the back button
   comes back to the list. A child who can't read picks by the picture,
   so every card carries one: a photograph for a shelf, a symbol for a
   game. The word under it is for the grown-up.
   -------------------------------------------------------------- */

const SHELVES = [
  ['fruit', 'Fruits', 'Apple'], ['veg', 'Vegetables', 'Carrot'],
  ['clothes', 'Clothes', 'T-shirt'], ['vehicle', 'Vehicles', 'Car'],
  ['animal', 'Animals', 'Lion'], ['bird', 'Birds', 'Parrot'],
  ['flower', 'Flowers', 'Sunflower'], ['home', 'At home', 'Chair'],
  ['job', 'Jobs', 'Doctor'],
];

const GAMES = [
  ['letters', 'Letters', 'A'], ['numbers', 'Numbers', '1'],
  ['pictures', 'Pictures', '🍓'], ['colors', 'Colors', '🌈'],
  ['shapes', 'Shapes', '🔷'], ['body', 'Body', '🙋'],
  ['sounds', 'Sounds', '🐮'], ['actions', 'Actions', '🏃'],
  ['feelings', 'Feelings', '😊'], ['opposites', 'Opposites', '↕️'],
  ['where', 'Where?', '📦'], ['all', 'Mix', '★'],
];

const shelfMenu = el('shelfMenu');
const playMenu = el('playMenu');

function menuCard(cls, label, i) {
  const b = document.createElement('button');
  b.className = cls;
  b.style.setProperty('--c', `var(${PALETTE[i % PALETTE.length]})`);
  b.setAttribute('aria-label', label);
  const cap = document.createElement('span');
  cap.className = 'menu-label';
  cap.setAttribute('aria-hidden', 'true');
  cap.textContent = label;
  return [b, cap];
}

/* Built on first sight, like a shelf: nine cover photos are asked for
   when Pictures opens, not when the board does. */
function buildShelfMenu() {
  if (shelfMenu.childElementCount) return;
  shelfMenu.replaceChildren(...SHELVES.map(([group, label, cover], i) => {
    const [b, cap] = menuCard('shelf-card', label, i);
    b.dataset.group = group;
    const list = PICTURE_GROUPS[group].list;
    const item = list.find((it) => it.word === cover) || list[0];
    const photo = makePhoto(item, 'shelf-photo');
    photo.loading = 'eager';
    b.append(photo, cap);
    return b;
  }));
}

function buildPlayMenu() {
  if (playMenu.childElementCount) return;
  playMenu.replaceChildren(...GAMES.map(([set, label, mark], i) => {
    const [b, cap] = menuCard('game-card', label, i);
    b.dataset.set = set;
    const m = document.createElement('span');
    m.className = 'game-mark' + (/^[A-Z0-9★]$/.test(mark) ? '' : ' game-mark--emoji');
    m.setAttribute('aria-hidden', 'true');
    m.textContent = mark;
    b.append(m, cap);
    return b;
  }));
}

shelfMenu.addEventListener('click', (e) => {
  const b = e.target.closest('.shelf-card');
  if (!b) return;
  sfx.pop();
  navigate({ screen: 'pictures', sub: b.dataset.group });
});

playMenu.addEventListener('click', (e) => {
  const b = e.target.closest('.game-card');
  if (!b) return;
  sfx.pop();
  navigate({ screen: 'play', sub: b.dataset.set });
});

el('shuffleBtn').addEventListener('click', () => {
  sfx.pop();
  shuffleShelf(currentPicGroup());
});

/* ---------- "What's that?" focus mode ------------------------
   One large photograph from the open shelf. Parent asks "what's
   that?"; a tap speaks the next one and slides it in. The shelf
   under it stays built and in whatever order Shuffle left it —
   focus reads the tiles, not the written list — so coming back
   to the grid finds everything where it was.

   At the end of the shelf it wraps to the first picture again:
   a three-year-old looping the fruit shelf is the point, not a
   "you finished" screen. Leaving the Pictures tab, or tapping
   "Shelf" on the same button that opened it, puts the grid back.
   -------------------------------------------------------------- */

let focusOn = false;
let focusIndex = 0;
let focusBusy = false;

const focusStage = el('focusStage');
const focusCard = el('focusCard');
const focusBtn = el('focusBtn');
const picsScreen = el('screen-pictures');

/* Tile order on the open shelf, which is what Shuffle rearranges.
   Building first keeps a never-opened shelf from arriving empty. */
function focusList() {
  const group = currentPicGroup();
  buildPictureGrid(group);
  const tiles = [...el(PICTURE_GROUPS[group].grid).children];
  if (tiles.length) return tiles.map((t) => byId.get(t.dataset.id));
  return PICTURE_GROUPS[group].list;
}

function paintFocus(item) {
  const photo = makePhoto(item, 'focus-img');
  /* The focus stage shows one picture at a time — no reason to wait
     for a scroll that never comes. */
  if (photo.loading) photo.loading = 'eager';
  el('focusPhoto').replaceChildren(photo);
  const word = el('focusWord');
  const bn = pictureUsesBangla(item);
  word.textContent = pictureName(item);
  word.classList.toggle('sc-word--bn', bn);
  word.lang = bn ? 'bn' : '';
  focusStage.style.setProperty('--c', colorFor(item));
}

function renderFocusChrome() {
  focusBtn.setAttribute('aria-pressed', String(focusOn));
  focusBtn.setAttribute('aria-label', focusOn ? 'Back to the shelf' : 'One picture at a time');
  focusBtn.title = focusOn ? 'Back to the shelf' : 'One picture at a time';
  el('focusBtnIco').textContent = focusOn ? '⊞' : '🔎';
  picsScreen.classList.toggle('is-focus', focusOn);
  focusStage.classList.toggle('is-hidden', !focusOn);
  if (focusOn) {
    el('picsHint').textContent = "What's that? Tap for the next one.";
  } else {
    el('picsHint').textContent = pictureHint(currentPicGroup());
  }
}

function showFocusItem(item, { animate = false } = {}) {
  markSeen(item);
  state.pictureItem = item;
  paintPicture(item);
  paintFocus(item);
  sayPicture(item);

  if (!animate) {
    focusCard.classList.remove('is-leave', 'is-enter');
    return;
  }

  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calm) {
    focusCard.classList.remove('is-leave', 'is-enter');
    return;
  }

  focusCard.classList.remove('is-leave', 'is-enter');
  void focusCard.offsetWidth;
  focusCard.classList.add('is-enter');
  focusCard.addEventListener('animationend', () => {
    focusCard.classList.remove('is-enter');
  }, { once: true });
}

function enterFocusMode() {
  const list = focusList();
  if (!list.length) return;
  focusOn = true;
  focusBusy = false;
  let i = list.findIndex((it) => state.pictureItem && it.id === state.pictureItem.id);
  if (i < 0) i = 0;
  focusIndex = i;
  renderFocusChrome();
  showFocusItem(list[focusIndex], { animate: false });
  el('board').scrollTop = 0;
}

function exitFocusMode() {
  if (!focusOn) return;
  focusOn = false;
  focusBusy = false;
  focusCard.classList.remove('is-leave', 'is-enter');
  renderFocusChrome();
  if (state.pictureItem) paintPicture(state.pictureItem);
}

function advanceFocus() {
  if (!focusOn || focusBusy) return;
  const list = focusList();
  if (!list.length) return;

  sfx.pop();
  focusIndex = (focusIndex + 1) % list.length; /* wrap to the start */
  const next = list[focusIndex];
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (calm) {
    showFocusItem(next, { animate: false });
    return;
  }

  /* Leave the current picture, swap while it is gone, then enter the
     next — so the new photo never flashes at full opacity mid-way. */
  focusBusy = true;
  focusCard.classList.remove('is-enter');
  focusCard.classList.add('is-leave');
  focusCard.addEventListener('animationend', () => {
    focusCard.classList.remove('is-leave');
    focusCard.classList.add('is-hold');
    showFocusItem(next, { animate: false });
    void focusCard.offsetWidth;
    focusCard.classList.remove('is-hold');
    focusCard.classList.add('is-enter');
    focusCard.addEventListener('animationend', () => {
      focusCard.classList.remove('is-enter');
      focusBusy = false;
    }, { once: true });
  }, { once: true });
}

focusBtn.addEventListener('click', () => {
  sfx.pop();
  if (focusOn) exitFocusMode();
  else enterFocusMode();
});

focusStage.addEventListener('click', () => {
  advanceFocus();
});

/* ---------- The language switch ------------------------------
   One switch, and one current language for the whole board. It appears
   on the three screens that have more than English to say — letters,
   numbers and the body — and only when more than one language is
   switched on, because a switch with one side is furniture.

   Only one language is ever on a screen. A tile carries নাক or "Nose"
   or "Nariz", never নাক under "Nose", because a word in the corner of
   another word's tile is a subtitle, and the subtitle is the part that
   gets read.
   -------------------------------------------------------------- */

const langSwitches = [...document.querySelectorAll('.segmented--lang')];

function renderLangSwitches() {
  const on = activeLangs();
  const code = curLang();
  langSwitches.forEach((box) => {
    box.classList.toggle('is-hidden', on.length < 2);
    box.replaceChildren(...on.map((c) => {
      const L = LANGS[c];
      const b = document.createElement('button');
      b.className = 'seg' + (c === code ? ' is-on' : '')
        + (L.script === 'bangla' ? ' seg--bn' : '')
        + (L.script === 'arabic' ? ' seg--ar' : '');
      b.dataset.lang = c;
      b.lang = c;
      b.setAttribute('aria-pressed', String(c === code));
      /* Each side written in its own language. A button labelled
         "Bangla" in Latin type is a grown-up's label for it. */
      b.textContent = L.native;
      return b;
    }));
  });
}

langSwitches.forEach((box) => {
  box.addEventListener('click', (e) => {
    const seg = e.target.closest('.seg');
    if (!seg) return;
    sfx.pop();
    setLang(seg.dataset.lang);
  });
});

function setLang(code) {
  if (!activeLangs().includes(code)) return;
  state.lang = code;
  save();
  applyLang();
}

/* Puts every screen that carries a language into the current one, all
   at once, and speaks none of it. Flipping the switch is a grown-up
   reaching over; the thing he was looking at is still the thing he was
   looking at, and reading it back at him turns a change of label into
   an answer to a question he didn't ask. The panel is right there to
   be tapped if he wants to hear it in the new language.

   The panels keep their place rather than resetting to the top: the
   same position on the chart, the same number, the same body part. 7
   becomes ৭ and is still seven, which is the whole point of standing
   still and hearing it named twice. */
function applyLang() {
  const code = curLang();
  const L = LANGS[code];

  renderLangSwitches();

  [['lettersHint', 'letters'], ['numbersHint', 'numbers'], ['bodyHint', 'body']]
    .forEach(([id, key]) => {
      const hint = el(id);
      hint.textContent = L.hint[key];
      hint.lang = code;
      /* An Arabic sentence in a left-to-right box parks its full stop
         on the wrong end. */
      hint.dir = L.dir || '';
    });

  buildLetterGrid();
  buildNumberGrid();
  buildBodyGrid();
  /* The names / sounds switch is English only. Skipped on the first
     call, which runs before that part of the file has. */
  if (booted) renderLetterMode();

  /* Alphabets are different lengths — 47 বর্ণ against 26 letters — so a
     position off the end of the shorter one lands on its last tile
     rather than nowhere. */
  const letters = LETTERS_BY_LANG[code];
  const numbers = NUMBERS_BY_LANG[code];
  const letter = state.letterItem
    ? letters[Math.min(state.letterItem.index, letters.length - 1)]
    : null;
  const number = state.numberItem ? numbers[state.numberItem.index] : null;
  if (letter) state.letterItem = letter;
  if (number) state.numberItem = number;

  renderLetter(letter || letters[0]);
  renderNumber(number || numbers[0]);
  renderBody(state.bodyItem);

  /* Vegetable magnets were built once with English captions. Clear the
     veg shelf from the cache and rebuild it so বাংলা / English flip the
     captions; leave fruit, clothes and the rest alone. */
  if (builtShelves.has('veg')) {
    builtShelves.delete('veg');
    buildPictureGrid('veg');
  }
  if (state.pictureItem && state.pictureItem.group === 'veg') {
    paintPicture(state.pictureItem);
    if (typeof focusOn !== 'undefined' && focusOn) paintFocus(state.pictureItem);
  }
  /* Hint on the pictures screen may be the Bangla veg one. */
  if (!document.getElementById('screen-pictures').classList.contains('is-hidden')
      && !(typeof focusOn !== 'undefined' && focusOn)) {
    el('picsHint').textContent = pictureHint(currentPicGroup());
    el('picsHint').lang = curLang() === 'bn' && currentPicGroup() === 'veg' ? 'bn' : '';
  }
}

/* Voices load asynchronously, and on some browsers the list is empty
   for the first moment of the page — so a language can become
   available a second after the board is already drawn.

   Two keys, watched separately, because they cost different amounts.
   Which languages are *on* decides the switch and the grids, and
   rebuilding three grids under a finger that is mid-tap is worse than
   a switch arriving late — so that only happens when it really
   changed. Which languages are *offerable* only decides what the
   picker says, which is cheap and is also the thing most likely to
   arrive late. */
let booted = false;
let shownLangs = '';
let shownAvail = '';

function availKey() {
  return LANG_CODES.map((c) => (langAvailable(c) ? '1' : '0')).join('');
}

function refreshAvailability() {
  if (!booted) return;
  const active = activeLangs().join(',');
  if (active !== shownLangs) {
    shownLangs = active;
    applyLang();
  }
  const avail = availKey();
  if (avail !== shownAvail) {
    shownAvail = avail;
    renderLangLists();
  }
}

/* The picker's whole job is to say which languages this device can
   actually speak, so it waits for the voice list rather than opening
   with the answer wrong and correcting itself a tick later. The
   timeout is for the browser that never fires the event because it
   had the voices all along. */
function whenVoicesKnown(then) {
  if (!('speechSynthesis' in window) || speechSynthesis.getVoices().length) {
    return then();
  }
  let fired = false;
  const go = () => { if (!fired) { fired = true; then(); } };
  speechSynthesis.addEventListener('voiceschanged', go, { once: true });
  setTimeout(go, 600);
}

/* ---------- Which languages are switched on ------------------
   The picker, which is the same list of rows in two places: over the
   whole screen the first time the board is opened, and in the
   grown-ups drawer forever after.

   Switching a language off hides its tiles and its row of stats. It
   does not touch `state.seen` — off is not reset, and switching it
   back on finds the board the way he left it.
   -------------------------------------------------------------- */

function langListBoxes() {
  return [el('langList'), el('parentLangList')].filter(Boolean);
}

function renderLangLists() {
  langListBoxes().forEach(renderLangList);
}

function renderLangList(box) {
  const on = activeLangs();
  box.replaceChildren(...LANG_CODES.map((code) => {
    const L = LANGS[code];
    const ok = langAvailable(code);
    const isOn = ok && state.langs.includes(code);
    /* The last one standing can't be switched off — a board with no
       words on it isn't a board. */
    const last = isOn && on.length === 1;

    const row = document.createElement('button');
    row.className = 'lang-row' + (isOn ? ' is-on' : '');
    row.dataset.lang = code;
    row.disabled = !ok || last;
    row.setAttribute('aria-pressed', String(isOn));

    const native = document.createElement('span');
    native.className = 'lang-native'
      + (L.script === 'bangla' ? ' lang-native--bn' : '')
      + (L.script === 'arabic' ? ' lang-native--ar' : '');
    native.lang = code;
    native.textContent = L.native;

    const text = document.createElement('span');
    text.className = 'lang-text';
    text.append(native);

    /* বাংলা needs "Bangla" beside it for a grown-up who can't read the
       script. English doesn't need "English" twice. */
    if (L.label !== L.native) {
      const label = document.createElement('span');
      label.className = 'lang-label';
      label.textContent = L.label;
      text.append(label);
    }

    if (!ok || last) {
      const note = document.createElement('span');
      note.className = 'lang-note';
      /* Saying which is missing, because it is fixable: the voices are
         a system setting, not something this page can install. */
      note.textContent = ok
        ? 'The board keeps at least one.'
        : `This device has no ${L.label} voice.`;
      text.append(note);
    }

    const tick = document.createElement('span');
    tick.className = 'lang-tick';
    tick.setAttribute('aria-hidden', 'true');
    tick.textContent = isOn ? '✓' : '';

    row.append(text, tick);
    return row;
  }));
}

function toggleLang(code) {
  const isOn = state.langs.includes(code);
  if (isOn && activeLangs().length < 2) return;
  /* Kept in registry order however it was clicked, so the switch never
     rearranges itself under a thumb. */
  state.langs = LANG_CODES.filter((c) =>
    (c === code ? !isOn : state.langs.includes(c)));
  save();
  applyLang();
  renderLangLists();
  shownLangs = activeLangs().join(',');
  shownAvail = availKey();
  if (!parentWrap.classList.contains('is-hidden')) {
    renderStats();
    askOfflineCount();
  }
}

document.addEventListener('click', (e) => {
  const row = e.target.closest('.lang-row');
  if (!row || row.disabled) return;
  sfx.pop();
  toggleLang(row.dataset.lang);
});

/* Shown once, on a board nobody has set up yet, and never in front of
   a child who already had one working — see the migration in `load`.
   It is a wall between a three-year-old and the magnets, so it comes
   up already answered: the device's own language is on, English is on,
   and the button works without anything being touched. */
const langWrap = el('langWrap');

function openLangPicker() {
  renderLangList(el('langList'));
  langWrap.classList.remove('is-hidden');
}

el('langDone').addEventListener('click', () => {
  state.chosen = true;
  save();
  langWrap.classList.add('is-hidden');
});

function showPictureGroup(group) {
  buildPictureGrid(group);
  Object.entries(PICTURE_GROUPS).forEach(([name, g]) => {
    el(g.grid).classList.toggle('is-hidden', name !== group);
  });
  const chosen = PICTURE_GROUPS[group];
  /* Don't leave a cat sitting on the fruit screen. */
  if (!state.pictureItem || state.pictureItem.group !== group) {
    renderPicture(chosen.list[0]);
  }
  if (focusOn) {
    /* New shelf, same mode: start at the first tile of this shelf. */
    const list = focusList();
    focusIndex = 0;
    focusBusy = false;
    renderFocusChrome();
    if (list.length) showFocusItem(list[0], { animate: false });
  } else {
    el('picsHint').textContent = pictureHint(group);
    el('picsHint').lang = (curLang() === 'bn' && group === 'veg') ? 'bn' : '';
  }
  el('board').scrollTop = 0;
}

el('againBtn').addEventListener('click', () => {
  cheerWrap.classList.add('is-hidden');
  startGame(state.game ? state.game.set : 'letters');
});

el('cheerDone').addEventListener('click', () => {
  cheerWrap.classList.add('is-hidden');
  goBack();
});

/* ---------- Stars -------------------------------------------- */

function addStar() {
  state.stars += 1;
  save();
  renderScore();
}

function renderScore() {
  el('scoreNum').textContent = state.stars;
  scoreEl.classList.remove('is-bumped');
  void scoreEl.offsetWidth;
  scoreEl.classList.add('is-bumped');
}

/* ---------- Screens ------------------------------------------ */

function showScreen(name) {
  state.screen = name;
  /* Driven off the DOM rather than a list kept in step with it by hand.
     A hardcoded list that has fallen behind index.html doesn't throw —
     it hides the screens it knows about, never unhides the one it
     doesn't, and leaves a blank board with the tab lit up. */
  document.querySelectorAll('.screen').forEach((sec) => {
    sec.classList.toggle('is-hidden', sec.id !== 'screen-' + name);
  });
  el('board').scrollTop = 0;
  /* A take in progress belongs to the screen it started on. */
  cancelTurn();
  clearBeats();

  /* Leaving Pictures drops focus mode so Letters/Numbers/etc. never
     inherit a half-hidden shelf. Coming back starts on the grid. */
  if (name !== 'pictures') exitFocusMode();

  /* The door only wears a colour while he's on the colours screen. */
  appEl.classList.toggle('is-tinted', name === 'colors' && !!state.colorItem);

  if (WORD_SCREENS[name]) fillWordScreen(name);

  /* Arriving before he's picked anything, the circle draws itself —
     the animation is the invitation to tap. */
  if (name === 'shapes' && !state.shapeItem) renderShape(shapeItems[0]);

  if (name !== 'play') {
    state.game = null;
    stopSound();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }
}

/* ---------- Getting around ------------------------------------
   Three levels, like an app: the home menu, a module, and inside
   Pictures and Play one more — a shelf, a game. A place is
   { screen, sub }. Going in pushes a history entry, so the back
   button in the rail, the browser's back and Android's back gesture
   all do the same thing: one level up.
   -------------------------------------------------------------- */

const backBtn = el('backBtn');
const playScreen = el('screen-play');

function setShelf(group) {
  picsScreen.classList.toggle('is-menu', !group);
  el('board').scrollTop = 0;
  if (!group) {
    exitFocusMode();
    buildShelfMenu();
    return;
  }
  state.picGroup = group;
  showPictureGroup(group);
}

function setGame(set) {
  playMenu.classList.toggle('is-hidden', !!set);
  el('playGame').classList.toggle('is-hidden', !set);
  el('board').scrollTop = 0;
  if (!set) {
    buildPlayMenu();
    state.game = null;
    stopSound();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    return;
  }
  startGame(set);
}

function here() {
  const sub = state.screen === 'pictures' && !picsScreen.classList.contains('is-menu') ? state.picGroup
    : state.screen === 'play' && state.game ? state.game.set : null;
  return { screen: state.screen, sub };
}

function applyNav(where) {
  const screen = (where && where.screen) || 'home';
  const sub = (where && where.sub) || null;
  if (screen !== state.screen) showScreen(screen);
  if (screen === 'pictures') setShelf(sub);
  if (screen === 'play') setGame(sub);
  backBtn.classList.toggle('is-hidden', screen === 'home');
}

function navigate(where) {
  const depth = (history.state && history.state.depth) || 0;
  history.pushState({ kiddo: where, depth: depth + 1 }, '');
  applyNav(where);
}

/* One level up. Uses the history entry when there is one, so a later
   browser back doesn't land on the level just left. */
function goBack() {
  if (history.state && history.state.depth > 0) {
    history.back();
    return;
  }
  const at = here();
  const up = at.sub ? { screen: at.screen } : { screen: 'home' };
  history.replaceState({ kiddo: up, depth: 0 }, '');
  applyNav(up);
}

window.addEventListener('popstate', (e) => {
  cheerWrap.classList.add('is-hidden');
  applyNav(e.state && e.state.kiddo);
});

backBtn.addEventListener('click', () => {
  sfx.pop();
  goBack();
});

document.querySelectorAll('.home-card').forEach((card) => {
  card.addEventListener('click', () => {
    sfx.pop();
    navigate({ screen: card.dataset.screen });
  });
});

/* ---------- Sound toggle ------------------------------------- */

const soundBtn = el('soundBtn');

function renderSound() {
  soundBtn.setAttribute('aria-pressed', String(state.muted));
  /* Nothing to say slowly or to play back with the sound off. */
  appEl.classList.toggle('is-muted', state.muted);
  soundBtn.title = state.muted ? 'Turn sound on' : 'Turn sound off';
}

soundBtn.addEventListener('click', () => {
  state.muted = !state.muted;
  if (state.muted) {
    stopSound();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }
  save();
  renderSound();
  if (!state.muted) sfx.pop();
});

/* ---------- Focus mode ----------------------------------------
   Hide distracting chrome (score, sound, parent buttons, nav tabs,
   language switches, category pickers, shuffle buttons) so a child
   can concentrate on the current activity. The focus toggle itself
   stays visible so a parent can restore controls. */

const focusToggleBtn = el('focusToggleBtn');

function renderFocusMode() {
  focusToggleBtn.setAttribute('aria-pressed', String(state.focusMode));
  focusToggleBtn.title = state.focusMode ? 'Show controls' : 'Hide controls for focus';
  if (state.focusMode) {
    appEl.classList.add('is-focus-mode');
  } else {
    appEl.classList.remove('is-focus-mode');
  }
}

function toggleFocusMode() {
  state.focusMode = !state.focusMode;
  save();
  renderFocusMode();
  if (!state.muted) sfx.pop();
}

/* ---------- Hold to open --------------------------------------
   The grown-up buttons sit at the top of a screen a three-year-old
   pokes all day. One tap on ⚙ used to open the panel with the reset
   in it, and one tap on 👁 hid the way out. Now both need a press held
   for HOLD_MS; a ring fills while it is held. A tap shows "Hold me"
   and does nothing else. A child taps; a grown-up can hold.
   -------------------------------------------------------------- */

const HOLD_MS = 1200;

function showTip(btn, text) {
  btn.dataset.tip = text;
  btn.classList.remove('show-tip');
  void btn.offsetWidth;
  btn.classList.add('show-tip');
  clearTimeout(btn._tipTimer);
  btn._tipTimer = setTimeout(() => btn.classList.remove('show-tip'), 1800);
}

function holdToOpen(btn, run) {
  let timer = null;
  btn.style.setProperty('--hold', `${HOLD_MS}ms`);
  const start = () => {
    if (timer) return;
    btn.classList.add('is-holding');
    timer = setTimeout(() => {
      timer = null;
      btn.classList.remove('is-holding');
      run();
    }, HOLD_MS);
  };
  const stop = () => {
    if (!timer) return;
    clearTimeout(timer);
    timer = null;
    btn.classList.remove('is-holding');
    showTip(btn, 'Hold me');
  };
  btn.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    start();
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => btn.addEventListener(t, stop));
  btn.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    if (!e.repeat) start();
  });
  btn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') stop();
  });
  /* A long press must not open the iOS callout or a context menu. */
  btn.addEventListener('contextmenu', (e) => e.preventDefault());
}

holdToOpen(focusToggleBtn, toggleFocusMode);


/* ---------- Say it slowly, say it with me ---------------------
   A bar under the panel on every screen that names things, with two
   buttons:

   🐢 says the thing on the panel slowly. An English word is clapped
   out in beats first — "Ba · na · na", a drum on each — and then said
   at half speed while the beats light up. Beats are what a child of
   three can hear and copy; a whole word at speed is a blur. Other
   languages have no beat list here, so they get the same voice or
   recording at 60 % speed.

   🎤 records him. It beeps, listens until he stops talking (or four
   seconds), and plays his voice back, then the board's. Nothing is
   scored: speech recognition is poor on toddler speech, and r, l, th
   and s are not expected to be right until five to seven. Hearing
   himself next to the model is the whole exercise. The take is kept in
   memory only, for one replay; nothing is stored or sent anywhere.
   -------------------------------------------------------------- */

/* Beats for every English word on the board with more than one. A word
   not listed is one beat. */
const SYLLABLES = Object.fromEntries(`Apple:Ap-ple|Elephant:El-e-phant|Ice cream:Ice-cream|Orange:Or-ange|Panda:Pan-da|Rainbow:Rain-bow|Umbrella:Um-brel-la|Violin:Vi-o-lin|Watermelon:Wa-ter-mel-on|Xylophone:Xy-lo-phone|Yo-yo:Yo-yo|Zebra:Ze-bra|seven:sev-en|eleven:e-lev-en|thirteen:thir-teen|fourteen:four-teen|fifteen:fif-teen|sixteen:six-teen|seventeen:sev-en-teen|eighteen:eigh-teen|nineteen:nine-teen|twenty:twen-ty|Banana:Ba-na-na|Strawberry:Straw-ber-ry|Pineapple:Pine-ap-ple|Mango:Man-go|Cherries:Cher-ries|Lemon:Lem-on|Kiwi:Ki-wi|Coconut:Co-co-nut|Melon:Mel-on|Blueberries:Blue-ber-ries|Avocado:Av-o-ca-do|Tomato:To-ma-to|Guava:Gua-va|Pomegranate:Pom-e-gran-ate|Pumpkin:Pump-kin|Jackfruit:Jack-fruit|Papaya:Pa-pa-ya|Lychee:Ly-chee|Eggplant:Egg-plant|Okra:Ok-ra|Potato:Po-ta-to|Cauliflower:Cau-li-flow-er|Cabbage:Cab-bage|Cucumber:Cu-cum-ber|Carrot:Car-rot|Radish:Rad-ish|Bottle Gourd:Bot-tle-Gourd|Bitter Gourd:Bit-ter-Gourd|Green Chili:Green-Chil-i|T-shirt:T-shirt|Shorts:Shorts|Sandal:San-dal|Jacket:Jack-et|Sweater:Sweat-er|Motorbike:Mo-tor-bike|Rickshaw:Rick-shaw|Helicopter:Hel-i-cop-ter|Ambulance:Am-bu-lance|Fire Truck:Fire-Truck|Tractor:Trac-tor|Scooter:Scoo-ter|Tiger:Ti-ger|Monkey:Mon-key|Rabbit:Rab-bit|Turtle:Tur-tle|Donkey:Don-key|Pigeon:Pig-eon|Sparrow:Spar-row|Chicken:Chick-en|Parrot:Par-rot|Myna:My-na|Cuckoo:Cuck-oo|Woodpecker:Wood-peck-er|Kingfisher:King-fish-er|Peacock:Pea-cock|Eagle:Ea-gle|Flamingo:Fla-min-go|Penguin:Pen-guin|Ostrich:Os-trich|Turkey:Tur-key|Sunflower:Sun-flow-er|Tulip:Tu-lip|Daisy:Dai-sy|Lily:Li-ly|Lotus:Lo-tus|Marigold:Mar-i-gold|Hibiscus:Hi-bis-cus|Jasmine:Jas-mine|Orchid:Or-chid|Daffodil:Daf-fo-dil|Lavender:Lav-en-der|Table:Ta-ble|Pillow:Pil-low|Sofa:So-fa|Window:Win-dow|Mirror:Mir-ror|Television:Tel-e-vi-sion|Kettle:Ket-tle|Fridge:Fridge|Toothbrush:Tooth-brush|Towel:Tow-el|Bucket:Buck-et|Scissors:Scis-sors|Basket:Bas-ket|Bottle:Bot-tle|Doctor:Doc-tor|Teacher:Teach-er|Dentist:Den-tist|Firefighter:Fire-fight-er|Police Officer:Po-lice-Of-fi-cer|Pilot:Pi-lot|Farmer:Farm-er|Engineer:En-gi-neer|Plumber:Plumb-er|Carpenter:Car-pen-ter|Electrician:E-lec-tri-cian|Mechanic:Me-chan-ic|Painter:Paint-er|Barber:Bar-ber|Fisherman:Fish-er-man|Scientist:Sci-en-tist|Astronaut:As-tro-naut|Yellow:Yel-low|Purple:Pur-ple|Circle:Cir-cle|Triangle:Tri-an-gle|Rectangle:Rec-tan-gle|Oval:O-val|Diamond:Di-a-mond|Pentagon:Pen-ta-gon|Hexagon:Hex-a-gon|Crescent:Cres-cent|Arrow:Ar-row|Shoulders:Shoul-ders|Elbows:El-bows|Fingers:Fin-gers|Tummy:Tum-my|Running:Run-ning|Jumping:Jump-ing|Swimming:Swim-ming|Flying:Fly-ing|Eating:Eat-ing|Drinking:Drink-ing|Sleeping:Sleep-ing|Climbing:Climb-ing|Walking:Walk-ing|Digging:Dig-ging|Washing:Wash-ing|Playing:Play-ing|Sitting:Sit-ting|Rolling:Roll-ing|Hugging:Hug-ging|Happy:Hap-py|Angry:An-gry|Surprised:Sur-prised|Sleepy:Sleep-y|Silly:Sil-ly|Empty:Emp-ty|Open:O-pen|under:un-der|Under:Un-der|behind:be-hind|Behind:Be-hind|table:ta-ble`
  .split('|').map((pair) => pair.split(':')));

/* T-shirt is the one hyphen that is not a beat break. */
function beatsOf(word) {
  if (word === 'T-shirt') return ['T', 'shirt'];
  if (SYLLABLES[word]) return SYLLABLES[word].split('-');
  /* A phrase — "under the table" — is its words' beats in a row. */
  return word.split(' ').flatMap((w) => (SYLLABLES[w] || w).split('-'));
}

/* The English word on the panel, or null when the panel isn't English
   — then 🐢 slows the voice down and skips the beats. */
function slowWordFor(item) {
  if (item.kind === 'letter' || item.kind === 'number') return item.lang === 'en' ? item.word : null;
  if (item.kind === 'picture') return pictureUsesBangla(item) ? null : item.word;
  if (item.kind === 'body') return curLang() === 'en' ? item.word : null;
  if (item.kind === 'word' && item.group === 'place') return item.say.replace(/\.$/, '');
  return item.word;
}

function panelItem() {
  const t = keyboardTarget();
  return t ? (t.item || t.list[0]) : null;
}

const SPEAK_ANCHORS = {
  letters: letterView, numbers: numView, pictures: focusStage,
  colors: colorView, shapes: shapeView, body: bodyView,
};

const canRecord = !!(window.isSecureContext && navigator.mediaDevices
  && navigator.mediaDevices.getUserMedia && typeof MediaRecorder === 'function');

Object.values(SPEAK_ANCHORS).forEach(addSpeakBar);

function addSpeakBar(anchor) {
  const bar = document.createElement('div');
  bar.className = 'speak-bar' + (canRecord ? '' : ' no-mic');
  bar.innerHTML =
    '<span class="beats" aria-hidden="true"></span>'
    + '<button class="speak-btn speak-btn--slow" type="button" aria-label="Say it slowly" title="Say it slowly"><span aria-hidden="true">🐢</span></button>'
    + '<button class="speak-btn speak-btn--mic" type="button" aria-label="Say it with me" title="Say it with me"><span aria-hidden="true">🎤</span></button>'
    + '<button class="speak-btn speak-btn--own" type="button" aria-label="Record my voice for this" title="Record my voice for this"><span class="rec-dot" aria-hidden="true"></span></button>';
  anchor.after(bar);
}

let beatRun = 0;

function clearBeats() {
  beatRun += 1;
  document.querySelectorAll('.speak-bar .beats').forEach((b) => {
    b.replaceChildren();
    b.classList.remove('is-saying');
  });
}

document.addEventListener('keydown', () => { slowFactor = 1; }, true);

/* Any tap that isn't the turtle puts the voice back to full speed and
   takes the beats away, so the next tile doesn't come out slow. */
document.addEventListener('click', (e) => {
  if (e.target.closest && e.target.closest('.speak-btn--slow')) return;
  if (slowFactor !== 1) slowFactor = 1;
  if (!e.target.closest || !e.target.closest('.speak-bar')) clearBeats();
}, true);

const drum = () => { tone(150, 0.16, 'triangle', 0.22); tone(300, 0.06, 'square', 0.04); };

function saySlow(bar) {
  const item = panelItem();
  if (!item) return;
  clearBeats();
  const run = beatRun;
  slowFactor = 0.6;
  const word = slowWordFor(item);
  if (!word) {
    showItem(item);
    return;
  }
  stopSound();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  const box = bar.querySelector('.beats');
  const chips = beatsOf(word).map((b) => {
    const c = document.createElement('span');
    c.className = 'beat';
    c.textContent = b;
    return c;
  });
  box.replaceChildren(...chips);
  const GAP = 520;
  chips.forEach((c, i) => setTimeout(() => {
    if (run !== beatRun) return;
    c.classList.add('is-on');
    drum();
  }, 200 + i * GAP));
  setTimeout(() => {
    if (run !== beatRun) return;
    box.classList.add('is-saying');
    const done = () => { if (run === beatRun) box.classList.remove('is-saying'); };
    /* Your recording, slowed, beats the device voice slowed. */
    if (!letterSounds(item) && ownVoice(item, done)) return;
    speak(word, { rate: 0.85, then: done });
  }, 200 + chips.length * GAP + 250);
}

let turn = null;
let lastTake = null;

function endTurnUi() {
  document.querySelectorAll('.speak-bar').forEach((b) => b.classList.remove('is-rec', 'is-asking', 'is-own'));
}

/* Stop the take and throw it away — leaving the screen, mainly. */
function cancelTurn() {
  if (!turn) return;
  turn.cancelled = true;
  finishTurn();
}

function finishTurn() {
  const t = turn;
  if (!t) return;
  clearInterval(t.poll);
  clearTimeout(t.limit);
  if (t.recorder && t.recorder.state !== 'inactive') {
    t.recorder.stop(); /* onstop lets go of the mic and plays it back */
  } else if (t.stream) {
    /* Stopped in the beep, before anything was recorded. */
    t.stream.getTracks().forEach((tr) => tr.stop());
    if (t.source) t.source.disconnect();
    if (turn === t) turn = null;
  }
  endTurnUi();
}

async function startTurn(bar, btn, mode = 'child') {
  if (turn) {
    /* A second tap on 🎤 while it listens means "I'm done". */
    if (turn.bar === bar) finishTurn();
    return;
  }
  const item = panelItem();
  if (!item) return;
  clearBeats();
  stopSound();
  if ('speechSynthesis' in window) speechSynthesis.cancel();

  const t = { bar, item, mode, key: ownKey(item), heard: false, cancelled: false, screen: state.screen };
  turn = t;
  bar.classList.add('is-asking');
  try {
    t.stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
  } catch (err) {
    turn = null;
    endTurnUi();
    showTip(btn, 'Mic is off');
    return;
  }
  if (t.cancelled || state.screen !== t.screen) {
    t.stream.getTracks().forEach((tr) => tr.stop());
    if (turn === t) turn = null;
    endTurnUi();
    return;
  }
  bar.classList.remove('is-asking');

  const chunks = [];
  t.recorder = new MediaRecorder(t.stream);
  t.recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
  t.recorder.onstop = () => {
    /* Let go of the mic at once. On an iPhone an open mic moves the
       sound to the quiet earpiece, and the playback must be loud. */
    t.stream.getTracks().forEach((tr) => tr.stop());
    if (t.source) t.source.disconnect();
    if (turn === t) turn = null;
    if (t.cancelled) return;
    const blob = new Blob(chunks, { type: t.recorder.mimeType || 'audio/mp4' });
    if (t.mode === 'own') keepOwnTake(blob, t);
    else playTake(blob, t);
  };

  /* Listen for the end of his word: once something loud has been
     heard, 0.8 s of quiet stops the take. Never connected to the
     speakers, so there is no echo. */
  const ac = ctx();
  if (ac && ac.createMediaStreamSource) {
    t.source = ac.createMediaStreamSource(t.stream);
    const an = ac.createAnalyser();
    an.fftSize = 1024;
    t.source.connect(an);
    const buf = new Float32Array(an.fftSize);
    let lastLoud = 0;
    t.poll = setInterval(() => {
      an.getFloatTimeDomainData(buf);
      let sum = 0;
      for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
      const rms = Math.sqrt(sum / buf.length);
      bar.style.setProperty('--level', Math.min(1, rms * 10).toFixed(2));
      const now = performance.now();
      if (rms > 0.03) { t.heard = true; lastLoud = now; }
      else if (t.heard && now - lastLoud > 800) finishTurn();
    }, 60);
  } else {
    t.heard = true; /* no meter: trust him */
  }

  tone(880, 0.12, 'sine', 0.12);
  setTimeout(() => {
    if (turn !== t || t.cancelled) return;
    t.recorder.start();
    bar.classList.add('is-rec');
    if (t.mode === 'own') bar.classList.add('is-own');
    t.limit = setTimeout(finishTurn, 4000);
  }, 180);
}

function playTake(blob, t) {
  if (!t.heard || !blob.size) {
    showTip(t.bar.querySelector('.speak-btn--mic'), 'Say it louder!');
    return;
  }
  if (lastTake) URL.revokeObjectURL(lastTake);
  lastTake = URL.createObjectURL(blob);
  addStar();
  sfx.right();
  /* His voice, then the board's, so the two sit side by side. */
  setTimeout(() => {
    if (state.screen !== t.screen) return;
    t.bar.classList.add('is-playing');
    playClip('take', lastTake, () => t.bar.classList.remove('is-playing'), () => {
      t.bar.classList.remove('is-playing');
      setTimeout(() => { if (state.screen === t.screen) showItem(t.item); }, 350);
    });
  }, 450);
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest && e.target.closest('.speak-btn');
  if (!btn) return;
  const bar = btn.closest('.speak-bar');
  if (btn.classList.contains('speak-btn--slow')) {
    cancelTurn();
    saySlow(bar);
  } else if (canRecord) {
    startTurn(bar, btn, btn.classList.contains('speak-btn--own') ? 'own' : 'child');
  }
});

/* ---------- Your voice ----------------------------------------
   A grown-up can record any tile once — "apple", "buh", "under the
   table" — and from then on that tile speaks in their voice. A child
   copies a parent's voice better than a device's, and only a person
   can say a letter sound cleanly: a speech engine handed "b" says
   "bee", and handed "buh" adds a vowel the sound doesn't have.

   The recordings live in IndexedDB on this device and nowhere else.
   They load into memory at start-up as object URLs, so a tap can play
   one at once, inside the tap, which is what iOS needs.
   -------------------------------------------------------------- */

const ownClips = new Map();
let ownDbPromise = null;

function ownDb() {
  if (!ownDbPromise) {
    ownDbPromise = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) return reject(new Error('no IndexedDB'));
      const req = indexedDB.open('kiddo-voice', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('clips');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return ownDbPromise;
}

async function loadOwnVoices() {
  try {
    const db = await ownDb();
    await new Promise((resolve) => {
      const cur = db.transaction('clips').objectStore('clips').openCursor();
      cur.onsuccess = () => {
        const c = cur.result;
        if (!c) return resolve();
        const v = c.value;
        const blob = v instanceof Blob ? v : new Blob([v.data], { type: v.type });
        ownClips.set(c.key, URL.createObjectURL(blob));
        c.continue();
      };
      cur.onerror = () => resolve();
    });
  } catch (err) { /* no storage: the board keeps its own voice */ }
  renderOwnPanel();
}

/* One recording per tile per language, and letter sounds apart from
   letter names. A picture's language is the one its name is shown in. */
function ownKey(item) {
  if (item.kind === 'letter' && letterSounds(item)) return `sound:${item.id}`;
  if (item.kind === 'letter' || item.kind === 'number') return `${item.lang}:${item.id}`;
  if (item.kind === 'picture') return `${pictureUsesBangla(item) ? 'bn' : 'en'}:${item.id}`;
  if (item.kind === 'body') return `${curLang()}:${item.id}`;
  return `en:${item.id}`;
}

/* Plays the grown-up's recording for this tile, if there is one, and
   says so; the caller falls back to the board's own voice. */
function ownVoice(item, then) {
  const url = ownClips.get(ownKey(item));
  if (!url || state.muted) return false;
  playClip(`own-${ownKey(item)}`, url, then || null, then || null);
  return true;
}

/* Stored as bytes and a type, not as a Blob: WebKit has had trouble
   keeping Blobs in IndexedDB, and bytes always work. Resolves once the
   write is really on disk, and rejects if it isn't. */
async function saveOwnClip(key, blob) {
  const data = await blob.arrayBuffer();
  const db = await ownDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction('clips', 'readwrite');
    tx.objectStore('clips').put({ type: blob.type, data }, key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

async function keepOwnTake(blob, t) {
  if (!t.heard || !blob.size) {
    showTip(t.bar.querySelector('.speak-btn--own'), 'Say it louder!');
    return;
  }
  const old = ownClips.get(t.key);
  if (old) URL.revokeObjectURL(old);
  ownClips.set(t.key, URL.createObjectURL(blob));
  try {
    await saveOwnClip(t.key, blob);
  } catch (err) {
    showTip(t.bar.querySelector('.speak-btn--own'), 'Not saved');
  }
  renderOwnPanel();
  sfx.right();
  /* Play it back once, so the grown-up hears what was kept. */
  setTimeout(() => { if (state.screen === t.screen) ownVoice(t.item); }, 400);
}

async function clearOwnVoices() {
  ownClips.forEach((url) => URL.revokeObjectURL(url));
  ownClips.clear();
  try {
    const db = await ownDb();
    db.transaction('clips', 'readwrite').objectStore('clips').clear();
  } catch (err) { /* nothing stored */ }
  renderOwnPanel();
}

const OWN_PREF = 'kiddo-own-voice-button';

function renderOwnPanel() {
  const on = localStorage.getItem(OWN_PREF) === '1';
  el('ownVoiceToggle').checked = on;
  appEl.classList.toggle('is-recording-own', on && canRecord);
  const n = ownClips.size;
  const clear = el('ownVoiceClear');
  clear.classList.toggle('is-hidden', !n);
  clear.textContent = `Delete my recordings (${n})`;
  if (!canRecord) el('ownVoiceNote').textContent = 'Recording needs the app opened from its web address (https), not from a file.';
}

el('ownVoiceToggle').addEventListener('change', (e) => {
  localStorage.setItem(OWN_PREF, e.target.checked ? '1' : '0');
  renderOwnPanel();
});

el('ownVoiceClear').addEventListener('click', () => {
  if (!confirm(`Delete all ${ownClips.size} of your recordings?`)) return;
  clearOwnVoices();
});

/* ---------- Letter sounds -------------------------------------
   The letters screen can say what a letter *does* instead of what it
   is called: "buh, buh, ball" rather than "bee, ball". English only —
   the other alphabets have no sound list here. Without a recording,
   the device voice reads a spelling of the sound. That is close, not
   right: "buh" carries a vowel /b/ doesn't have, and a grown-up
   recording is better. Remembered on this device. */

const PHONICS = {
  A: 'ah', B: 'buh', C: 'kuh', D: 'duh', E: 'eh', F: 'fuh', G: 'guh', H: 'huh',
  I: 'ih', J: 'juh', K: 'kuh', L: 'luh', M: 'muh', N: 'nuh', O: 'aw', P: 'puh',
  Q: 'kwuh', R: 'ruh', S: 'suh', T: 'tuh', U: 'uh', V: 'vuh', W: 'wuh', X: 'ks',
  Y: 'yuh', Z: 'zuh',
};

const MODE_PREF = 'kiddo-letter-mode';
let letterMode = localStorage.getItem(MODE_PREF) === 'sound' ? 'sound' : 'name';

function letterSounds(item) {
  return letterMode === 'sound' && item.kind === 'letter' && item.lang === 'en' && !!PHONICS[item.face];
}

function sayLetterSound(item) {
  const word = () => speak(`${item.word}.`, { rate: 0.8 });
  const url = ownClips.get(ownKey(item));
  if (url && !state.muted) {
    /* Your sound twice, then the word. */
    playClip(`own-${ownKey(item)}`, url, word, () => {
      setTimeout(() => playClip(`own2-${ownKey(item)}`, url, word, () => setTimeout(word, 250)), 250);
    });
    return;
  }
  const p = PHONICS[item.face];
  speak(`${p}. ${p}. ${item.word}.`, { rate: 0.75 });
}

function renderLetterMode() {
  const en = curLang() === 'en';
  el('letterModeSwitch').classList.toggle('is-hidden', !en);
  el('letterModeSwitch').querySelectorAll('.seg').forEach((b) => {
    b.classList.toggle('is-on', b.dataset.mode === letterMode);
  });
  el('lettersHint').textContent = en && letterMode === 'sound'
    ? 'Tap a letter to hear its sound.' : cur().hint.letters;
  renderLetter(state.letterItem && state.letterItem.lang === curLang()
    ? state.letterItem : LETTERS_BY_LANG[curLang()][0]);
}

el('letterModeSwitch').addEventListener('click', (e) => {
  const b = e.target.closest('.seg');
  if (!b) return;
  letterMode = b.dataset.mode;
  localStorage.setItem(MODE_PREF, letterMode);
  sfx.pop();
  renderLetterMode();
});

/* ---------- Grown-ups ---------------------------------------- */

function openParent() {
  renderStats();
  renderLangList(el('parentLangList'));
  askOfflineCount();
  parentWrap.classList.remove('is-hidden');
}

/* Built rather than listed in the HTML, because which rows there are
   depends on which languages are switched on. A language switched off
   loses its row and keeps its ticks — off is not reset. */
function renderStats() {
  const rows = [['Stars earned', String(state.stars)]];
  activeLangs().forEach((code) => {
    const L = LANGS[code];
    rows.push([`${L.label} letters`, explored(LETTERS_BY_LANG[code])]);
    rows.push([`${L.label} numbers`, explored(NUMBERS_BY_LANG[code])]);
  });
  rows.push(['Pictures explored', explored(pictureAll)]);
  rows.push(['Colors explored', explored(colorItems)]);
  rows.push(['Shapes explored', explored(shapeItems)]);
  rows.push(['Body parts explored', explored(bodyItems)]);
  Object.values(WORD_SCREENS).forEach((ws) => rows.push([`${ws.title} explored`, explored(ws.list)]));

  el('stats').replaceChildren(...rows.map(([term, value]) => {
    const row = document.createElement('div');
    row.className = 'stat';
    const dt = document.createElement('dt');
    dt.textContent = term;
    const dd = document.createElement('dd');
    dd.textContent = value;
    row.append(dt, dd);
    return row;
  }));
}

function explored(list) {
  return `${list.filter((it) => state.seen.has(it.id)).length} of ${list.length}`;
}

function closeParent() { parentWrap.classList.add('is-hidden'); }

holdToOpen(el('parentBtn'), openParent);
el('parentClose').addEventListener('click', closeParent);
el('parentScrim').addEventListener('click', closeParent);

el('resetBtn').addEventListener('click', () => {
  if (!confirm('Clear all stars and start over?')) return;
  state.stars = 0;
  state.seen.clear();
  save();
  renderScore();
  document.querySelectorAll('.magnet.is-known').forEach((m) => m.classList.remove('is-known'));
  closeParent();
});

/* ---------- Installing, and taking it offline -----------------
   The service worker holds the caches; this is the half that knows
   what is worth putting in them. The list is built from the same data
   the tiles are drawn from, so a photograph added to PICTURES above is
   a photograph the download already knows about — there is no second
   list to keep in step.
   -------------------------------------------------------------- */

function englishVoiceUrls() {
  const texts = [];
  const add = (s) => { if (s) texts.push(s); };
  pictureAll.forEach((it) => {
    add(`${it.word}.`);
    add(askOf(it));
    if (it.line) add(it.say);
  });
  colorItems.forEach((it) => { add(it.word); add(askOf(it)); });
  shapeItems.forEach((it) => { add(it.say); add(askOf(it)); });
  LETTERS_BY_LANG.en.forEach((it) => { add(it.say); add(askOf(it)); });
  NUMBERS_BY_LANG.en.forEach((it) => { add(it.word); add(askOf(it)); });
  bodyItems.forEach((it) => { add(it.say); add(askOf(it)); });
  [...actionItems, ...feelingItems, ...oppositeItems, ...placeItems].forEach((it) => {
    add(it.say); add(askOf(it));
  });
  /* Letter sounds without a grown-up recording, and the sound game. */
  LETTERS_BY_LANG.en.forEach((it) => {
    const p = PHONICS[it.face];
    if (p) add(`${p}. ${p}. ${it.word}.`);
  });
  add('Who makes this sound?');
  ['Yaaay!', 'Woohoo!', 'Hooray!', 'Yippee!', 'You did it! Well done!']
    .forEach(add);
  const seen = new Set();
  const urls = [];
  texts.forEach((text) => {
    const s = voiceSlug(text);
    if (!s || seen.has(s)) return;
    seen.add(s);
    urls.push(`sounds/voice/en/${s}.m4a`);
  });
  return urls;
}

function mediaUrls() {
  const urls = [];
  pictureAll.forEach((it) => urls.push(`photos/${it.slug}.jpg`));
  actionItems.forEach((it) => urls.push(`photos/${it.slug}.jpg`));
  ANIMAL_SOUNDS.forEach((name) => urls.push(`sounds/${name}.m4a`));
  englishVoiceUrls().forEach((u) => urls.push(u));
  /* Only the languages that are switched on, and of those only the
     ones spoken from files. A household with Bangla off should not be
     asked to download 1.5 MB of it; a synthesised language has nothing
     to download at all. */
  activeLangs().forEach((code) => {
    const L = LANGS[code];
    if (!L.clips) return;
    NUMBERS_BY_LANG[code].forEach((it) => {
      const u = L.clips.number && L.clips.number(it);
      if (u) urls.push(u);
    });
    LETTERS_BY_LANG[code].forEach((it) => {
      const u = L.clips.letter && L.clips.letter(it);
      if (u) urls.push(u);
      /* A letter with no word has no second clip — see playLetterClips. */
      const word = L.clips.letterWord && L.clips.letterWord(it);
      if (word) urls.push(word);
    });
    bodyItems.forEach((it) => {
      const u = L.clips.body && L.clips.body(it);
      if (u) urls.push(u);
    });
    if (L.clips.veg) {
      vegItems.forEach((it) => {
        const u = L.clips.veg(it);
        if (u) urls.push(u);
      });
    }
  });
  return urls;
}

const offlineBox = el('offlineBox');
const offlineNote = el('offlineNote');
const offlineFill = el('offlineFill');
const offlineBtn = el('offlineBtn');

let sw = null;

function setOfflineNote(text, { busy = false, done = false } = {}) {
  offlineNote.textContent = text;
  offlineBox.classList.toggle('is-busy', busy);
  offlineBox.classList.toggle('is-done', done);
  offlineBtn.disabled = busy || done;
}

function setOfflineFill(done, total) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  offlineFill.style.width = `${pct}%`;
}

/* Counted rather than hard-coded, so it stays true when a picture is
   added. A photograph averages about 60 kB and a recording about 16,
   which is a big enough difference that one number for both would be
   nearly double the truth on a list that is mostly sound files. */
function roughSize(urls) {
  const kb = urls.reduce((sum, u) => sum + (u.startsWith('photos/') ? 60 : 16), 0);
  return Math.max(1, Math.round(kb / 1024));
}

function askOfflineCount() {
  if (sw) sw.postMessage({ type: 'COUNT_MEDIA', urls: mediaUrls() });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      /* file:// , or a browser with it switched off. The app is
         unchanged; it just won't open without a signal. */
    });
  });

  navigator.serviceWorker.ready.then((reg) => {
    sw = reg.active;
    offlineBox.classList.remove('is-hidden');
    askOfflineCount();
  }).catch(() => {});

  navigator.serviceWorker.addEventListener('message', (e) => {
    const msg = e.data || {};
    const total = msg.total || 0;

    if (msg.type === 'MEDIA_COUNT') {
      const left = msg.missing || [];
      setOfflineFill(total - left.length, total);
      if (!left.length) {
        setOfflineNote('All of it is on this device.', { done: true });
      } else {
        setOfflineNote(`${left.length} pictures and sounds to fetch — about ${roughSize(left)} MB.`);
      }
    }

    if (msg.type === 'MEDIA_PROGRESS') {
      setOfflineFill(msg.done, total);
      setOfflineNote(`${msg.done} of ${total}…`, { busy: true });
    }

    if (msg.type === 'MEDIA_SAVED') {
      setOfflineFill(total, total);
      setOfflineNote(msg.failed
        ? `Saved, all but ${msg.failed}. Try again on a better signal.`
        : 'All of it is on this device.', { done: !msg.failed });
    }
  });
}

offlineBtn.addEventListener('click', () => {
  if (!sw) return;
  /* Ask the browser to keep the download. Safari, on an iPhone or iPad,
     otherwise counts it as clearable website data. It says yes most
     readily to an app added to the home screen. Nothing changes if it
     says no. */
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  setOfflineNote('Starting…', { busy: true });
  sw.postMessage({ type: 'SAVE_MEDIA', urls: mediaUrls() });
});

/* Chrome and Edge offer the install; Safari never does, and there is
   nothing to be done about that but the Share sheet. The event only
   fires when the browser has decided the app qualifies, so the button
   appearing is itself the signal that it will work. */
let installEvent = null;
const installBtn = el('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  installEvent = e;
  installBtn.classList.remove('is-hidden');
});

installBtn.addEventListener('click', async () => {
  if (!installEvent) return;
  installEvent.prompt();
  await installEvent.userChoice;
  /* A prompt can only be used once. */
  installEvent = null;
  installBtn.classList.add('is-hidden');
});

window.addEventListener('appinstalled', () => {
  installEvent = null;
  installBtn.classList.add('is-hidden');
});

/* ---------- Keyboard -----------------------------------------
   For the grown-up teaching from beside the screen. A finger on a tile
   covers the tile; an arrow key walks the board to the next thing and
   names it while both of you look at it. So the arrows step through
   whatever screen is open, Enter and Space say the current thing
   again, a typed letter jumps the letters screen straight to it, and a
   typed digit does the same on the numbers.

   The game is deliberately deaf to all of it. The game is a question,
   and a key that picked an answer would be a grown-up's hand on the
   child's turn. The drawers are skipped too — a key pressed under a
   dialog should not move the board behind it. */

function keyboardTarget() {
  if (state.screen === 'letters') {
    return { list: LETTERS_BY_LANG[curLang()], item: state.letterItem };
  }
  if (state.screen === 'numbers') {
    return { list: NUMBERS_BY_LANG[curLang()], item: state.numberItem };
  }
  if (state.screen === 'pictures') {
    const group = currentPicGroup();
    const it = state.pictureItem;
    /* The arrows walk the shelf that is showing — a cat left on the
       panel must not make → step through animals on the fruit shelf. */
    return { list: PICTURE_GROUPS[group].list,
             item: it && it.group === group ? it : null };
  }
  if (state.screen === 'colors') return { list: colorItems, item: state.colorItem };
  if (state.screen === 'shapes') return { list: shapeItems, item: state.shapeItem };
  if (state.screen === 'body') return { list: bodyItems, item: state.bodyItem };
  const ws = WORD_SCREENS[state.screen];
  if (ws) return { list: ws.list, item: state.wordItem[state.screen] || null };
  return null;
}

/* The keys need to show where they are standing. The panel names the
   thing, but on a grid of forty-seven tiles a voice alone doesn't say
   which tile just spoke — so the current one wears the picked-colour
   ring and is kept scrolled into sight. A tap takes the ring away: a
   finger is its own pointer, and a ring left behind on the tile the
   keys last visited would be two answers to "which one?". */
function clearCue() {
  document.querySelectorAll('.magnet.is-cued')
    .forEach((m) => m.classList.remove('is-cued'));
}

function cueTile(item) {
  clearCue();
  const tile = document.querySelector(`.grid .magnet[data-id="${item.id}"]`);
  if (!tile) return;
  tile.classList.add('is-cued');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  tile.scrollIntoView({ block: 'nearest', behavior: calm ? 'auto' : 'smooth' });
}

/* Wraps at both ends, so holding → tours the whole alphabet and comes
   home. Before anything is picked the first press lands on the first
   tile — the place a grown-up reading down the chart would start. */
function stepItem(dir) {
  const t = keyboardTarget();
  if (!t) return;
  const at = t.item ? t.list.indexOf(t.item) : (dir > 0 ? -1 : 0);
  const next = t.list[(at + dir + t.list.length) % t.list.length];
  sfx.pop();
  showItem(next);
  cueTile(next);
}

function repeatItem() {
  const t = keyboardTarget();
  if (!t) return;
  const item = t.item || t.list[0];
  sfx.pop();
  showItem(item);
  cueTile(item);
}

/* A typed key jumps to the tile wearing it, where the screen has tiles
   a keyboard can spell: letters by face — which finds Ñ when a Spanish
   keyboard types it — and numbers by digit, with 0 standing for 10
   because eleven through twenty have no key of their own. */
function jumpToKey(key) {
  const t = keyboardTarget();
  if (!t) return false;
  let found = null;
  if (state.screen === 'letters' && /^\p{L}$/u.test(key)) {
    /* Hamza folds away, so the plain ا an Arabic keyboard types
       unshifted still finds the أ the chart shows. */
    const fold = (s) => s.toLowerCase().replace(/[أإآ]/g, 'ا');
    const want = fold(key);
    found = t.list.find((it) => fold(it.face) === want);
  }
  if (state.screen === 'numbers' && /^\d$/.test(key)) {
    found = t.list.find((it) => it.n === (+key || 10));
  }
  if (!found) return false;
  sfx.pop();
  showItem(found);
  cueTile(found);
  return true;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !parentWrap.classList.contains('is-hidden')) closeParent();

  /* Browser shortcuts keep their keys, and a covered board keeps still. */
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (!parentWrap.classList.contains('is-hidden')) return;
  if (!langWrap.classList.contains('is-hidden')) return;
  if (!cheerWrap.classList.contains('is-hidden')) return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    stepItem(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    stepItem(-1);
  } else if (e.key === 'Enter' || e.key === ' ') {
    /* Not when a real button is focused — Enter on the sound toggle
       has to keep meaning the sound toggle. */
    if (e.target.closest('button')) return;
    e.preventDefault();
    repeatItem();
  } else if (jumpToKey(e.key)) {
    e.preventDefault();
  }
});

/* ---------- Go ----------------------------------------------- */

buildGrids();
primePanels();
/* After the grids, because it rebuilds three of them: puts the board
   back into the language it was left in — switch, tiles, hints and
   panels together. */
applyLang();
el('scoreNum').textContent = state.stars;
renderSound();
renderFocusMode();
renderLetterMode();
loadOwnVoices();
booted = true;
shownLangs = activeLangs().join(',');
shownAvail = availKey();

/* Once, on a board nobody has set up yet. */
if (!state.chosen) whenVoicesKnown(openLangPicker);

const params = new URLSearchParams(location.search);

/* The home-screen icon can carry a long-press menu — see `shortcuts` in
   the manifest — and each entry is this same page with a ?screen= on
   it. It opens on top of the home menu, so back goes home. Anything
   the board has no module for stays on the home menu, so a stale
   bookmark can't open an empty door.

   ?screen=bangla is one such stale bookmark, and a real one: it is
   what the বাংলা shortcut pointed at while Bangla was a tab of its
   own. It now means the letters, in Bangla. */
const asked = params.get('screen');
const wanted = asked === 'bangla' ? 'letters' : asked;

/* A shortcut can name a language too. One that isn't switched on is
   ignored rather than switched on — a shortcut is a way in, not a
   setting. */
const askedLang = asked === 'bangla' ? 'bn' : params.get('lang');
if (askedLang && activeLangs().includes(askedLang)) setLang(askedLang);

const known = [...document.querySelectorAll('.home-card')].map((t) => t.dataset.screen);
/* Always start on the home menu, so back from a shortcut lands there. */
history.replaceState({ kiddo: { screen: 'home' }, depth: 0 }, '');
applyNav({ screen: 'home' });
if (known.includes(wanted)) navigate({ screen: wanted });
