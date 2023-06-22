import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealDataService } from 'services/meal-data.service';
import { Meal } from 'models/meal';

@Component({
  selector: 'app-meal-listing',
  templateUrl: './meal-listing.component.html',
  styleUrls: ['./meal-listing.component.css'],
  providers: [MealDataService]
})
export class MealListingComponent implements OnInit {

  meals: Meal[];

  message: string;

  constructor(
    private mealDataService: MealDataService,
    private router: Router
  ) { }

  private addMeal(): void {
    this.router.navigate(['add-meal']);
  }

  private getMeals(): void {
    console.log('Inside MealListingComponent#getMeals');
    this.message = 'Searching for meals';
    this.mealDataService
      .getMeals()
        .then(foundMeals => {
          this.message = foundMeals.length > 0 ? '' : 'No meals found';
          this.meals = foundMeals;
        });
  }

  ngOnInit() {
    this.getMeals();
  }

}
