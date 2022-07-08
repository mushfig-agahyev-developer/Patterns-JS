const car = {
    wheeeles:4,

    init(){
        console.log(`I have ${this.wheeeles} wheeles, my owner ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner:{
        value:'Nick'
    }
})

console.log(carWithOwner.__proto__ === car);
carWithOwner.init();