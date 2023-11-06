import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Spider';
  public age: number = 37;

  // propiedad get q devuelve métodos toUpper
  get capitalizName():string{
    return this.name.toUpperCase();
  }

  getHeroDescript():string{
    return `${ this.name } - ${this.age}`;
  }

  changHero():void{
    this.name = 'OtroSuperHero';
  }

  changAge(){
    this.age += 2;
  }
}
