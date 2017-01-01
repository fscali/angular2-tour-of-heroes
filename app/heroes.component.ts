import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Logger } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']

})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router, private logger: Logger) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onClick(hero: Hero): void {
    this.selectedHero = hero;

    //for testing dependency injection only
    this.logger.dump();

  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then( hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
        .then(() => {
          this.heroes =  this.heroes.filter( h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  /*hero: Hero = {
    id: 1,
    name: "Windstorm"
  }*/

 }
