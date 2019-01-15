import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import{ RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetFormComponent,
    BudgetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'budgets', component: BudgetListComponent},
        {path: 'budgets/:month', component: BudgetDetailComponent},
        {path: 'add-budget', component: BudgetFormComponent},
        {path: '**', redirectTo: 'budgets', pathMatch: 'full'},
        {path: '', redirectTo: 'budgets', pathMatch: 'full'}
      ]
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
