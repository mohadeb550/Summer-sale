
let allCards = document.querySelectorAll(`.my-card`);

for(let card of allCards){
    card.addEventListener(`click`,function(e){

        let element = e.target.closest(`.my-card`);
        productName = element.querySelector(`h2`).innerText;
        productPrice = parseFloat(element.querySelector(`span`).innerText);

        setProducts (productName, productPrice);
    })
}

let countNumber = 1;
let totalPrice = 0;
let discount = 0;
let grandPrice = 0;


function setProducts (productName, productPrice){
    
    let productContainer = document.getElementById(`products container`);
    let h2 = document.createElement(`h2`);
    h2.className = `text-lg font-semibold mb-3 text-slate-600`;
    h2.innerText = `${countNumber}. ${productName}`;
    productContainer.appendChild(h2);
    countNumber++;

    let priceDisplay = document.getElementById(`total-display`);
    let grandTotalDisplay = document.getElementById (`grand-total-display`);
    totalPrice = totalPrice + productPrice;
    priceDisplay.innerText = `${totalPrice} TK`;
    grandTotalDisplay.innerText = `${totalPrice} TK`;



    if(0 < totalPrice){
        let purchaseBtn = document.getElementById(`purchase-btn`);
        purchaseBtn.removeAttribute(`disabled`);
    }
    if(200 <= totalPrice){
        let applyBtn = document.getElementById(`apply-btn`);
        applyBtn.removeAttribute(`disabled`);
        applyBtn.addEventListener(`click`, setDiscount);
    }
}



function setDiscount(){

    let couponFieldValue = document.getElementById(`coupon-field`).value;
    let discountDisplay = document.getElementById(`discount-display`);
    let grandTotalDisplay = document.getElementById (`grand-total-display`);

    if(couponFieldValue === `SELL200`){
    let discountAmount = totalPrice * 0.2;

        let discountAmountFloat = parseFloat(discountAmount.toFixed(2));
        discount =  discountAmountFloat;   
        
        discountDisplay.innerText = `${discount} TK`;
        let afterDiscount = totalPrice - discount; 
        grandTotalDisplay.innerText = `${afterDiscount} TK`;
    }
}


function clearAll (){
   
    let productContainer = document.getElementById(`products container`);
    document.getElementById(`total-display`).innerText = `00 TK`;
    document.getElementById(`discount-display`).innerText = `00 TK`;
    document.getElementById(`grand-total-display`).innerText = `00 TK`;
    document.getElementById(`coupon-field`).value = ``;

        let applyBtn = document.getElementById(`apply-btn`);
        applyBtn.setAttribute(`disabled`, true);

        let purchaseBtn = document.getElementById(`purchase-btn`);
        purchaseBtn.setAttribute(`disabled`, true);

    productContainer.innerHTML = ``;
    totalPrice = 0;
    discount = 0;
    grandPrice = 0;
    countNumber = 1
}