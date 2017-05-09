'use strict';

let path = require('path');

let Animal = require(path.join(__dirname, '.', 'animal'));

class Wearwolf extends Animal{
  constructor() {
    super();
    this.name = 'Wearwolf'
  }

  battle(other){
    if(other.name == 'Dragon'){
      return true;
    }
    return false;
  }

}

module.exports = Wearwolf;
