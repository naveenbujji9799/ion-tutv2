import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson8Page } from './lesson8.page';

describe('Lesson8Page', () => {
  let component: Lesson8Page;
  let fixture: ComponentFixture<Lesson8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
