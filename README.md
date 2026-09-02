# Magnet Board

Letters, numbers, pictures and colours on a fridge door, in four languages.
Built for a 3–6 year old with a grown-up nearby.

## Run it

Double-click `index.html`. That's it — no build, no install, no dependencies.

If a change doesn't show up, the browser is holding an old `app.js` or
`styles.css`. Bump the `?v=` on both `<link>`/`<script>` tags in `index.html`
and reload — that's what they're there for. A hard reload works too (Chrome
⌘⇧R; Safari ⌥⌘E then ⌘R), but the version bump is the one an iPad home-screen
icon actually notices.

To use it on a tablet or phone on your home wifi, serve the folder instead:

```bash
cd abcd_learning
python3 -m http.server 8000
```

Then open `http://<your-computer-ip>:8000` on the tablet. On iPad, tap Share →
Add to Home Screen and it opens full-screen like an app.

Opened straight off the disk it will log one CORS error about
`manifest.webmanifest`, and the service worker won't register. Both are
`file://` refusing to do things it only does over http, and neither affects the
app — but they're the reason the offline row in the grown-ups panel stays
hidden until you serve the folder.

## What's in it

**Languages.** The board speaks four: English, বাংলা, Español and Français.
Letters, numbers and the body screen are in whichever one is chosen, one at a
time, with a switch across the top; the switch only appears when more than one
is switched on. Pictures, colours, shapes and Play are in English whatever is
chosen.

The first time it opens it asks which ones to switch on, with the device's own
language already ticked and a **Start** button that works without anything
being touched. After that it lives in the grown-ups panel, and a language
switched off keeps its stars — off is not reset.

A language is only offered if the device can actually say it. বাংলা, Español
and Français always can, because they are recorded. English prefers the
device's own voice, and if that voice is missing — a television browser is
the usual case — it plays a spoken-name file instead, so the board is never
silent.

**Letters** — 26 in English, each with its lowercase partner, a word and a
picture. Tap a magnet and it says the letter and the word out loud. The other
alphabets sit behind the same switch on the same screen: 47 বর্ণ, 27 Spanish
letters with Ñ where the Real Academia puts it, 26 French. Only ever one of them
at a time, never one glossed under another.

*বর্ণ* is eleven স্বরবর্ণ and thirty-six ব্যঞ্জনবর্ণ, each with the word it
starts and a picture of it — অ, অজগর; আ, আম; ঘ, ঘড়ি. Tapping one plays two
**real recordings** back to back, the letter and then the word, in the same
speaker's voice. Nothing on the screen is labelled in English while it is
showing, the hint included.

**Numbers** — 1 to 20, behind the same switch and in the same four languages.
Tapping a number says its name and lays out that many pictures, so the quantity
is visible next to the numeral. ১ to ২০ is the same panel with the script
changed; the counting pictures are deliberately identical, because counting is
the part that doesn't change between languages. The Bangla words are recordings
— এক, দুই, তিন.

**Pictures** — 21 fruits, 23 animals, 19 birds, 12 flowers and 32 things around
the house, all as **real photographs**, two big ones per row. Fruits, flowers and
household things say only their name — "Lemon." Nothing else. Animals say their
name and then the animal: most of them play a **real recording** — an actual
cow, goat, frog, lion, elephant, donkey, bear, fox. Mouse and snake have no
recording worth having, so they say the noise instead — "Mouse. Squeak." A
rabbit, a turtle and a fish stop at the name.

The panda, the zebra and the fish are on that shelf because they are on the
letter board — P is for Panda, Z is for Zebra, F is for Fish — and an animal a
child meets under a letter should be findable where the animals live.

Birds are their own shelf, and the duck, the chicken, the owl and the penguin
moved onto it — a shelf a child browses has to mean what it says, and those four
were the only birds sitting under Animals. The three recordings came with them,
so the duck still quacks. The crow, the pigeon, the sparrow, the woodpecker,
the parrot, the myna, the cuckoo, the kingfisher, the swan, the flamingo, the
penguin, the goose and the turkey play real recordings too. A peacock's scream
and an eagle's cry are not sounds a three-year-old repeats, so those birds
give their name and stop. An ostrich has no recording here, so it stops at
the name as well.

