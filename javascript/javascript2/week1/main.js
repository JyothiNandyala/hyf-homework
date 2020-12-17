console.log("Script loaded");


const products = getAvailableProducts();
function renderProducts(products) {
    // your code here
    
    const ul=document.querySelector('#ul_tag')
    for(let i=0;i<products.length;i++){
       
        const h2Element=document.createElement("h2");
        h2Element.innerHTML=products[i].name;
        const new_li_element=document.createElement("li");
       
        new_li_element.appendChild(h2Element);
        const priceElement=document.createElement("p");

        priceElement.innerHTML="Price: " + products[i].price;
        new_li_element.appendChild(priceElement);
        
        const ratingElement=document.createElement("p");
        ratingElement.innerHTML="Rating: " +products[i].rating;
        new_li_element.appendChild(ratingElement);
        
        ul.appendChild(new_li_element);
    }
    
 }
  renderProducts(products)
