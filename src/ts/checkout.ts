import "./../scss/style.scss";
import { Product } from "./models/Product";
const productsDisplay = document.getElementById("products-display");

//lägg till i localStorage
let shoppingCart: Product[] = [];

window.addEventListener("load", () => {
  if (shoppingCart.length === 0) {
    const emptyCart = document.createElement("p");
    emptyCart.innerHTML = "Din varukorg är tom";
    productsDisplay?.appendChild(emptyCart);
  }else {

  }
});
