import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5Page } from './lesson5.page';

describe('Lesson5Page', () => {
  let component: Lesson5Page;
  let fixture: ComponentFixture<Lesson5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
