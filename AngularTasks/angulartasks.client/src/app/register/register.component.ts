import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // يجب تصحيح هذا السطر
})
export class RegisterComponent {
  constructor(private _ser: URLService, private _router: Router) { }

  addUserRegester(data: any) {
    const form = new FormData();

    for (let key in data) {
      form.append(key, data[key]);
    }

    this._ser.addUser(form).subscribe(
      () => {
        alert("User added successfully");
        this._router.navigate([""]);
      },
      (error) => {
        // عرض تفاصيل الأخطاء
        console.error('Registration error:', error.error.errors);
        alert('Registration failed: ' + JSON.stringify(error.error.errors));
      }
    );
  }
}
