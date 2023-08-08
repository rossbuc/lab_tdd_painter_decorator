class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
        this.painted = false;
    }

    paintRoom() {
        this.painted = true;
    }
}

module.exports = Room