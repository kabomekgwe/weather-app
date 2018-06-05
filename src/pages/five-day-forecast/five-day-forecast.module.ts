import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiveDayForecastPage } from './five-day-forecast';

@NgModule({
  declarations: [
    FiveDayForecastPage,
  ],
  imports: [
    IonicPageModule.forChild(FiveDayForecastPage),
  ],
})
export class FiveDayForecastPageModule {}
