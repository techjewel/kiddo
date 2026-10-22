import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import App from '../../src/App.vue';

describe('App (phase 0)', () => {
  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
  });

  it('boots with Pinia and reads the saved language', () => {
    localStorage.setItem('magnet-board-v1', JSON.stringify({ langs: ['en', 'bn'], lang: 'bn' }));
    const pinia = createPinia();
    const w = mount(App, { global: { plugins: [pinia] } });
    const el = w.get('[data-kiddo-next]');
    expect(el.attributes('data-kiddo-next')).toBe('ready');
    expect(el.attributes('data-lang')).toBe('bn');
  });
});
