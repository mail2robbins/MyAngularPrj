


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { CityInfo } from '../../components/city-info';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  state: string;
  cityInfo: CityInfo;

  currentLocation: any;
  currentAddress: any;
  currentCity: string;
  currentState: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {

  }



  ionViewWillEnter() {
    
  }

  saveForm() {


    let location = [{
      city: this.city,
      state: this.state
    },
    {
      city: this.city + "1",
      state: this.state + "1"
    }]

    console.log(location);
    this.storage.set('location', JSON.stringify(location));

    this.navCtrl.pop();
  }



}
