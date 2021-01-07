let canvas_Element = document.getElementById('mycanvas');
let context = canvas_Element.getContext('2d')
canvas_Element.width = window.innerWidth;
canvas_Element.height = window.innerHeight;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startangle = startAngle
        this.endangle = endAngle
        this.color = fillColor
    }
    draw() {

        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
    }
}
let createCircle = function () {
    let randox_x = Math.random() * window.innerWidth;
    let randox_y = Math.random() * window.innerHeight;
    let random_radius = Math.floor(Math.random() * 100);
    let random_color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';


    const circleObject = new Circle(randox_x, randox_y, random_radius, 0, 2 * Math.PI, random_color);
    circleObject.draw()
}
setInterval(createCircle, 100)

//to draw the circles with cursor move
window.addEventListener('mousemove', function (event) {
    let randox_x = event.x;
    let randox_y = event.y;
    let random_radius = Math.floor(Math.random() * 100);
    let random_color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';


    const circleObject = new Circle(randox_x, randox_y, random_radius, 0, 2 * Math.PI, random_color);
    circleObject.draw()
})


