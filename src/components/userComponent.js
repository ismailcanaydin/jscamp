import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import { UserService } from "../services/userService.js"

console.log("User Component yüklendi.")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"İsmail Can","Aydın","Alanya")
let user2 = new User(2,"Ayşegül","Yaman","Gazipaşa")
userService.add(user1)
userService.add(user2)

//console.log(userService.getById(2))
//console.log(userService.list())

