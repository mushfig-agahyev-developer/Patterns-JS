class CustomSum{
    constructor(initialValue = 10) {
        this.sum = initialValue;
    }

    add(value){
     this.sum += value;
        return this;
    }
}
const sum1 = new CustomSum();
console.log('Sum : ', sum1.add(10).add(20).add(60).sum);