**Colours** — 11 of them. Tapping one paints the whole page that colour, rings
the tile you picked, and says just the word: "Green." The name shows above the
grid so the written word goes with it.

**Shapes** — 12 of them, from circle and triangle up to pentagon, hexagon and
crescent. Tap one and it draws itself: the outline walks round the path, the
colour floods in behind it, then a white dot lands on each corner in turn. The
voice says the name and stops — "Triangle." The corner count and the examples
stay on the panel to be read.

**Body** — a boy, standing there to be poked. Tap his nose and a red ring lands
on it, the rest of him fades, and he says "Nose." 18 parts, from head and hair
down to knees, feet and toes; under him the same 18 as words, for the ones a
finger has trouble finding. The same switch as the letters
and the numbers puts the whole screen into another language — নাক, হাত, পায়ের
আঙুল, spoken by a real Bangla speaker; Nariz, Mano, Dedos del pie spoken from
files when the device has no voice of its own — and the choice is the board's,
remembered across all three screens.

**Play** — "Find the lion" with four big magnets to choose from. Ten rounds,
each ending in confetti and a stretched "Yaaay!". Letters, numbers, pictures,
colours, shapes, body, or all of them. Wrong taps just wiggle and cost nothing;
there's no way to lose.

The ⚙ button shows stars earned and how much of each set has been explored,
plus a reset.

## Deliberate choices

**Nothing opens over the page.** Every screen keeps a panel above its grid that
updates in place, and colours repaint the page itself. A modal meant every tap
had to be undone before the next one; now he can tap twenty things in a row
without meeting a close button. Tapping the panel repeats it. The only thing
that still opens over the page is the Grown-ups panel, which isn't for him.

The body screen is the one panel that doesn't sit at the top reporting what was
tapped, because there it *is* the thing being tapped. It stands up straight and
takes the room, with the name underneath the boy where a caption goes.

**Language is a switch, not a tab.** বাংলা used to be a tab of its own, sitting
beside Letters and Numbers. That works for exactly two languages and then runs
out of room — eight tabs was already the most a phone could carry, and a third
language would have been a ninth. So language stopped being a place and became a
dimension inside the screens that have it. Seven tabs now, and adding a language
costs none.

The rule this was protecting is untouched, because the rule was never "separate
tabs". It is that **only one language is ever on the screen**: the tiles carry
নাক or "Nose" or "Nariz", never নাক under "Nose", because a word in the corner
of another word's tile is a subtitle, and the subtitle is the part that gets
read. A switch keeps that as well as a tab did. Hanging ৭ under a 7 is what
broke it, and nothing here does that.

It also means the two things that looked like the same decision made twice are
now actually one decision made once. The body screen always switched language
and the numbers never did, on the grounds that ৭ and 7 are two ways of writing
one thing while a nose is not a way of writing anything. That distinction was
real but it was an argument about *subtitles*, and it was answering it with
*navigation*. A switch changes the whole screen at once, which is what a tab
did; so the choice between them was only ever about how many languages the
board could hold.

**The switch shares a line with the hint.** Stacking them put three bands above
every grid — a switch, a line of text, and the panel — and on a desktop that was
a quarter of the window gone before the first magnet. They are now one band that
wraps back into two rows on a phone, where both were full-width anyway. At
1440×900 the first tile moved up 56 pixels and all twenty numbers fit on screen,
where before nineteen and twenty were below the fold.

The counting pictures still take their own line and still hold one height
whatever the count. A panel that grew by half between 8 and 9 would shove the
whole grid down under a finger that was already reaching for the next tile.

**Switching keeps your place.** Flipping the switch doesn't reset the panel to
the top of the alphabet — the same position on the chart, the same number, the
same body part. 7 becomes ৭ and is still seven. Standing on the same thing and
hearing it named twice is the whole point of doing this on one screen. Where the
alphabets are different lengths — 47 বর্ণ against 26 letters — a position off
the end of the shorter one lands on its last tile rather than nowhere.

Nothing is spoken when the switch is flipped. It's a grown-up reaching over, and
reading the new label back at the child turns a change of label into an answer
to a question he didn't ask. The panel is right there to be tapped.

