/**
 * Created by Centimitr on 2016/3/15.
 */

import {Injectable} from 'angular2/core';
import {Http,Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class DiffService{
  constructor(private http:Http){}
  private _url = 'http://localhost:4567/api/versions/v/compare/';

  getDiff(version:string,oldVersion:string,filename:string){
    return this.http.get(this._url,options)
    .map(res=> res.json().data);
  }
}
