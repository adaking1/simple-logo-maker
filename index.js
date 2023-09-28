const inquirer = require("inquirer");
const fs = require("fs/promises");
const {Circle, Square, Triangle} = require("./lib/shapes");
const textSvg = require("./lib/text-svg");
const isColor = require("is-color");

// This function initializes the app
// It holds the inquirer prompts and uses fs to write over logo.svg if it exists and creates it if it doesn't
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter text (3 characters or less)",
            // this makes sure the text is three characters or less. It does not proceed until a valid input is entered
            validate: (text) => {
                return text.length<=3 || "Text must be 3 characters or less";
            }
            
        },
        {
            // this "when" function makes it so this prompt is only asked if the previous prompt actually has input. It doesn't ask for the color of the text if there isn't any
            when: (input) => input.text.length !== 0,
            type: "input",
            name: "textColor",
            message: "What color do you want this text?",
            // this takes the user's input and removes spaces if there are any.
            // it also turns the input to lowercase if it wasn't already
            filter: (answer) => {
                if (answer.includes(" ")) {
                    const newString = answer.replaceAll(" ", "");
                    return newString.toLowerCase();
                }
                else {
                    return answer.toLowerCase();
                }
            },
            // this uses is-color package from npm to verify that the filtered input is a valid css color
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
            // this removes spaces from the users input and turns the string lowercase if it was not already
            filter: (answer) => {
                if (answer.includes(" ")) {
                    const newString = answer.replaceAll(" ", "");
                    return newString.toLowerCase();
                }
                else {
                    return answer.toLowerCase();
                }
            },
            // this then validates that the filtered color is a valid CSS color using "is-color"
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
        // the next two lines create an instance of the text class and sets the color of that text object
        const txt = new textSvg(data.text, data.shape);
        txt.setTextColor(data.textColor);
        // this creates an instance of the specified shape object and sets that object's color
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

        // this uses node's file system to write over a file or create a new file if it doesn't exist
        // it uses the shape and text objects' render() method to return the svg code for shape and text
        fs.writeFile("logo.svg", `<svg 
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        ${txt.render()}
        </svg>`);
        // this is a success message that is console logged if the app was successful
        console.log("Generated logo.svg");
    })
    // this catches any errors that may come up
    .catch((error) => {
        if (error.isTtyError) {
          console.error(error);
        } else {
          console.error("Please try again");
        }
    });

}

init();