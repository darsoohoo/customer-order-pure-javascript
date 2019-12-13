// ACTIONS
function CustomerOrder() {
    this.createOrder = function(name, product) {
        let order = new Order(name, product);
    }
    return order;
}


const Order = function(name, product) {
    this.name = name;
    this.product = product;
}



// DOM 

const form = document.querySelector('form')
const nameInput = document.getElementById('customer_name');
const productInput = document.getElementById('product');


form.addEventListener('submit', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    // Get input value
    console.log(nameInput.value);
    console.log(nameInput.value);
}



