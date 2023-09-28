// this class takes in text and shape as arguments and renders svg for that text
class Text {
    constructor(text, shape) {
        this.color = "";
        this.text = text;
        this.shape = shape;
    }
    // this method sets the color for the text
    setTextColor(color) {
        this.color = color;
    }
    // this method renders the the text in svg
    // it determines the text's dominant-baseline and y value based on the selected shape
    // it also determines the text's font size based on the number of characters in the text
    render() {
        let dBaseline = "no-change";
        let yText = 115;
        if (this.shape === "Triangle") {
            dBaseline = "middle";
            yText = 125;
        }
        if (this.text) {
            let fontSize;
            switch(this.text.length) {
            case 1:
                fontSize = 75;
                break;
            case 2:
                fontSize = 60;
                break
            default:
                fontSize = 50;
            }
        return`<text x="150" y="${yText}" dominant-baseline="${dBaseline}" text-anchor="middle" font-size="${fontSize}" fill="${this.color}">${this.text}</text>` ;

        }
        else {
            return "";
        }
        
    }
}

// this allows the text class to be used outside this file
module.exports = Text;