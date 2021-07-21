import {Component, OnInit, Input,} from '@angular/core';
import {CARD} from "./cardholder";



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards = CARD

 
 ;
  @Input() description: string ='';
  @Input() dueDate: string = '';
  @Input() index!:number;



  constructor() {
  }


  ngOnInit(): void {
  }

  onAdd(descriptionAdd:string,dueDateAdd:string){
    this.cards.push({description: descriptionAdd,dueDate: dueDateAdd})

  }
  onRemove(index: number) {
    this.cards.splice(index,1)
}



}
