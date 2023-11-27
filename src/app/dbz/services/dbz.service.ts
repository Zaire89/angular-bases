import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})

export default class dbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'ZZZZ',
    power: 68
  },{
    id: uuid(),
    name: 'Lha',
    power: 62
  }];



  onNewChara(character: Character): void{
      //console.log('MainPage');
      //console.log(character);

      const newCharacter: Character = { id: uuid(), ...character}
      //algunos métodos
      this.characters.push(newCharacter); // añade al final del listado

      //this.characters.push(character); // añade al final del listado
      //this.characters.unshift() // añade al inicio de la lista
  }

  onDelId(id: string):void{
    //this.characters.splice(index, 1); // remueve el elemento del indice, cantidad q borra
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
