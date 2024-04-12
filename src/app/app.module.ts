import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/card/card.component';
import { BtnBackComponent } from './components/btn-back/btn-back.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway/payment-gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GalleryComponent,
    CardComponent,
    BtnBackComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
