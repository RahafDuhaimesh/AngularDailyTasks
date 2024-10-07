import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Keep FormsModule import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubSerivceDetailsComponent } from './sub-serivce-details/sub-serivce-details.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpdateServiceComponent } from './admin/update-service/update-service.component';
import { AddServicesComponent } from './admin/add-services/add-services.component';
import { ServicesAdminComponent } from './admin/services-admin/services-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsRAHAFComponent } from './cart-items-rahaf/cart-items-rahaf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    SubServicesComponent,
    LoginComponent,
    RegisterComponent,
    SubSerivceDetailsComponent,
    SubscriptionComponent,
    DashboardComponent,
    UpdateServiceComponent,
    AddServicesComponent,
    ServicesAdminComponent,
    ProfileComponent,
    ProductComponent,
    CartComponent,
    CartItemsRAHAFComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Ensure FormsModule is imported
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: "full" },
      { path: 'Services', component: ServicesComponent },
      { path: 'subServices/:id', component: SubServicesComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: "subservicedetails/:id", component: SubSerivceDetailsComponent },
      { path: "subscription/:id", component: SubscriptionComponent },
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "", component: ServicesAdminComponent },
          { path: "servicesAdmin", component: ServicesAdminComponent },
          { path: "addService", component: AddServicesComponent },
          { path: "updateService/:id", component: UpdateServiceComponent },

        ]
      },
      { path: "Profile", component: ProfileComponent },
      { path: "products", component: ProductComponent },
      { path: "cartITEMS", component: CartItemsRAHAFComponent },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
