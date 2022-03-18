let cart = [
    { id: 1, productName: "Laptop", quantity: 5, unitPrice: 10000 },
    { id: 2, productName: "Telefon", quantity: 10, unitPrice: 5000 },
    { id: 3, productName: "Masa", quantity: 3, unitPrice: 6000 },
    { id: 4, productName: "Modem", quantity: 15, unitPrice: 800 },
    { id: 5, productName: "Priz", quantity: 20, unitPrice: 100 },
]

//map = listelemek
cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity + " TL")
})

//filter = filtrelemek
let quantityOver2 = cart.filter(product => product.quantity > 10)
console.log(quantityOver2)

//reduce = toplamak
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log("Ürünlerin toplam değeri : " + total)

function addToCart(sepet) {
    sepet.push({ id: 6, productName: "Lamba", quantity: 5, unitPrice: 50 })
}

addToCart(cart)
console.log(cart)

let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

