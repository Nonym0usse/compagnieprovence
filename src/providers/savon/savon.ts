/**
* @Author: VELLA CYRIL <nonym0usse>
* @Date:   2018-03-20T16:36:01+01:00
* @Email:  contact@vella.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-03-20T17:04:14+01:00
*/



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Savon } from '../../model/savon';

/*
Generated class for the SavonProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class SavonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SavonProvider Provider');
  }

  private readonly url = "http://localhost:3000/";

  getById(id :number){

    let rtbyid: Savon;
    return new Promise<Savon>(
      resolve => {
        this.http.get(this.url+id).subscribe((data:any) => {
          console.log(data);
          rtbyid = new Savon(data['id'], data['name'], data['desc'], data['picture'], data['price']);
          resolve(rtbyid);
        });
      });

    }
  }
