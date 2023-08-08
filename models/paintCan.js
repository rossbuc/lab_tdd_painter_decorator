const PaintCan = function (volume) {
    this.volume = volume;
};

PaintCan.prototype.checkEmpty = function() {
    if (this.volume == 0) {
        return true;
    }
    else {
        return false;
    };
};

module.exports = PaintCan