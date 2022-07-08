class Car{
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory{
    constructor() {
        this.cars = [];
    }

    create(model,price){
        const candidate = this.getCandidate(model);

        if(candidate){
          return candidate;
        }

        const newCar = new Car(model,price);
        this.cars.push(newCar);
        return newCar;
    }

    getCandidate(model)
    {
        return this.cars.find(r => r.model === model);
    }
}

const _factory = new CarFactory();
const bmwx6 = _factory.create('BMW', 100000);
const QX56 = _factory.create('Audi', 120000);
const bmwx3 = _factory.create('BMW', 80000);
console.log(bmwx6);
console.log(QX56);
console.log(bmwx3);