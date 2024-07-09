const Prompts = require('./lib/prompts.js')

const prompts = new Prompts()

class Circle {
    constructor () {
        this.text
        this.textColor
        this.shape
        this.shapeColor
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
    }
}

module.exports = Circle