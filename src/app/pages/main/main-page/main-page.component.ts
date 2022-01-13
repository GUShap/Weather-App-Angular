import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from 'src/app/models/forecast';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  forecast$: any
  data: any

  ngOnInit(): void {
    this.data = this.weatherService.loadWeatherData('tel-aviv')
    this.forecast$ = this.weatherService.forecast$.source['_value']
  }

}
