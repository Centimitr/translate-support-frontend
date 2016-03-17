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
  styleUrls: [],
  template: `

    <h4>Versions</h4>
    <button class="btn btn-secondary">Add Version</button>
    <br>
    alpha.0 18456/45613 45%<br>
    alpha.1 <br>
    alpha.2 <br>
    beta.0 <br>
  `
})

export class VersionComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
