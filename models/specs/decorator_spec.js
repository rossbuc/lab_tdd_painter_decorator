const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paintCan.js')
const Room = require('../room.js')

describe('Decorator', function() {

    let decorator;

    this.beforeEach( function() {
        decorator = new Decorator();
    })

    it('should have a paint stock', function() {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });

    describe('stock', function(){

        let paintCan;
    
        this.beforeEach( function() {
            paintCan = new PaintCan(10);
        })
    
        it('should be able to add a can to the stock', function() {
            decorator.addCanToStock(paintCan);
            assert.deepStrictEqual([paintCan], decorator.paintStock);
        });
    
        it('should be able to calculate the total litres in stock', function() {
            decorator.addCanToStock(paintCan);
            decorator.addCanToStock(paintCan);
            decorator.addCanToStock(paintCan);
            decorator.addCanToStock(paintCan);
            decorator.addCanToStock(paintCan);
            const actual = decorator.calcLitresInStock();
            assert.strictEqual(actual, 50);
        });
    });

    describe('rooms', function() {
        let room;
        let paintCan;

        this.beforeEach( function() {
            room = new Room("Living Room", 120);
            paintCan = new PaintCan(60);
        });

        it('should be able to determine if it can paint a room or not', function() {
            const actual = decorator.canPaintRoom(room);
            assert.strictEqual(actual, false);
        });

        it('should be able to paint a room', function() {
            decorator.addCanToStock(paintCan);
            decorator.addCanToStock(paintCan);
            decorator.addCanToStock(paintCan);
            decorator.paintRoom(room);
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, [paintCan]);
        })
    });
});

