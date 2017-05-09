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

describe('Dragon', () => {
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

    it('is an dragon', () => {
      // This will fail if "dragon.name" does not equal "Dragon".
      dragon.name.should.equal("Dragon");
    });

    it('Dragons beat everything except wearwolves', () => {
      dragon.battle(animal).should.equal(true);
      dragon.battle(unicorn).should.equal(true);
      dragon.battle(wearwolf).should.equal(false);
      dragon.battle(trex).should.equal(true);
    });

  });
});
