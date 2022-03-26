export default class EmployeeValidation {
    constructor(user) {
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
    //formik-yup kütüphanesi 
    
}
