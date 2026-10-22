/* Phase 0: read-only view of the saved board. Saving stays with the
   legacy app until the screens that change these move over (phase 2
   wires it both ways, still under the same key). */
import { defineStore } from 'pinia';
import { readSaved, type SavedBoard } from '../services/storage';

export const useSettingsStore = defineStore('settings', {
  state: (): Pick<SavedBoard, 'langs' | 'lang' | 'muted' | 'focusMode' | 'chosen'> => {
    const s = readSaved();
    return { langs: s.langs, lang: s.lang, muted: s.muted, focusMode: s.focusMode, chosen: s.chosen };
  },
});
