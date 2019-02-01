import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { Router } from '@angular/router';

import { FormControl, Validators} from '@angular/forms';

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


  income = new FormControl('', [Validators.required]);

  getErrorMessageIncome() {
    return this.income.hasError('required') ? 'You must enter an income': '';
  }

  charitableGifts = new FormControl('', [Validators.required]);

  getErrorMessageCharity() {
    return this.charitableGifts.hasError('required') ? 'You must enter an amount': '';
  }

  savings = new FormControl('', [Validators.required]);

  getErrorMessageSaving() {
    return this.savings.hasError('required') ? 'You must enter an amount': '';
  }

  housing = new FormControl('', [Validators.required]);

  getErrorMessageHousing() {
    return this.housing.hasError('required') ? 'You must enter an amount': '';
  }

  utilities = new FormControl('', [Validators.required]);

  getErrorMessageUtilities() {
    return this.utilities.hasError('required') ? 'You must enter an amount': '';
  }

  food = new FormControl('', [Validators.required]);

  getErrorMessageFood() {
    return this.food.hasError('required') ? 'You must enter an amount': '';
  }

  clothing = new FormControl('', [Validators.required]);

  getErrorMessageClothing() {
    return this.clothing.hasError('required') ? 'You must enter an amount': '';
  }

  transportation = new FormControl('', [Validators.required]);

  getErrorMessageTransportation() {
    return this.transportation.hasError('required') ? 'You must enter an amount': '';
  }

  medicalAndHealth = new FormControl('', [Validators.required]);

  getErrorMessageMedical() {
    return this.medicalAndHealth.hasError('required') ? 'You must enter an amount': '';
  }

  insurance = new FormControl('', [Validators.required]);

  getErrorMessageInsurance() {
    return this.insurance.hasError('required') ? 'You must enter an amount': '';
  }

  personal = new FormControl('', [Validators.required]);

  getErrorMessagePersonal() {
    return this.personal.hasError('required') ? 'You must enter an amount': '';
  }

  recreation = new FormControl('', [Validators.required]);

  getErrorMessageRecreation() {
    return this.recreation.hasError('required') ? 'You must enter an amount': '';
  }

  debts = new FormControl('', [Validators.required]);

  getErrorMessageDebts() {
    return this.debts.hasError('required') ? 'You must enter an amount': '';
  }

  month = new FormControl('', [Validators.required]);

  getErrorMessageMonth() {
    return this.month.hasError('required') ? 'You must enter a month': '';
  }

  constructor(private budgetService: BudgetService, private router:Router) { }

  ngOnInit()
  {
  }

}
