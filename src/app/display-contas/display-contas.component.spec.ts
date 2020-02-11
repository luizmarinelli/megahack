import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContasComponent } from './display-contas.component';

describe('DisplayContasComponent', () => {
  let component: DisplayContasComponent;
  let fixture: ComponentFixture<DisplayContasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayContasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
