const fs = require('fs')
const Circle = require('./circle.js')
const inquirer = require('inquirer')

class Prompts {
    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter up to three characters for your logo:",
                    name: "text"
                },
                {
                    type: "input",
                    message: "What color would you like your logo text? Please enter a color keyword or a hex code:",
                    name: "textColor"
                },
                {
                    type: "list",
                    name: "shape",
                    message: "What shape would you like to use?",
                    choices: ['Circle', 'Squaure', 'Triangle']
                },
                {
                    type: "input",
                    message: `What color would you like your ${this.shape} to be? Please enter a color keyword or a hex code:`,
                    name: "shapeColor"
                }
            ]).then(({ shape }) => {
                if (shape === 'Circle') {
                    return Circle.render()
                }
            })
    }
}

module.exports = Prompts;