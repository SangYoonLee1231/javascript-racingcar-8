import { Car } from "./Car.js";

export function createCars(carNamesArray) {
  return carNamesArray.map((name) => new Car(name));
}
