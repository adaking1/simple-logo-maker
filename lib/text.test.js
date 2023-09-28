const Text = require("./text-svg");

describe("Text", () => {
    describe("text", () => {
        it("should return the given text in svg format", () => {
            const text = new Text("ADK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="50" fill="">ADK</text>`);
        });
    });


    describe("Color", () => {
        it("should return the color of the given text in svg format", () => {
            const text = new Text("ADK", "Circle");
            text.setTextColor("orange");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="50" fill="orange">ADK</text>`);
        });
    });


    describe("FontSize", () => {
        it("should return the font size for the given text in svg", () => {
            const text = new Text("A", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="75" fill="">A</text>`);
        });
    });

    describe("FontSize", () => {
        it("should return the font size for the given text in svg", () => {
            const text = new Text("AK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="60" fill="">AK</text>`);
        });
    });

    describe("FontSize", () => {
        it("should return the font size for the given text in svg", () => {
            const text = new Text("ADK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="50" fill="">ADK</text>`);
        });
    });


    describe("DominantBaseline", () => {
        it("should return the value for dominant-baseline", () => {
            const text = new Text("ADK", "Square");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });

    describe("DominantBaseline", () => {
        it("should return the value for dominant-baseline", () => {
            const text = new Text("ADK", "Triangle");
            expect(text.render()).toEqual(`<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });


    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("ADK", "Circle");
            expect(text.render()).toEqual(`<text x="150" y="115" dominant-baseline="no-change" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });

    describe("Y", () => {
        it("should return the y value for the given text placement", () => {
            const text = new Text("ADK", "Triangle");
            expect(text.render()).toEqual(`<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="">ADK</text>`)
        });
    });
})