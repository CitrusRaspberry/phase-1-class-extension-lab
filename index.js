class Polygon {
  constructor(integers) {
    this.integers = integers;
  }
  get countSides() {
    return this.integers.length;
  }
  get perimeter() {
    return this.integers.reduce((sum, side) => {
      return sum + side;
    });
  }
}
class Triangle extends Polygon {
  get isValid() {
    const threeSides = this.countSides === 3;
    const [sideA, sideB, sideC] = [this.integers[0], this.integers[1], this.integers[2]];
    const correctSideLengths = (sideA < sideB + sideC) && (sideB < sideA + sideC) && (sideC < sideA + sideB);
    return threeSides && correctSideLengths;
  }
}
class Square extends Polygon {
  get isValid() {
    const fourSides = this.countSides === 4;
    const equalSides = this.integers.reduce((validator, side) => validator && side === this.integers[0]);
    return fourSides && equalSides;
  }
  get area() {
    return this.integers[0] ** 2;
  }
}
