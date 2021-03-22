import { Collectable } from "../interfaces/collectable";
import { Searchable } from "../interfaces/searchable";

/**
 * Represents a generic type collection that is collectable and searchable
 */
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

  /**
   * Adds a new item to the collection
   * @param item 
   */
  addItem(item: ItemType) {
    this.collection.push(item);
  }

  /**
   * Gets the item in the position `index`
   * @param index 
   * @returns Undefined if index is out of bounds
   */
  getItem(index: number): ItemType | undefined {
    return this.collection[index];
  }

  /**
   * Removes the item in the `index` position
   * @param index 
   */
  removeItem(index:number): void {
    this.collection.splice(index, 1);
  }

  /**
   * Returns the number of items in the collection
   * @returns 
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract search(searchedItem: ItemType): ItemType[];
}
