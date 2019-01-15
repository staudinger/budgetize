import { Injectable } from '@angular/core';
import { Budget } from './budget';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  APIUrl = 'http://localhost:3000/Budgets';


  getBudgets(): Observable<Budget[]>
  {
    return this.http.get<Budget[]>(this.APIUrl);
  }

  addBudget(budget: Budget): Observable<Budget>
  {
    return this.http.post<Budget>(this.APIUrl, budget)
  }


  constructor(private http: HttpClient) { }
}
