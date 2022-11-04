import { Component, Input, OnInit } from '@angular/core';
import { CaractersService } from '../caracters.service';
import { Players } from '../players';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  players: Players  = {
    player1: {name: '', urlImage: undefined, symbol: '', points: 0},
    player2: {name: '', urlImage: undefined, symbol: '', points: 0},
    currentPlayer: {name: '', urlImage: undefined, symbol: '', points: 0}
  }

  handleJogadores(player: string){
    if(player === ''){
      this.handleError('Preencha o campo como o nome do jogador');
    } else {
      this.CaractersService.getCaracters(player).subscribe(caracters => {
        if (caracters.data.total > 0) {
          const thumbnail = `${caracters.data.results[0].thumbnail.path}.${caracters.data.results[0].thumbnail.extension}`;
          this.players.player1.urlImage === undefined ? this.players.player1.urlImage = thumbnail : this.players.player2.urlImage = thumbnail;
          if(this.players.player1.urlImage && this.players.player2.urlImage) this.handleCurrentPlayer();
        } else {
          this.handleError(`O personagem "${player}" não existe, verifique o nome e tente novamente`)
        }
      })}
  }

  handleError(message: string) {
    const error = document.querySelector('span.invalid-message') as Element;
    error.classList.add('visible')
    error.innerHTML = message;
  }

  handleCurrentPlayer() {
    const random = Math.floor(Math.random() * 2) + 1;
    this.players.player1.symbol = random === 1 ? 'X' : 'O';
    this.players.player2.symbol = random === 2 ? 'X' : 'O';
    this.players.currentPlayer = random === 1 ? this.players.player1 : this.players.player2;
  }

  handleNewPlay() {
    const blocos = Array.from(document.querySelectorAll('.bloco')) as HTMLButtonElement[];
    blocos.forEach(bloco => {
      bloco.innerHTML = '';
      bloco.disabled = false;
      const message = document.querySelector('.message') as HTMLElement;
      message.innerHTML = '';
    });
    this.handleCurrentPlayer();
  }

  constructor(private CaractersService: CaractersService) { }

  ngOnInit(): void { }

}
