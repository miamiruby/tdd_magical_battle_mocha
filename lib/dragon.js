'use strict';

let path = require('path');

let Animal = require(path.join(__dirname, '.', 'animal'));

class Dragon extends Animal{
  constructor() {
    super();
    this.name = 'Dragon'
  }

  battle(other){
    if(other.name == 'Wearwolf'){
      return false;
    }
    return true;
  }

}

module.exports = Dragon;
