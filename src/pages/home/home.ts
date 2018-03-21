/**
* @Author: VELLA CYRIL <nonym0usse>
* @Date:   2018-03-20T15:47:09+01:00
* @Email:  contact@vella.fr
* @Last modified by:   nonym0usse
* @Last modified time: 2018-03-20T20:21:28+01:00
*/

import { ListPage } from '../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Savon } from '../../model/savon';
import { SavonProvider } from '../../providers/savon/savon';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mysavon : any;
  options : BarcodeScannerOptions;
  scannedData: any = {};

  constructor(public navCtrl: NavController, private savon: SavonProvider, private barcodeScanner: BarcodeScanner) {
  }

  getProduit(barcodeData)
  {
    this.savon.getById(barcodeData).then((items: Array<any>) => {
      this.mysavon = items;
      this.navCtrl.push(ListPage, {"sav" : this.mysavon});
    });
  }

  codebar()
  {
    this.options = {
      prompt: 'Scannez un code bar'
    };

    this.barcodeScanner.scan(this.options).then((encodedData) => {
      this.scannedData = encodedData;

      this.getProduit(this.scannedData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
