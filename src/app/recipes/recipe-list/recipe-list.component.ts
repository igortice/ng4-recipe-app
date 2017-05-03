import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector:    'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls:   ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test 1 recipe',
      'This is simply test for example 1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
    new Recipe('A test 2 recipe',
      'This is simply test for example 2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
