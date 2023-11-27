import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import dbzService from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page', // generalmn empiezan con: app-
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor(public dbzService: dbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDelCharac( id: string):void{
    this.dbzService.onDelId(id);
  }

  onNewCharacter(character: Character):void {
    this.dbzService.onNewChara(character);
  }
}
