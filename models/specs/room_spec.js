const assert = require('assert'); 
const Room = require('../room.js');

describe('Room', function () {
    let room;

    this.beforeEach( function () {
        room = new Room("Living Room", 120);
    });

    it('should have a name', function () {
        const actual = room.name;
        assert.strictEqual(actual, "Living Room");
    });

    it('should have an area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 120);
    });

    it('should know if its been painted or not', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })

    it('should be able to be painted', function () {
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })
});