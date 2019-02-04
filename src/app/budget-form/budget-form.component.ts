import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { Router } from '@angular/router';

import {  FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  form: FormGroup;

  budget = {} as Budget;
  budgets: Budget[] = [];

  getErrorMessageIncome() {
    return this.form.get('income').errors['required'] ? 'You must enter an income': '';
  }

  getErrorMessageCharity() {
    return this.form.get('charitableGifts').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageSaving() {
    return this.form.get('savings').errors['required'] ? 'You must enter an amount': '';
  }


  getErrorMessageHousing() {
    return this.form.get('housing').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageUtilities() {
    return this.form.get('utilities').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageFood() {
    return this.form.get('food').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageClothing() {
    return this.form.get('clothing').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageTransportation() {
    return this.form.get('transportation').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageMedical() {
    return this.form.get('medicalAndHealth').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageInsurance() {
    return this.form.get('insurance').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessagePersonal() {
    return this.form.get('personal').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageRecreation() {
    return this.form.get('recreation').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageDebts() {
    return this.form.get('debts').errors['required'] ? 'You must enter an amount': '';
  }

  getErrorMessageMonth() {
    return this.form.get('month').errors['required'] ? 'You must enter a month': '';
  }

  constructor(private budgetService: BudgetService, private router:Router, private dialogRef: MatDialogRef<BudgetFormComponent>) { }

  ngOnInit()
  {
    this.form = new FormGroup(
      {
        'income': new FormControl('', [Validators.required]),
        'charitableGifts': new FormControl('', [Validators.required]),
        'savings' : new FormControl('', [Validators.required]),
        'housing' : new FormControl('', [Validators.required]),
        'utilities' : new FormControl('', [Validators.required]),
        'food' : new FormControl('', [Validators.required]),
        'clothing' : new FormControl('', [Validators.required]),
        'transportation' : new FormControl('', [Validators.required]),
        'medicalAndHealth' : new FormControl('', [Validators.required]),
        'insurance' : new FormControl('', [Validators.required]),
        'personal' : new FormControl('', [Validators.required]),
        'recreation' : new FormControl('', [Validators.required]),
        'debts' : new FormControl('', [Validators.required]),
        'month' : new FormControl('', [Validators.required])
      
      }
      
    )
    
  }

  clickSubmit(): void
  {
    if(this.form.valid){
      this.budget.totalExpense = this.budget.saving + this.budget.debts + this.budget.housing + this.budget.insurance + this.budget.medicalAndHealth + this.budget.personal + this.budget.recreation + this.budget.transportation + this.budget.utilities + this.budget.charitableGifts + this.budget.clothing + this.budget.food;
      this.budgetService.addBudget(this.budget).subscribe(
        budget=>
        {
          console.log(this.budget);
        }
      );
      this.dialogRef.close(this.budget);
      this.router.navigate(['/budgets']);
    }
  }
}
