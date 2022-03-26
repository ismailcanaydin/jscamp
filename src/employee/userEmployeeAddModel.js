import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import { UserService } from "../services/userService.js"
import Employee from "../models/employee.js"

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

export default class UserEmployeeAddModel {

    userEmployeeAddModel() {
        console.log("userEmployeeAddModel yüklendi.")

        userService.load()

        let employeeToAdd = new Employee(9, "Şinasi", "Aydın", "Salkaya", "59", "10000");
        employeeToAdd.type = "employee";

        userService.add(employeeToAdd)

        console.log(userService.customers)
        console.log(userService.employees)
        console.log(userService.errors)
        console.log(userService.getCustomersSorted())
        console.log("---------------------------------------------")
    }
}