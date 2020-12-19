const priceChanger = document.getElementById("priceChanger");

const labelLight = document.getElementById("labelLight");

const basic = document.getElementById("basicPlan");
const professional = document.getElementById("professionalPlan");
const master = document.getElementById("masterPlan");

const money = "$";

priceChanger.addEventListener("change", () => {
  if (basic.textContent === `${money}199.99`) {
    console.log("so far so good");
    labelLight.setAttribute("style", "opacity: 0.5");
    basic.textContent = `${money}19.99`;
    professional.textContent = `${money}24.99`;
    master.textContent = `${money}39.99`;
  } else {
    console.log("The cows are coming home boys");
    labelLight.setAttribute("style", "opacity: 1.00");
    basic.textContent = `${money}199.99`;
    professional.textContent = `${money}249.99`;
    master.textContent = `${money}399.99`;
  }
});
