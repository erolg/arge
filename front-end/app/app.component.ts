import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'arge',
  templateUrl: 'app/app.html'
})

export class AppComponent {}
