export abstract class Person {
  constructor(private name: string, private surname: string) {
    
  }

  setName(newName: string) {
    this.name = newName;
  }

  getName(): string {
    return this.name;
  }

  setSurname(newSurname: string) {
    this.surname = newSurname;
  }

  getSurname(): string {
    return this.surname;
  }
  
}
