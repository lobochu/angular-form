import { Component } from '@angular/core';
import {FruitForm} from './fruit-form.component';

@Component({
  selector: 'app-root',
  template: `
  <fruit-form></fruit-form>
  `,
  directives: [FruitForm]
})
export class AppComponent {
  title = 'app works!';
}
