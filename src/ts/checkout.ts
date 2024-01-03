import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { Product } from "./models/Product";

/* localStorage.clear(); */
const productsDisplay = document.getElementById(
  "products-display"
) as HTMLDivElement;

let shoppingCart: Product[] = JSON.parse(
  localStorage.getItem("shoppingCart") || JSON.stringify([])
);
window.addEventListener("load", createShoppingBag);

export function createShoppingBag() {
  productsDisplay.innerHTML = "";
  if (shoppingCart.length === 0) {
    const emptyCart = document.createElement("p");
    emptyCart.innerHTML = "Din varukorg är tom";
    productsDisplay.appendChild(emptyCart);
  } else {
    let partSum: number = 0;

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
      let y: number = +x;
      partSum = partSum + y;

      productsDisplay.appendChild(product);

      product.appendChild(imgBox);
      imgBox.appendChild(img);
      product.appendChild(title);
      product.appendChild(price);
      product.appendChild(trashCan);

      trashCan.addEventListener("click", () => {
        /* removeItem(shoppingCart[i]); */
        shoppingCart.splice(i, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        createShoppingBag();
        console.log(shoppingCart);
        /* localStorage.removeItem("shoppingCart", shoppingCart[i]); */
      });
    }
    let sum = document.getElementById("sum") as HTMLParagraphElement;
    sum.innerHTML = "$" + partSum;
    console.log(partSum);
  }
}

/* function removeItem(item: Product) {
  let rm = item.id;
  for(let i  = 0; i < localStorage.length; i++){
    if(localStorage[i].includes(rm)){
        let valueToRemove = localStorage[i];
        localStorage.removeItem(valueToRemove);
    }
  }
} */
