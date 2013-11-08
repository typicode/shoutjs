var assert = require('assert'),
    shout = require('./index');

describe('shout', function() {
  describe('_flatten', function() {
    it('should flatten array', function() {
      assert.deepEqual(shout._flatten([1, [2], 3]), [1, 2, 3]);
    });
  });

  describe('_isOption', function() {
    it('should return true if string starts with "-"', function() {
      assert(shout._isOption('-a'));
    });

    it('should return false if string starts with something else than "-"', function() {
      assert(!shout._isOption('a'));
    });
  });

  describe('_stripOptions', function() {
    it('should remove strings starting with "-" from array', function() {
      assert.deepEqual(shout._stripOptions('-a', 'b', '-c'), ['b']);
    });
  });

  describe('_getSources', function() {
    it('should return the array without the last element (which should be the dest)', function() {
      assert.deepEqual(shout._getSources('a', 'b', 'c'), ['a', 'b']);
    });
  });

  describe('_getDest', function() {
    it('should return the the last element of the array', function() {
      assert.deepEqual(shout._getDest('a', 'b', 'c'), 'c');
    });
  });

  it('should have properties logan, cp, rm, mv, mkdir, exec', function() {
    ['logan', 'cp', 'rm', 'mv', 'mkdir', 'to', 'exec'].forEach(function(property) {
      assert(shout.hasOwnProperty(property));
    });
  });
});