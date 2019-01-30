import { Component, OnInit } from '@angular/core';
import { ExpenseCategoriesService } from '../expense-categories.service';
import { ExpenseCategory } from '../expense-category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense-sidenav',
  templateUrl: './expense-sidenav.component.html',
  styleUrls: ['./expense-sidenav.component.css']
})
export class ExpenseSidenavComponent implements OnInit {

  expenseCategories: Observable<ExpenseCategory[]>;

  constructor(private expenseCategoryService: ExpenseCategoriesService) { }

  ngOnInit() 
  {
    this.expenseCategories = this.expenseCategoryService.categories;
    this.expenseCategoryService.loadAll();

    
  }

}
