<script setup lang="ts">
import { ref } from 'vue'
import TheCircle from './TheCircle.vue'
import TheX from './TheX.vue'

const player = ref<'x' | 'o'>('x')

const addMove = (e: MouseEvent) => {
  const element = e.target as HTMLElement
  if (element.dataset.player) return

  const block = Number(element.dataset.block)
  if (isNaN(block)) return

  element.dataset.player = player.value
  player.value = player.value === 'x' ? 'o' : 'x'
}
</script>
<template>
  <div
    class="aspect-square w-full max-w-lg rounded-[2rem] border border-slate-800 bg-slate-900 shadow-sm"
  >
    <div class="flex h-full flex-wrap justify-center">
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
        @click="addMove"
      >
        <TheX />
        <TheCircle />
      </div>
    </div>
  </div>
</template>
