import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Some explanation or recipe',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffood.fnr.sndimg.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2018%2F9%2F26%2F0%2FFNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix%2F1537973085542.jpeg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Ffood-network-kitchen%2Ftuscan-chicken-skillet-5421728&tbnid=JiQfKKpComMwLM&vet=12ahUKEwidlJuA6bvqAhUHQhoKHaLMCLgQMygEegUIARDTAQ..i&docid=XzoaBxZ7OvFotM&w=826&h=620&q=recipe&ved=2ahUKEwidlJuA6bvqAhUHQhoKHaLMCLgQMygEegUIARDTAQ'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
