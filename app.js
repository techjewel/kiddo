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
};

/* What gets counted out under a numeral. Deliberately the same in every
   language: quantity is the part that does not change between scripts,
   so it should not look like it has. */
const NUMBER_EMOJI = [
  '', '🍎', '🐝', '🐟', '🌸', '⭐', '🍓', '🦋', '🐧', '🍇', '🐢',
  '🌵', '🥕', '🍄', '🐬', '🍋', '🐞', '🌻', '🐙', '🍒', '🎈',
];

const BANGLA_DIGITS = '০১২৩৪৫৬৭৮৯';

const banglaNumeral = (n) =>
  String(n).replace(/\d/g, (d) => BANGLA_DIGITS[+d]);

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
    names: { en: 'Head', bn: 'মাথা', es: 'Cabeza', fr: 'Tête' } },
  { key: 'hair', ring: [[120, 56, 62]],
    names: { en: 'Hair', bn: 'চুল', es: 'Pelo', fr: 'Cheveux' } },
  { key: 'eyes', ring: [[99, 84, 17], [141, 84, 17]],
    names: { en: 'Eyes', bn: 'চোখ', es: 'Ojos', fr: 'Yeux' } },
  { key: 'ears', ring: [[60, 94, 21], [180, 94, 21]],
    names: { en: 'Ears', bn: 'কান', es: 'Orejas', fr: 'Oreilles' } },
  { key: 'nose', ring: [[120, 99, 19]],
    names: { en: 'Nose', bn: 'নাক', es: 'Nariz', fr: 'Nez' } },
  { key: 'mouth', ring: [[120, 124, 27]],
    names: { en: 'Mouth', bn: 'মুখ', es: 'Boca', fr: 'Bouche' } },
  { key: 'teeth', ring: [[120, 124, 27]],
    names: { en: 'Teeth', bn: 'দাঁত', es: 'Dientes', fr: 'Dents' } },
  { key: 'neck', ring: [[120, 152, 25]],
    names: { en: 'Neck', bn: 'গলা', es: 'Cuello', fr: 'Cou' } },
  { key: 'shoulders', ring: [[86, 182, 27], [154, 182, 27]],
    names: { en: 'Shoulders', bn: 'কাঁধ', es: 'Hombros', fr: 'Épaules' } },
  { key: 'arms', ring: [[71, 224, 46], [169, 224, 46]],
    names: { en: 'Arms', bn: 'বাহু', es: 'Brazos', fr: 'Bras' } },
  { key: 'elbows', ring: [[71, 224, 21], [169, 224, 21]],
    names: { en: 'Elbows', bn: 'কনুই', es: 'Codos', fr: 'Coudes' } },
  { key: 'hands', ring: [[50, 268, 27], [190, 268, 27]],
    names: { en: 'Hands', bn: 'হাত', es: 'Manos', fr: 'Mains' } },
  { key: 'fingers', ring: [[48, 292, 27], [192, 292, 27]],
    names: { en: 'Fingers', bn: 'আঙুল', es: 'Dedos', fr: 'Doigts' } },
  { key: 'tummy', ring: [[120, 210, 46]],
    names: { en: 'Tummy', bn: 'পেট', es: 'Barriga', fr: 'Ventre' } },
  { key: 'legs', ring: [[100, 336, 48], [140, 336, 48]],
    names: { en: 'Legs', bn: 'পা', es: 'Piernas', fr: 'Jambes' } },
  { key: 'knees', ring: [[99, 340, 20], [141, 340, 20]],
    names: { en: 'Knees', bn: 'হাঁটু', es: 'Rodillas', fr: 'Genoux' } },
  { key: 'feet', ring: [[90, 412, 32], [150, 412, 32]],
    names: { en: 'Feet', bn: 'পায়ের পাতা', es: 'Pies', fr: 'Pieds' } },
  { key: 'toes', ring: [[90, 419, 28], [150, 419, 28]],
    names: { en: 'Toes', bn: 'পায়ের আঙুল', es: 'Dedos del pie', fr: 'Orteils' } },
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
     20 numbers and 18 body parts are recordings of a real person, the
     same voice on every device, offline. See sounds/CREDITS.md.

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
    },
    hint: {
      letters: 'একটি বর্ণে টোকা দাও।',
      numbers: 'একটি সংখ্যায় টোকা দাও।',
      body: 'ছেলেটিকে টোকা দাও — তার নাক, তার হাত, তার পায়ের আঙুল।',
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
    say: word ? `${face}. ${word}.` : face,
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
      face: L.script === 'bangla' ? banglaNumeral(n) : String(n),
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
   stops after the name. Only animals carry one, and it is their noise. */
function pictureItems(rows, group, prefix) {
  return rows.map(([name, emoji, line], i) => ({
    kind: 'picture',
    group,
    id: prefix + i,
    index: i,
    face: emoji,
    caption: name,
    word: name,
    emoji,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    line: line || '',
    say: line ? `${name}. ${line}` : `${name}.`,
    askPrefix: 'Find the ',
    askFace: name.toLowerCase(),
  }));
}

const fruitItems = pictureItems(FRUITS, 'fruit', 'F');
const animalItems = pictureItems(ANIMALS, 'animal', 'A');
/* 'R' because B is the body's and BN the Bangla numbers' — `byId` is one
   flat map and a second B0 would quietly shadow the head. */
const birdItems = pictureItems(BIRDS, 'bird', 'R');
const homeItems = pictureItems(HOUSEHOLD, 'home', 'H');
const flowerItems = pictureItems(FLOWERS, 'flower', 'W');
/* 'J' for job: P is free but reads as picture, and the ids in this map
   are read by a grown-up looking at saved progress. */
const jobItems = pictureItems(PROFESSIONS, 'job', 'J');
const pictureAll = [...fruitItems, ...animalItems, ...birdItems,
                    ...flowerItems, ...homeItems, ...jobItems];

const PICTURE_GROUPS = {
  fruit:  { list: fruitItems,  grid: 'fruitGrid',
            hint: 'Tap a fruit to hear its name.' },
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

const allItems = [
  ...LANG_CODES.flatMap((c) => LETTERS_BY_LANG[c]),
  ...LANG_CODES.flatMap((c) => NUMBERS_BY_LANG[c]),
  ...pictureAll, ...colorItems, ...shapeItems, ...bodyItems,
];
const byId = new Map(allItems.map((it) => [it.id, it]));

function listFor(item) {
  if (item.kind === 'letter') return LETTERS_BY_LANG[item.lang];
  if (item.kind === 'number') return NUMBERS_BY_LANG[item.lang];
  if (item.kind === 'color') return colorItems;
  if (item.kind === 'shape') return shapeItems;
  if (item.kind === 'body') return bodyItems;
  return PICTURE_GROUPS[item.group].list;
}

function askOf(item) {
  return item.askPrefix + item.askFace + (item.askSuffix || '');
}

/* ---------- Saved progress ---------------------------------- */

const STORE_KEY = 'magnet-board-v1';

const defaultState = {
  stars: 0, seen: [], muted: false,
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
  langs: saved.langs,
  /* Remembered, because a household that reads the board in Bangla
     reads it in Bangla every time, and having to find the switch again
     on every visit is how a second language ends up unused. */
  lang: saved.lang,
  chosen: saved.chosen,
  screen: 'letters',
  letterItem: null,
  numberItem: null,
  pictureItem: null,
  colorItem: null,
  shapeItem: null,
  bodyItem: null,
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
  u.rate = rate;
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
  fruit: 4, animal: 1, bird: 5, flower: 0, home: 3, job: 6,
  color: 3, shape: 5, body: 2,
};

function seedFor(item) {
  if (item.kind === 'letter') return item.index + LANGS[item.lang].seedLetter;
  if (item.kind === 'number') return item.index + LANGS[item.lang].seedNumber;
  return item.index + SEED_OFFSET[item.kind === 'picture' ? item.group : item.kind];
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
      : `${LANGS[item.lang].label} letter ${item.face}`;
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
      btn.lang = L.code;
      btn.textContent = bodyName(item);
    }
  } else if (item.kind === 'picture') {
    btn.classList.add('magnet--pic');
    btn.appendChild(makePhoto(item, 'magnet-photo'));
    if (caption) {
      const cap = document.createElement('span');
      cap.className = 'magnet-cap';
      cap.textContent = item.caption;
      btn.appendChild(cap);
    }
  } else {
    /* A tile carries its own script and nothing else — no second
       language in the corner to fall back on, because the fallback is
       what gets read. */
    if (LANGS[item.lang].script === 'bangla') btn.classList.add('magnet--bn');
    btn.lang = item.lang;
    btn.textContent = item.face;
  }
  return btn;
}

