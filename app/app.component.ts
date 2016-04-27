import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private _heroService: HeroService) {
  }

  getHeroes() {
    this._heroService.getHeroes().then(heros => this.heroes = heros);
  }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero[];
  title = 'Tour of Heros';
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
