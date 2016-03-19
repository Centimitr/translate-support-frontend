/**
 * Created by Centimitr on 2016/3/17.
 */

import {Component, OnInit} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';


@Component({
  selector: 'version',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: ['command-list.css', 'sidebar.css'],
  template: `<section class="col-md-3">
  <!--<h4>Watch list</h4>-->
  <div class="sidebar-group" style="margin-top: 0">
    <div class="sidebar-title">Actions</div>
    <ul class="command-list">
      <li><a>Add version</a></li>
      <li><a>Remove version</a></li>
      <li><a>Set base version</a></li>
      <li><a>Init watch</a></li>
      <li><a>Init translate</a></li>
    </ul>
  </div>
  <div class="sidebar-group">
    <div class="sidebar-title">Versions</div>
    <ul class="command-list">
      <!--<li *ngFor="#w of watches"><a [style.color]="'black'">{{w.name}}</a><span>{{w.progress}}</span></li>-->
      <li *ngFor="#w of watches"><a [style.color]="'#666'" [style.font-size]="'15px'">{{w}}</a></li>
    </ul>
  </div>
  <div style="position: fixed;bottom: 12px;cursor: pointer;color: #0275de;">
    Back to Top
  </div>
</section>
<section class="col-md-9"></section>
  `
})
export class VersionComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
