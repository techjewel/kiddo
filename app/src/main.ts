/* Phase 0 entry. Mounts an empty Vue app with Pinia on a hidden
   element next to the legacy board, to prove the pipeline end to end.
   It reads nothing the legacy app writes and writes nothing at all.
   Phase 3 starts mounting real screens. */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const mount = document.getElementById('kiddo-next');
if (mount) {
  const app = createApp(App);
  app.use(createPinia());
  app.mount(mount);
}
