import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _ser: URLService, private _router: Router) { }

  checkIfUserLogin(data: any) {
    var formdata = new FormData();
    for (let item in data) {
      formdata.append(item, data[item])
    }

    this._ser.UserLogin(formdata).subscribe((response: any) => {
      console.log(response)
      this._ser['email'].next(response)
      if (response.email == "admin@gmail.com") {
        alert("Welcome!")
        this._router.navigate(['/dashboard']);

      } else {
        this._router.navigate(['/']);
      }
    }, (error) => {
      alert(error.error)
    })
  }


 
}
