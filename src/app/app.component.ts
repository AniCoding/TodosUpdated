import {Component} from '@angular/core';
import {CARD} from "./card/cardholder";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = CARD
  num : number = 1



}
