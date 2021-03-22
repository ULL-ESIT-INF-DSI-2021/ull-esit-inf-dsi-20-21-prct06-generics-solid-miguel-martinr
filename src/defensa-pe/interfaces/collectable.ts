/**
 * Defines the shape of a generic collectable collection
 */
export interface Collectable<ItemType> {
  addItem(item: ItemType): void,
  getItem(index: number): ItemType | undefined,
  removeItem(index:number): void,
  getNumberOfItems(): number
}
