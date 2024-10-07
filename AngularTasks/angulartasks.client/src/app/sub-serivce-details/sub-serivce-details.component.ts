import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-serivce-details',
  templateUrl: './sub-serivce-details.component.html',
  styleUrl: './sub-serivce-details.component.css'
})
export class SubSerivceDetailsComponent {
  parameter: any
  serviceDetails : any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getDetails(this.parameter);
  }

  constructor(private _ser: URLService, private _route: ActivatedRoute) { }

  getDetails(id: number) {
    this._ser.GetSubServiceDetails(id).subscribe((data) => {
      this.serviceDetails = data
    })
  }

}
