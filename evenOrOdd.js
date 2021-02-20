let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function isValueEven(value) {
    return parseInt(value) % 2 == 0
}

rl.on('line', function (line) {

    let values = line.split(" ");
    let allValuesHaveSameParity = isValueEven(values[0]) == isValueEven(values[1])
        && isValueEven(values[0]) == isValueEven(values[2])
    if (allValuesHaveSameParity) {
        console.log("WIN")
    } else {
        console.log("FAIL")
    }
})

