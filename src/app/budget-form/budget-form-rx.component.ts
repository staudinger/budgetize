import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms'; 
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form-rx.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {
  
  budgetForm: FormGroup;
  

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
      this.budgetForm = new FormGroup({
          month: new FormControl('e.g January'),
          income: new FormControl(0.00),
          saving: new FormControl(0.00),
          food: new FormControl(0.00),
          personal: new FormControl(0.00),
          recreation: new FormControl(0.00),
          insurance: new FormControl(0.00),
          utilities: new FormControl(0.00),
          housing: new FormControl(0.00),
          transportation: new FormControl(0.00),
          clothing: new FormControl(0.00),
          medicalAndHealth: new FormControl(0.00),
          debts: new FormControl(0.00),
          charitableGifts: new FormControl(0.00)

      });
  }

}
