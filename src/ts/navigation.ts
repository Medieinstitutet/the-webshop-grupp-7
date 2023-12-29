

let electronicsLink = document.getElementById("electronics");
electronicsLink?.addEventListener("click", () => {
    let category = "electronics";
    localStorage.setItem("categoryName",category);

    window.location.href = "productPage.html";
})

let menClothingLink = document.getElementById("menClothing");
menClothingLink?.addEventListener("click", () => {
    let category = "men's clothing";
    localStorage.setItem("categoryName",category);

    window.location.href = "productPage.html";
})

let womenClothingLink = document.getElementById("womenClothing");
womenClothingLink?.addEventListener("click", () => {
    let category = "women's clothing";
    localStorage.setItem("categoryName",category);

    window.location.href = "productPage.html";
})

let jeweleryLink = document.getElementById("jewelery");
jeweleryLink?.addEventListener("click", () => {
    let category = "jewelery";
    localStorage.setItem("categoryName",category);

    window.location.href = "productPage.html";
})