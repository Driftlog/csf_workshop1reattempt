import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  //receives from main list of added items
    @Input() addedItems !: any[];

    deleteItem(event : string) {
        let itemIndex = this.addedItems.map(item => item.description).indexOf(event);
        this.addedItems.splice(itemIndex, 1);
    }


}
