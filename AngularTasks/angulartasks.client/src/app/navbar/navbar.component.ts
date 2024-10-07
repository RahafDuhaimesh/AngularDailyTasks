import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private _ser: URLService, private _router: Router) { }

  email = "";

  ngOnInit() {
    this._ser.emailAddress.subscribe((data) =>
      this.email = data
    )
  }

  logout() {
    this.email = "";
    //this._router.navigate(['/'])
  }

}