**A language is a row in a table.** `LANGS` in `app.js` holds everything that
differs between them: an alphabet, twenty number names, a name for each body
part, what voice says it, and where its colours start in the palette. Adding one
is adding a row. Nothing else in the app knows how many there are.

The `letterId` and `numberId` functions in that table are load-bearing and must
not be tidied. A tile's id is what `state.seen` remembers, so the English letters
are still `LA`…`LZ` and the Bangla ones still `BL0`…`BL46` — the shapes they had
before there was a registry. Renaming them would silently empty every board
already on a fridge.

Each language also starts at its own point in the six-colour palette, so two
alphabets never run the same sequence of colours down the grid and invite being
read as translations of each other.

**Bangla is recorded and the European languages aren't, and that's a fact about
devices.** Almost no device ships a `bn` voice; handed সাত an English engine
either stays silent or guesses badly. So all 86 letter clips, 20 numbers and 18
body parts are files — a real person, the same voice every time, offline. Every
device that speaks at all can speak Spanish and French, so those cost no
download at all. Which of the two ways a language uses is one field in the
table, and no screen knows the difference.

**A language the device can't say isn't offered.** A tablet with no Spanish
voice would hand "Abeja" to an English engine and mispronounce it with
confidence, which is the same wrong-answer-said-confidently that the Bangla
letters refuse to give. So the picker greys it out and says which voice is
missing — it's a system setting, not something this page can install. The check
waits for the voice list to load before the picker opens, because answering that
question wrongly for a tick and then correcting itself is worse than opening a
moment later. If a voice turns up late, the language appears on its own.

**Spanish first, then French.** Spanish is the best-behaved alphabet in Europe
for a child learning that letters make sounds — five vowels, one sound each,
and they stay that way. French is the opposite and was added second for that
reason; its Q and U are the two every French chart has to work at, and *quille*
and *usine* are at least things a finger can point at. W is a borrowed letter in
Spanish and every chart reaches for a foreign word, so this one uses *wifi*.

**The first-run picker is a wall between a child and the magnets**, so it is
built to be got past. The device's own language is already ticked, English is
always on, and **Start** works without anything being touched. A board that was
already on a fridge before any of this never sees it at all: the old save is
carried across as English and বাংলা, with the body screen's language becoming
the board's, and the choice counted as already made. The picker is in the
grown-ups drawer for whoever wants it.

The last language on can't be switched off — a board with no words on it isn't a
board — and that row says so rather than just refusing.

**The game stays in English.** Rounds are asked out loud — "Find the number
seven" — and a Bangla set would mean an English sentence wrapped round a Bangla
numeral, which is the mixing the switch exists to avoid. Asking properly means
asking in Bangla, which needs the voice that most devices don't have. The
language switch doesn't reach it either: Play asks "Find the feet" whichever
language the board is in, because a recording can name a part but can't ask a
question about it.

Spanish and French *could* carry it, being synthesised — an `es` voice will say
"Encuentra el león" properly. It still doesn't, because only three of the seven
things Play asks about have Spanish words at all. A Spanish game that can ask
about letters, numbers and elbows but not about lions, circles or the colour red
is a worse game than an English one that asks about all seven. Translating the
99 pictures is what would change that, and it is a much bigger job than
translating an alphabet.

**Eight letters carry no word.** ঙ, ঞ, ণ, য, ড়, ঢ়, য় and ৎ sit inside words
rather than starting them, so those panels show the letter and stop. Every
alphabet chart solves this by reaching for a word no child will ever say, and
that teaches the wrong thing confidently. Saying less is the honest option. ং,
ঃ and ঁ aren't on this screen at all: they're marks, not letters — nothing
starts with one, none can be said on its own, and there is no recording of one
anywhere, because there is nothing to record.

**A letter is two clips, not one.** The letter, then the word it starts —
played back to back, with the second only starting if the first finished. Two
files because Lingua Libre recorded them separately, and the gap between them
is the breath a person leaves anyway. A child tapping ক then খ hears খ, not কলা
arriving over the top of it.

**The Bangla is set in Baloo Da 2**, the Bengali member of the same family as
the chunky uppercase — same hands, same weight — so ৭ on a magnet looks like it
belongs on this fridge door and not like the system font stepped in. Neither
Baloo 2 nor Andika covers Bengali at all.

