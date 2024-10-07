import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLService } from './URL/url.service';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];


  constructor(private http: HttpClient, private _ser: URLService) { }

  email: string = ""

  ngOnInit() {

    this._ser.emailAddress.subscribe((data) =>
      this.email = data)

  }

  title = 'angulartasks.client';
}
