/**
* @Author: VELLA CYRIL <nonym0usse>
* @Date:   2018-03-20T16:36:01+01:00
* @Email:  contact@vella.fr
* @Last modified by:   nonym0usse
* @Last modified time: 2018-03-20T17:18:22+01:00
*/



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Savon } from '../../model/savon';
import { NavController } from 'ionic-angular';

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

  private readonly url = "http://172.20.10.4:3000";

  getById(id: string){
    let rt: Array<Savon> = new Array<Savon>();
    return new Promise<Array<Savon>>(
      resolve => {
        this.http.get(this.url).subscribe((data:Array<any>) => {
          for(let i=0; i<data.length; i++){
            if(data[i].codeBarre == id)
            {
              rt.push(new Savon(data[i]['id'], data['nom'], data[i]['categorie'], data[i]['image'], data[i]['format'], data[i]['prix'], data[i]['codeBarre'], data[i]['senteur']))
              resolve(rt);
            }
          }
        });
      });
    }
  }
