import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

@RouteConfig([{
  path: '/heroes',
  name: 'Heroes',
  component: HeroesComponent
}])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes'
}
