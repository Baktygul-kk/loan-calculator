
const form = document.querySelector("#loan-form");


form.addEventListener("submit", function (e) {
    document.querySelector("#output").style.display = "none";
    document.querySelector("#loader").style.display = "block";

    setTimeout(calculateRate, 1000);
    e.preventDefault();
});


function calculateRate() {
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");

    const monthlyPayment = document.querySelector("#amount-result");
    const totalPayment = document.querySelector("#total-payment");
    const totalInterest = document.querySelector("#total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        document.querySelector("#output").style.display = "block";
        document.querySelector("#loader").style.display = "none";
    } else {
        showError("enter  all inputs");
    }
};

function showError(error) {
    document.querySelector("#output").style.display = "none";
    document.querySelector("#loader").style.display = "none";

    const div = document.createAttribute("div");

    const cardBody = document.querySelector(".card-body");
    const heading = document.querySelector(".heading");

    div.className = "alert alert-danger";
    div.appendChild(document.createAttribute("p"));


    cardBody.insertBefore(div, heading);
    setTimeout(clearError, 1000);
}

function clearError() {
    document.querySelector(".alert").remove();
}