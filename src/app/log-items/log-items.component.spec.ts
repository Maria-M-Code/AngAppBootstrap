import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemsComponent } from './log-items.component';

describe('LogItemsComponent', () => {
  let component: LogItemsComponent;
  let fixture: ComponentFixture<LogItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
