import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ RouterModule } from '@angular/router';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';

import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetFormComponent,
    BudgetDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
