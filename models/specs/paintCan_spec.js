const assert = require('assert')
const PaintCan = require('../paintCan.js')

describe('paintCan', function() {
    let paintCan;

    this.beforeEach(function() {
        paintCan = new PaintCan(5);
    });

    it('should have a volume', function() {
        const actual = paintCan.volume;
        assert.strictEqual(actual, 5);
    });

    it('should be able to check if its empty', function() {
        const actual = paintCan.checkEmpty();
        assert.strictEqual(actual, false);
    })

    it('should be able to empty itself', function() {
        paintCan.emptySelf();
        const actual = paintCan.volume;
        assert.strictEqual(actual, 0)
    })
});