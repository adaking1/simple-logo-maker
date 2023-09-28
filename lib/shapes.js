// this is the parent class that Circle(), Triangle(), and Square() extend from
// Those subclasses inherit setColor() from this class
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// this subclass renders the svg for a circle
class Circle extends Shape {
    render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

// this subclass renders the svg for a square
class Square extends Shape {
    render() {
    return `<rect x="75" y="25" height="150" width="150" fill="${this.color}"/>`
    }
}

// this subclass renders the svg for a triangle
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

// this exports Circle(), Square(), and Triangle() to be used in other files
module.exports = {
    Circle, 
    Square, 
    Triangle};
