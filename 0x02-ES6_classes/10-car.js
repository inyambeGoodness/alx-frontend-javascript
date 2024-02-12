export default class Car {
<<<<<<< HEAD
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
=======
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    static get [Symbol.species]() {
      return this;
    }
  
    cloneCar() {
      const ModelCar = this.constructor[Symbol.species];
      return new ModelCar();
    }
  }
>>>>>>> alx-frontend-javascript/main
