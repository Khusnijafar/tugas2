let alphabet = ['A', 'B', 'C', 'D'];
let imperation = ['stop', 'walk', 'run', 'fly'];

function printer(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (imperation[i] === arr) {
            return alphabet[i];
        }

    }
};

console.log(printer('run'));