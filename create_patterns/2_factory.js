class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 52;
    }
}

class StandartMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 200;
    }
}

class PremiuoMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static types = {
        simple: SimpleMemberShip,
        standard: StandartMemberShip,
        premium: PremiuoMemberShip
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.types[type] || MemberFactory.list.simple;
        const member = new MemberShip(name);
        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}) ${this.cost}`);
        }
        return member;
    }
}

const _factory = new MemberFactory();

const members = [
    _factory.create('Lale', 'simple'),
    _factory.create('Kerim', 'standard'),
    _factory.create('Malik', 'premium')
]

console.log(members);

console.log('-------------define()-------------------------');
members.forEach(r => {
    r.define();
});

//    console.log(members);
//    console.log('-------------MemberFactory.types-------------------------');
//    console.log(MemberFactory.types);

//    console.log('------------------MemberFactory.types.simple--------------------');
//    console.log(MemberFactory.types.simple); //[class SimpleMemberShip]

//    console.log('-----------------MemberFactory.types["simple"]---------------------');
//    console.log(MemberFactory.types['simple']); //[class SimpleMemberShip]
