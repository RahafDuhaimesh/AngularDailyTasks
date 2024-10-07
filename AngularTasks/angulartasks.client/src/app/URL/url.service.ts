import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http: HttpClient) { }

  staticData = "http://localhost:5008/api"

  email: BehaviorSubject<string> = new BehaviorSubject<string>("");

  emailAddress = this.email.asObservable();


  GetAllServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/GetAllServices`)
  }

  GetSubServicesbyServiceID(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/GetSubServicesbyServiceID?id=${id}`)
  }

  GetSubServicesbyID(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/GetSubServicesbyID?id=${id}`)
  }

  GetSubServiceDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/GetSubServicesDetails/${id}`)
  }

  GetAllSubscriptions(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscribtion`)
  }

  AddUserSubscription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubscription/AddUserSubscription`, data)
  }

  addUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users`, data)
  }

  UserLogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users/login`, data)
  }
  AddService(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Services/AddService`, data)
  }

  UpdateService(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.staticData}/Services/UpdateServicesDetails/${id}`, data)
  }

  GetAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Products/GetAllProducts`)
  }

  cartItem: any = [];
  cartItemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem) // اسناد قيم البرودكتس للكارت ايتم
  cartItemObser = this.cartItemSubject.asObservable(); // to take the data from it

  addToCart(data: any) {
    var record = this.cartItem.find((x: any) => x.productId == data.productId)
    if (record) {
      alert("Product Already exists!")
    }
    else {
      this.cartItem.push(data);
      this.cartItemSubject.next(this.cartItem);
    }
  }


  increaseQuantity(id : any) {
    var product = this.cartItem.find( (x:any) => x.productId == id)
    if (product) {
     product.quantity += 1;
      this.cartItemSubject.next(this.cartItem);
    }

  }


  decreaseQuantity(id: any) {
    var product = this.cartItem.find((x: any) => x.productId == id)
    if (product) {
      product.quantity -= 1;
      this.cartItemSubject.next(this.cartItem);
    }

  }
}
