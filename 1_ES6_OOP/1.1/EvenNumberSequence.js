const NumberSequence = require('./NumberSequence.js');

class EvenNumberSequence extends NumberSequence{
    constructor(start,end) {
        super(start,end);
    }

    next() {
        let num = super.next();
        if(this.actual === this.end || num === this.end) {
            return undefined;
        }
        if(num %2 === 0) {
            return this.actual
        }
        num = super.next();
        return this.actual;
    }
}

const test = new EvenNumberSequence(1,9);
console.log(test);
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
