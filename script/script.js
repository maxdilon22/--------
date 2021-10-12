'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}


class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, text, bgColor) {
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const square = new Rectangle(10,10),
      long = new Rectangle(20,100),
      div = new ColoredRectangleWithText(25,10,'salam','#fff');
div.showMyProps();
console.log(div.calcArea());