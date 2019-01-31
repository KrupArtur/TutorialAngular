import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public categories = new Array('A','B','C');
  public _categories;
  @Input() categorie;
  constructor() { }

  ngOnInit() {
  }

  setCategories(){
    this._categories = 'A';
  }
  
}

