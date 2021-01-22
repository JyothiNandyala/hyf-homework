"use strict"

console.log('Script loaded');
const products = getAvailableProducts();
function renderProducts(products) {

    // your code here

    const ul = document.querySelector('ul')
    ul.innerHTML = "";
    products.forEach(product => {

        const new_li_element = document.createElement("li");
        const h2Element = document.createElement("h2");
        h2Element.innerHTML = product.name;
        new_li_element.appendChild(h2Element);
        const priceElement = document.createElement("p");
        priceElement.innerHTML = "Price: " + product.price;
        new_li_element.appendChild(priceElement);
        const ratingElement = document.createElement("p");
        ratingElement.innerHTML = "Rating: " + product.rating;
        new_li_element.appendChild(ratingElement);

        ul.appendChild(new_li_element);

    });

}
renderProducts(products)
//search for product
const searchElement = document.getElementById('search');
console.log(searchElement);
searchElement.addEventListener('input', (event) => {

    const searchString = event.target.value.toLowerCase();
    console.log(searchString);
    const filteredCharacters = products.filter((character) => {
        return (character.name.toLowerCase().includes(searchString));
    })
    renderProducts(filteredCharacters);
});
//search for minimum price,maximum price and rating
const minimum_Price_Element = document.getElementById('min-price');
const maximum_Price_Element = document.getElementById('maximim-price');
const rating_Element = document.getElementById('product-rating');
const filteredButton = document.getElementById('button');
filteredButton.addEventListener('click', filterProducts)

let minimumPrice = 0;
let maximumPrice = 10000;
let minimumrating = 0
function filterProducts() {
    if (minimum_Price_Element.value !== "") {
        minimumPrice = minimum_Price_Element.value;
    }
    else if (maximum_Price_Element.value !== "") {
        maximumPrice = maximum_Price_Element.value;
    }
    else if (rating_Element.value !== "") {
        minimumrating = rating_Element.value;
    }
    filter(minimumPrice, maximumPrice, minimumrating)
}

function filter() {
    renderProducts(products.filter((product) => (product.price >= minimumPrice && product.price <= maximumPrice && product.rating >= minimumrating)));

}

