import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MealDataService } from 'services/meal-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private mealDataService: MealDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      chef: ['', Validators.required],
      image: [null, Validators.required],
      ingredients: this.formBuilder.array([]),
      directions: this.formBuilder.array([])
    });
  }

  get ingredientControls() {
    return this.addForm.get('ingredients') as FormArray;
  }

  removeIngredient(index: number): void {
    this.ingredientControls.removeAt(index);
  }

  private newIngredient(): void {

    const ingredientGroup = this.formBuilder.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      measurementUnit: ['', Validators.required],
      detail: ['', Validators.required]
    });

    this.ingredientControls.push(ingredientGroup);
  }

  get directionControls() {
    return this.addForm.get('directions') as FormArray;
  }

  removeDirection(index: number): void {
    this.directionControls.removeAt(index);
  }

  private newDirection(): void {

    const directionGroup = this.formBuilder.group({
      instruction: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.directionControls.push(directionGroup);
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.mealDataService.addMeal(this.addForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }

  // get the form shart name to acces the form fields
  get f() { return this.addForm.controls; }
}
