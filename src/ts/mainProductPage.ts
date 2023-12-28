import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { createHtmlForProducts } from "./createHtmlForProducts";
import { Product } from "./models/Product";
import { getProducts } from "./services/productService";
import { createHtmlForEachCategory } from "./createHtmlForEachCategory";

async function getProductsToClass():Promise<Product[]>{

    let products = await getProducts();
    //console.log(products);
    
    let listOfProducts = products.map((product) => {
        return new Product(product.id,product.title,product.price.toString(),product.description,product.category,product.image);
    })
    //console.log(listOfProducts);
    return listOfProducts;
}

let products:Product[] = await getProductsToClass();
console.log(products);
createHtmlForProducts(products);

// let test = document.createElement("h1");
// test.innerHTML = "Test";
// let main = document.getElementById("mainProducts");
// main?.appendChild(test);

// test.addEventListener("click", () => {
//     createHtmlForEachCategory(products,"men's clothing");
// })
