const fs = require('fs');

module.exports = function fileParser(file) {
    var lines = fs.readFileSync(file, 'utf8').toString().split('\r\n');
    return lines;
}