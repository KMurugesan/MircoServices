/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientDetailsComponent } from './client-details.component';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('All the Client Details should be entered', async(() => {
    component.clientForm.controls['clientName'].setValue('Perficient');
    component.clientForm.controls['companyName'].setValue('Perficient');
    // component.clientForm.controls['email'].setValue('Perficient');
    // component.clientForm.controls['extension'].setValue('Perficient');
    component.clientForm.controls['addressLine1'].setValue('Perficient');
    component.clientForm.controls['addressLine2'].setValue('Perficient');
    component.clientForm.controls['city'].setValue('Perficient');
    expect(component.clientForm.valid).toBeTruthy();
  }));
});
