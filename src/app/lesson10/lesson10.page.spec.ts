import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson10Page } from './lesson10.page';

describe('Lesson10Page', () => {
  let component: Lesson10Page;
  let fixture: ComponentFixture<Lesson10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
