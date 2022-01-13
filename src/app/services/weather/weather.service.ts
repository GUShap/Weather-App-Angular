import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils/utils.service';
import { BehaviorSubject } from 'rxjs';
import { Forecast } from 'src/app/models/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _apiKey = 'WO5Xt7Qvco7D4LI4oXMHXwbkc5gInXm4'

  private _forecast$ = new BehaviorSubject<Forecast[]>([])
  public forecast$ = this._forecast$.asObservable()

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  public loadWeatherData(location: string = 'tel-aviv') {
    let data = this.utils.load(location)
    if (!data) {
      var cityCode: number | string;
      this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this._apiKey}&q=${location}`)
        .subscribe((res: object) => {
          cityCode = res[0].Key
          this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${this._apiKey}&metric=true`)
            .subscribe((res: Object) => {
              console.log(res);
              data = res['DailyForecasts']
              this.utils.store(location, data)
              this._forecast$.next(data)
            })
        })
    }
    else this._forecast$.next(data)

    return {
      cityName: location,
      forecast: data
    }
  }


}
