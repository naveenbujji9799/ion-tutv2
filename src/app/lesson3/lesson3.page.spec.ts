import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3Page } from './lesson3.page';

describe('Lesson3Page', () => {
  let component: Lesson3Page;
  let fixture: ComponentFixture<Lesson3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
