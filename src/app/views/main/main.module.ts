import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherListingComponent } from './weather-listing/weather-listing.component';


@NgModule({
  declarations: [
    WeatherHomeComponent,
    WeatherDetailsComponent,
    WeatherListingComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: WeatherService }],
})
export class MainModule { }
