import {Component} from '@angular/core';
import {NgForm} from '@angular/common';
import {Fruit} from './fruit';

@Component({
  selector: 'fruit-form',
  templateUrl: 'app/fruit-form.component.html',
  styleUrls: ['app/fruit-form.component.css']
})
export class FruitForm {
  colors: String[] = ['red', 'green', 'yelloe', 'purple'];

  model = new Fruit(1, 'apple', this.colors[0], 'round');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnotic() {
    //convert object model into json string
    return JSON.stringify(this.model);
  }
}
