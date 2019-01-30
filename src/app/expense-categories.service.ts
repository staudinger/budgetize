
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';
import { ExpenseCategory } from './expense-category';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ExpenseCategoriesService {
  
  private _categories: BehaviorSubject<ExpenseCategory[]>;
  
  private dataStore: {
    categories: ExpenseCategory[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { categories: [] };
    this._categories = new BehaviorSubject<ExpenseCategory[]>([]);
  }

  get categories(): Observable<ExpenseCategory[]> {
    return this._categories.asObservable();
  }


  categoryByName(name: string) {
    return this.dataStore.categories.find(x => x.name == name);
  }

  loadAll() {
    const categoriesUrl = 'http://localhost:3000/ExpenseCategories';

    return this.http.get<ExpenseCategory[]>(categoriesUrl)
      .subscribe(data => {
        this.dataStore.categories = data;
        this._categories.next(Object.assign({}, this.dataStore).categories);
      }, error => {
        console.log("Failed to fetch categories");
      });
  }

}
