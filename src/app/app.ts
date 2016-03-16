/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';
import {DiffService} from "./diff.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS,DiffService ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  //styles: [`
  //  nav ul {
  //    display: inline;
  //    list-style-type: none;
  //    margin: 0;
  //    padding: 0;
  //    width: 60px;
  //  }
  //  nav li {
  //    display: inline;
  //  }
  //  nav li.active {
  //    background-color: lightgray;
  //  }
  //`],
  styleUrls:['diff.css'],
  template: `<header>
  <nav class="navbar navbar-light bg-faded">
    <div class="nav navbar-nav container">
      <a class="nav-item nav-link" [routerLink]=" ['About'] ">About</a>
      <a class="nav-item nav-link" [routerLink]=" ['Index'] ">Index</a>
      <a class="nav-item nav-link" [routerLink]=" ['Home'] ">Home</a>
    </div>
  </nav>
</header>

<main>
  <br><br>
  <section class="container">
    <h4>Init</h4>
    <button class="btn btn-secondary">Set source lang</button>
    <button class="btn btn-secondary">Set target lang</button>
    <hr>
    <h4>Versions</h4>
    <button class="btn btn-secondary">Add Version</button>
    <br>
    alpha.0 18456/45613 45%<br>
    alpha.1 <br>
    alpha.2 <br>
    beta.0 <br>
    <hr>
    <h4>Watch list</h4>
    <button class="btn btn-secondary">change base version</button>
    <button class="btn btn-secondary">Init Watch</button>
    <button class="btn btn-secondary">Init translate</button>
    <button class="btn btn-secondary">Add Watch</button>
    <br>
    select version <br>
    -blabla <br>
    ---blabla 12345/4567 30% complete<br>
    <hr>
    <h4>Comparison</h4>
    <div>README.md</div>
    <div>compare: 151+ 100-</div>
    <div>progress: 123/251</div>
    <section>
      <div class="row" *ngFor="#l of diff">
        <div class="order">{{l.isAdded?'':l.oldOrder}}</div>
        <div class="order">{{l.isRemoved?'':l.newOrder}}</div>
        <div class="line"
             [class.unmodified]="l.isUnmodified"
             [class.added]="l.isAdded"
             [class.removed]="l.isRemoved">
          {{l.text?l.text:'&nbsp;'}}
        </div>
      </div>
    </section>
    <br>
    <hr>
  </section>
  <router-outlet></router-outlet>
</main>

<footer>
</footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App implements OnInit{
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  constructor(private _diffService:DiffService) {}


  ngOnInit(){
    this.getDiff();
  }

  diff=[];

  getDiff(){
    this._diffService.getDiff('beta.1','beta.0','1.txt')
      .subscribe(
        diff  => this.diff = diff
      );
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
