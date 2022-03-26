import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import Customer from "../models/customer.js"
import { UserService } from "../services/userService.js"
import CustomerService from "../services/customerService.js"

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)
let customerService = new CustomerService(logger1);

export default class UserCustomerAddModel {

    userCustomerAddModel() {
        console.log("userCustomerAddModel yüklendi.")

        let user1 = new User(1, "İsmail Can", "Aydın", "Alanya")
        let user2 = new User(2, "Ayşegül", "Yaman", "Gazipaşa")
        customerService.addCustomer(user1)
        customerService.addCustomer(user2)
        //console.log(userService.getById(2))
        //console.log(userService.list())

        customerService.loadCustomer();

        let customerToAdd = new Customer(10, "Gülten", "Aydın", "Hozik", "49", "12323");
        customerToAdd.type = "customer";

        customerService.addCustomer(customerToAdd)

        console.log(userService.customers)
        console.log(userService.employees)
        console.log(userService.errors)
        console.log(userService.getCustomersSorted())
        console.log("---------------------------------------------")
    }

}