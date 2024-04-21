import { Injectable } from '@angular/core';
import { v4 as uudi } from "uuid";
import { Character } from '../interfaces/chararcter.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  characters: Character[] = [{
    id: uudi(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uudi(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uudi(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uudi(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id: number): void {
  //   this.characters.splice(id, 1);
  // }

  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
