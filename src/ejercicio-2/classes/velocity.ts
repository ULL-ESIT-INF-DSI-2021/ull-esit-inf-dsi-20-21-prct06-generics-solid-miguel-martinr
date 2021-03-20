import { IsConvertible } from '../interfaces/is_convertible';

export type VelocityUnit = 'KM/H' | 'MPH' | 'M/S';

export class Velocity implements IsConvertible<number, VelocityUnit> {
  constructor(public readonly data: number, readonly currentUnit: VelocityUnit) {

  }

  convertTo(unit: VelocityUnit): number {
    switch (unit) {
      case 'KM/H':
        return this.convertToKMH();
      case 'MPH':
        return this.convertToMPH();
      case 'M/S':
        return this.convertToMS();
    }
  }

  toKMH(): number {
    return this.convertTo('KM/H');
  }

  toMPH(): number {
    return this.convertTo('MPH');
  }

  toMS(): number {
    return this.convertTo('M/S');
  }

  private convertToKMH(): number {
    switch (this.currentUnit) {
      case 'KM/H':
        return this.data;
      case 'M/S':
        return this.data * 3.6;
      case 'MPH':
        return this.data * 1.60934;
    }
  }

  private convertToMPH(): number {
    switch (this.currentUnit) {
      case 'KM/H':
        return this.data * 0.621371;
      case 'M/S':
        return this.data * 2.23694;
      case 'MPH':
        return this.data;
    }
  }

  private convertToMS(): number {
    switch (this.currentUnit) {
      case 'KM/H':
        return this.data * 0.277778;
      case 'M/S':
        return this.data;
      case 'MPH':
        return this.data * 0.44704;
    }
  }
}
