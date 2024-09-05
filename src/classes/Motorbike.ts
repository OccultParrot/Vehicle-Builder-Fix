// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    if (wheels.length != 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  Wheelie() {
    console.log(`Motorbike ${this.make}  ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`${this.year} ${this.make} ${this.model}\nVin: ${this.vin}\nWeight ${this.weight} lbs\nTop Speed: ${this.topSpeed}\nColor: ${this.color}\nWheels: ${this.wheels.forEach((wheel) => {console.log( wheel.getTireBrand, wheel.getDiameter)})}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
