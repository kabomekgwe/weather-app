import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '1de08a0d7b6246abb4bcb1276f4f7199';

  constructor(public http: HttpClient) {}

  getWeather(place) {
    return this.http.get( `https://api.weatherbit.io/v2.0/current?city=${place}&key=${this.apiKey}`)
  }

  getFiveDayForecast(place) {
    return this.http.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${place}&days=5&key=${this.apiKey}`)
  }



}
