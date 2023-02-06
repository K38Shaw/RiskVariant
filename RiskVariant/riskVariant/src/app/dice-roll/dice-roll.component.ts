import { Component, OnInit } from '@angular/core';
import { isAbsolute } from 'path';
import { first } from 'rxjs';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {
  images = ["../../assets/image/dieOne.png","../../assets/image/dieTwo.png", "../../assets/image/dieThree.png", "../../assets/image/dieFour.png", "../../assets/image/dieFive.png", "../../assets/image/dieSix.png"]
  imageOne = document.getElementById("dieOne") as HTMLImageElement;
  imageTwo = document.getElementById("dieTwo") as HTMLImageElement;
  randomIndex = Math.floor(Math.random() * this.images.length);
  dieOne = document.getElementById("dieOne") as HTMLImageElement


  clickMe(){
    let die = document.getElementById("dieOne");
    let dieTwo = document.getElementById("dieTwo");
    die?.classList.toggle("shake");
    dieTwo?.classList.toggle("shake");
     
    setTimeout(() => {
      die?.classList.remove("shake");
      dieTwo?.classList.remove("shake");
      

    }, 1000);
   
    
   
       }
  
    rollDice(){
      let diceOneValue = this.randomIndex + 1;
    let diceTwovalue = this.randomIndex + 1;
    let total = diceOneValue + diceTwovalue;
    return (total)

    }

       
  
  


 
  constructor() { }

 

  ngOnInit(): void {
  }

}
