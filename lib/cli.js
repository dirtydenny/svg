const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");

class CLI {
  
  run() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Please input your text',
      }
      {
        type: 'input',
        name: 'textColor',
        message: 'Please provide text color',
      }
      {
        type: 'list',
        name: 'shape',
        message: 'Please choose the shape for your design.',
        choices: ['Circle', 'Square', 'Triangle'],
      }
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please chose the color for your design.',
      }
    ])
  }
}