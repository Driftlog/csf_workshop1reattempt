import { Component } from '@angular/core';
import { cartItem } from './cart/cartItem';
import { InventoryItem } from './items-list/inventory-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_workshop1reattempt';
  itemList : InventoryItem[] = [];
  addedItemList: cartItem[];


  constructor() {
    this.addedItemList = [];
  }

  ngOnInit() : void {
    this.itemList.push({image : "imageurl1", description :"item 1"},
                    {image : "imageurl2", description :"item 2"},
                    {image : "imageurl3", description :"item 3"},
                    {image : "imageurl4", description :"item 4"},
                    {image : "imageurl5", description :"item 5"}
    )


  }

 
  addToCart({image, description} : InventoryItem) {
   let itemIndex = this.addedItemList.map(item => item.description).indexOf(description);

      if ( this.addedItemList.length == 0 || itemIndex == -1) {
        this.addedItemList.push({ image: image, description: description, quantity: 1});
      } else {
        this.addedItemList[itemIndex].quantity++;
      }
  }



}
