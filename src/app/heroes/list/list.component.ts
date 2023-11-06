import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', 'IronMan', 'SuperGirl']
  public delet?: string;

  removeLast():void {
    this.delet = this.heroName.pop();
  }

}
