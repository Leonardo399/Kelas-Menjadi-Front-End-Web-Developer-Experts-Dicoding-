class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
  }
}

const kendaraan = new Vehicle();