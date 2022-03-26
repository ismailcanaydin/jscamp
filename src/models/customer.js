import User from "./user.js";

export default class Customer extends User {
    constructor(id, firstName, lastName, city, age, crediCardNumber) {
        super(id, firstName, lastName, city, age);
        this.crediCardNumber = crediCardNumber;
    }
}