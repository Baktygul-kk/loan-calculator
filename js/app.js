

const form = document.getElementById("loan-form");
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const btn = document.getElementsByClassName("btn btn-dark w-100");




form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const valueAmount = amount.value;
    const pros = interest.value;
    const time = years.value;
    
    const sum = (valueAmount/100*pros)+valueAmount;
    const rate = sum - valueAmount;
    const monthsPay = sum/(time/12);

    
    
     
     //total.innerHTML=sum.value;
     console.log(sum);
     console.log(rate);
     console.log(monthsPay);
    
      
    
    });