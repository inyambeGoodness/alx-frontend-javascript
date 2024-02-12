export default class Airport {
<<<<<<< HEAD
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
=======
    constructor(name, code) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      } else if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      this._name = name;
      this._code = code;
    }
  
    get [Symbol.toStringTag]() {
      return `${this._code}`;
    }
  }
>>>>>>> alx-frontend-javascript/main
