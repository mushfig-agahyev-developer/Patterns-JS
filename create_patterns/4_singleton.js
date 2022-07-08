
class DataBase {
    constructor(connectionString) {
      if (DataBase.exists) {
        return DataBase.instance;
      }
  
      DataBase.instance = this;
      DataBase.exists = true;
      this.connectionString = connectionString;
    }
  
    getData() {
      return this.connectionString;
    }
  }
  
  const mongo = new DataBase('MongoDB');
  console.log(mongo.getData());

  console.log('Get twice instance');
  
  const mySql = new DataBase('MySQL');
  console.log(mySql.getData());