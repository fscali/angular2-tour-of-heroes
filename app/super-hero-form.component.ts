import { Component, OnInit } from '@angular/core';

import { SuperHero } from './super-hero';

import { Hero } from './Hero';
import { HeroService } from './hero.service'


@Component({
  moduleId: module.id,
  templateUrl: 'super-hero-form.component.html',
  selector: 'super-hero-form',
})
export class SuperHeroFormComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  private superHero: SuperHero;
  private heroes: Hero[];
  submitted = false;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  //heroes: Hero[] = [];
   // = [{id:1, name: 'Ciccio'}, {id:2, name:'Ceccio'}];

  ngOnInit(): void {
  //  this.heroService.getHeroes()
  //    .then(heroes => this.heroes = heroes);
    this.heroes = [{id:1, name: 'Ciccio'}, {id:2, name:'Ceccio'}];
    this.superHero = new SuperHero(1, "Super Hero Name", this.heroes[0], this.heroes[1], this.powers[0]);

  }

  onSubmit(): void {
    console.log("you pressed submit");
    this.submitted = true;
  }
  edit(): void {
    this.submitted = false;
  }

  get diagnostic() { return JSON.stringify(this.superHero); }

}