**The Bangla is recorded, not synthesised.** The first build asked the browser
to say এক and got English, because speech comes from whatever voices are
installed and almost no device ships a `bn` voice — handed "সাত", an English
engine either stays silent or guesses badly. That's not a setting to fix; it's
the reason a Bangla screen can't use the same machinery as the English one. So
the twenty words are audio files, exactly like the animal noises: a real person
saying the word, the same voice every time, on every device, offline.

The speech engine is now only the safety net for a clip that won't play at all
— the device's own Bangla voice if it has one, and for the numbers, failing
that, the English name, because a magnet that makes no sound when a
three-year-old taps it is a broken magnet. A letter has no such fallback: no
English letter is অ, and reading out "o" would be a wrong answer said
confidently. The tap still pops and the tile still ticks.

Two things that look like failure aren't and don't trigger it: a
browser refusing to play audio before the first tap, and a clip cut short
because the next tile was already tapped. A child tapping ৭ then ৮ hits the
second one constantly, and treating it as a failure would say "seven" over the
top of আট.

**Fifteen of the twenty are one voice.** Lingua Libre — the Wikimedia project
these come from — has no তেরো, পনেরো, সতেরো, আঠারো or উনিশ from the speaker who
recorded the rest, and no single contributor has recorded all twenty. Five
words in a second voice is the smallest seam available. All twenty are CC0.

The alphabet came out better: eighty-four of its eighty-six clips are the same
speaker as most of the numbers and all of the body parts, and the two that
aren't are words rather than letters — ঊষা and খরগোশ. Where a letter's obvious
word had no recording at all, the word moved rather than the seam: ঝ takes
ঝুড়ি, a basket he can point at in this house, instead of a ঝর্ণা nobody has
recorded.

**The body words are recorded too**, for the reason the numbers are, from the
same speaker for sixteen of the eighteen. Two of them are joined clips: Bengali
has no one-word name for the flat of the foot or for a toe, so *feet* is পায়ের
then পাতা and *toes* is পায়ের then আঙুল, cut together the way the pig is three
oinks joined. Two pairs are kept apart that colloquial Bangla runs together —
হাত is the hand and বাহু the arm above it, পা is the leg and পায়ের পাতা the
foot at the end of it — because a child being asked to point needs them to be
different places. All eighteen are CC0. The Spanish and French names for the
same eighteen parts are read out by the device, and keep the same two pairs
apart for the same reason.

**Each colour carries two values.** `hex` is the true colour and fills the page,
because a gradient over it would teach the wrong colour. `ink` is a darkened
version used for the name, which has to stay readable on a white panel — yellow
and white need it. Each colour also declares whether page text on it should be
light or dark, so black and white both work.

**The lowercase letters are set in Andika**, a typeface designed for literacy
learners. It has the single-storey `a` and `g` that children are actually
taught to write — most rounded "kid fonts" use the two-storey printer's forms,
which don't match what a child puts on paper. The chunky uppercase is Baloo 2.

**Colours are stable on the grid, shuffled in the game.** On the letters screen
a letter always wears the same colour so it becomes recognisable. In the game
they're reshuffled every round, so he has to read the letter instead of
remembering "the purple one". For the same reason, picture magnets show their
name on the browsing grid but not in the game. Colour rounds are the exception —
there the colour is the question, so those tiles keep their true colour.

**Each game round draws all four choices from one category.** Picking "red" out
of a letter, a lion and the number 7 isn't a choice, it's a riddle. "All" varies
the category between rounds instead of mixing them inside one.

**The shapes are drawn, not pictured.** A photograph of a triangular thing is a
photograph first and a triangle second, and emoji shapes are cartoons with soft
corners. Each shape here is an SVG path in a 100×100 box, so a right angle is a
right angle at any size. That also means the corners are known coordinates —
which is where the counting dots come from, one per vertex, rather than being
drawn on by hand.

**A star has ten corners but five points.** That's what a child counts, so the
star declares which vertices to dot and what to call them. Circles, ovals,
hearts and crescents declare no corners at all, and say so out loud — "no
corners" is a fact about a circle worth learning, not a missing field.

