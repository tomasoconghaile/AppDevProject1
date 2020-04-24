import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  //service written - api of movie 
  //read api from external http
  GetWeatherData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27');
  }

  //takes users input and gets relevant data to input from source 
  GetSearchData(title:string):Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s='+title);
  }



}
