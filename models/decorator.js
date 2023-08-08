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
        for (let paintCan in this.paintStock) {
            litresInStock += this.paintStock[paintCan].volume;
        };
        return litresInStock;
    };
};

module.exports = Decorator