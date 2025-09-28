interface IVehicle {
  getDetails(): string;
  start(): string;
}

abstract class Vehicle implements IVehicle {
  constructor(
    protected make: string,
    protected model: string,
  ) {}

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }

  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    private year: number,
  ) {
    super(make, model);
  }

  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

const car = new Car('Skoda', 'Rapid', 2018);
console.log(car.start());
console.log(car.getDetails());