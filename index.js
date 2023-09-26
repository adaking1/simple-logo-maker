const inquirer = require("inquirer");
const fs = require("fs/promises");
const {Circle, Square, Triangle} = require("./lib/shapes");
const textSvg = require("./lib/render-svg");


inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter text (3 characters or less)",
        validate: (text) => 
            text.length<=3 || "Text must be 3 characters or less"
        
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want this text?"
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color do you want this shape?"
    }
])
.then((data) => {
    let shape;
    switch(data.shape) {
    case "Circle":
        shape = new Circle();
        break;
    case "Square":
        shape = new Square();
        break;
    case "Triangle":
        shape = new Triangle();
        break;
    }
    shape.setColor(data.shapeColor);
    const txt = new textSvg(data.text);
    txt.setTextColor(data.textColor);

    fs.writeFile("logo.svg", `<svg 
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${txt.render()}
    </svg>`);


    console.log(txt);
    console.log(data);
})



// fix tests to matxh edited svg render
// add dominant-baseline=middle only to triangle