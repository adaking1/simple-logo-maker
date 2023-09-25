const Shapes = require("./shapes");

describe("Shapes", () => {

    describe("color", () => {
        it("should return a the color of the given shape", () => {
            const shape = new Shapes();
            shape.setColor("blue");
            expect(shape.render()).toEqual();
        })
    });
});