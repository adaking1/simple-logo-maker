class Text {
    constructor(text, shape) {
        this.color = "";
        this.text = text;
        this.shape = shape;
    }
    setTextColor(color) {
        this.color = color;
    }
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

module.exports = Text;