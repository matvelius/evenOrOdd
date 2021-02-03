var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var lineIndex = 0

function isValueEven(value) {
    return parseInt(value) % 2 == 0
}

rl.on('line', function (line) {
    if (lineIndex == 0) {
        let values = line.split(" ");
        var allValuesHaveSameParity = isValueEven(values[0]) == isValueEven(values[1]) && isValueEven(values[0]) == isValueEven(values[2])
        if (allValuesHaveSameParity) {
            rl.close()
            console.log("WIN")
        } else {
            rl.close()
            console.log("FAIL")
        }
    }
})

