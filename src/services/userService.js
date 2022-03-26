import { users } from "../data/users.js";
import EmployeeValidation from "../employee/employeeValidation.js";
import DataError from "../helpers/dataError.js";
import CustomerService from "./customerService.js";

//let customerService = new CustomerService()
//let employeeService = new EmployeeValidation()

export class UserService {
    
    constructor(loggerService) {
        this.users = users;
        this.errors = [];
        this.loggerService = loggerService
    }
    /*
    load() {
        
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type,", user))
                    break;
            }
        }
        
        
    }
    */
   
    /*
    //formik-yup kütüphanesi 
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ");
        let hasErrors = false;

        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new DataError(`Valitation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true;
            this.errors.push(new DataError(`Valitation problem. ${user.age} is not a number`, user))
        }

        return hasErrors;
    }
    */
   /*
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ");
        let hasErrors = false;

        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new DataError(`Valitation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true;
            this.errors.push(new DataError(`Valitation problem. ${user.age} is not a number`, user))
        }

        return hasErrors;
    }
    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError(" This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }
*/

    listUsers() {
        return this.users;
    }

    getUsersById(id) {
        //verdiğin şarta göre 1 tane data döndür.
        return this.users.find(u => u.id === id)
    }
    //obje olduğu için sort yapıyoruz.Objelerde sıralama.
    getUsersSorted() {
        return this.users.sort((user1, user2) => {
            if (user1.firstName > user2.firstName) {
                return 1;
            } else if (user1.firstName === user2.firstName) {
                return 0;
            } else {
                return -1;
            }
        })
    }
}