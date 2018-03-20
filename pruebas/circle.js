function Circle(x, y) {
    this.x = x;
    this.y = y;

    this.point = function () {
        console.log(`Point: ${this._called}`);
    }

/*     this.point = () => {
        console.log(`Point: ${this._called}`);
    } */
}

const circle = new Circle(3, 4);
setTimeout(circle.point, 1000);