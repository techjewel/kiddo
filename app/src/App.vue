<script setup lang="ts">
/* Phase 0: renders nothing visible. The legacy app.js owns the board.
   The data attribute lets the parity tests see that Vue booted. */
import { useSettingsStore } from './stores/settings';

const settings = useSettingsStore();
</script>

<template>
  <span data-kiddo-next="ready" :data-lang="settings.lang" />
</template>
