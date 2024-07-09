const Circle = require('./lib/circle.js')
const fs = require('fs')

const writeToFile = function () {
    fs.writeFile('logo.svg', Circle.render())
}

module.exports = writeToFile()