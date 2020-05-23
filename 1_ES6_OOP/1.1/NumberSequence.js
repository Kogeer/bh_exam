class NumberSequence {
    constructor(start,end) {
        this.start = start;
        this.end = end;
        this.actual = start;
    }

    current() {
        return this.actual;
    }

    next() {
        if(this.start === this.end) {
            return undefined;
        }
        this.actual += 1;
        return this.actual;
    }
}

const numseq = new NumberSequence(3,6);

// console.log(numseq.actual());
// console.log(numseq.next());
// console.log(numseq.actual());

module.exports = NumberSequence;