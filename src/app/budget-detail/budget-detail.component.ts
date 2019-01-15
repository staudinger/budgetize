import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {

  budgetMonth: string;
  budget: Budget;
  budgets: Budget[] = [];

  clickBack(): void{
    this.router.navigate(['/budgets']);
  }

  constructor(private route: ActivatedRoute, private budgetService: BudgetService, private router: Router) { }

  ngOnInit() 
  {
    this.budgetMonth = this.route.snapshot.paramMap.get('month');

    this.budgetService.getBudgets().subscribe(
      serviceBudgets =>
      {
        this.budgets = serviceBudgets;
        this.budget = this.budgets.find(x=>x.month == this.budgetMonth);
      }
    )

  }

}
