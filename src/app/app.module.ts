import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { BlocoComponent } from './bloco/bloco.component';
import { FormComponent } from './form/form.component';
import { GameScoreComponent } from './game-score/game-score.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    BlocoComponent,
    FormComponent,
    GameScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
