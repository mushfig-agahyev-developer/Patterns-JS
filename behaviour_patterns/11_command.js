class Custom_Math {
    constructor(initialValue = 0) {
        this.num = initialValue;
    }

    add(number) {
        return this.num + number;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(object) {
        this.object = object;
        this.commandsExecuted = [];
    }
    execute(command) {
        this.commandsExecuted.push(command);
        return this.object[command]();
    }
}
const data = new Custom_Math(25);
const simple = new Command(new Custom_Math(15));

console.log(simple.object.square());

console.log(simple.execute('square'));
console.log(simple.execute('cube'));

// simple.execute('square');
// simple.execute('cube');

// console.log('-------------------------');
// console.log(simple);

// public int testCount(Action<string, string> params)
// {
//     return params(15);
// }
