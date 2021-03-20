import { IsConvertible } from '../interfaces/is_convertible';

export type MassUnit = 'kg' | 'mg' | 't';

export class Mass implements IsConvertible<number, MassUnit> {
  constructor(public readonly data: number, readonly currentUnit: MassUnit) {

  }

  convertTo(unit: MassUnit): number {
    switch (unit) {
      case 'kg':
        return this.convertToKg();
      case 'mg':
        return this.convertToMg();
      case 't':
        return this.convertToT();
    }
  }

  toKg(): number {
    return this.convertTo('kg');
  }

  toMg(): number {
    return this.convertTo('mg');
  }

  toT(): number {
    return this.convertTo('t');
  }

  private convertToKg(): number {
    switch (this.currentUnit) {
      case 'kg':
        return this.data;
      case 'mg':
        return this.data * 0.000001;
      case 't':
        return this.data * 1000;
    }
  }

  private convertToMg(): number {
    switch (this.currentUnit) {
      case 'kg':
        return this.data * 1000000;
      case 'mg':
        return this.data;
      case 't':
        return this.data * 1000000000;
    }
  }

  private convertToT(): number {
    switch (this.currentUnit) {
      case 'kg':
        return this.data * 0.001;
      case 'mg':
        return this.data * 0.000000001;
      case 't':
        return this.data;
    }
  }
}
