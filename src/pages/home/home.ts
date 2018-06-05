import { FortyEightDayPage } from './../forty-eight-day/forty-eight-day';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrentDayPage } from '../current-day/current-day';
import { FiveDayForecastPage } from '../five-day-forecast/five-day-forecast';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  ngOnInit(): void {

  }
    constructor(public navCtrl: NavController) {

    }

    onGoToCurrentWeatherPage() {
      this.navCtrl.push(CurrentDayPage);
    }
    onGoToFortyEightDayPage() {
      this.navCtrl.push(FortyEightDayPage);
    }

    onGoToFiveDayForeCastPage() {
      this.navCtrl.push(FiveDayForecastPage);
    }

}
