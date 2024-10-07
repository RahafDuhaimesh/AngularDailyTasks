import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  arrayOfData: any
  subServiceId: any
  ngOnInit() {
    this.subServiceId = this._route.snapshot.paramMap.get("id")
    this.getSubscriptions()
  }

  constructor(private _ser: URLService, private _route: ActivatedRoute) { }

  getSubscriptions() {
    debugger
    this._ser.GetAllSubscriptions().subscribe((data) => {
      this.arrayOfData = data
      console.log(data)
    })
  }
  subscriptionData =
    {
      "userId": 42,
      "subServiceId": 2,
      "scriptionId": 2
    }

  AddSubscription(id: number) {
    this.subscriptionData.scriptionId = id;
    this.subscriptionData.subServiceId = this.subServiceId;

    this._ser.AddUserSubscription(this.subscriptionData).subscribe(() => {
      alert("Subscribe Successfuly!")
    })
  }
}
