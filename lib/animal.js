'use strict';

class Animal {
  constructor() {
    this.name = 'Animal'
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('"name" must be a string.');
    }

    this._name = value;
  }

  battle(other){
    return false;
  }

}

module.exports = Animal;
