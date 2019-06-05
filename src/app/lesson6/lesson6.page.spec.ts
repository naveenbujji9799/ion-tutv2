import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6Page } from './lesson6.page';

describe('Lesson6Page', () => {
  let component: Lesson6Page;
  let fixture: ComponentFixture<Lesson6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
