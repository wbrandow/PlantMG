import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealDataService } from 'services/meal-data.service';
import { AddMealComponent } from './add-meal/add-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    MealListingComponent,
    MealCardComponent,
    AddMealComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    MealDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
