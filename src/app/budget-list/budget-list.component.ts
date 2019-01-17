import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { AvgBudget } from '../avg-budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];
  avgBudget: AvgBudget;
  
  percentageOfIncome(expense: number, income: number)
  {
    return (expense)/income;
  }

  constructor(private budgetService: BudgetService) { }

  ngOnInit() 
  {
    
    this.budgetService.getBudgets().subscribe
    (
      serviceBudgets =>
      {
       this.avgBudget = new AvgBudget(); 
        this.budgets = serviceBudgets;

        this.avgBudget = this.avgBudget.averageBudgets(this.budgets, this.avgBudget);
        console.log(this.avgBudget.avgExpenses);
      }
    )
  }

}
