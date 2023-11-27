import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() //recibe property desde el padre
  public characterList: Character[] = [];

  @Output() //envia la property
  public onDelId: EventEmitter<string> = new EventEmitter();

  onDelet(id?: string):void{
    if (!id) return;
    console.log({id});

    this.onDelId.emit(id);
  }
}