/* ---------- Elements ----------------------------------------- */

const el = (id) => document.getElementById(id);

const lettersGrid = el('lettersGrid');
const numbersGrid = el('numbersGrid');
const fruitGrid = el('fruitGrid');
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
}

/* The three grids that carry a language have their own builders,
   because the switch rebuilds them. Rebuilt rather than relabelled:
   the tick marking a tile explored lives on the tile, and `makeMagnet`
   puts it back from `state.seen`, so a fresh set of tiles arrives
   already knowing what he has met. */
function buildLetterGrid() {
  lettersGrid.replaceChildren(
    ...LETTERS_BY_LANG[curLang()].map((it) => makeMagnet(it, { known: true })));
}

function buildNumberGrid() {
  numbersGrid.replaceChildren(
    ...NUMBERS_BY_LANG[curLang()].map((it) => makeMagnet(it, { known: true })));
}

function buildBodyGrid() {
  bodyGrid.replaceChildren(...bodyItems.map((it) => makeMagnet(it, { known: true, caption: true })));
}

/* A shelf of photographs is built the first time it is looked at, not
   at start-up. Six shelves is 125 <img> elements and 7.4 MB,
   and a browser asks for every one of them the moment they exist, even
   on a screen that is hidden — so a child who opened the board and
   tapped a letter used to pay for four shelves of pictures he never
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

/* Which shelf the switch is left on — the fruit until something moves it. */
function currentPicGroup() {
  const on = document.querySelector('.segmented--pics .seg.is-on');
  return on ? on.dataset.group : 'fruit';
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
  sfx.pop();
  showItem(byId.get(btn.dataset.id));
}

