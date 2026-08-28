#!/bin/sh
# Redraw the icons and the social card from the HTML in this folder.
#
#   sh brand/render.sh
#
# Nothing in here ships — see .assetsignore. Run it after editing
# icon.html, og.html or favicon-src.html; the PNGs it writes are what
# the manifest and the <meta> tags point at.
#
# Chrome clamps --force-device-scale-factor at 0.5, so the small sizes
# can't be asked for directly. Everything is shot at its natural size
# and resampled down by sips, which is on every Mac and does a better
# job of it anyway.
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="$(command -v chromium || command -v google-chrome)"

shot() { # page  width  height  out
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --force-color-profile=srgb --default-background-color=00000000 \
    --virtual-time-budget=8000 \
    --window-size="$2,$3" --screenshot="$4" --screenshot-format=png \
    "file://$PWD/$1" >/dev/null 2>&1
}

mkdir -p icons

# The launcher icon, twice over: `any` sits close to the edge the way an
# iOS icon does, `maskable` pulls into the 80% circle Android crops to.
shot brand/icon.html 512 512 icons/icon-512.png
sed 's/pad-tight/pad-mask/' brand/icon.html > brand/.icon-mask.html
shot brand/.icon-mask.html 512 512 icons/icon-maskable-512.png
rm -f brand/.icon-mask.html

sips -Z 192 icons/icon-512.png --out icons/icon-192.png >/dev/null
sips -Z 192 icons/icon-maskable-512.png --out icons/icon-maskable-192.png >/dev/null
sips -Z 180 icons/icon-512.png --out apple-touch-icon.png >/dev/null

# A tab favicon is 16 real pixels; four magnets there is grey mush, so
# the small end gets one tile and one letter.
shot brand/favicon-src.html 256 256 icons/favicon-256.png
sips -Z 64 icons/favicon-256.png --out icons/favicon-64.png >/dev/null
sips -Z 32 icons/favicon-256.png --out icons/favicon-32.png >/dev/null

# The one icon nothing links to. Browsers, unfurlers and feed readers
# ask for /favicon.ico whether the <head> mentions it or not, and with
# no file there the single-page-application fallback answers with
# index.html as text/html. Three sizes in one container; see ico.mjs.
sips -Z 48 icons/favicon-256.png --out /tmp/magnet-fav-48.png >/dev/null
sips -Z 16 icons/favicon-256.png --out /tmp/magnet-fav-16.png >/dev/null
node brand/ico.mjs favicon.ico \
  /tmp/magnet-fav-16.png icons/favicon-32.png /tmp/magnet-fav-48.png
rm -f /tmp/magnet-fav-48.png /tmp/magnet-fav-16.png
rm -f icons/favicon-256.png

shot brand/og.html 1200 630 og.png

# Chrome's install sheet shows these beside the icon; without them it
# offers a bare one-line prompt. They are the real app at the two form
# factors the manifest declares — and they go through shot.mjs rather
# than the shot() above, because Chrome won't make a window narrower
# than 500px and a 412px phone shot taken that way is a 500px layout
# with the right-hand side cropped off.
# A fresh profile has never answered "Which languages?", so every one of
# these opens on that panel and a screenshot of it is a screenshot of a
# dialog. Each job switches all four on and presses Start first, which
# also means the letters shot shows the language switch — the thing the
# install sheet is there to show off. No $ or backticks in here: the
# heredoc below is unquoted so $PWD resolves.
PICK="const w=document.getElementById('langWrap'); if(w&&!w.classList.contains('is-hidden')){for(const c of ['bn','es','fr']){const r=document.querySelector('#langList .lang-row[data-lang='+c+']'); if(r&&r.getAttribute('aria-pressed')!=='true')r.click();} document.getElementById('langDone').click();} await new Promise(r=>setTimeout(r,350));"

cat > /tmp/magnet-shots.json <<JSON
[
  { "url": "file://$PWD/index.html", "w": 412, "h": 915, "mobile": true,
    "js": "$PICK", "out": "icons/shot-phone.png" },
  { "url": "file://$PWD/index.html?screen=pictures", "w": 412, "h": 915, "mobile": true,
    "js": "$PICK", "out": "icons/shot-phone-pics.png" },
  { "url": "file://$PWD/index.html", "w": 1280, "h": 800,
    "js": "$PICK", "out": "icons/shot-wide.png" }
]
JSON
node brand/shot.mjs /tmp/magnet-shots.json
rm -f /tmp/magnet-shots.json

echo "wrote:"
ls -l og.png favicon.ico apple-touch-icon.png icons/*.png | awk '{print "  " $9 "  " $5 " bytes"}'
