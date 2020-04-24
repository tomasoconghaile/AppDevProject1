import { Component, OnInit } from '@angular/core';
//importing service for movie api
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  MoviesData:any=[];
  searchTitle:string = "";

  constructor(private moviesService:WeatherService) {

   }

  ngOnInit() {
    this.moviesService.GetWeatherData().subscribe(
      (data)=>{
        this.MoviesData = data.Search;
      }
    );
  }

  //searches for title of the movie
  searchFor(){
    console.log(this.searchTitle);
    //makes it available using angular framework and we get access to it 
    this.moviesService.GetSearchData(this.searchTitle).subscribe(
      (data)=>{
        this.MoviesData = data.Search;
      }
    );
  }


}


