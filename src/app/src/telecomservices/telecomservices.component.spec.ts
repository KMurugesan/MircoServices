/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelecomservicesComponent } from './telecomservices.component';

describe('TelecomservicesComponent', () => {
  let component: TelecomservicesComponent;
  let fixture: ComponentFixture<TelecomservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
