import { describe, it, expect } from 'vitest';
import { isGoodMedia } from '../../src/services/media-guard';

const res = (ok: boolean, type: string) => ({ ok, headers: { get: () => type } });
const u = (p: string) => new URL(p, 'https://kiddo.page/');

describe('isGoodMedia', () => {
  it('keeps real recordings and photos', () => {
    expect(isGoodMedia(u('/sounds/cat.m4a'), res(true, 'audio/mp4'))).toBe(true);
    expect(isGoodMedia(u('/photos/cat.jpg'), res(true, 'image/jpeg'))).toBe(true);
  });

  it('refuses the app page filed under a media name', () => {
    expect(isGoodMedia(u('/sounds/arabic/mualim/1.m4a'), res(true, 'text/html'))).toBe(false);
    expect(isGoodMedia(u('/photos/nope.jpg'), res(true, 'text/html; charset=utf-8'))).toBe(false);
  });

  it('refuses errors and mismatched types', () => {
    expect(isGoodMedia(u('/sounds/cat.m4a'), res(false, 'audio/mp4'))).toBe(false);
    expect(isGoodMedia(u('/photos/cat.jpg'), res(true, 'audio/mp4'))).toBe(false);
    expect(isGoodMedia(u('/sounds/cat.m4a'), null)).toBe(false);
  });
});
