import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Meal } from '../models/meal';

@Injectable()
export class MealDataService {

  constructor(
    private http: HttpClient
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getMeals(): Promise<Meal[]> {
    console.log('Inside MealDataService#getMeals');
    return this.http
      .get(`${this.apiBaseUrl}meals`)
      .toPromise()
      .then(response => response as Meal[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error);
    return Promise.reject(error.message || error);
  }

}
