'use strict';

let path = require('path');

let Animal = require(path.join(__dirname, '.', 'animal'));

class Unicorn extends Animal{
  constructor() {
    super();
    this.name = 'Unicorn'
  }

  battle(other){
    if(other.name == 'Dragon'){
      return false;
    }
    return true;
  }

}

module.exports = Unicorn;
