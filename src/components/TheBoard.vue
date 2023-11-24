<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import TheCircle from './TheCircle.vue'
import TheResult from './TheResult.vue'
import TheX from './TheX.vue'

const game = useGameStore()
const { gameStatus } = storeToRefs(game)
</script>

<template>
  <div
    class="aspect-square w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 shadow-sm"
  >
    <div v-if="gameStatus.status === 'on-going'" class="flex h-full flex-wrap justify-center">
      <div
        v-for="i in 9"
        :key="i"
        class="group flex min-h-[102px] w-[33%] cursor-pointer items-center justify-center border-slate-800 p-2"
        :class="{
          'border-b-4 border-r-4': [1, 2, 4, 5].includes(i),
          'border-b-4': [3, 6].includes(i),
          'border-r-4': [7, 8].includes(i)
        }"
        :data-block="i"
        @click="game.placeMove"
      >
        <TheX />
        <TheCircle />
      </div>
    </div>
    <TheResult v-else />
  </div>
</template>
