<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import TheCircle from './TheCircle.vue'
import TheX from './TheX.vue'

const game = useGameStore()
const { gameStatus } = storeToRefs(game)
</script>

<template>
  <div class="h-full text-center">
    <div v-if="gameStatus.status === 'draw'" class="flex h-full w-full flex-col justify-around">
      <div class="grid grid-cols-2">
        <div
          class="group flex aspect-square w-full items-center justify-center p-2"
          data-player="x"
        >
          <TheX />
        </div>
        <div
          class="group flex aspect-square w-full items-center justify-center p-2"
          data-player="o"
        >
          <TheCircle />
        </div>
      </div>
      <span class="text-5xl font-semibold uppercase">Draw!</span>
    </div>
    <div v-else-if="gameStatus.winner === 'x'" class="flex h-full w-full flex-col justify-around">
      <div
        class="group mx-auto flex aspect-square w-8/12 items-center justify-center p-2"
        data-player="x"
      >
        <TheX />
      </div>
      <span class="text-5xl font-semibold uppercase">Winner!</span>
    </div>
    <div v-else-if="gameStatus.winner === 'o'" class="flex h-full w-full flex-col justify-around">
      <div
        class="group mx-auto flex aspect-square w-8/12 items-center justify-center p-2"
        data-player="o"
      >
        <TheCircle />
      </div>
      <span class="text-5xl font-semibold uppercase">Winner!</span>
    </div>
  </div>
</template>
