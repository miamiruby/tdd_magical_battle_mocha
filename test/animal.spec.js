'use strict';

// Import chai.
let chai = require('chai'),
  path = require('path');

// use chai "should" style assertions
chai.should();

// Import the various creatures class.
let Animal = require(path.join(__dirname, '../lib', 'animal'));
let Dragon = require(path.join(__dirname, '../lib', 'dragon'));
let Unicorn = require(path.join(__dirname, '../lib', 'unicorn'));
let Trex = require(path.join(__dirname, '../lib', 'trex'));
let Wearwolf = require(path.join(__dirname, '../lib', 'wearwolf'));

describe('Animal', () => {
  describe('fights magical battles', () => {
    let animal;
    let enemy;
    let dragon;
    let unicorn;
    let trex;
    let wearwolf;

    beforeEach(() => {
      // Create a new Animal object before every test.
      animal = new Animal();
      enemy = new Animal();
      dragon = new Dragon();
      unicorn = new Unicorn();
      trex = new Trex();
      wearwolf = new Wearwolf();
    });

    it('is an Animal', () => {
      // This will fail if "animal.name" does not equal "Animal".
      animal.name.should.equal("Animal");
    });

    it('that battle other Animals always lose', () => {
      // This will fail if "animal.battle(enemy)" does not equal false.
      animal.battle(enemy).should.equal(false);
    });

    it('that battle other Dragons always lose', () => {
      animal.battle(dragon).should.equal(false);
    });

    it('that battle other Unicorn always lose', () => {
      animal.battle(unicorn).should.equal(false);
    });

    it('that battle Trex\'s always lose', () => {
      animal.battle(trex).should.equal(false);
    });

    it('that battle Wearwolves always lose', () => {
      animal.battle(wearwolf).should.equal(false);
    });

  });
});
