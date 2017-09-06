Array.prototype.rotateClockwise = function (rotations) {
    let n = this.length;
    let normalisedRotations = rotations%n;
    if (normalisedRotations < 0) normalisedRotations += n;
    let breakPoint = n - normalisedRotations;
    return this.slice(breakPoint).concat(this.slice(0, breakPoint));
};
