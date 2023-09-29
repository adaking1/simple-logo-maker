const Text = require("./text-svg");

// this test suite holds the tests for all of the svg text parameters that are being manipulated
describe("Text", () => {

    // this tests for actual text output 
    describe("text", () => {
        it("should return the given text in svg format", () => {
            const text = new Text("ADK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" text-anchor="middle" font-size="50" fill="">ADK</text>`);
        });
    });

    // this tests for the text's color
    describe("Color", () => {
        it("should return the color of the given text in svg format", () => {
            const text = new Text("ADK", "Circle");
            text.setTextColor("orange");
            expect(text.render()).toEqual(`<text x="150" y="115" text-anchor="middle" font-size="50" fill="orange">ADK</text>`);
        });
    });

    // the next three tests test for font size. If there are three characters the font is 50px, two characters is 60px, and one is 75px.
    describe("FontSize", () => {
        it("should return the font size for the given text in svg", () => {
            const text = new Text("A", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="120" text-anchor="middle" font-size="75" fill="">A</text>`);
        });
    });

    describe("FontSize", () => {
        it("should return the font size for the given text in svg", () => {
            const text = new Text("AK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" text-anchor="middle" font-size="60" fill="">AK</text>`);
        });
    });

    describe("FontSize", () => {
        it("should return the font size for the given text in svg", () => {
            const text = new Text("ADK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" text-anchor="middle" font-size="50" fill="">ADK</text>`);
        });
    });

    // these two test for the parameter "y". This controls where the texts appears on the y axis in the viewport
    // for a triangle this value should be "125" so the text sits slightly lower that in the circle and square whose value for this should be "115"
    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("ADK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });

    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("ADK", "Square");
            expect(text.render()).toEqual(`<text x="150" y="115" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });

    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("ADK", "Triangle");
            expect(text.render()).toEqual(`<text x="150" y="140" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });

    // the next three test for the y-axis value when there is only one letter of text
    // When there was one character of text inside a circle or quare, the text was slightly too high, so I made the y-axis for this scenario a littler lower
    // triangle should stay the same at 140px
    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("A", "Triangle");
            expect(text.render()).toEqual(`<text x="150" y="140" text-anchor="middle" font-size="75" fill="">A</text>`)
        });
    });

    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("A", "Cirlce");
            expect(text.render()).toEqual(`<text x="150" y="120" text-anchor="middle" font-size="75" fill="">A</text>`)
        });
    });

    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("A", "Square");
            expect(text.render()).toEqual(`<text x="150" y="120" text-anchor="middle" font-size="75" fill="">A</text>`)
        });
    });

})