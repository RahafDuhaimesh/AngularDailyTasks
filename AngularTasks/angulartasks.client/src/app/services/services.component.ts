import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ngOnInit() {
    this.getAllServices()
  }

  constructor(private _ser: URLService) { }

  arrayOfData: any

  getAllServices() {
    debugger
    this._ser.GetAllServices().subscribe((data) => {
      this.arrayOfData = data
    } )
  }
}
