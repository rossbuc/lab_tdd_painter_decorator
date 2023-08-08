class Decorator {
    constructor() {
        this.paintStock = [];
    };

    addCanToStock(paintCan) {
        this.paintStock.push(paintCan);
    };
};

module.exports = Decorator