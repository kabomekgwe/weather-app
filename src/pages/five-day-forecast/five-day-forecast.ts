import { WeatherProvider } from './../../providers/weather/weather';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiveDayForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-five-day-forecast',
	templateUrl: 'five-day-forecast.html',
})
export class FiveDayForecastPage implements OnInit {
	weather: any[] = [];
  cityName;
  show;

	constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProdiver: WeatherProvider) {
	}

	ionViewDidLoad() {
		console.log(this.weather);

  }
  display() {
     this.show != this.show;
  }

	ngOnInit(): void {
		this.weatherProdiver.getFiveDayForecast('Johanessburg')
			.subscribe((res) => {
				const data = res['data'];
				this.cityName  = res['city_name'];


				// this.weather.push(display);
				  for (let index = 0; index < data.length; index++) {
					  const element = data[index];
					  const display = {
						  icon: element.weather.description,
						  description: element.weather.description,
						  temp: element.temp,
						  vis: element.vis,
						  clouds: element.clouds,
						  min_temp: element.min_temp,
              max_temp: element.max_temp,
              date: element.valid_date,
						  uv: element.uv,
						  windDir: element.wind_cdir_full
					  }
					  this.weather.push(display);
				  }

					  console.log(this.weather);


			})

	}


}
