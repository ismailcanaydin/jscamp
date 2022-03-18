let add = (function () {
    let counter = 0;
    return function () {
        return counter += 1;
    }
})();

// let counter = 0;
// function add() {
//     counter += 1;
//     return counter;
// }

// function someOtherFunction() {
//     counter += 10;
// }