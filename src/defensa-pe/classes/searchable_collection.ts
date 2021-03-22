import { Collectable } from "../interfaces/collectable";
import { Searchable } from "../interfaces/searchable";

export abstract class SearchableCollection<ItemType> implements Collectable<ItemType>, Searchable<ItemType> {
  constructor(private collection: ItemType[]) {

  }

  // Setters and getters
  setCollection(newCollection: ItemType[]) {
    this.collection = newCollection;
  }

  // Returns a shallow copy of collection
  getCollection(): ItemType[] {
    return [...this.collection];
  }



  addItem(item: ItemType) {
    this.collection.push(item);
  }

  getItem(index: number): ItemType | undefined {
    return this.collection[index];
  }

  removeItem(index:number): void {
    this.collection.splice(index, 1);
  }
  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract search(searchedItem: ItemType): ItemType[];
}
