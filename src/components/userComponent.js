import UserCustomerAddModel from "../customer/userCustomerAddModel.js"
import UserEmployeeAddModel from "../employee/userEmployeeAddModel.js"
import CustomerService from "../services/customerService.js"


let userEmployeeAddModel = new UserEmployeeAddModel
let userCustomerAddModel = new UserCustomerAddModel()


userCustomerAddModel.userCustomerAddModel()
userEmployeeAddModel.userEmployeeAddModel()

CustomerService.loadCustomer();