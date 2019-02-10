import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTestPage } from './param-test.page';

describe('ParamTestPage', () => {
  let component: ParamTestPage;
  let fixture: ComponentFixture<ParamTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
