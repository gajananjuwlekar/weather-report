import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-listing',
  templateUrl: './weather-listing.component.html',
  styleUrls: ['./weather-listing.component.scss']
})
export class WeatherListingComponent implements OnInit {
  @Input() zipCodeArr: any[] = [];
  @Output()
  closeEvent = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.zipCodeArr)
  }

  closeTab(index: any) {
    this.closeEvent.emit(index);
  }

  onClickCard(weatherData: any) {
    console.log(weatherData)
    this.router.navigate(['/forecast', weatherData.zip])
  }

}
