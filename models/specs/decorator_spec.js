const assert = require('assert')
const Decorator = require('../decorator.js')

describe('Decorator', function() {

    let decorator;

    this.beforeEach( function() {
        decorator = new Decorator();
    })

    it('should have a paint stock', function() {
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 0);
    });
});