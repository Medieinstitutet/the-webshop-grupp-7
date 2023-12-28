import { Product } from "./models/Product";

export function createHtmlForProducts(products:Product[]) {
    if (document.getElementById("mainProducts")){
        let mainProducts = document.getElementById("mainProducts") as HTMLDivElement;

        let shoppingCart:Product[] = JSON.parse(localStorage.getItem("shoppingCart") || JSON.stringify([]));
    
    for(let i = 0;i < products.length;i++){
    let productContainer = document.createElement("section");
    productContainer.className = "productContainer";
    
    let title = document.createElement("h4");
    let description = document.createElement("p");
    let price = document.createElement("h3");
    let imageBox = document.createElement("div");
    imageBox.className = "imageContainer";
    let image = document.createElement("img");
    let cartButton = document.createElement("button");
    
    title.innerHTML = products[i].title;
    description.innerHTML = products[i].description;
    price.innerHTML = "$" + products[i].price;
    image.src = products[i].image;
    image.alt = "Picture of " + products[i].title;
    cartButton.innerHTML = "Add to cart";
    
    mainProducts.appendChild(productContainer);
    productContainer.appendChild(imageBox);
    imageBox.appendChild(image);
    productContainer.appendChild(title);
    productContainer.appendChild(description);
    productContainer.appendChild(price);
    productContainer.appendChild(cartButton);
    
    cartButton.addEventListener("click", () => {
        shoppingCart.push(products[i]);
        console.log(shoppingCart);
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
        
    })
    }
    
    }
    }