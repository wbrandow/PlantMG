import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Meal } from '../models/meal';

@Injectable()
export class MealDataService {

  constructor(
    private http: HttpClient
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private mealUrl = `${this.apiBaseUrl}meals/`;

  public getMeals(): Promise<Meal[]> {
    console.log('Inside MealDataService#getMeals');
    return this.http
      .get(this.mealUrl)
      .toPromise()
      .then(response => response as Meal[])
      .catch(this.handleError);
  }

  public addMeal(formData: Meal): Promise<Meal> {
    console.log('Inside MealDataService#addMeal  It needs finished');
    console.log(formData);
    return this.http
      .post(this.mealUrl, formData)
      .toPromise()
      .then(response => response as Meal)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error);
    return Promise.reject(error.message || error);
  }

}
