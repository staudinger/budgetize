import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  budget = {} as Budget;
  budgets: Budget[] = [];

  clickSubmit(): void
  {
    this.budget.totalExpense = this.budget.saving + this.budget.debts + this.budget.housing + this.budget.insurance + this.budget.medicalAndHealth + this.budget.personal + this.budget.recreation + this.budget.transportation + this.budget.utilities + this.budget.charitableGifts + this.budget.clothing + this.budget.food;
    this.budgetService.addBudget(this.budget).subscribe(
      budget=>
      {
        console.log(this.budget);
      }
    );
    this.router.navigate(['/budgets']);
  }


  constructor(private budgetService: BudgetService, private router:Router) { }

  ngOnInit()
  {
  }

}
