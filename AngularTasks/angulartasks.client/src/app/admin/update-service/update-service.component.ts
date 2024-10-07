import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent {

  imageFile: any
  changeImage(event: any) {

    this.imageFile = event.target.files[0]

  }

  ServiceId: any;
  ngOnInit() {
    this.ServiceId = this._route.snapshot.paramMap.get("id");
  }

  constructor(private servicesURLService: URLService, private _route: ActivatedRoute, private _router: Router) { }



  updateServiceAdmin(data: any) {
    var formdata = new FormData();


    for (let item in data) {
      formdata.append(item, data[item])
    }

    formdata.append("ServiceImage", this.imageFile)

    this.servicesURLService.UpdateService(this.ServiceId, formdata).subscribe((data) => {
      alert("Service Updated Successfully !")
      this._router.navigate(["/dashboard"])
    });
  }
}
