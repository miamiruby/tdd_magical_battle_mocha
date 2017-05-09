'use strict';

// Import chai.
let chai = require('chai'),
  path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the various creatures class.
let Animal = require(path.join(__dirname, '../lib', 'animal'));
let Dragon = require(path.join(__dirname, '../lib', 'dragon'));
let Unicorn = require(path.join(__dirname, '../lib', 'unicorn'));
let Trex = require(path.join(__dirname, '../lib', 'trex'));
let Wearwolf = require(path.join(__dirname, '../lib', 'wearwolf'));

describe('Unicorn', () => {
  describe('fights magical battles', () => {
    let animal;
    let enemy;
    let dragon;
    let unicorn;
    let trex;
    let wearwolf;

    beforeEach(() => {
      // Create a new creature objects before every test.
      animal = new Animal();
      enemy = new Animal();
      dragon = new Dragon();
      unicorn = new Unicorn();
      trex = new Trex();
      wearwolf = new Wearwolf();
    });

    it('is an unicorn', () => {
      // This will fail if "unicorn.name" does not equal "Unicorn".
      unicorn.name.should.equal("Unicorn");
    });

    it('Unicorn\'s beat everything except dragons', () => {
      unicorn.battle(animal).should.equal(true);
      unicorn.battle(dragon).should.equal(false);
      unicorn.battle(wearwolf).should.equal(true);
      unicorn.battle(trex).should.equal(true);
    });

  });
});
