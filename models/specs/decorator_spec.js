const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paintCan.js')

describe('Decorator', function() {

    let decorator;

    this.beforeEach( function() {
        decorator = new Decorator();
    })

    it('should have a paint stock', function() {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can to the stock', function() {
        const paintCan = new PaintCan(10);
        decorator.addCanToStock(paintCan);
        assert.deepStrictEqual([paintCan], decorator.paintStock);
    });

    it('should be able to calculate the total litres in stock', function() {
        const paintCan = new PaintCan(10);
        decorator.addCanToStock(paintCan);
        decorator.addCanToStock(paintCan);
        decorator.addCanToStock(paintCan);
        decorator.addCanToStock(paintCan);
        decorator.addCanToStock(paintCan);
        console.log(decorator.paintStock)
        const actual = decorator.calcLitresInStock();
        assert.strictEqual(actual, 50);
    });
});