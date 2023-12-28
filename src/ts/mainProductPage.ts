import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { createHtmlForProducts } from "./createHtmlForProducts";
import { Product } from "./models/Product";
//import { createHtmlForEachCategory } from "./createHtmlForEachCategory";

let products:Product[] = JSON.parse(localStorage.getItem("productsFromApi") || JSON.stringify([]));
console.log(products);

// let category = localStorage.getItem("categoryName") || "";
// createHtmlForEachCategory(products, category);
createHtmlForProducts(products);