**Picture magnets have white faces.** A red apple on a red tile
disappears. The colour moves to the rim and bottom edge, so the tiles still look
like magnets and keep a colour identity, but the photo always reads clearly.

**A shelf of photographs is built when it is first looked at.** All five of them
at start-up would be a hundred-odd `<img>` elements and several megabytes of
photographs, asked
for before a child had tapped anything, on tabs he might never open — a browser
fetches an image the moment the element exists, even on a screen hidden with
`display: none`, because deferring it needs a layout box and a hidden screen
hasn't got one. `loading="lazy"` doesn't help there and is kept for what it does
help with: the twenty-six things at home that are below the fold of the shelf
you *are* on.

Opening the board now costs 0 photographs and about 350 kB. Opening Pictures
costs the shelf you land on. Nothing is lost by waiting — a shelf built late
reads `state.seen` and arrives already knowing what he has met — and the whole
set is still there to be had deliberately, from the download in the grown-ups
panel.

**The photos are real, and large.** Emoji are cartoons, and a postage-stamp
animal is no easier to recognise than a cartoon one — so the pictures grid runs
two big photos per row. Every fruit and animal, and most of the birds, is the
lead image of the matching Wikipedia article, which makes it a vetted,
representative picture rather than whatever a text search turned up. If a photo
ever fails to load the emoji stands in, so a missing file never leaves a hole.

**Four birds were picked by hand.** A lead image is the encyclopaedia's idea of
the species, and for four of them that isn't the bird a child means. "Peafowl"
leads with a peacock standing about, tail trailing — but a peacock, to a
three-year-old, is the fan. "Myna" and "ostrich" lead with two birds and three.
The parrot's lead has it small among leaves. Those four came off Wikimedia
Commons against the household rule: one ordinary bird, big in the frame. The
generic parrot, myna and crow are the green parakeet, the myna and the house
crow he actually sees outside, not whichever species an encyclopaedia leads
with.

**The flowers are hand-picked too, for the same reason as the household
things.** Article leads illustrate a genus, not the flower a child meets:
"Bellis perennis" leads with two small daisies on a mossy rock, and "Narcissus"
with a hillside of white poet's narcissus when a daffodil, to a child, is the
big yellow trumpet. Each of the twelve is one ordinary flower, filling the
frame, in the colour he expects.

**The household photos had to be picked by hand.** The same trick fails on
objects: Wikipedia leads "Chair" with a Chippendale, "Book" with the Gutenberg
Bible and "Table" with a gilded baroque console. Those are the right pictures
for an encyclopaedia and the wrong ones for a three-year-old, who needs the
ordinary example. Each was chosen off Wikimedia Commons against one rule — one
plain instance of the thing, big in the frame. It's also why `bed` shows a whole
bed in a room rather than a close-up of bedding, which would have been
indistinguishable from `pillow` sitting right next to it.

**The body is one drawing you tap, not eighteen pictures you browse.** Every
other section answers "what does this look like", but a child already knows what
an ear looks like — what he's learning is where it is, and only a whole body can
say that. The first build showed the parts as a grid of close-ups, and it was
the one section that taught nothing: cropped to the part, a shoulder, an elbow,
a knee and a hand are four identical tan circles, and pointing at a tile is not
pointing at yourself. So the boy became the screen. He's drawn big, and you
touch him where the part is.

It also solves a problem photographs have here: there is no decent,
child-appropriate isolated picture of a shoulder, a tummy or a back. The drawn
child wears shorts and gets asked about his tummy the way any toddler does.

**The tap targets are a second, invisible drawing.** A nose is nine pixels of
path, an arm is a stroke with no fill at all, and a toe is smaller than the
finger reaching for it — nothing in the drawing is its own hit area. Over the
boy sits a set of unpainted shapes, round and generous, hit-tested front to
back so the smaller thing always wins: the centre of a leg is a knee, the centre
of an arm is an elbow, the centre of a mouth is teeth. A child reaching for a
knee is not reaching for a leg.

**The words are underneath, as words.** Teeth are inside a mouth and hair is on
top of a head; a finger can't always separate them, and eighteen names is also
eighteen chances to see the word. Tapping one rings the part on the boy — the
same thing the tap does, from the other direction.

