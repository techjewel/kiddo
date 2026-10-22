import { describe, it, expect } from 'vitest';
import { parseSaved } from '../../src/services/storage';

describe('parseSaved (same rules as legacy load())', () => {
  it('defaults from the device language when nothing is saved', () => {
    expect(parseSaved(null, ['bn-BD', 'en-US'])).toMatchObject({ langs: ['en', 'bn'], lang: 'bn', stars: 0, chosen: false });
    expect(parseSaved(null, ['de-DE'])).toMatchObject({ langs: ['en'], lang: 'en' });
  });

  it('keeps a saved board as it is', () => {
    const raw = JSON.stringify({ stars: 7, seen: ['LA', 'F0'], muted: true, focusMode: false, langs: ['ar', 'en'], lang: 'ar', chosen: true });
    expect(parseSaved(raw)).toEqual({ stars: 7, seen: ['LA', 'F0'], muted: true, focusMode: false, langs: ['en', 'ar'], lang: 'ar', chosen: true });
  });

  it('carries a pre-registry save across as English and Bangla', () => {
    expect(parseSaved(JSON.stringify({ stars: 2, bodyLang: 'bn' }))).toMatchObject({ langs: ['en', 'bn'], lang: 'bn', chosen: true, stars: 2 });
  });

  it('never ends up with no language', () => {
    expect(parseSaved(JSON.stringify({ langs: ['xx'], lang: 'xx' }))).toMatchObject({ langs: ['en'], lang: 'en' });
    expect(parseSaved('{not json')).toMatchObject({ langs: ['en'] });
  });

  it('drops a current language that is switched off', () => {
    expect(parseSaved(JSON.stringify({ langs: ['en', 'fr'], lang: 'bn' }))).toMatchObject({ lang: 'en' });
  });
});
