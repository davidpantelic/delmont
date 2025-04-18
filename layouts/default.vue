<template>
  <SpeedInsights />
  <slot />
</template>

<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>