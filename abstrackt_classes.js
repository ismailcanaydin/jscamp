let Person = {
    name: "None",
    email: "None",
    sendEmail: function(){
        alert("Mail sent to : " + this.name + "/" + this.email)
    }
}

function Customer(name,email){
    this.name= name;
    this.email=email;
}

function Employee(name,email){
    this.name=name;
    this.email=email;
}

Customer.prototype=Person;
let someCustomer=new Customer("İsmail Can", "ismailcanaydin@gmali.com");
someCustomer.sendEmail();

Employee.prototype=Person;
let someEmployee=new Employee("Ayşegül", "aysegulyaman@gmail.com");
someEmployee.sendEmail();