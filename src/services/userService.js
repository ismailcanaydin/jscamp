export class UserService {
    constructor(loggerService) {
        this.users = [];
        this.loggerService = loggerService
    }
    add(user) {
        this.users.push(user);
        this.loggerService.log(user)
    }

    list() {
        return this.users;
    }

    getById(id) {
        //verdiğin şarta göre 1 tane data döndür.
        return this.users.find(u => u.id === id)
    }
}