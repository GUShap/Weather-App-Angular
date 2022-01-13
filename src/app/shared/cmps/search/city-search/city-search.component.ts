import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

 cityName:string

  ngOnInit(): void {
  }

  onSetCityName(){

  }
}
