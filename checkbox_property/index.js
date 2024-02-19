// .checked = property that determaines the checked state of an 
//              HTML checkbox or radio button element

const checkboxBtn = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn")
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(checkboxBtn.checked){
        subResult.textContent = "you are subcribe"
    }else{
        subResult.textContent = "you are not subcribe"
    }
    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with Visa"
    }else if(masterCardBtn.checked){
        paymentResult.textContent = "you are paying with MasterCard"
    }else if(payPalBtn.checked){
        paymentResult.textContent = "you are paying with payPal"
    }
}