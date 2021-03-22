
export interface SearchableByName<SearchableType> {
  searchByName(name: string): SearchableType[]
};
