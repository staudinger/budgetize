import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];
  number: number ;
  avgFood: number;
  avgCharity: number;
  avgUtilities: number = 0;
  avgPersonal: number = 0;
  avgRecreation: number = 0;
  avgTransporation: number = 0;
  avgInsurance: number = 0;
  avgDebts: number = 0;
  avgMedical: number = 0;
  avgClothing: number = 0;
  avgHousing: number = 0;
  avgSaving: number = 0;


  percentageOfIncome(expense: number, income: number)
  {
    return (expense)/income;
  }

  averageBudgets()
  {
      for(let budget of this.budgets)
      {
        console.log(this.avgFood);
        console.log(this.avgFood+=(budget.food/budget.income));
        console.log(budget.food);
        console.log(budget.income);
        console.log(this.avgFood);
        /*this.avgSaving+=(budget.saving/budget.income);
        this.avgHousing+=(budget.housing/budget.income);
        this.avgInsurance+=(budget.insurance/budget.income);
        this.avgCharity+=(budget.charitableGifts/budget.income);
        this.avgPersonal+=(budget.personal/budget.income);
        this.avgRecreation+=(budget.recreation/budget.income);
        this.avgDebts+=(budget.debts/budget.income);
        this.avgMedical+=(budget.medicalAndHealth/budget.income);
        this.avgClothing+=(budget.clothing/budget.income);
        this.avgTransporation+=(budget.transportation/budget.income);
        this.avgUtilities+=(budget.utilities/budget.income);*/
      }
      this.avgFood = this.avgFood/this.budgets.length;
     /* this.avgSaving = this.avgSaving/this.budgets.length;
      this.avgTransporation = this.avgTransporation/this.budgets.length;
      this.avgUtilities = this.avgUtilities/this.budgets.length;
      this.avgPersonal = this.avgPersonal/this.budgets.length;
      this.avgRecreation = this.avgRecreation/this.budgets.length;
      this.avgCharity = this.avgCharity/this.budgets.length;
      this.avgMedical = this.avgMedical/this.budgets.length;
      this.avgInsurance = this.avgInsurance/this.budgets.length;
      this.avgHousing = this.avgHousing/this.budgets.length;
      this.avgDebts = this.avgDebts/this.budgets.length;
      this.avgClothing = this.avgClothing/this.budgets.length;*/
  }


  constructor(private budgetService: BudgetService) { }

  ngOnInit() 
  {
    this.budgetService.getBudgets().subscribe
    (
      serviceBudgets =>
      {
        this.budgets = serviceBudgets;
        this.averageBudgets();
      }
    )
    this.averageBudgets();
  }

}
