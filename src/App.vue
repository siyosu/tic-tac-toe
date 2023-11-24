<script setup lang="ts">
import TheStats from './components/TheStats.vue'
import TheBoard from './components/TheBoard.vue'
</script>
<template>
  <main class="bg-slate-950 text-slate-100">
    <div class="container">
      <div class="flex min-h-screen flex-col items-center justify-center gap-2">
        <TheStats />
        <TheBoard />
      </div>
    </div>
  </main>
</template>
