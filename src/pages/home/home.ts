/**
 * @Author: VELLA CYRIL <nonym0usse>
 * @Date:   2018-03-20T15:47:09+01:00
 * @Email:  contact@vella.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-03-20T16:46:51+01:00
 */


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Savon } from '../../model/savon';
import { SavonProvider } from '../../providers/savon/savon';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private savon: SavonProvider, private barcodeScanner: BarcodeScanner) {
    this.codebar();
  }

  codebar()
  {
    this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
  }
}
