import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MealListingComponent } from "./meal-listing/meal-listing.component";
import { AddMealComponent } from "./add-meal/add-meal.component";

const routes: Routes = [
    { path: 'add-meal', component: AddMealComponent },
    { path: '', component: MealListingComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }