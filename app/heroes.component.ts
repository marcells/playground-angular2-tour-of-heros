import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  constructor(private _heroService: HeroService) {
  }

  getHeroes() {
    this._heroService.getHeroes().then(heros => this.heroes = heros);
  }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
