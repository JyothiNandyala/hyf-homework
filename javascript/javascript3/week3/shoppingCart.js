class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    convertToCurrency(currency) {
        if (currency === 'dollars') {
            return this.price * 0.17;
        }
        else if (currency === 'rupee') {
            return this.price * 12.12;
        }
        else if (currency === 'Euro') {
            return this.price * 0.13
        }

    }
}

const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("rupee"));

class ShoppingCart {
    constructor() {

        this.products = [];
    }

    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
    }

    removeProduct(product) {
        // Implement functionality here
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i] === product) {
                this.products.splice(i, 1);
            }
        }
    }

    searchProduct(productName) {
        // Implement functionality here
        const productname = this.products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()))
        return productname;
    }

    getTotal() {
        // Implement functionality here
        const totalPrice = this.products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        return totalPrice;

    }

    renderProducts() {
        // Implement functionality here
        //appending the total price of the products to DOM
        const totalPrice = document.getElementById('total-price')
        totalPrice.textContent = "Total Price of The Products: " + this.getTotal();

        const ulElement = document.getElementById('product-list');
        this.products.forEach(product => {
            const liElement = document.createElement('li')
            liElement.textContent = `ProductName:${product.name} , Price:${product.price}`;
            ulElement.appendChild(liElement);
        })
    }

    getUser() {
        // Implement functionality here
        const user = document.getElementById('user');
        fetch(` https://jsonplaceholder.typicode.com/users/1`)
            .then(response => response.json())
            .then(data => {
                user.textContent = `Hi This is ${data.name}`;
            })
    }
}
//searching the product with product name
const searchElement = document.getElementById('search');
searchElement.addEventListener('input', () => {
    // @ts-ignore
    const searchValue = searchElement.value;

    const h4Tag = document.getElementById('list-of-products');
    h4Tag.innerHTML = "";
    if (searchValue) {

        shoppingCart.searchProduct(searchValue).forEach(product => {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = `${product.name},${product.price}`
            h4Tag.appendChild(paragraphElement)
        });
    }

});

//adding the products
const shoppingCart = new ShoppingCart();

const flatscreen = new Product("flat-screen", 5000);
const flatscreen2 = new Product("phone", 7000);
const flatscreen3 = new Product("laptop", 15000);
const flatscreen4 = new Product("TV", 15000);
const flatscreen5 = new Product("Tab", 10000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen2);
shoppingCart.addProduct(flatscreen3);
shoppingCart.addProduct(flatscreen4);
shoppingCart.addProduct(flatscreen5);


shoppingCart.removeProduct(flatscreen3);

shoppingCart.searchProduct("phone")

shoppingCart.getTotal();

shoppingCart.getUser();

shoppingCart.renderProducts();



