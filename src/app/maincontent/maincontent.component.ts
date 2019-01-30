import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from '../expense-category';
import { ActivatedRoute } from '@angular/router';
import { ExpenseCategoriesService } from '../expense-categories.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit
{

  category: ExpenseCategory;
  

  constructor(private route: ActivatedRoute, private service: ExpenseCategoriesService) { }

  ngOnInit()
  {

    this.route.params.subscribe(
      params =>
      {
        let name = params['name'];
        this.category = null;
        if(!name)
        {
          name = "Housing";
        }

        this.service.categories.subscribe(
          serviceCategories =>
          {
            this.category = this.service.categoryByName(name);
          }
        )
      
      }
    )

  }
}
