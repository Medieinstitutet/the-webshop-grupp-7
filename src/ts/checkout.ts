import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { Product } from "./models/Product";
const productsDisplay = document.getElementById("products-display");

//lägg till i localStorage
let shoppingCart: Product[] = JSON.parse(
  localStorage.getItem("shoppingCart") || JSON.stringify([])
);

console.log(shoppingCart);

window.addEventListener("load", () => {
  if (shoppingCart.length === 0) {
    const emptyCart = document.createElement("p");
    emptyCart.innerHTML = "Din varukorg är tom";
    productsDisplay?.appendChild(emptyCart);
  } else {
    
    let partSum:number = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
      let product = document.createElement("div");
      product.className = "product";
      let trashCan = document.createElement("i");
      trashCan.className = "fa fa-trash";

      let imgBox = document.createElement("div");
      imgBox.className = "imageContainer";
      let img = document.createElement("img");
      let title = document.createElement("h4");
      let price = document.createElement("h3");

      title.innerHTML = shoppingCart[i].title;
      price.innerHTML = "$" + shoppingCart[i].price;
      img.src = shoppingCart[i].image;
      img.alt = "Picture of " + shoppingCart[i].title;

      let x = shoppingCart[i].price;
      let y :number = +x;
      partSum = partSum + y;
      


      productsDisplay?.appendChild(product);
      
      product.appendChild(imgBox);
      imgBox.appendChild(img);
      product.appendChild(title);
      product.appendChild(price);
      product.appendChild(trashCan);

      trashCan.addEventListener("click", () => {
        shoppingCart.slice(i, 1);
        /* localStorage.removeItem("shoppingCart", shoppingCart[i]); */
      })
    }

    console.log(partSum);
    
  }
});
