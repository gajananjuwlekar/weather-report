import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';

const routes: Routes = [
  { path: '', component: WeatherHomeComponent },
  { path: 'forecast/:id', component: WeatherDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
