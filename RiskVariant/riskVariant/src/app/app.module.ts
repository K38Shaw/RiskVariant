import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
