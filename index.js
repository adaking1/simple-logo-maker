const inquirer = require("inquirer");
const fs = require("fs/promises");
const {Circle, Square, Triangle} = require("./lib/shapes");
const textSvg = require("./lib/text-svg");
const isColor = require("is-color");

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter text (3 characters or less)",
            validate: (text) => {
                return text.length<=3 || "Text must be 3 characters or less";
            }
            
        },
        {
            when: (input) => input.text.length !== 0,
            type: "input",
            name: "textColor",
            message: "What color do you want this text?",
            filter: (answer) => {
                if (answer.includes(" ")) {
                    const newString = answer.replaceAll(" ", "");
                    return newString.toLowerCase();
                }
                else {
                    return answer.toLowerCase();
                }
            },
            validate: (color) => {
                if (color.length > 0) {
                    return isColor(color) || "Please enter a valid color"
                }
                else{
                    return color.length > 0 || "Enter a color"
                }
            }
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
            message: "What color do you want this shape?",
            validate: (color) => {
                return color.length > 0 || "Enter a color"
            },
            filter: (answer) => {
                if (answer.includes(" ")) {
                    const newString = answer.replaceAll(" ", "");
                    return newString.toLowerCase();
                }
                else {
                    return answer.toLowerCase();
                }
            },
            validate: (color) => {
                if (color.length > 0) {
                    return isColor(color) || "Please enter a valid color"
                }
                else{
                    return color.length > 0 || "Enter a color"
                }
            }
        }
    ])
    .then((data) => {
        let shape;
        const txt = new textSvg(data.text, data.shape);
        txt.setTextColor(data.textColor);
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

        fs.writeFile("logo.svg", `<svg 
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        ${txt.render()}
        </svg>`);

        console.log("Generated logo.svg");
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.error(error);
        } else {
          console.error("Please try again");
        }
    });

}

init();



// add comments
// make demo video and add to readme