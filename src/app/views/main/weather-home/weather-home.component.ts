import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit {
  weatherForm!: FormGroup;
  zipCodeArr: any[] = [];
  weatherInfo: any;
  allZip: any;
  loader: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.createForm();
    this.allZip = localStorage.getItem("zipCode")
    this.zipCodeArr = this.allZip ? JSON.parse(this.allZip) : [];
  }

  getData(zip: string) {
    this.loader = true;
    this.weatherService.getZipCodeData(zip, 'us').subscribe((data) => {
      this.loader = false;
      this.storePincode(data, zip);
    }, (error) => {
      this.loader = false;
      window.alert(error.error.message);
    })
  }

  storePincode(data: any, zip: string) {
    let index = this.zipCodeArr.length === 0 ? 0 : this.zipCodeArr.length
    console.log(this.zipCodeArr, data.name)
    let duplicate = this.zipCodeArr.some(el => el.name === data.name);
    if (duplicate) {
      window.alert('Record Already Present!')
    } else {
      this.zipCodeArr.push(data)
      this.zipCodeArr[index]['zip'] = zip;
    }
    localStorage.setItem('zipCode', JSON.stringify(this.zipCodeArr));
  }


  createForm() {
    this.weatherForm = this.formBuilder.group({
      zipcode: [null]
    });
  }


  onSubmit() {
    let val = this.weatherForm.value.zipcode
    this.getData(val);
    this.weatherForm.reset();
  }

  onClose(event: any) {
    this.zipCodeArr.splice(event, 1)
    localStorage.setItem('zipCode', JSON.stringify(this.zipCodeArr));
  }
}
