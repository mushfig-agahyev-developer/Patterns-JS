
class Complaints {
    constructor() {
      this.complaints = [];
    }
  
    reply(complaint) {}
  
    add(complaint) {
      this.complaints.push(complaint);
      return this.reply(complaint);
    }
  }
  
  class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
      return `Product Complainment : ${id}: ${customer}: (${details})`;
    }
  }
  
  class ServiceComplaints extends Complaints {
      reply({id, customer, details}) {
      return `Server Complainment : ${id}: ${customer}: (${details})`;
    }
  }
  
  class ComplaintRegistry {
    register(customer, type, details) {
      const id = Date.now();
      let complaint;
  
      if (type === "service") {
        complaint = new ServiceComplaints();
      } else {
        complaint = new ProductComplaints();
      }
  
      return complaint.add({id, customer, details});
    }
  }
  
  const registry = new ComplaintRegistry();
  console.log(registry.register("Bean", "service", "My liked can not saved"));
  const _elena = registry.register("Elena", "product", "My product is no same color");
  console.log(_elena);