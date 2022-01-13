import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  @Output() searchCity = new EventEmitter<string>()

  cityName: string = ""

  ngOnInit(): void {
  }

  onSetCityName() {
    setTimeout(() => {
      this.weatherService.loadWeatherData(this.cityName)
    }, 4000)
  }

  onSetSearch() {
    console.log(this.cityName);
    this.searchCity.emit(this.cityName)
  }
}
