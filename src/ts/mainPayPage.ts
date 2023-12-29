import "./../scss/payment.scss";

let paymentButton = document.getElementById("payment-btn");


paymentButton?.addEventListener("click", () => {
    if(document.getElementById("mainPay")){
        const mainPay = document.getElementById("mainPay") as HTMLDivElement;
        mainPay.innerHTML = "";
        mainPay.className = "main";

        let spinner = document.createElement("span");
        spinner.className = "loader";
        mainPay.appendChild(spinner);

        setTimeout(finished, 4000);
        
        function finished(){
            mainPay.innerHTML = "";
            mainPay.className = "mainFinished";

            let image = document.createElement("img");
            image.src = "src/img/betala.png";
            mainPay.appendChild(image);
            let title = document.createElement("h1");
            title.innerHTML = "Ditt köp har genomförts!";
            mainPay.appendChild(title);
        }
        
    }
})
