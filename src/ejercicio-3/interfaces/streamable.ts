
export interface Streamable<StreamType> {
  getCollection(): StreamType[],
  setCollection(newCollection: StreamType[]): void
}
