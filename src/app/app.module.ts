import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';

import { MaterialModule } from './shared/material.module';
import { HomeComponent } from './home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaincontentComponent } from './maincontent/maincontent.component';
import { ExpenseSidenavComponent } from './expense-sidenav/expense-sidenav.component';
import { BudgetizeComponent } from './budgetize/budgetize.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExpenseCategoriesService } from './expense-categories.service';

const routes: Routes = 
[
  {path: '', component: BudgetizeComponent,
          children: [
              {path: 'budgets', component: BudgetListComponent},
              {path: 'budgets/:month', component: BudgetDetailComponent},
              {path: 'add-budget', component: BudgetFormComponent},
              {path: 'home', component: HomeComponent},
              {path: 'budgetize/:name', component: MaincontentComponent},
              {path: '', component: MaincontentComponent }
          ]
  },
  {path: '**', redirectTo: ''},

]


@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetFormComponent,
    BudgetDetailComponent,
    HomeComponent,
    ExpenseSidenavComponent,
    BudgetizeComponent,
    ToolbarComponent,
    MaincontentComponent
  ],
  entryComponents: [
    BudgetFormComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    RouterModule.forChild(routes),
    RouterModule
  ],
  providers: [
    ExpenseCategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
