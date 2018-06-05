
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the CurrentDayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-current-day',
	templateUrl: 'current-day.html',
})
export class CurrentDayPage implements OnInit {
	weather: any = {
		place: '',
		icon: '',
		descrition: '',
		temp: '',
		vis: '',
		clouds: '',
		uv: '',
    windDir: '',
    rh:''
	};

	constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

	}

	ngOnInit() {

		this.weatherProvider.getWeather('Johanessburg')
			.subscribe((res) => {
				const data = res['data'][0];
				this.weather = {
					place: data.city_name,
					icon: data.weather.icon,
					descrition: data.weather.description,
					temp: data.temp,
					vis: data.vis,
					clouds: data.clouds,
					uv: data.uv,
          windDir: data.wind_cdir_full,
          rh: data.rh
				}
				// this.weather = z;
			})
	}

}
