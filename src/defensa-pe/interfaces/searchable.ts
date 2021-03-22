/**
 * Defines the shape of a generic searchable collection
 */
export interface Searchable<ItemType> {
  search(item: unknown): ItemType[]
}
