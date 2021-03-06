import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { RequestOptions, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';

export class CustomRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
}

@NgModule({
  imports:      [ BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: '',       component: MainpageComponent },
      { path: 'main',   component: MainpageComponent },
      { path: 'signup', component: SignupComponent }
    ]) 
  ],
  declarations: [ AppComponent, SignupComponent, MainpageComponent , NavbarComponent],
  providers: [{provide: RequestOptions, useClass: CustomRequestOptions}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }