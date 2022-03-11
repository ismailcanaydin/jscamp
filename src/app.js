let sehirler = ["Antalya", "Elazığ", "Ankara", "İzmir", "İstanbul"]
for (let i = 0; i < sehirler.length; i++) {
    document.write(sehirler[i]);
    document.write("<br>")
}
let student = { id: 1, name: "Can" }

function save(ogrenci, puan = 10) {
    //console.log(ogrenci.name + " : " + puan)
}
save(student, 100);

let students = ["İsmail Can aydın", "Ayşegül Yaman"]
let students2 = [student,{ id: 1, name: "Can" },"Alanya",{city:"Antalya"}]
//console.log(students2)

//rest
//params
//varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//rest
//showProducts(10,["Elma","Armut","Karpuz"]);

//spread
let points = [1,2,3,10,15,23,45,89]
console.log(...points)
console.log(Math.max(...points))

//Destructuring
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
/*
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
console.log("<br>")
*/

function someFunction([small1,medium1,high1,[number]],number2){
    console.log(small1,medium1)
    console.log(high1,number)
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

