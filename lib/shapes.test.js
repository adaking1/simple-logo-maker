const {Circle, Square, Triangle} = require("./shapes.js");

describe("Shapes", () => {

    describe("circleColor", () => {
        it("should return the color of a circle in svg", () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
        });
    });

    describe("squareColor", () => {
        it("should return the color of a square in svg", () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect x="75" y="25" height="150" width="150" fill="red"/>');
        });
    });

    describe("triangleColor", () => {
        it("should return the color of a triangle in svg", () => {
            const shape = new Triangle();
            shape.setColor("orange");
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="orange"/>`);

        });
    });
});