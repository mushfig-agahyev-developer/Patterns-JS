class Server{
    constructor(ip, port) {
        this.ip = ip,
        this.port = port
    }

        get url()
        {
            return `https://${this.ip}:${this.port}`
        };
}

function aws(server){
    server.isAws = true;
    server.awsInfo = function(){
        return server.url;
    };

    return server;
};

function azure(server){
    server.isAzure = true;
    server.port += 500;
    return server;
}

console.log('Base CLASS :  Server');
const _baseServer = new Server('127.00.00.01', 3000);
console.log(_baseServer.url);

console.log('DECORATOR : AWS');
const s1 = aws(new Server('12.25.45.85', 8080));
console.log(s1.isAws);
console.log(s1.awsInfo());

console.log('DECORATOR : AZURE');
const _azure = azure(new Server('127.00.00.01', 8080));
console.log('isAzure :', _azure.isAzure);
console.log(_azure.url);
