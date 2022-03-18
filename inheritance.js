function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("İsmail Can", "Aydın");

let can = new Student("Programing");

alert(can.firstName + " " + can.lastName + " loves " + can.favoriteCourse)