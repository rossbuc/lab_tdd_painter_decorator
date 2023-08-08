const PaintCan = require('./paintCan.js')
class Decorator {
    constructor() {
        this.paintStock = [];
    };

    addCanToStock(paintCan) {
        this.paintStock.push(paintCan);
    };

    calcLitresInStock() {
        let litresInStock = 0;
        for (let paintCan of this.paintStock) {
            litresInStock += paintCan.volume;
        };
        return litresInStock;
    };

    canPaintRoom(room) {
        let litresInStock = this.calcLitresInStock();
        if (litresInStock >= room.area) {
            return true;
        }
        else {
            return false
        };
    }

    paintRoom(room) {
        if (this.canPaintRoom) {
            console.log("Youre painting the room")
            room.painted == true;
            let requiredVolume = room.area;
            let cansUsed = [];

            for (let can of this.paintStock) {
                if (requiredVolume > 0 && can.volume <= requiredVolume) {
                    requiredVolume -= can.volume;
                    cansUsed.push(can);
                }
                else if (requiredVolume > 0 && can.volume > requiredVolume) {
                    can.volume -= requiredVolume;
                    requiredVolume = 0;
                };
            };

            for (let can of this.paintStock) {
                this.paintStock.splice(can, 1);
            };
        };
    };
};

module.exports = Decorator