import { users } from "../data/users.js";
import EmployeeValidation from "../employee/employeeValidation.js";
import DataError from "../helpers/dataError.js";
import { UserService } from "./userService.js";



export default class EmployeeService extends UserService{
    constructor(loggerService) {
        this.employees = [];
        super(loggerService)
    }
    loadEmployee() {
        for (const user of users) {
            switch (user.type) {
                case "employee":
                    if (!EmployeeValidation(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type. it's not an employee!", user))
                    break;
            }
        }
    }

    addEmployee(user) {
        switch (user.type) {
            case "employee":
                if (!EmployeeValidation(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listEmployees() {
        return this.users;
    }

    getEmployeeById(id) {
        //verdiğin şarta göre 1 tane data döndür.
        return this.users.find(u => u.id === id)
    }
    //obje olduğu için sort yapıyoruz.Objelerde sıralama.
    getEmployeesSorted() {
        return this.employees.sort((employee1, employee2) => {
            if (employee1.firstName > employee2.firstName) {
                return 1;
            } else if (employee1.firstName === employee2.firstName) {
                return 0;
            } else {
                return -1;
            }
        })
    }
    
}