[lettersGrid, numbersGrid, fruitGrid, animalGrid,
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

const soundCache = new Map();
let playingSound = null;

function hasSound(name) {
  return ANIMAL_SOUNDS.has(name.toLowerCase());
}

function stopSound() {
  if (playingSound) {
    playingSound.pause();
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
  if (state.muted) return;
  stopSound();
  /* A clip always wins over whatever the voice was still saying —
     otherwise walking from Numbers to বাংলা plays "seven" over সাত. */
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  let audio = soundCache.get(key);
  if (!audio) {
    audio = new Audio(src);
    audio.preload = 'auto';
    soundCache.set(key, audio);
  }
  audio.currentTime = 0;
  /* Assigned, not added: a cached clip played twice would otherwise
     collect a second listener and say the word twice. Cleared first so
     a clip that once had a follow-on doesn't keep it forever. */
  audio.onended = null;
  if (onEnd) {
    audio.onended = () => { if (playingSound === audio) onEnd(); };
  }
  playingSound = audio;
  audio.play().catch((err) => {
    const benign = err && (err.name === 'NotAllowedError' || err.name === 'AbortError');
    if (onFail && !benign && playingSound === audio) onFail();
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
  if (!LANGS[item.lang].clips) return speakIn(item.lang, item.say);
  playLetterClips(item, () => speakIn(item.lang, item.say, { rate: 0.8 }));
}

function paintPicture(item) {
  picView.style.setProperty('--c', colorFor(item));
  el('picEmoji').replaceChildren(makePhoto(item, 'sc-photo'));
  el('picWord').textContent = item.word;
  /* No sentence means no empty line under the name — the word gets the
     panel to itself. */
  const line = el('picLine');
  line.textContent = item.line;
  line.classList.toggle('is-hidden', !item.line);
}

function renderPicture(item) {
  state.pictureItem = item;
  paintPicture(item);
}

function showPicture(item) {
  markSeen(item);
  renderPicture(item);
  bump(picView);
  stopSound();
  /* Name, then the animal itself. Where a real recording exists it does the
     second half — a spoken "meow" on top of an actual cat is a worse cat.
     Mouse and snake have no recording worth having and say their noise
     instead, which is why the written one is still there. A peacock and
     an eagle stay name-only — those cries are not for a three-year-old. */
  if (hasSound(item.word)) speak(`${item.word}.`, { then: () => playAnimal(item.word) });
  else speak(item.say);
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
  speak(item.say);
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
  word.lang = L.code;
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
  const code = curLang();
  const L = LANGS[code];
  if (!L.clips) return speakIn(code, `${bodyName(item)}.`);
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
  letterView.style.setProperty('--c', colorFor(item));
  letterView.lang = item.lang;

  const main = el('letterMain');
  main.textContent = item.face;
  main.classList.toggle('sc-main--bn', bn);

  const sub = el('letterSub');
  sub.textContent = item.lower;
  sub.classList.toggle('is-hidden', !L.hasCase);

  el('letterEmoji').textContent = item.emoji;
  el('letterWord').textContent = item.word;
  const pair = el('letterPair');
  pair.classList.toggle('sc-word--bn', bn);
  pair.classList.toggle('is-hidden', !item.word);
}

/* Numbers stay on the page. A modal that had to be dismissed after every
   tap turned "show me 7" into two taps and a wait; this way the grid is
   never covered and he can keep going.

   The same panel in every language — numeral, name, and that many
   pictures. Identical on purpose: counting is the part that doesn't
   change between scripts, so it shouldn't look like it has. */
function renderNumber(item) {
  const bn = LANGS[item.lang].script === 'bangla';
  numView.style.setProperty('--c', colorFor(item));
  numView.lang = item.lang;

  const face = el('numFace');
  face.textContent = item.face;
  face.classList.toggle('sc-main--bn', bn);

  const word = el('numWord');
  word.textContent = item.word;
  word.classList.toggle('sc-word--bn', bn);

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
  const L = LANGS[item.lang];
  if (!L.clips) return speakIn(item.lang, item.word, { rate: 0.8 });
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
  speak(item.word, { rate: 0.8 });
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
};

/* Every round draws its four choices from one category. Asking a child
   to pick "red" from a letter, a lion and the number 7 isn't a choice,
   it's a riddle — so "All" varies the category per round instead of
   mixing them inside one. */
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

  const pool = poolFor(g.set);
  const picks = shuffled(pool).slice(0, 4);
  g.target = picks[Math.floor(Math.random() * picks.length)];
  g.locked = false;

  askEl.replaceChildren();
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
    speak(word, {
      rate: 0.58,
      pitch: 1.4,
      then: () => (roar ? playAnimal(item.word) : speak(item.say, { rate: 0.86 })),
    });
    g.round += 1;
    renderDots();
    setTimeout(() => { if (state.game === g) nextRound(); }, 2900);
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
  const t = state.game && state.game.target;
  if (t) speak(askOf(t));
});

document.querySelectorAll('.segmented--play .seg').forEach((seg) => {
  seg.addEventListener('click', () => {
    document.querySelectorAll('.segmented--play .seg')
      .forEach((s) => s.classList.toggle('is-on', s === seg));
    sfx.pop();
    startGame(seg.dataset.set);
  });
});

document.querySelectorAll('.segmented--pics .seg').forEach((seg) => {
  seg.addEventListener('click', () => {
    document.querySelectorAll('.segmented--pics .seg')
      .forEach((s) => s.classList.toggle('is-on', s === seg));
    sfx.pop();
    showPictureGroup(seg.dataset.group);
  });
});

el('shuffleBtn').addEventListener('click', () => {
  sfx.pop();
  shuffleShelf(currentPicGroup());
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
        + (L.script === 'bangla' ? ' seg--bn' : '');
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
    });

  buildLetterGrid();
  buildNumberGrid();
  buildBodyGrid();

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
      + (L.script === 'bangla' ? ' lang-native--bn' : '');
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
  el('picsHint').textContent = chosen.hint;
  /* Don't leave a cat sitting on the fruit screen. */
  if (!state.pictureItem || state.pictureItem.group !== group) {
    renderPicture(chosen.list[0]);
  }
  el('board').scrollTop = 0;
}

el('againBtn').addEventListener('click', () => {
  cheerWrap.classList.add('is-hidden');
  startGame(state.game ? state.game.set : 'letters');
});

el('cheerDone').addEventListener('click', () => {
  cheerWrap.classList.add('is-hidden');
  showScreen('letters');
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
  document.querySelectorAll('.tab').forEach((t) => {
    t.classList.toggle('is-on', t.dataset.screen === name);
  });
  el('board').scrollTop = 0;

  /* The door only wears a colour while he's on the colours screen. */
  appEl.classList.toggle('is-tinted', name === 'colors' && !!state.colorItem);

  /* Arriving before he's picked anything, the circle draws itself —
     the animation is the invitation to tap. */
  if (name === 'shapes' && !state.shapeItem) renderShape(shapeItems[0]);

  /* The shelf he is arriving at, if it hasn't been built yet. */
  if (name === 'pictures') buildPictureGrid(currentPicGroup());

  if (name === 'play') {
    const current = document.querySelector('.segmented--play .seg.is-on');
    startGame(current ? current.dataset.set : 'letters');
  } else {
    state.game = null;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }
}

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    sfx.pop();
    showScreen(tab.dataset.screen);
  });
});

