import CustomerValidation from "../customer/customerValidation.js";
import { users } from "../data/users.js";
import DataError from "../helpers/dataError.js";
import { UserService } from "./userService.js";



export default class CustomerService extends UserService {
    constructor(loggerService) {
        this.customers = [];
        super(loggerService)
    }
    loadCustomer() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!CustomerValidation(user)) {
                        this.customers.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type,", user))
                    break;
            }
        }
    }
    addCustomer(user) {
        switch (user.type) {
            case "customer":
                if (!CustomerValidation(user)) {
                    this.customers.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.users;
    }

    getCustomerById(id) {
        //verdiğin şarta göre 1 tane data döndür.
        return this.users.find(u => u.id === id)
    }
    //obje olduğu için sort yapıyoruz.Objelerde sıralama.
    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1;
            }
        })
    }
}