export interface Collectable<ItemType> {
  addItem(item: ItemType): void,
  getItem(index: number): ItemType | undefined,
  removeItem(index:number): void,
  getNumberOfItems(): number
}
