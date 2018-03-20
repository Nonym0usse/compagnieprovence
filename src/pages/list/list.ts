/**
 * @Author: VELLA CYRIL <nonym0usse>
 * @Date:   2018-03-15T16:39:00+01:00
 * @Email:  contact@vella.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-03-20T17:41:29+01:00
 */



import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  savons: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.savons = navParams.get('mysavon');
  }
}
