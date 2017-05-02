import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector:    'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls:   ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply teste', 'https://cdn.pixabay.com/photo/2015/07/05/21/38/salad-832811_960_720.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
