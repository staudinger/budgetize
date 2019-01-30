import { Injectable } from '@angular/core';
import { Budget } from './budget';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  APIUrl = 'http://localhost:3000/Budgets';

  private _budgets: BehaviorSubject<Budget[]>;

  private dataStore: 
  {
    budgets: Budget[];
  }


  getBudgets(): Observable<Budget[]>
  {
    return this.http.get<Budget[]>(this.APIUrl);
  }

  addBudget(budget: Budget): Observable<Budget>
  {
    return this.http.post<Budget>(this.APIUrl, budget)
  }


  constructor(private http: HttpClient)
  {
    this.dataStore = { budgets: []};
    this._budgets = new BehaviorSubject<Budget[]>([]);
  }

  get budgets(): Observable<Budget[]>
  {
    return this._budgets.asObservable();
  }

  budgetByName(month: string)
  {
    return this.dataStore.budgets.find(x => x.month == month);
  }

  loadAll()
  {
    return this.http.get<Budget[]>(this.APIUrl)
      .subscribe(data =>
        {
          this.dataStore.budgets = data;
          this._budgets.next(Object.assign({}, this.dataStore).budgets);
        }, error =>
        {
          console.log("failed to fetch budgets");
        });
  }
}
