import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { createHtmlForProducts } from "./createHtmlForProducts";
import { Product } from "./models/Product";
//import { createHtmlForEachCategory } from "./createHtmlForEachCategory";

let products: Product[] = JSON.parse(
  localStorage.getItem("productsFromApi") || JSON.stringify([])
);

let shoppingCart: Product[] = JSON.parse(
  localStorage.getItem("shoppingCart") || JSON.stringify([])
);

const searchParams = new URLSearchParams(window.location.search);

const category = searchParams.get("category");

let filteredProducts = category
  ? products.filter((value) => category === value.category)
  : products;

createHtmlForProducts(filteredProducts);
