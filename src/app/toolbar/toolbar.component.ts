import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BudgetFormComponent } from '../budget-form/budget-form.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddBudgetDialog(): void
  {
    this.dialog.open(BudgetFormComponent, 
      {
        width:'450px',
        height: '1000px'
      })
  }

}