**In the game, every choice is the whole boy.** Four of him side by side, each
ringed somewhere different, and "Find the elbow" means picking the ring in the
right place. Four close-ups would have been four tan circles again — the
question is *where*, so the answer has to be a place.

**The household things say only their name.** A fruit earns a sentence because
"yellow and very sour" is something he can go and check against the real lemon.
A chair is just a chair. The list carries no third field for them, and the code
reads that absence: no sentence in the panel, and the voice stops after the
word.

## Sound

Two kinds. Speech prefers the browser's built-in voice (Web Speech API).
When that voice is missing, English plays a spoken-name file from
`sounds/voice/en/` instead — the same words, already on the device, so a
television that has no speech engine is never silent. Español and Français
are spoken from files in `sounds/voice/es/` and `sounds/voice/fr/` the way
বাংলা already was.

The other recordings are real audio files in `sounds/`: the animal noises,
the twenty Bangla number words in `sounds/bangla/`, the eighteen Bangla body
parts in `sounds/bangla/body/`, and the eighty-six letter and word clips of
the বর্ণমালা in `sounds/bangla/letters/`. All of them are trimmed and
levelled to the same loudness so none startles anyone. Sources and licences
are in [`sounds/CREDITS.md`](sounds/CREDITS.md); the photos have their own
in [`photos/CREDITS.md`](photos/CREDITS.md).

The 🔊 button mutes everything. If a tablet stays silent, tap the screen once
first — mobile browsers block audio until the page has been touched.

## Installing it

It's a PWA. On Android and desktop Chrome the browser offers to install it, and
the grown-ups panel has an **Add to home screen** button that triggers the same
prompt. On iPad and iPhone there's no prompt to offer — Safari only has Share →
Add to Home Screen — so the panel's button stays hidden there.

Installed, it opens with no address bar, its own icon and its own name.

**Keeping it offline.** The service worker caches the shell — the page, the CSS,
the script, the fonts — the first time it loads, so the app opens with no signal
at all. The photographs, the animal recordings and the spoken-name files are
cached as they're tapped, which means a child who has never met the flamingo
can't meet it on a plane. So the grown-ups panel has a **Download the photos
and sounds** button
that fetches all of them on purpose, with a progress bar, and says "All of it
is on this device" when it's done.

The list it downloads is built in `mediaUrls()` from the same arrays the tiles
are drawn from, so adding a photograph adds it to the download too. There is no
second list to keep in step. It also follows the languages: only the ones
switched on, and of those only the ones spoken from files, so a household with
বাংলা switched off is never asked to download 1.5 MB of it. English spoken-name
files come with the board because English is always on; Español and Français
add theirs only when those languages are switched on.

**Releasing a change.** Bump the `?v=` on both tags in `index.html` *and*
`VERSION` in `sw.js` to the same number, and update `SHELL_URLS` to match. A new
`VERSION` throws away the cached CSS and JS; the media cache is deliberately not
versioned, because an 8 MB download shouldn't be discarded over a CSS fix.

That last part assumes a photograph named for its subject never changes, which
holds right up until one turns out to be wrong — `rose.jpg` was a sweetbriar,
five flat pink petals, nothing a child would point at and call a rose. Replacing
a picture in place leaves the old one on every device that already has it, so
`STALE_MEDIA` in `sw.js` names the files to drop; the worker deletes them once on
activation and refetches on the next look. An entry can be removed a release or
two later. Changing the file's *name* would be worse — a tile's slug is what
`state.seen` remembers.

## The icons and the social card

`brand/` holds the artwork sources and doesn't ship — see `.assetsignore`. Run

```bash
sh brand/render.sh
```

to redraw everything: the launcher icons (plain and maskable), the favicon, the
Apple touch icon, the three install-sheet screenshots and `og.png`, the 1200×630
card that appears when the link is pasted into a chat. They're drawn as HTML
using the app's own magnet recipe, so the card and the app look like the same
object, and screenshotted by `brand/shot.mjs` — Chrome's own `--screenshot` flag
lays a page out at a 500px minimum on a Mac and then crops, which turns a phone
screenshot into a cropped tablet one.

