import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  ingredientCounter: number = 1;
  directionCounter: number = 1;

  constructor(
  ) { }

  ngOnInit() {
  }

  private addIngredient(): void {

    const container = document.getElementById("ingredientsContainer");

    const newIngredientDiv = document.createElement("div");
    newIngredientDiv.className = "ingredient";

    const ingredientHeader = document.createElement("h5");
    ingredientHeader.innerText = "Ingredient " + (this.ingredientCounter + 1);

    const codeInput = document.createElement("input");
    codeInput.type = "text";
    codeInput.name = "code[]";
    codeInput.placeholder = "Code " + (this.ingredientCounter + 1);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name[]";
    nameInput.placeholder = "Name " + (this.ingredientCounter + 1);

    const amountInput = document.createElement("input");
    amountInput.type = "text";
    amountInput.name = "amount[]";
    amountInput.placeholder = "Amount " + (this.ingredientCounter + 1);

    const measurementUnitInput = document.createElement("input");
    measurementUnitInput.type = "text";
    measurementUnitInput.name = "measurementUnit[]";
    measurementUnitInput.placeholder = "Measurement Unit " + (this.ingredientCounter + 1);

    const detailInput = document.createElement("input");
    detailInput.type = "text";
    detailInput.name = "detail[]";
    detailInput.placeholder = "Detail " + (this.ingredientCounter + 1);

    newIngredientDiv.appendChild(ingredientHeader);
    newIngredientDiv.appendChild(codeInput);
    newIngredientDiv.appendChild(nameInput);
    newIngredientDiv.appendChild(amountInput);
    newIngredientDiv.appendChild(measurementUnitInput);
    newIngredientDiv.appendChild(detailInput);

    container.appendChild(newIngredientDiv);

    this.ingredientCounter++;
  }

  private addDirection(): void {

    const container = document.getElementById("directionsContainer");

    const newDirectionDiv = document.createElement("div");
    newDirectionDiv.className = "direction";

    const directionHeader = document.createElement("h5");
    directionHeader.innerText = "Instruction " + (this.directionCounter + 1);

    const codeInput = document.createElement("input");
    codeInput.type = "text";
    codeInput.name = "code[]";
    codeInput.placeholder = "Code " + (this.directionCounter + 1);

    const instructionInput = document.createElement("input");
    instructionInput.type = "text";
    instructionInput.name = "instruction[]";
    instructionInput.placeholder = "Instruction " + (this.directionCounter + 1);

// FIXME: image input should be file type      
    const imageInput = document.createElement("input");
    imageInput.type = "text";
    imageInput.name = "image[]";
    imageInput.placeholder = "Image " + (this.directionCounter + 1);

    newDirectionDiv.appendChild(directionHeader);
    newDirectionDiv.appendChild(codeInput);
    newDirectionDiv.appendChild(instructionInput);
    newDirectionDiv.appendChild(imageInput);

    container.appendChild(newDirectionDiv);

    this.directionCounter++;
  }
}
