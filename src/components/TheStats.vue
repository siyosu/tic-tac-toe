<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/game'

const game = useGameStore()
const { currentPlayer, players } = storeToRefs(game)
</script>

<template>
  <div class="w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 p-4">
    <button
      @click="game.resetGame"
      class="rounded bg-fuchsia-700 px-4 py-2 transition hover:bg-fuchsia-800 active:scale-95"
    >
      Restart
    </button>
    <div class="mt-2 flex gap-2 text-center">
      <div
        class="flex w-full items-center justify-between rounded border border-slate-800 px-2"
        :class="{ 'bg-fuchsia-700': currentPlayer === 'x' }"
      >
        <span class="text-4xl">&Cross;</span><span>{{ players.x.win }}</span>
      </div>
      <div
        class="flex w-full items-center justify-between rounded border border-slate-800 px-2"
        :class="{ 'bg-fuchsia-700': currentPlayer === 'o' }"
      >
        <span class="text-4xl">&cir;</span><span>{{ players.o.win }}</span>
      </div>
    </div>
  </div>
</template>
