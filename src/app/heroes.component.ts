import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from "./hero.service";
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getHeroes();
  };
  title = 'Tours of heroes';
  hero: Hero = {
    id: 1,
    name: 'Hurcules'
  };
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  constructor(
    private router: Router,
    private heroService: HeroService) {
    //console.log('hero Service Constructor');
  }

  getHeroes(): void {
    //console.log('get Heroes method');
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    //console.log('go to detail method');
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}