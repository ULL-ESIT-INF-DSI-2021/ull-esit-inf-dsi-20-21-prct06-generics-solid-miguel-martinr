
export interface IsConvertible<T, U> {
  data: T;
  currentUnit: U;
  convertTo(unit: U): T;
}
