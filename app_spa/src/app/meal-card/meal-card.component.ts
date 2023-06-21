import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input('meal') meal: any;

  constructor() { }

  ngOnInit() {
  }

}
