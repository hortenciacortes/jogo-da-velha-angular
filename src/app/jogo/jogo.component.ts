import { Component, Input, OnInit } from '@angular/core';
import { Players } from '../players';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {
  @Input() players: Players = {
    player1: {name: '', urlImage: undefined, symbol: '', points: 0},
    player2: {name: '', urlImage: undefined, symbol: '', points: 0},
    currentPlayer: {name: '', urlImage: undefined, symbol: '', points: 0}
  };

  private currentPlayer() {
    const random = Math.floor(Math.random() * 2) + 1;
    this.players.player1.symbol = random === 1 ? 'X' : 'O';
    this.players.player2.symbol = random === 2 ? 'X' : 'O';
    this.players.currentPlayer = random === 1 ? this.players.player1 : this.players.player2;
    return random
  }

  public handleNewPlay() {
    const blocos = Array.from(document.querySelectorAll('.bloco')) as HTMLButtonElement[];
    blocos.forEach(bloco => {
      bloco.innerHTML = '';
      bloco.disabled = false;
      const message = document.querySelector('.message') as HTMLElement;
      message.innerHTML = '';
    });
    this.currentPlayer();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
