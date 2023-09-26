class Text {
    constructor(text) {
        this.color = "";
        this.text = text;
    }
    setTextColor(color) {
        this.color = color;
    }
    render() {
        if (this.text) {
            return`<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.color}">${this.text}</text>` ;
        }
    }
}

module.exports = Text;