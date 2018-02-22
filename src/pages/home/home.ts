
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CityInfo } from '../../components/city-info';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  cityListObj: CityInfo[];
  storedLocations: CityInfo[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {

    let currentLocation = {
      city: "Lenexa",
      state: "KS"
    }

    let currentCityInfo: CityInfo[] = [currentLocation];
    this.cityListObj = currentCityInfo;

    this.storage.get('location').then((val) => {
      if (val != null) {

        this.storedLocations = JSON.parse(val);

        console.log("storedLocations", this.storedLocations);
        this.storedLocations.forEach(function (item) {

          console.log("item", item);

          let locationVar = {
            city: item.city,
            state: item.state
          }

          //console.log("citylist", this.cityListObj);
          //this.cityListObj.push(locationVar);

        });
      }
      else {
        console.log('error in reading stored cities');
      }
    });


  }

  ionViewWillEnter() {

  }

  itemSelected(item) {

  }

  addNewItem() {

    this.navCtrl.push(SettingsPage);
  }
}