The absolute URLs in the `og:` tags in `index.html` have the deployed domain in
them. If that changes, they change. They also carry a `?v=` of their own:
Facebook, LinkedIn and Slack cache a card by its image URL and won't come back
for a week or ever, so redrawing `og.png` means bumping that number or the old
card keeps turning up in chats. It has nothing to do with the `?v=` on the CSS
and JS and doesn't move with it.

The launcher icon is the same four tiles as the card's magnets: `A` red, `অ`
green, `Ñ` purple and the star in amber. The `1` used to have that third slot
and gave it up — numbers are still a screen and still on the card's rail, but at
192px an icon gets to say one thing, and the one worth saying is that this board
is not only in English.

The favicon can't join in. Sixteen real pixels is one tile and one letter, four
is grey mush, so it stays the red `A`. There is also a `favicon.ico` at the root
that nothing links to: browsers and unfurlers ask for that path on their own,
and `not_found_handling` would otherwise answer them with `index.html` under
`content-type: text/html` and a 200. `brand/ico.mjs` packs 16, 32 and 48 into
it — an `.ico` is a header, a directory entry per image and then the images,
which since Vista are allowed to be PNGs stored whole.

The install-sheet screenshots are of the real app, and a fresh browser profile
has never answered "Which languages?" — so each job in `render.sh` switches all
four on and presses Start before the shutter, which is also why the letters shot
has the language switch in it. Without that they are screenshots of a dialog.

**Redrawing an icon.** `/icons/*` is served `immutable` for a year and nothing
in `index.html`, `manifest.webmanifest` or `SHELL_URLS` carries a `?v=` on it,
so a redraw is invisible to anyone who has already been here until the year is
up. Nobody has, on this domain, which is the only reason it doesn't bite today.
The next redraw has to add a version to those three places at once, or it ships
to new visitors only.

The card is about the languages, because that is the part a stranger can't guess
from the name: three of the four alphabets are on magnets — `A`, `অ` and `Ñ`,
each in the colour its own language starts on — and the switch under the
headline names all four in their own words, exactly as the app does. The flags
in front of those words are the card's own doing and are not in the app; at the
size a card is actually seen, a thumbnail in a chat list, four flags read as
four languages before a single word is legible. They stand for the language and
not the country, which is why 🇬🇧 fronts an app that says "colours". The rail
below is the seven screens, in the order `index.html` lists them, and the
address sits beside it.

## Deploying

Cloudflare Workers static assets, on the `jewel-lab` account, at
[kiddo.page](https://kiddo.page):

```bash
npx wrangler deploy
```

The account and the apex are both in `wrangler.jsonc`. The `custom_domain` route
needs `kiddo.page` to be a zone on that account — Cloudflare writes the DNS
record and issues the certificate itself, so there is nothing to set up by hand.
Everything in `.assetsignore` stays out of the upload.

The domain is written down in four other places, all in `index.html`: the
canonical link, `og:url`, and the two image URLs. Moving the app means changing
those too, and redrawing `og.png`, which has the address on it.

## Progress

Stars, explored items, the mute setting, which languages are switched on and
which one the board is in are saved in the browser's local storage on that
device. Nothing leaves the device;
there are no accounts, servers, or ads.

## Files

- `index.html` — structure
- `styles.css` — the fridge door, the magnets, the panels
- `app.js` — content, the language table, speech, sounds, the game
- `sw.js` — the service worker: offline, and the download
- `manifest.webmanifest` — name, icons, screenshots, shortcuts
- `_headers` — what Cloudflare is allowed to cache and for how long
- `favicon.ico` — the path browsers ask for unprompted; generated, see `brand/`
- `icons/`, `apple-touch-icon.png`, `og.png` — generated; see `brand/`
- `brand/` — the artwork sources and the render script. Not deployed.
- `photos/` — the fruit, animal, bird, flower and household photographs, and
  their credits
- `sounds/` — animal recordings and their credits
- `sounds/bangla/` — এক to বিশ, one file per number, named by the English
  numeral (`7.m4a` says সাত)
- `sounds/bangla/letters/` — the বর্ণমালা, named by position on the chart:
  `1.m4a` is অ and `1-word.m4a` is অজগর
- `sounds/bangla/body/` — the eighteen body parts, one file per part, named by
  the English part (`nose.m4a` says নাক)
