import { Component, OnInit, Input } from '@angular/core';
import { Players } from '../players';

@Component({
  selector: 'app-bloco',
  templateUrl: './bloco.component.html',
  styleUrls: ['./bloco.component.scss']
})
export class BlocoComponent implements OnInit {

  @Input() border: string = '';
  @Input() line: number = 0;
  @Input() players: Players = {
    player1: {name: '', urlImage: undefined, symbol: '', points: 0},
    player2: {name: '', urlImage: undefined, symbol: '', points: 0},
    currentPlayer: {name: '', urlImage: undefined, symbol: '', points: 0}
  };

  private validCombinations = [
    ['l1c1', 'l1c2', 'l1c3'],
    ['l2c1', 'l2c2', 'l2c3'],
    ['l3c1', 'l3c2', 'l3c3'],
    ['l1c1', 'l2c1', 'l3c1'],
    ['l1c2', 'l2c2', 'l3c2'],
    ['l1c3', 'l2c3', 'l3c3'],
    ['l1c1', 'l2c2', 'l3c3'],
    ['l1c3', 'l2c2', 'l3c1']
  ];

   public handleBloco(event: Event) {
    const element = event.target as HTMLButtonElement;
    if(this.players.currentPlayer.symbol && !element.disabled) {
      element.innerHTML = this.players.currentPlayer.symbol;
      element.disabled = true;
      this.rules();
    }
  }

   private rules() {
    const blocos = Array.from(document.querySelectorAll('.bloco')) as HTMLButtonElement[];
    const blocosPlayer1 = blocos.filter(bloco => bloco.innerHTML === this.players.player1.symbol).map(bloco => bloco.id)
    const blocosPlayer2 = blocos.filter(bloco => bloco.innerHTML === this.players.player2.symbol).map(bloco => bloco.id)

    const filterConbinationPlayer1 = this.result(blocosPlayer1);
    const filterConbinationPlayer2 = this.result(blocosPlayer2);

    if (filterConbinationPlayer1.length > 0 || filterConbinationPlayer2.length > 0) {
      filterConbinationPlayer1.length > 0 ? this.players.player1.points++ : this.players.player2.points++;
      blocos.forEach(bloco => bloco.disabled = true);
      this.theEnd(filterConbinationPlayer1.length > 0 ? this.players.player1.name : this.players.player2.name);
    } else if ((blocosPlayer1.length + blocosPlayer2.length) === 9) {
      this.theEnd('empate');
    }
    else {
      if (this.players.currentPlayer.symbol === this.players.player1.symbol){
        this.players.currentPlayer = this.players.player2
      } else {
        this.players.currentPlayer = this.players.player1
      }
    }
  }

  private result(blocosPlayer: string[]) {
    return this.validCombinations.map(allCombinations => allCombinations.map(combination => blocosPlayer.filter(item => combination === item)))
    .map(combinations => combinations.filter(combination => combination.length === 1)).filter(conbination => conbination.length === 3)

  }

  private theEnd(playerWinner: string) {
    const message = document.querySelector('.message') as HTMLElement
    message.innerHTML = playerWinner !== 'empate' ? `O jogador ${playerWinner} ?? o vencedor` : 'Empate!';

    this.players.currentPlayer = {name: '', urlImage: undefined, symbol: '', points: 0};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
