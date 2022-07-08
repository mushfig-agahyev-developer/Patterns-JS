

class CustomIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }[Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index ++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {value: void 0, done: true}
                }
            }
        }
    }
}


const iterator = new CustomIterator(['This', 'is', 'iterator']);

/** Napishem etot idea s pomosu generator-a */
function* generator (collection) {
    let index = 0;
    while (index < collection.length) {
        yield collection[index++];
    }
}
const _generator = generator(['This', 'is', 'iterator']);

// console.log(_generator.next().value);
// console.log(_generator.next().value);
// console.log(_generator.next().value);
// console.log(_generator.next().value);
/** Napishem etot idea s pomosu generator-a */

for (const value of _generator) {
    console.log(`Value : `, value);
}

