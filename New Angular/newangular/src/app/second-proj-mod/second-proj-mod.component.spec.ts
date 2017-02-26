/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondProjModComponent } from './second-proj-mod.component';

describe('SecondProjModComponent', () => {
  let component: SecondProjModComponent;
  let fixture: ComponentFixture<SecondProjModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondProjModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondProjModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
