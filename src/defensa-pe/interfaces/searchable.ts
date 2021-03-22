export interface Searchable<ItemType> {
  search(item: ItemType): ItemType[]
}
