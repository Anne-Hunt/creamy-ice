let vessels = [
    {
        name: 'waffle-cone',
        price: 1,
        quantity: 0
    },
    {
        name: 'waffle-bowl',
        price: 1,
        quantity: 0
    },
    {
        name: 'dipped-cone',
        price: 2,
        quantity: 0
    },
    {
        name: 'bowl',
        price: 1.5,
        quantity: 0
    }
]

let creams = [
    {
        name: 'vanilla',
        price: 1.5
    },
    {
        name: 'chocolate',
        price: 1.5,
        quantity: 0
    },
    {
        name: 'strawberry',
        price: 2,
        quantity: 0
    },
    {
        name: 'butter-brickle',
        price: 2,
        quantity: 0
    },
    {
        name: 'potato',
        price: 1,
        quantity: 0
    },
    {
        name: 'cranberry',
        price: 3,
        quantity: 0
    }
]

let toppings = [
    {
        name: 'jimmies',
        price: .50,
        quantity: 0
    },
    {
        name: 'chips',
        price: 1,
        quantity: 0
    },
    {
        name: 'syrup',
        price: 1,
        quantity: 0
    }
]

let products = [...vessels, ...creams, ...toppings]

let orderNum = 1000

let currentOrder = []

let orders = []

/* WORKS, but does the same as the above so no need

function productsList() {
    products.push(...vessels)
    console.log(products)
    products.push(...creams)
    console.log(products)
    products.push(...toppings)
    console.log(products)
}
*/

function addToCart(productName) {

    let addedProduct = findProduct(productName)
    //  console.log("find itemName")

    addedProduct.quantity++
    //    console.log('added to cart', addedProduct)
    drawCart()
}


function findProduct(productName) {
    for (let i = 0; i < products.length; i++) {
        //        console.log(products[i])
        let product = products[i]
        if (product.name == productName) {
            //            console.log('item found!')
            return product
        }
    }
}

function drawCart() {
    let cartSubtotal = 0
    let cartContent = ``

    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        if (product.quantity > 0) {
            cartContent += `<p>${product.quantity}x ${product.name} ${(product.quantity * product.price).toFixed(2)}<button class="btn btn-danger p=0" onclick="removeProduct('${product.name}')">X</button></p>`

            cartSubtotal += product.quantity * product.price
        }
    }

    let cartElem = document.getElementById('cartElem')
    cartElem.innerHTML = cartContent

    let subTotalElem = document.getElementById('subtotal')
    subTotalElem.innerHTML = `${cartSubtotal.toFixed(2)}`

    let taxElem = document.getElementById('tax')
    taxElem.innerHTML = `${(cartSubtotal * .05).toFixed(2)}`

    let totalElem = document.getElementById('total')
    totalElem.innerHTML = `${(cartSubtotal + cartSubtotal * .05).toFixed(2)}`

    let orderNumElem = document.getElementById('orderNum')
    orderNumElem.innerHTML = `${orderNum}`
}

function removeProduct(productName) {

    let removedProduct = findProduct(productName)
    //    console.log("find itemName")

    removedProduct.quantity--
    //    console.log('removed', removedProduct)
    drawCart()
}

function checkoutCart() {
    createOrder()
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        product.quantity = 0
    }
    orderNum++
    drawCart()
}

function createOrder() {
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        if (product.quantity > 0) {

            orders.push('Num:', orderNum, product.name, product.quantity)
        }
        console.log(orders)
    }
}