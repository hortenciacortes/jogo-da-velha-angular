import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../players';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']
})
export class GameScoreComponent implements OnInit {
  @Input() player: Player = {name: '', urlImage: undefined, symbol: '', points: 0}
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
