/**
 * @Author: VELLA CYRIL <nonym0usse>
 * @Date:   2018-03-20T15:47:09+01:00
 * @Email:  contact@vella.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-03-20T17:41:27+01:00
 */


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Savon } from '../../model/savon';
import { SavonProvider } from '../../providers/savon/savon';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mysavon : any;

  constructor(public navCtrl: NavController, private savon: SavonProvider, private barcodeScanner: BarcodeScanner) {
    this.codebar();
  }

  getProduit(barcodeData)
  {
    this.savon.getById(barcodeData).then((item: any) => {
      this.mysavon = item;
    });
  }

  codebar()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      this.getProduit(barcodeData);
      this.navCtrl.push(ListPage, this.mysavon);
    }).catch(err => {
        console.log('Error', err);
    });
  }
}
