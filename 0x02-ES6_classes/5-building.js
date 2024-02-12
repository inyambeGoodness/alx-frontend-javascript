export default class Building {
<<<<<<< HEAD
  constructor(sqft = 0) {
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
=======
    constructor(sqft = 0) {
      if (this.constructor !== Building
          && typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
  
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  }
>>>>>>> alx-frontend-javascript/main
