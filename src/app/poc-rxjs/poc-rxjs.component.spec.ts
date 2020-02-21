import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocRxjsComponent } from './poc-rxjs.component';

describe('PocRxjsComponent', () => {
  let component: PocRxjsComponent;
  let fixture: ComponentFixture<PocRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
