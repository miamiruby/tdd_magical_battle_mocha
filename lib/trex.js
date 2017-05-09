'use strict';

let path = require('path');

let Animal = require(path.join(__dirname, '.', 'animal'));

class Trex extends Animal{
  constructor() {
    super();
    this.name = 'Trex'
  }

  battle(other){
    if(other.name == 'Wearwolf'){
      return true;
    }
    return false;
  }

}

module.exports = Trex;
