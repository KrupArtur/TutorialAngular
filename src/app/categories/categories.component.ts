import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() test; 
  public categoriesA = new Array('A','B');

  constructor() {  
  }

  ngOnInit() {
  }

  getCategories(){
    for(let a of this.categoriesA){
        return a;
    }
   }
}
