import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() {

  }

  rollDice(numberOfDice: number, typeOfDice: number) {
    let result = 0;
    console.log('Rolling ' + numberOfDice + 'd' + typeOfDice);
    for (let i = 0; i < numberOfDice; i++) {
      const roll: number = Math.floor(Math.random() * typeOfDice) + 1;
      result += roll;
      console.log('Rolled a ' + roll);
    }
    console.log('Total of dice rolls is a ' + result);
    return result;
  }
}
