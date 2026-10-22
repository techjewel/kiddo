/* The saved board, in exactly the shape the legacy app writes under
   `magnet-board-v1` (app.js, load and save). Kept byte-compatible so
   no tablet loses its stars, its seen tiles or its languages when the
   new app takes over. */

export const STORE_KEY = 'magnet-board-v1';
export const LANG_CODES = ['en', 'bn', 'es', 'fr', 'ar'] as const;
export type LangCode = (typeof LANG_CODES)[number];

export interface SavedBoard {
  stars: number;
  seen: string[];
  muted: boolean;
  focusMode: boolean;
  langs: LangCode[];
  lang: LangCode;
  chosen: boolean;
}

const isLang = (c: unknown): c is LangCode =>
  typeof c === 'string' && (LANG_CODES as readonly string[]).includes(c);

function deviceLangs(tags: readonly string[]): LangCode[] {
  const want = new Set<string>(['en']);
  for (const t of tags) want.add(String(t || '').slice(0, 2).toLowerCase());
  return LANG_CODES.filter((c) => want.has(c));
}

/* Same rules as the legacy load(): defaults from the device language,
   the two-language migration from before the registry, registry order,
   and never an empty language list. */
export function parseSaved(raw: string | null, tags: readonly string[] = []): SavedBoard {
  let data: unknown = null;
  try {
    data = JSON.parse(raw || 'null');
  } catch {
    data = null;
  }
  const first = String(tags[0] || '').slice(0, 2).toLowerCase();
  const base: SavedBoard = {
    stars: 0, seen: [], muted: false, focusMode: false,
    langs: ['en'], lang: 'en', chosen: false,
  };
  if (!data || typeof data !== 'object') {
    return { ...base, langs: deviceLangs(tags), lang: isLang(first) ? first : 'en' };
  }
  const d = data as Record<string, unknown>;
  const out: SavedBoard = {
    stars: typeof d.stars === 'number' ? d.stars : 0,
    seen: Array.isArray(d.seen) ? d.seen.filter((s): s is string => typeof s === 'string') : [],
    muted: d.muted === true,
    focusMode: d.focusMode === true,
    langs: [],
    lang: isLang(d.lang) ? d.lang : 'en',
    chosen: d.chosen === true,
  };
  let langs: unknown[] = Array.isArray(d.langs) ? d.langs : [];
  if (!Array.isArray(d.langs)) {
    langs = ['en', 'bn'];
    out.lang = d.bodyLang === 'bn' ? 'bn' : 'en';
    out.chosen = true;
  }
  out.langs = LANG_CODES.filter((c) => langs.includes(c));
  if (!out.langs.length) out.langs = ['en'];
  if (!out.langs.includes(out.lang)) out.lang = out.langs[0] ?? 'en';
  return out;
}

export function readSaved(): SavedBoard {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORE_KEY);
  } catch {
    raw = null;
  }
  const tags = [navigator.language, ...(navigator.languages || [])];
  return parseSaved(raw, tags);
}
