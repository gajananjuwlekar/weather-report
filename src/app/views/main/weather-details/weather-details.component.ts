import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  weatherDetailsObj: any = {};
  weatherDetailsList: any[] = [];
  weatherList: any[] = [];
  constructor(private weatherService: WeatherService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let zip = this.route.snapshot.paramMap.get('id')
    this.getFiveDaysData(zip)
  }

  getFiveDaysData(zip: any) {
    this.weatherService.getFiveDaysData(zip, 'us').subscribe((data) => {
      this.weatherDetailsObj = data.city
      this.weatherDetailsList = data.list
      this.weatherDetailsList.map((data) => {
        let nDate = new Date(data.dt_txt);
        let weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(nDate);
        let date = data.dt_txt.split(' ')
        data['date'] = date[0]
        data['day'] = weekday
      })
      this.weatherList = this.weatherDetailsList.filter((value, index, arr) => arr.findIndex(data => (data.date === value.date)) === index)
      console.log(this.weatherList)
    }, (error) => {
      window.alert(error.error.message);
    })
  }

  goBack(){
    this.router.navigate([''])
  }
}
