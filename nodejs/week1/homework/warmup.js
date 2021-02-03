console.log("inside warmup file");
//Create a class called Circle. It should have one property called radius.
class Circle {

    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        const diameter = 2 * this.radius;
        console.log(`Diameter of the circle is ${diameter}`);
    }
    getCircumference() {
        const circumference = 2 * Math.PI * this.radius;
        console.log(`Circumference of the circle is : ${circumference}`);

    }
    getArea() {
        const area = Math.PI * (this.radius * this.radius);
        console.log(`Area of the circle is : ${area}`);
    }

}

const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference();
circle.getArea();

const circle2 = new Circle(20);
circle2.getDiameter();
circle2.getCircumference();
circle2.getArea();

const circle3 = new Circle(8);
circle3.getDiameter();
circle3.getCircumference();
circle3.getArea();

