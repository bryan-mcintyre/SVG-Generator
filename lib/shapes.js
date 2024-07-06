const fs = require('fs')
const inquirer = require('inquirer')

class Prompts {
    constructor() {

    }

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
            ])
    }
}

module.exports = Prompts;