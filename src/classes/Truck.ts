// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity
    if (wheels.length != 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const towedMake = vehicle.make;
    const towedModel = vehicle.model;
    
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${towedMake} ${towedModel} is being towed!`);
    } else {
      console.log(`${towedMake} ${towedModel} is too heavy to be towed!`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`${this.year} ${this.make} ${this.model}\nVin: ${this.vin}\nWeight ${this.weight} lbs\nTop Speed: ${this.topSpeed}\nColor: ${this.color}\nTowing Capacity: ${this.towingCapacity}\nWheels: ${this.wheels.forEach((wheel, index) => {console.log(wheel.getTireBrand, wheel.getDiameter)})}`);
  }
}

// Export the Truck class as the default export
export default Truck;
