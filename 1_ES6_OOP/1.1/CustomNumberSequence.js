const NumberSequence = require('./NumberSequence.js');

class CustomNumberSequence extends NumberSequence {
    constructor(start,end,next) {
        super(start,end)
        this.nextElem = next;
    }

    next() {
        const num = this.nextElem(this.actual);
        if(num > this.end) {
            return undefined;
        }
        this.actual = num;
        return this.actual;
    }
}

const nextElem = elem => {
    const prevElem = elem;
    for(let i = 0; i < 4; i++) {
        if(elem %3 === 0 && prevElem !== elem) {
            return elem;
        }
        elem += 1;
    }
}

const customSequence = new CustomNumberSequence(1,9,nextElem);
console.log(customSequence.next());
console.log(customSequence.next());
console.log(customSequence.next());
console.log(customSequence.next());
console.log(customSequence.current());