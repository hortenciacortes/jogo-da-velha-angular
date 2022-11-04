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

  constructor() { }

  ngOnInit(): void {
    console.log(this.players)
  }

}
