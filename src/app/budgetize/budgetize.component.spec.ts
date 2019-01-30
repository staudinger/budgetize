import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetizeComponent } from './budgetize.component';

describe('BudgetizeComponent', () => {
  let component: BudgetizeComponent;
  let fixture: ComponentFixture<BudgetizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
