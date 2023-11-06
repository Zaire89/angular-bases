import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'My first APP';
  public counter: number = 5;

  increm(value: number) :void{
    this.counter += value;
  }

  dism(value: number) :void {
    this.counter -= value;
  }

  reset(){
    this.counter = 5;
  }
}
