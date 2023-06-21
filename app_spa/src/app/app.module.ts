import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealDataService } from 'services/meal-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MealListingComponent,
    MealCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MealDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
