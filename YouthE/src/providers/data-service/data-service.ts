import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceProvider {
  data: any;

  constructor(public http: Http) {
    this.http = http;
    this.data = null;
  }

  getMyData() {
    return this.http.get('http://demo1548397.mockable.io/getData')
      .toPromise()
      .then(res => res.json());
  }
}
