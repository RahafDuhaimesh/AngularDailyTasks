import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getSubService(this.parameter)
  }

  constructor(private _ser: URLService, private _route: ActivatedRoute) {

  }

  parameter: any
  arrayOfData: any
  getSubService(id: number) {
    this._ser.GetSubServicesbyServiceID(id).subscribe((data) => {
      this.arrayOfData = data
    })
  }
}
