import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const winningMoves = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

export const useGameStore = defineStore('game', () => {
  const players = reactive<Players>({ x: { win: 0, moves: [] }, o: { win: 0, moves: [] } })
  const currentPlayer = ref<'o' | 'x'>('x')
  const usedBlock = ref(0)
  const gameStatus = ref<GameStatus>({ status: 'on-going' })

  const checkBoard = () => {
    let winner: 'x' | 'o' | null = null
    let winningMove: number[] = []

    // Check if the player move is a winning move or not
    winningMoves.forEach((group) => {
      const count = {
        x: 0,
        o: 0
      }
      group.forEach((i) => {
        players.x.moves.includes(i) && count.x++
        players.o.moves.includes(i) && count.o++
      })
      if (count.x < 3 && count.o < 3) return
      winner = count.x === 3 ? 'x' : 'o'
      winningMove = group
    })

    if (winner) {
      winningMove.forEach((block) => {
        const el = document.querySelector(`[data-block='${block}']`) as HTMLElement
        el.classList.add('bg-rose-500')
      })

      winner === 'x' ? players.x.win++ : players.o.win++

      gameStatus.value = {
        status: 'win',
        winner,
        winningMove
      }
      return
    }

    if (!winner && usedBlock.value < 9) {
      gameStatus.value = { status: 'on-going' }
      return
    } else {
      gameStatus.value = { status: 'draw' }
      return
    }
  }

  const placeMove = (e: MouseEvent) => {
    if (gameStatus.value.status !== 'on-going') return

    const target = e.target as HTMLElement
    if (target.dataset.player) return

    const block = Number(target.dataset.block)
    if (isNaN(block)) return

    target.dataset.player = '' + currentPlayer.value

    if (currentPlayer.value === 'x') {
      players.x.moves.push(block)
      currentPlayer.value = 'o'
    } else {
      players.o.moves.push(block)
      currentPlayer.value = 'x'
    }

    usedBlock.value++
    checkBoard()
  }

  const resetGame = () => {
    players.x.moves = []
    players.o.moves = []
    currentPlayer.value = 'x'
    gameStatus.value = { status: 'on-going' }
    usedBlock.value = 0

    // reset board
    const blocks = document.querySelectorAll('[data-player]')
    blocks.forEach((block) => {
      block.removeAttribute('data-player')
    })
  }

  return { currentPlayer, players, gameStatus, placeMove, resetGame }
})

interface PlayerStatus {
  win: number
  moves: number[]
}

interface Players {
  x: PlayerStatus
  o: PlayerStatus
}

interface GameStatus {
  status: 'draw' | 'on-going' | 'win'
  winner?: 'x' | 'o'
  winningMove?: number[]
}
