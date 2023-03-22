const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { Triangle, Square, Circle } = require("./shapes");
class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Please input your text",
        },
        {
          type: "input",
          name: "textColor",
          message: "Please provide text color",
        },
        {
          type: "list",
          name: "shapeVar",
          message: "Please choose the shape for your design.",
          choices: ["Circle", "Square", "Triangle"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Please chose the color for your design.",
        },
      ])
      .then(({ text, textColor, shapeVar, shapeColor }) => {
        let shape;
        if (shapeVar === "Circle") {
          shape = new Circle();
        } else if (shapeVar === "Square") {
          shape = new Square();
        } else if (shapeVar === "Triangle") {
          shape = new Triangle();
        }
        shape.setColor(shapeColor);
        shape.setText(text);
        shape.setTextColor(textColor);
        // write file
        return writeFile("logo.svg", shape.render());
      })
      .then(() => {
        console.log("Logo.svg created");
      })
      .catch((error) =>{
        console.log(error);
        console.log("Your code is broken, fix it!");
      });
  }
}

module.exports = CLI;
