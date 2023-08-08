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
});