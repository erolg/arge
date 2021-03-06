import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { CustomRequestOptions } from './app.module'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, RequestOptions, BaseRequestOptions } from '@angular/http';

describe('App component test module', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ NavbarComponent, AppComponent ],
      providers: [{provide: RequestOptions, useClass: CustomRequestOptions}],
      imports: [ RouterTestingModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );
  
});
