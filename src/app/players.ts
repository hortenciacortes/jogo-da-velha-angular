export interface Player {
  name: string, urlImage?: string, symbol: string, points: number
}

export interface Players {
  player1: Player
  player2: Player
  currentPlayer: Player
}

