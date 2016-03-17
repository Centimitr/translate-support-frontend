/**
 * Created by Centimitr on 2016/3/17.
 */

import {Component, OnInit} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {DiffComponent} from "./diff.component";
import {DiffService} from "./diff.service";
import {WatchService} from "./watch.service";

@Component({
  selector: 'watch',
  providers: [WatchService, DiffService],
  directives: [DiffComponent],
  pipes: [],
  styleUrls: ['command-list.css'],
  template: `<section class="col-md-3" style="padding-right: 18px;border-right: 2px solid #eeeeee;">
  <h4>Watch list</h4>
  <ul class="command-list">
  <li><a>Set Base version</a></li>
  <li><a>Init watch</a></li>
  <li><a>Init translate</a></li>
  <li><a>Add watch</a></li>
  </ul>
  <div style="margin-top: 8px">
  <ul class="command-list">
  <!--<li *ngFor="#w of watches"><a [style.color]="'black'">{{w.name}}</a><span>{{w.progress}}</span></li>-->
  <li *ngFor="#w of watches"><a [style.color]="'#666'" [style.font-size]="'15px'">{{w}}</a></li>
  </ul>
  </div>
  <div style="position: fixed;bottom: 18px;cursor: pointer;color: #0275de;">
  Back to Top
  </div>
</section>
<diff class="col-md-9"></diff>`
})

export class WatchComponent implements OnInit {
  constructor(private _watchService:WatchService) {}

  version='beta.1';
  watches=['diff/diff.go','diff/result.go','support/config.go','support/diff.go','support/serve.go','support/watch.go','support/version.go','main.go'];

  ngOnInit() {
    //this.watches = this.getWatches();
  }

  getWatches(){
    this._watchService.getWatches(this.version)
      .subscribe(
        watches => this.watches = watches
      );
  }
}
