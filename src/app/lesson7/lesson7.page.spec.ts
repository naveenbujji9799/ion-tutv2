import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson7Page } from './lesson7.page';

describe('Lesson7Page', () => {
  let component: Lesson7Page;
  let fixture: ComponentFixture<Lesson7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
