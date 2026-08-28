/* ============================================================
   Bundle PNGs into a .ico.

     node brand/ico.mjs favicon.ico 16.png 32.png 48.png

   Not for looks — for the request every browser makes on its own.
   The app links its PNG icons explicitly, but a browser still asks for
   /favicon.ico, and so do link unfurlers and feed readers that never
   read the <head>. Cloudflare's `not_found_handling` is set to
   single-page-application, so with no file there that request is
   answered with index.html under `content-type: text/html` and a 200,
   which is a worse answer than a 404.

   An .ico is a tiny container: a 6-byte header, a 16-byte directory
   entry per image, then the images. Since Vista those images are
   allowed to be PNGs stored whole, which is what this does — no BMP
   encoder, no dependencies.
   ============================================================ */
import { readFileSync, writeFileSync } from 'node:fs';

const [out, ...pngs] = process.argv.slice(2);
if (!out || !pngs.length) {
  console.error('usage: node brand/ico.mjs out.ico in1.png [in2.png ...]');
  process.exit(1);
}

const images = pngs.map((p) => {
  const data = readFileSync(p);
  /* The IHDR width and height are big-endian 32-bit at a fixed offset
     in every PNG, so the size comes from the file rather than from the
     filename being trusted to be honest. */
  if (data.readUInt32BE(0) !== 0x89504e47) throw new Error(`${p} is not a PNG`);
  const w = data.readUInt32BE(16);
  const h = data.readUInt32BE(20);
  if (w > 256 || h > 256) throw new Error(`${p} is ${w}×${h}; an .ico entry tops out at 256`);
  return { data, w, h };
});

const HEADER = 6;
const ENTRY = 16;
const dir = Buffer.alloc(HEADER + ENTRY * images.length);
dir.writeUInt16LE(0, 0);                /* reserved */
dir.writeUInt16LE(1, 2);                /* 1 = icon, 2 = cursor */
dir.writeUInt16LE(images.length, 4);

let offset = dir.length;
images.forEach((img, i) => {
  const at = HEADER + ENTRY * i;
  /* 256 is written as 0: the field is one byte and 256 doesn't fit. */
  dir.writeUInt8(img.w === 256 ? 0 : img.w, at);
  dir.writeUInt8(img.h === 256 ? 0 : img.h, at + 1);
  dir.writeUInt8(0, at + 2);            /* palette size, 0 for truecolour */
  dir.writeUInt8(0, at + 3);            /* reserved */
  dir.writeUInt16LE(1, at + 4);         /* colour planes */
  dir.writeUInt16LE(32, at + 6);        /* bits per pixel */
  dir.writeUInt32LE(img.data.length, at + 8);
  dir.writeUInt32LE(offset, at + 12);
  offset += img.data.length;
});

writeFileSync(out, Buffer.concat([dir, ...images.map((i) => i.data)]));
console.log(`  ${out}  ${images.map((i) => `${i.w}×${i.h}`).join(' ')}`);
