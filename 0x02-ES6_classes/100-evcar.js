import Car from './10-car';

class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}

<<<<<<< HEAD
export default EVCar;
=======
export default EVCar;
>>>>>>> alx-frontend-javascript/main
