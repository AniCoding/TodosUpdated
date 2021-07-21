import {Component, Input, OnInit} from '@angular/core';

import {CardComponent} from "../card/card.component";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  click : boolean = false;

  @Input() description = ""
  @Input() dueDate = ""
  constructor() {
  }
  inputValues: any = {}

  ngOnInit(): void {
  }

  onAdd( description:string, dueDate:string) {
    let cardCom = new CardComponent()
    cardCom.onAdd(description,dueDate)
  }


}
