class User {
    constructor(name) {
        this.name = name;
        this.room = room;
    }

    send(message, to){
        this.room.send(message, this, to)
    }
    receive(message, from){
       console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom{
    constructor(){
        this.users = {};
    }
    register(){
        this.users[this.users.name] = user;
        user.room = this;
    }

    send(message, from, to){
        if(to){
            to.receive(message, from)
        }else{
            Object.keys(this.users).forEach(key => {
                if(this.users[keys] !== from){
                    this.users[key].receive(message, from); 
                }
            })
        }
    }
}