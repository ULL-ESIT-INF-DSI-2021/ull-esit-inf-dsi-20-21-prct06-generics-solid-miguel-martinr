import { Person } from "./person";

export class Actor extends Person {
  constructor(name: string, surname: string, private birthdate: number) {
    super(name, surname);
  }

  // Setters
  setBirthdate(newDate: number) {
    this.birthdate = newDate;
  }

  // Getters
  getBirthdate() {
    return this.birthdate;
  }

}
