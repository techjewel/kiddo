/* The rule sw.js has followed since v35, as a typed function the new
   service worker will import in phase 1: only a real photograph or
   recording goes in the media cache. */

export interface ResponseLike {
  ok: boolean;
  headers: { get(name: string): string | null };
}

export function isMediaPath(path: string): boolean {
  return path.includes('/photos/') || path.includes('/images/') || path.includes('/sounds/');
}

export function isGoodMedia(url: URL, res: ResponseLike | null | undefined): boolean {
  if (!res || !res.ok) return false;
  const type = (res.headers.get('content-type') || '').toLowerCase();
  const path = url.pathname;
  if (path.includes('/photos/') || path.includes('/images/')) return type.startsWith('image/');
  if (path.includes('/sounds/')) return type.startsWith('audio/') || type.startsWith('video/mp4');
  return false;
}
