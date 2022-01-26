import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }


  getZipCodeData(id: string, countryCode: string): Observable<any> {
    return this.httpClient.get(`${environment.microserviceURL}zip=${id},${countryCode}&appid=5a4b2d457ecbef9eb2a71e480b947604`)
  }

  getFiveDaysData(id: string, countryCode: string): Observable<any> {
    return this.httpClient.get(`${environment.nextfivedaysURL}zip=${id},${countryCode}&appid=5a4b2d457ecbef9eb2a71e480b947604`)
  }
}