/* ---------- Sound toggle ------------------------------------- */

const soundBtn = el('soundBtn');

function renderSound() {
  soundBtn.setAttribute('aria-pressed', String(state.muted));
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

el('parentBtn').addEventListener('click', openParent);
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
  ANIMAL_SOUNDS.forEach((name) => urls.push(`sounds/${name}.m4a`));
  englishVoiceUrls().forEach((u) => urls.push(u));
  /* Only the languages that are switched on, and of those only the
     ones spoken from files. A household with Bangla off should not be
     asked to download 1.5 MB of it; a synthesised language has nothing
     to download at all. */
  activeLangs().forEach((code) => {
    const L = LANGS[code];
    if (!L.clips) return;
    NUMBERS_BY_LANG[code].forEach((it) => urls.push(L.clips.number(it)));
    LETTERS_BY_LANG[code].forEach((it) => {
      urls.push(L.clips.letter(it));
      /* A letter with no word has no second clip — see playLetterClips. */
      const word = L.clips.letterWord(it);
      if (word) urls.push(word);
    });
    bodyItems.forEach((it) => urls.push(L.clips.body(it)));
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

/* ---------- Keyboard ----------------------------------------- */

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !parentWrap.classList.contains('is-hidden')) closeParent();
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
booted = true;
shownLangs = activeLangs().join(',');
shownAvail = availKey();

/* Once, on a board nobody has set up yet. */
if (!state.chosen) whenVoicesKnown(openLangPicker);

const params = new URLSearchParams(location.search);

/* The home-screen icon can carry a long-press menu — see `shortcuts` in
   the manifest — and each entry is this same page with a ?screen= on
   it. Anything the board doesn't have a tab for lands on the letters,
   so a stale bookmark can't open an empty door.

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

const known = [...document.querySelectorAll('.tab')].map((t) => t.dataset.screen);
showScreen(known.includes(wanted) ? wanted : 'letters');
