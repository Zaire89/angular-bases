import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent {

  @Output() //decorador
  public onNewChara: EventEmitter<Character> = new EventEmitter();  // objeto d tipo evento de out, para emitir el objeto

  public character: Character = {
  name: '',
  power: 0
  };

  emitChara():void{
  console.log(this.character);

  if (this.character.name.length === 0) return;

  this.onNewChara.emit(this.character);

  /* this.character.name = '';
  this.character.power = 0; */

  //forma más eficiente
  this.character = {name: '', power: 0};

  }
}
