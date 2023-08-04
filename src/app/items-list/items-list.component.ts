import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InventoryItem } from './inventory-item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  @Input() inventoryList !: any[];

  @Output() addedItem: EventEmitter<InventoryItem> = new EventEmitter();

  //sends out item to be added
  addItem(item : InventoryItem) {
    this.addedItem.emit(item);
  }

}
