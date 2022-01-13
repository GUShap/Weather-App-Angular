import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() forecastData: any

  date: Date

  dayIconNum: number
  nightIconNum: number
  
  dayDescription: string
  nightDescription: string
  temp:any={
    min:'',
    max:''
  }

  constructor() { }
  ngOnInit(): void {
    this.dayIconNum = this.forecastData.Day.Icon
    this.nightIconNum = this.forecastData.Night.Icon
    this.date = this.forecastData.Date
    this.dayDescription = this.forecastData.Day.IconPhrase
    this.nightDescription = this.forecastData.Night.IconPhrase
    this.temp.min = this.forecastData.Temperature.Minimum.Value
    this.temp.max = this.forecastData.Temperature.Maximum.Value

    console.log(this.dayDescription);

  }

}
