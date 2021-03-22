
export interface IsConvertible<DataType, UnitType> {
  data: DataType;
  currentUnit: UnitType;
  convertTo(unit: UnitType): DataType;
}
