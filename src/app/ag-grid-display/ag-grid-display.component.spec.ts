import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDisplayComponent } from './ag-grid-display.component';

describe('AgGridDisplayComponent', () => {
  let component: AgGridDisplayComponent;
  let fixture: ComponentFixture<AgGridDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
