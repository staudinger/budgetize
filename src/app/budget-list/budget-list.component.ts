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
  number: number;
  avgFood: number;
  avgCharity: number;
  avgUtilities: number;
  avgPersonal: number;
  avgRecreation: number;
  avgTransportation: number;
  avgInsurance: number;
  avgDebts: number;
  avgMedical: number;
  avgClothing: number;
  avgHousing: number;
  avgSaving: number;


  percentageOfIncome(expense: number, income: number)
  {
    return (expense)/income;
  }

  averageBudgets()
  {
      for(let budget of this.budgets)
      {
        this.avgFood+=(budget.food/budget.income);
        this.avgSaving+=(budget.saving/budget.income);
        this.avgHousing+=(budget.housing/budget.income);
        this.avgInsurance+=(budget.insurance/budget.income);
        this.avgCharity+=(budget.charitableGifts/budget.income);
        this.avgPersonal+=(budget.personal/budget.income);
        this.avgRecreation+=(budget.recreation/budget.income);
        this.avgDebts+=(budget.debts/budget.income);
        this.avgMedical+=(budget.medicalAndHealth/budget.income);
        this.avgClothing+=(budget.clothing/budget.income);
        this.avgTransportation+=(budget.transportation/budget.income);
        this.avgUtilities+=(budget.utilities/budget.income);
      }
      this.avgFood = this.avgFood/this.budgets.length;
      this.avgSaving = this.avgSaving/this.budgets.length;
      this.avgTransportation = this.avgTransportation/this.budgets.length;
      this.avgUtilities = this.avgUtilities/this.budgets.length;
      this.avgPersonal = this.avgPersonal/this.budgets.length;
      this.avgRecreation = this.avgRecreation/this.budgets.length;
      this.avgCharity = this.avgCharity/this.budgets.length;
      this.avgMedical = this.avgMedical/this.budgets.length;
      this.avgInsurance = this.avgInsurance/this.budgets.length;
      this.avgHousing = this.avgHousing/this.budgets.length;
      this.avgDebts = this.avgDebts/this.budgets.length;
      this.avgClothing = this.avgClothing/this.budgets.length;
  }


  constructor(private budgetService: BudgetService) { }

  ngOnInit() 
  {
    this.budgetService.getBudgets().subscribe
    (
      serviceBudgets =>
      {
        this.budgets = serviceBudgets;
        this.number = 0;
        this.avgFood= 0;
        this.avgCharity= 0;
        this.avgUtilities = 0;
        this.avgPersonal = 0;
        this.avgRecreation = 0;
        this.avgTransportation = 0;
        this.avgInsurance = 0;
        this.avgDebts = 0;
        this.avgMedical = 0;
        this.avgClothing = 0;
        this.avgHousing = 0;
        this.avgSaving = 0;
        this.averageBudgets();
      }
    )
    this.averageBudgets();
  }

}
